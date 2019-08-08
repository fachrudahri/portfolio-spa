import React, { Component } from "react";
import {Col , Row} from 'reactstrap';
import './Components.css'
 
class About extends Component {
  render() {
    return (
      <div className='parent-body'>
        <h2 className='title-link'>About's</h2>
          <h1 className='name-author'>
            Fachru <span className='lastname-author'>Dahri</span><span className='blank'>.</span>
          </h1>
          <h3 className='job-author'>
            Freelance Web Development
          </h3>
          <Row>
            <Col lg='5' md='7' xs='12'>
            <p className='detail-author'>
            Currently currating Develop for
            new startups and founders. Also
            love to code <span className='tools-author'>Javascript</span> & <span className='tools-author'>React.JS</span>
            </p>
            </Col>
          </Row>
      </div>
    );
  }
}
 
export default About;