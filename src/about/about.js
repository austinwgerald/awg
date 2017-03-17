import React from 'react';
import './about.css';
import {Grid, Row, Col} from 'react-bootstrap';

export default class About extends React.Component {

  render() {
    return (
      <div className="About">
          <Grid>
              <Row className="show-grid">
                  <Col xs={12} md={12}>
                  <h1>About Me</h1>
                  </Col>
              </Row>
              <Row className="show-grid">
                  <Col xs={12} md={3}>
                  <strong>I&apos;m a Front End Web Developer from Ridgeland, MS.</strong>
                  </Col>
                  <Col xs={12} md={9}>
                  <p>
                      I enjoy finding elegant solutions to technical problems.
                      <br/>
                      I graduated Cum Laude with a <strong>Bachelor of Science</strong> in <strong>Software Engineering</strong> from Mississippi State University in <strong>May 2016</strong>.
                      <br/>
                      <br/>
                  </p>
                  </Col>
              </Row>
              <Row className="show-grid">
                  <Col xs={12} md={3}>
                  <strong>Personally...</strong>
                  </Col>
                  <Col xs={12} md={9}>
                  <p>
                      I&apos;m an <strong>old soul</strong> who enjoys music, podcasts, pop culture, philosophy, news,
                      politics, and being a part of new &amp; wonderful things. <strong>I love seeing the world and all its nuances.</strong>
                  </p>
                  </Col>
              </Row>
          </Grid>

      </div>
    );
  }
}
