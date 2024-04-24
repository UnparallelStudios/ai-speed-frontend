import React, { useState } from "react"
import './Register.css'
import '../../App.scss'
import { Link, NavLink } from "react-router-dom"

import video from '../LoginAssets/video.mp4'
import logo from '../LoginAssets/L1.jpg'

import {FaUserShield} from 'react-icons/fa'
import {BsFillShieldLockFill} from 'react-icons/bs'
import {AiOutlineSwapRight} from 'react-icons/ai'
import {MdMarkEmailRead} from 'react-icons/md'


async function submitData(username,password){
    console.log("inside submit data: ", username, password)
    fetch('http://localhost:3000/login/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify( {
            'username':username,
            'password':password
        }),
        
      })
}


const Register= () => {
    let [username,setUsername]=useState('')
    let [password,setPassword]=useState('')

    return(
        <div className='registerPage flex'>
        <div className="container flex">
             <div className="videoDiv">
                <video src={video} autoPlay muted loop></video>
            
            <div className="textDiv">
                <h2 className="title">Create and sell Extraordindary Products</h2>
                <p>Adopt the peace of nature!</p>
            </div>
            <div className="footerDiv flex">
                <span className="text">Have an account?</span>
                <Link to={'/'}>
                <button className="btn">Login</button>
                </Link>
            </div>
            </div> 
            <div className="formDiv flex">
                <div className="header div">
                    <img src={logo} alt="Logo Image"/>
                    <h3> Let us know you!</h3>
                </div>
                <form action="" className="form grid">
                    
                <div className="inputDiv">
                   <label htmlFor="email">Email</label> 
                <div className="input flex">
                    <MdMarkEmailRead  className='icon'/>
                  <input onChange={(e)=>{
                    setUsername(e.target.value)
                  }} type="text" id="username" placeholder="Enter username"/> 
                </div>
                </div>
                
                <div className="inputDiv">
                   <label htmlFor="password">Password</label> 
                <div className="input flex">
                    <BsFillShieldLockFill className='icon'/>
                  <input onChange={(e)=>
                {
                    setPassword(e.target.value)
                }} type="password" id="password" placeholder="Enter Password"/> 
                </div>
                </div>
                
                <button onClick={()=>{
                    submitData(username,password).catch((e)=>{
                        console.log(e)
                    })
                }} type="button" className="btn flex">
                    <span>Register</span>
                    <AiOutlineSwapRight className='icon'/>
                </button>

                <span className='forgotPassword'>
                Forgot your Password? <a href="">Click Here</a>
                </span>

                </form>
            </div>

        </div>
            
        </div>
    )
    
}

export default Register