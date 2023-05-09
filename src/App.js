import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home.js";
import Allcourse from "./Components/Allcourse";
import Addcourse from "./Components/Addcourse";
import { Button } from "react-bootstrap";
import {ToastContainer, toast} from "react-toastify";
import UpdateCourse from "./Components/UpdateCourse";
import Login from "./Components/Login";

function App() {
  
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={Login}></Route>
          <Route exact path="/home" Component={Home}></Route>
          <Route exact path="/allcourse" Component={Allcourse}></Route>
          <Route exact path="/addcourse" Component={Addcourse}></Route>
          <Route exact path="/updatecourse" Component={UpdateCourse}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
