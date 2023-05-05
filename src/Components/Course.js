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
function Course({course}) {
  return (
    <div>
      <Card classname="text-center">
        <CardBody>
            <CardSubtitle>{course.title}</CardSubtitle>
            <CardText>{course.desc}</CardText>
            <Container className="text-center">
                <Button classname="danger">Delete</Button>
                <Button className="warning">Update</Button>
            </Container>
        </CardBody>
      </Card>
    </div>
  );
}
export default Course;
