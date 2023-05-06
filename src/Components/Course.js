import axios from "axios";
import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardFooter,
  Button,
  Container,
} from "reactstrap";
function Course({course,update}) {
  
  const deleteCourse=(id)=>{
    axios.delete(`http://localhost:8080/courses/${id}`).then(
      (response)=>{
        console.log(response)
        console.log("Success")
        update(id)
      },
      (error)=>{
        console.log(error)
        console.log("error")
      }
    )
  }
 /* const updatecourseserver=(data)=>{
    axios.put(`http://localhost:8080/courses`,data).then(
      (response)=>{
        console.log(response)

      }
    )
  }*/
  return (
    <div>
      <Card classname="text-center">
        <CardBody>
            <CardSubtitle>{course.title}</CardSubtitle>
            <CardText>{course.desc}</CardText>
            <Container className="text-center">
                <Button classname="danger" onClick={()=>{deleteCourse(course.id)}}>Delete</Button>
                <Button className="warning" href="/updatecourse">Update</Button>
            </Container>
        </CardBody>
      </Card>
    </div>
  );
}
export default Course;
