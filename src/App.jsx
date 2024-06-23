import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./App.scss";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard activeUrlIndex={"0"} />} />
        <Route
          path="/dashboard/:locationId"
          element={<Dashboard activeUrlIndex={"0"} />}
        />
        <Route path="/project" element={<Dashboard activeUrlIndex={"1"} />} />
        <Route path="/plates" element={<Dashboard activeUrlIndex={"2"} />} />
      </Routes>
    </>
  );
}

export default App;
