import React, { Component } from "react";
import { Col } from 'reactstrap';
import ig from '../img/instagram.png';
import fb from '../img/facebook.png';
import lin from '../img/linkedin.png';
// import { Col, Row, Button, Form, FormGroup, Input } from 'reactstrap';

class Contact extends Component {
  render() {

    const instagram = 'https://instagram.com/fachrudahri'
    const facebook = 'https://facebook.com/dahri.f'
    const linkedin = 'https://www.linkedin.com/in/fachru-dahri-6092ba172/'

    return (
      <div className='parent-body'>
        <h2 className='title-link' target="_blank" >Contact</h2>

        <div className='row-tab'>
          <a href={instagram}><img src={ig} alt='info'/></a>
          <a href={facebook}><img src={fb} alt='info'/></a>
          <a href={linkedin}><img src={lin} alt='info'/></a>
        </div>

        {/* <Form className='row-tab' tag="form">
        <div className='about-you'>About You</div>
        <Row>
          <Col md={3}>
            <FormGroup>
              <Input disabled
                type="text"
                name="name"
                placeholder="Full Name" />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Input disabled
                type="email"
                name="email"
                placeholder="Email" />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Input disabled
                type="textarea"
                name="message"
                placeholder="Type a message..."
                 />
            </FormGroup>
          </Col>
        </Row>
        <Button disabled>Submit</Button>
      </Form> */}
      <Col className='warn-me' lg={6} md={10}>
        <div>
        Hello friend, i will replay your message for discussion. we can talk about startup & entrepreneurship, share about technology for programming, happy coding.
        </div>
      </Col>
      </div>
    );
  }
}
 
export default Contact;