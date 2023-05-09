import axios from "axios";
import React, { Fragment, useState } from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
const UpdateCourse = () => {
  const [course, setcourse] = useState([]);
  const handleform = (e) => {
    console.log(course);
    putdataonserver(course);
    e.preventDefault();
  };
  const putdataonserver = (data) => {
    axios.put(`http://localhost:8080/courses`, data).then(
      (response) => {
        console.log(response);
        console.log("sucess");
      },
      (error) => {
        console.log(error);
        console.log("error");
      }
    );
  };
  return (
    <div>
      <Fragment>
        <Form onSubmit={handleform}>
          <FormGroup>
            <label for="usertitle"> Course title</label>
            <Input
              type="text "
              placeholder="Enter here"
              name="usertitle"
              id="userId"
              onChange={(e) => {
                setcourse({ ...course, title: e.target.value });
              }}
            />
          </FormGroup>
          <FormGroup>
            <label for="desc">Course Descripation</label>
            <Input
              type="text"
              placeholder="Enter here"
              name="desc"
              id="dscc"
              style={{ height: 200 }}
              onChange={(e) => {
                setcourse({ ...course, desc: e.target.value });
              }}
            />
          </FormGroup>
          <Container className="text-center">
            <Button type="submit" color="success">
              update course
            </Button>
          </Container>
        </Form>
      </Fragment>
    </div>
  );
};
export default UpdateCourse;
