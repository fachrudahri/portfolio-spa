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
                <div className='title-job'>Front-End Developer / Muding (2018 - 2019)</div>
                <div className='text-job'>Muding has several services, namely M-course and M-komu. M-course is the first platform for learning and in the form of videos with Indonesian subtitles. M-komu is a platform that provides discussion space that is ready to help in dealing with problems when studying.</div>
            </Col>
          </Row>
          <Row>
            <Col xs='12' md='10' lg='7' className='row-2'>
                <div className='title-job'>Back-End Developer / Solvee (2018 - 2019)</div>
                <div className='text-job'>solvee is a local startup that has services such as storing goods from inter-city to abroad at a lower cost, and there is a service request for goods from anywhere.</div>
            </Col>
          </Row>
          <Row>
            <Col xs='12' md='10' lg='7' className='row-2'>
                <div className='title-job'>Software Engineer / Pekemas (2019 - Now)</div>
                <div className='text-job'>Pekemas adalah suatu platform dimana perusahaan/seseorang yang ingin mendapatkan pekerja melalui web ini yang terhubung dengan orang orang biasa yang memiliki kemampuan dan dapat membantu menyelesaikan pekerjaan yang membutuhkan mereka.</div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
 
export default Work;