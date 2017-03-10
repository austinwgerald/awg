import React from 'react';
import './experience.css';
import {Grid, Row, Col, Panel, Button} from 'react-bootstrap';

export default class Experience extends React.Component {
  render() {

    const cspireHeader = (
      <h3><strong>C&nbsp;Spire</strong></h3>
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
                      <p>
                      Ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                    </Panel>
                  </Col>
              </Row>
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
          </Grid>

      </div>
    );
  }
}
