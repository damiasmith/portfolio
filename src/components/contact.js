import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section className="office-container">
        <div className="grey-container contact">
          <Row>
            <Col>
              <h2>Contact</h2>
              <div className="contact-item">
                <Row>
                  <h4>{resumeData.name}</h4>
                </Row>
                <Row>
                  <Col sm="4">
                    <h6>Email: </h6>
                  </Col>
                  <Col>
                  <a href={`mailto:${resumeData.email}`} target="_blank" rel="noopener noreferrer">
                      <h6>{resumeData.email}</h6>
                    </a>
                  </Col>
                </Row>
                <Row>
                  <Col sm="4">
                    <h6>Website: </h6>
                  </Col>
                  <Col>
                    <a href={resumeData.website} target="_blank" rel="noopener noreferrer">
                    <h6> {resumeData.website}</h6>
                    </a>
                  </Col>
                </Row>
                <Row>
                  <Col sm="4">
                    <h6>LinkedIn: </h6>
                  </Col>
                  <Col>
                    <a href={resumeData.socialLinks[0].url} target="_blank" rel="noopener noreferrer">
                    <h6>{resumeData.socialLinks[0].url}</h6>
                    </a>
                  </Col>
                </Row>
                <Row>
                  <Col sm="4">
                    <h6>GitHub: </h6>
                  </Col>
                  <Col>
                    <a href={resumeData.socialLinks[1].url} target="_blank" rel="noopener noreferrer">
                    <h6>{resumeData.socialLinks[1].url}</h6>
                    </a>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    );
  }
}
