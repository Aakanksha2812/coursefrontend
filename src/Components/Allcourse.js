import React, { useEffect, useState } from "react";
import Course from "./Course";
import axios from "axios";
import { toast } from "react-toastify";
const Allcourse = () => {
  const getallcoursesserver = () => {
    axios.get(
      `http://localhost:8080/courses`).
      then(
        (response) => {
          console.log(response);
          toast.success("courses has been loaded")
          setcourse(response.data)
        },
        (error) => {
          console.log(error);
          toast.error("something went wrong")
        }
      
    );
  };
  useEffect(()=>{
    getallcoursesserver();
  },[])
  const [courses, setcourse] = useState([
   
  ]);
  const removecoursebyid=(id)=>{
setcourse(courses.filter((c)=>c.id!=id))
  }
  return (
    <div>
      <h1>this is All courses page</h1>
      <h2>All courses list</h2>
      {courses.length > 0
        ? courses.map((item) => <Course key={item.id}course={item} update={removecoursebyid}/>)
        : "No courses"}
    </div>
  );
};
export default Allcourse;
