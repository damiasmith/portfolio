import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Cactus from '../images/cactus.png';

export default class Home extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <div className='office-container'>
        <Row className='grey-container home'>
          <Col className='name'>
            <div className='image'>
              <h1>{resumeData.name}</h1>
              <img className='cactus' src={Cactus} alt='cactus.png' height={40} />
            </div>
            <h4 className='role'>{resumeData.role}</h4>
            <p>{resumeData.roleDescription}</p>
          </Col>
        </Row>
      </div>
    );
  }
}