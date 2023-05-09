import axios from "axios";
import React, { Fragment, useState } from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import {toast} from "react-toastify"
function Addcourse() {
  const [course, setcourse] = useState({});
  //form handler
  const handleform = (e) => {
    console.log(course);
    postdataserver(course)
    e.preventDefault();
  };
  const postdataserver = (data) => {
    axios.post(`http://localhost:8080/courses`,data).then(
      (response) => {
      console.log(response);
      console.log("succes");
      toast.success("new course added succesfully")
      setcourse({id:"",title:"",desc:""})
    },
      (error) => {
        console.log(error);
        console.log("error");
        toast.error("something went wrong!")
      },
    );
  };
  return (
    <div>
      <Fragment>
        <Form onSubmit={handleform}>
          <FormGroup>
            <label for="userId">Course Id</label>
            <Input
              type="text"
              placeholder="Rnter here"
              name="userid"
              id="userId"
              onChange={(e) => {
                setcourse({ ...course, id: e.target.value });
              }}
            />
          </FormGroup>
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
              Addcourse
            </Button>
            <Button  type="reset" onClick={()=>{
              setcourse({id:"",title:"",desc:""})
            }} color="warning">Clear</Button>
          </Container>
        </Form>
      </Fragment>
    </div>
  );
}
export default Addcourse;
