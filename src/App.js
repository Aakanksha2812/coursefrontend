import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home.js";
import Allcourse from "./Components/Allcourse";
import Addcourse from "./Components/Addcourse";
import { Button } from "react-bootstrap";
import {ToastContainer, toast} from "react-toastify";

function App() {
  const btnHandle=()=>{
    toast("this is first msg")
  }
  return (
    <div className="App">
      <h1>GNPATI BAPPA MORYA</h1>
      <ToastContainer/>
      <Button color="warning" onClick={btnHandle}></Button>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={Home}></Route>
          <Route exact path="/allcourse" Component={Allcourse}></Route>
          <Route exact path="/addcourse" Component={Addcourse}></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
