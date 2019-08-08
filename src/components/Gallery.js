import React, { Component } from "react";
import {Row, Col, Card, CardImg, CardTitle} from 'reactstrap';
import './Components.css';
import Astro from '../img/astronaut.png';
import Astro2 from '../img/astronaut2.png';
import Astro3 from '../img/astronaut3.png';
import Astro4 from '../img/astronaut4.png';
import Astro5 from '../img/astronaut5.png';

class Gallery extends Component {
  render() {
    return (
      <div className='parent-body'>
        <h2 className='title-link'>Gallery</h2>
            <Row className='row-tab'>
              <Col md='4'>
                <div>
                  <Card className='card-view'>
                    <CardImg top width="100%" src={Astro} alt="Card image cap" />
                      <CardTitle>Card title</CardTitle>
                  </Card>
                </div>
              </Col>
              <Col md='4'>
                <div>
                  <Card className='card-view'>
                    <CardImg top width="100%" src={Astro2} alt="Card image cap" />
                      <CardTitle>Card title</CardTitle>
                  </Card>
                </div>
              </Col>
              <Col md='4'>
                <div>
                  <Card className='card-view'>
                    <CardImg top width="100%" src={Astro3} alt="Card image cap" />
                      <CardTitle>Card title</CardTitle>
                  </Card>
                </div>
              </Col>
              <Col md='4'>
                <div>
                  <Card className='card-view'>
                    <CardImg top width="100%" src={Astro4} alt="Card image cap" />
                      <CardTitle>Card title</CardTitle>
                  </Card>
                </div>
              </Col>
              <Col md='4'>
                <div>
                  <Card className='card-view'>
                    <CardImg top width="100%" src={Astro5} alt="Card image cap" />
                      <CardTitle>Card title</CardTitle>
                  </Card>
                </div>
              </Col>
            </Row>
      </div>
    );
  }
}
export default Gallery;