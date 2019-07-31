import React, {Component} from 'react';
import About from "./components/About";
import Work from "./components/Work";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import './App.css';
import Profile from './profileku.jpg';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Route, NavLink, HashRouter } from "react-router-dom";

class App extends Component {
  render() {
  return (
    <HashRouter>
      <div className="App">
          <Row className='home-activity'>
            <Col className="col-nav-bar" sm='4' md ='3'>
            <Container className='nav-link'>
                <img src={Profile} className='profile-pic' alt='profile'/>
                <ListGroup activeClassName='border-active' className='nav-list'>
                  <ListGroupItem><NavLink exact to="/" activeClassName="main-nav-active">About</NavLink></ListGroupItem>
                  <ListGroupItem><NavLink exact to="/work" activeClassName="main-nav-active">Work</NavLink></ListGroupItem>
                  <ListGroupItem><NavLink exact to="/gallery" activeClassName="main-nav-active">Gallery</NavLink></ListGroupItem>
                  <ListGroupItem><NavLink exact to="/contact" activeClassName="main-nav-active">Contact</NavLink></ListGroupItem>
                </ListGroup>
            </Container>
            </Col>
            <Col className='col-main-view'>
              <Container>
              <div className="content">
                <Route exact path="/" component={About}/>
                <Route path="/work/" component={Work}/>
                <Route path="/gallery" component={Gallery}/>
                <Route path="/contact" component={Contact}/>
              </div>
              </Container>
            </Col>
          </Row>
      </div>
    </HashRouter>
  );
  }
}

export default App;
