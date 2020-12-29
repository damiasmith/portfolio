import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faFilePdf);

export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section className="office-container">
        <div className="grey-container resume">
          <div className='title'>
            <div>
              <h1>Resume</h1>
            </div>
            <div className='pdf'> 
              <div>PDF</div>
              <div>
                <a href={resumeData.resume.url} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={ faFilePdf } size="2x" className='pdf-icon'/>
                </a>
              </div>
            </div>
          </div>
          <div className='education resume-item'>
            <Row>
              <Col className='resume-heading' sm="4">
                <h3>Education</h3>
              </Col>
              <Col className='resume-body' lg="12">
                {
                  resumeData.education && resumeData.education.map((item)=>{
                    return(
                      <Row className='item'>
                        <Col>
                          <h5>{item.UniversityName}</h5>
                          <p className="info">
                            {item.specialization}
                            <div className="date">{item.MonthOfPassing} {item.YearOfPassing}</div>
                          </p>
                          <p>
                            {item.Achievements}
                          </p>
                        </Col>
                      </Row>
                    )
                  })
                }
              </Col>
            </Row>
          </div>
          <div className="work resume-item">
            <Row>
              <Col className='resume-heading' sm="4">
                <h3><span>Work</span></h3>
              </Col>
              <Col className='resume-body' lg="12">
                {
                  resumeData.work && resumeData.work.map((item) => {
                    return(
                      <Row className='item'>
                        <Col>
                          <h5>{item.CompanyName}</h5>
                          <p className="info">
                            {item.specialization}
                            <div className="date">{item.MonthOfStarting} {item.YearOfStarting} - {item.MonthOfLeaving} {item.YearOfLeaving}</div>
                          </p>
                          <p>
                            {item.Achievements}
                          </p>
                        </Col>
                      </Row>
                    )
                  })
                }
              </Col>
            </Row>
          </div>
          <div className="skill resume-item">
            <Row>
              <Col className='resume-heading' sm="4">
                <h3><span>Skills</span></h3>
              </Col>
              <Col className='resume-body' lg="12">
                <Row>
                  <Col>
                    <ul className="skills">
                      <h5>{resumeData.skills[0].skillsDescription1}</h5>
                      {
                        resumeData.skills[0].skills && resumeData.skills[0].skills.map((item) => {
                          return(
                            <li className='skillName'>
                              <em>{item.skillname}</em>
                            </li>
                          )
                        })
                      }
                    </ul>
                  </Col>
                  <Col>
                    <ul className="skills">
                      <h5>{resumeData.skills[1].skillsDescription2}</h5>
                      {
                        resumeData.skills[1].skills && resumeData.skills[1].skills.map((item) => {
                          return(
                            <li className='skillName'>
                              <em>{item.skillname}</em>
                            </li>
                          )
                        })
                      }
                    </ul>
                  </Col>
                  <Col>
                    <ul className="skills">
                      <h5>{resumeData.skills[2].skillsDescription3}</h5>
                      {
                        resumeData.skills[2].skills && resumeData.skills[2].skills.map((item) => {
                          return(
                            <li className='skillName'>
                              <em>{item.skillname}</em>
                            </li>
                          )
                        })
                      }
                    </ul>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </section>
    );
  }
}