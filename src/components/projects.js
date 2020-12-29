import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section className="office-container">
        <Row className="grey-container project-container">
          <Col>
            <h1>Projects</h1>
            <div className="projects">
              {
                resumeData.portfolio && resumeData.portfolio.map((item)=>{
                  return(
                    <div className="project-item">
                      <div>
                        <a href={item.url} target="_blank" rel="noopener noreferrer">
                          <h5 >{item.name}</h5>
                          <img src={item.imgurl} className="item-img" height={75} width={300}/>
                        </a >
                        <div>
                          <p className='description'>{item.description}</p>
                          <a href={item.github} target="_blank" rel="noopener noreferrer" className="github"> GitHub Link
                          </a>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </Col>
        </Row>
      </section>
    );
  }
}