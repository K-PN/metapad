import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../../Assets/main/logo.png';
import partner1 from '../../Assets/partners/1.png';
import partner2 from '../../Assets/partners/2.png';
import partner3 from '../../Assets/partners/3.png';
import partner4 from '../../Assets/partners/4.png';
import partner5 from '../../Assets/partners/5.png';
import partner6 from '../../Assets/partners/6.png';
import partner7 from '../../Assets/partners/7.png';

function Resume() {
  return (
    <Container fluid className='resume-section'>
      <Container>
        <Row>
          <Col md={6}>
            <img src={logo} className='img-fluid logoPN' alt='brand' />
          </Col>
          <Col md={6}>
            <h1 className='project-heading' style={{ size: '20px' }}>
              Partner
            </h1>
            <h1 className='find-us-on-text' style={{ size: '20px' }}>
              Find us on
            </h1>
            <div className='find-us-on'>
              <div>
                <a href='/'>
                  <img src={partner1} className='img-fluid' alt='partner' />
                </a>
              </div>
              <div>
                <a href='/'>
                  <img src={partner2} className='img-fluid' alt='partner' />
                </a>
              </div>
              <div>
                <a href='/'>
                  <img src={partner3} className='img-fluid' alt='partner' />
                </a>
              </div>
              <div>
                <a href='/'>
                  <img src={partner4} className='img-fluid' alt='partner' />
                </a>
              </div>
              <div>
                <a href='/'>
                  <img src={partner5} className='img-fluid' alt='partner' />
                </a>
              </div>
              <div>
                <a href='/'>
                  <img src={partner6} className='img-fluid' alt='partner' />
                </a>
              </div>
              <div>
                <a href='/'>
                  <img src={partner7} className='img-fluid' alt='partner' />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
