import React from 'react';
import './experience.css';
import {Grid, Row, Col} from 'react-bootstrap';

export default class Experience extends React.Component {

  render() {
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
                  <strong>Employed at C&nbsp;Spire</strong>
                  </Col>
                  <Col xs={12} md={9}>
                  <p>
                  Ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  </Col>
              </Row>
          </Grid>

      </div>
    );
  }
}
