import React from 'react';
import './experience.css';
import {Grid, Row, Col, Panel} from 'react-bootstrap';

export default class Experience extends React.Component {
  render() {

    const cspireHeader = (
      <h3>
        <strong>
          C&nbsp;Spire - Software Developer I
        </strong>
      </h3>
    );

    return (
      <div className="Experience">
          <Grid>
              <Row className="show-grid">
                  <Col xs={12} md={12}>
                  <h1>Experience</h1>
                  </Col>
              </Row>
              <Row className="show-grid">
                  <Col xs={12} md={3}>
                  <strong>Professional Experience</strong>
                  <br/><br/>
                  </Col>
                  <Col xs={12} md={9}>
                    <Panel header={cspireHeader}>
                      <ul>
                        <li>Application Development using <strong>AngularJS</strong> and <strong>Spring MVC</strong> </li>
                        <li>Create and maintain <strong>Java</strong> REST Services</li>
                        <li>Development and configuration of <strong>Salesforce</strong> CRM application</li>
                        <li>Agile and Waterfall Development</li>
                        <li>Provide extensive application lifetime support and user support</li>
                        <br />
                        <li>Notable <strong>Technologies</strong>:</li>
                          <ul>
                            <li>Git</li>
                            <li>Tomcat and Apache servers</li>
                            <li>Intellij IDEs</li>
                            <li>Node/ npm</li>
                          </ul>
                        <br />
                        <li>Notable <strong>Projects</strong>:</li>
                          <ul>
                            <li>Implimentation of <strong>Credit Card payments</strong> within POS application</li>
                            <li>
                              Extensive customization of <strong>Salesforce</strong> application to accomidate <strong>Business Process Automation</strong>
                            </li>
                          </ul>
                      </ul>
                    </Panel>
                  </Col>
              </Row>
            {/*
              <Row className="show-grid">
                  <Col xs={12} md={3}>
                  <strong>Click to see my Resum&egrave;</strong>
                  <br/><br/>
                  </Col>
                  <Col xs={12} md={9}>
                    <div className="well">
                      <Button bsSize="large" bsStyle="primary" block>Resum&egrave; &raquo;</Button>
                    </div>
                  </Col>
              </Row>
              */}
          </Grid>
      </div>
    );
  }
}
