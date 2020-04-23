import React, { Component } from "react";
import {Row, Col, Container} from 'reactstrap';
import './Components.css';
 
class Work extends Component {
  render() {
    return (
      <div className='parent-body'>
        <h2 className='title-link'>Work</h2>
        <Container>
          <Row>
            <Col xs='12' md='10' lg='7' className='row-1'>
                <div className='title-job'>Deputy Chief / OSSC (2018 - 2019)</div>
                <div className='text-job'>I became a role that helped the chairman in organizing IT organizations, and contributed to web development.</div>
            </Col>
          </Row>
          <Row>
            <Col xs='12' md='10' lg='7' className='row-2'>
                <div className='title-job'>web development instructor / OSSC (2018 - 2019)</div>
                <div className='text-job'>I teach about web development and the latest technology from a website, I am more directed to the javascript programming language for the client side and server side.</div>
            </Col>
          </Row>
          <Row>
            <Col xs='12' md='10' lg='7' className='row-2'>
                <div className='title-job'>Backend Engineer / PT INALUM (supporting team) (2019 - Now)</div>
                <div className='text-job'>I helped develop a backend website for information systems within the agency.</div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
 
export default Work;