import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import "./index.scss";

function LiveFeed() {
  const [socketInstance, setSocketInstance] = useState("");
  const [buttonState, setButtonState] = useState(false);
  const [remote, setRemote] = useState("");
  const socket = io("0.tcp.in.ngrok.io:19998", {
    transports: ["websocket"],
    cors: {
      origin: "http://localhost:3000/",
    },
  });
  useEffect(() => {
    console.log("render");
    let remoteVideo = document.getElementById("remoteVideo");
    let remoteStream;
    let peerConnection;
    remoteVideo.onloadedmetadata = () => {
      remoteVideo.play();
    };

    const servers = {
      iceServers: [
        {
          urls: [
            "stun:stun1.l.google.com:19302",
            "stun:stun2.l.google.com:19302",
          ],
        },
      ],
    };

    socket.on("candidate", (data) => {
      console.log("candidate received");
      if (peerConnection) {
        if (peerConnection.currentRemoteDescription) {
          peerConnection.addIceCandidate(data.candidate);
        }
      }
    });

    async function init() {
      localStream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: true,
      });
      // localVideo.srcObject = localStream
      createOffer();
    }

    async function createPeerConnection() {
      peerConnection = new RTCPeerConnection(servers);
      remoteStream = new MediaStream();
      remoteVideo.srcObject = remoteStream;
      // if (!localStream) {
      //   localStream = await navigator.mediaDevices.getUserMedia({
      //     audio: false,
      //     video: true,
      //   });
      //   localVideo.srcObject = localStream;
      // }
      // localStream.getTracks().forEach((track) => {
      //     peerConnection.addTrack(track, localStream)
      // })
      peerConnection.ontrack = (event) => {
        console.log("track received");
        event.streams[0].getTracks().forEach((track) => {
          console.log(track);
          remoteStream.addTrack(track);
        });
      };

      peerConnection.onicecandidate = async (event) => {
        if (event.candidate) {
          console.log("new ice candidate is: ", event.candidate);
          socket.emit("candidate", {
            type: "candidate",
            candidate: event.candidate,
          });
        }
      };
    }

    socket.on("offer", async (data) => {
      console.log("offer received");
      await createAnswer(data);
    });

    socket.on("answer", async (data) => {
      console.log("answer received");
      await addAnswer(data);
    });

    async function createOffer() {
      await createPeerConnection();
      let offer = await peerConnection.createOffer();
      await peerConnection.setLocalDescription(offer);
      console.log(offer);
      socket.emit("offer", offer);
    }

    async function createAnswer(offer) {
      await createPeerConnection();
      await peerConnection.setRemoteDescription(offer);
      let answer = await peerConnection.createAnswer();
      await peerConnection.setLocalDescription(answer);
      // SEND ANSWER TO THE SECOND PEER
      socket.emit("answer", answer);
    }

    async function addAnswer(answer) {
      if (!peerConnection.currentRemoteDescription) {
        console.log("input received");
        await peerConnection.setRemoteDescription(answer);
      }
    }
    return function cleanup() {
      socket.disconnect();
    };
  }, []);

  return (
    <>
      <div className="live-feed">
        <video
          id="remoteVideo"
          playsInline
          muted
          autoPlay
          controls={false}
          src=""
        ></video>
      </div>
    </>
  );
}

export default LiveFeed;
