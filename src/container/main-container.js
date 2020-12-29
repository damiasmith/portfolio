import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Home from '../components/home';
import Resume from '../components/resume';
import About from '../components/about';
import Projects from '../components/projects';
import Contact from '../components/contact';
import Footer from '../components/footer';
import Container from 'react-bootstrap/Container';
import Cactus from '../images/cactus.png';

export default class MainContainer extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <div className='main-container'>
        <div className='heading'>
          <Nav className='justify-content-center'>
            <div className='cactus'>
              <Nav.Link as={Link} to='/'>
                <img className='cactus' src={Cactus} alt='cactus.png' height={18} />
              </Nav.Link>
            </div>
            <div className='nav-container'>
              <Nav.Item> 
                <Nav.Link as={Link} to='/about' className='heading'>About</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to='/resume' className='heading'>Resume</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to='/projects' className='heading'>Projects</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to='/Contact' className='heading'>Contact</Nav.Link>
              </Nav.Item>
            </div>
          </Nav>
        </div>
        <div className='body'>
          <Switch>
            <Route exact path='/'><Home resumeData={resumeData}/></Route>
            <Route path="/about"><About resumeData={resumeData}/></Route>
            <Route path="/resume"><Resume resumeData={resumeData}/></Route>
            <Route path="/projects"><Projects resumeData={resumeData}/></Route>
            <Route path="/contact"><Contact resumeData={resumeData}/></Route>
          </Switch>
        </div>
        <Container className='footer'>
          <Footer resumeData={resumeData}></Footer>
        </Container>
      </div>  
    )
  }
}
