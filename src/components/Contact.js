import React, { Component } from "react";
import { Col, Row, Button, Form, FormGroup, Input } from 'reactstrap'; 

class Contact extends Component {
  render() {
    return (
      <div className='parent-body'>
        <h2 className='title-link'>Contact</h2>
        <Form className='row-tab'>
        <div className='about-you'>About You</div>
        <Row form>
          <Col md={3}>
            <FormGroup>
              <Input type="text" name="text" id="exampleText" placeholder="Full Name" />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
            </FormGroup>
          </Col>
        </Row>
        <Button>Submit</Button>
      </Form>
      <Col className='warn-me' lg={6} md={10}>
        <div>
        Hello friend, i will send message to your E-mail for  my detail contact person. we can talk about startup & entrepreneurship, share about technology for programming, happy coding.
        </div>
      </Col>
      </div>
    );
  }
}
 
export default Contact;