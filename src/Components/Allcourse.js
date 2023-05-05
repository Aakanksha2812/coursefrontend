import React, { useState } from "react";
import Course from "./Course";
const Allcourse=()=> {
  const [courses, setcourse] = useState([
    { title: "java core", desc: "this is java course" },
    {
      title: "react js",
      desc: "this is reactjs course",
    },
    {
        title:"nodejs",
        desc:"y=this is nodejs course"
    },
    {
        title:"python",
        desc:"this is python course"
    }
  ]);
  return (
    <div>
      <h1>this is All courses page</h1>
      <h2>All courses list</h2>
      {
        courses.length>0? courses.map((item)=>(
            <Course course={item}/>
        )):"No courses"
      }

    </div>
  );
}
export default Allcourse;
