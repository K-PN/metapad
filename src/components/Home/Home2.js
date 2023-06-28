import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import myImg from '../../Assets/main/nft2.webp';

function Home2() {
  return (
    <Container fluid className='home-about-section' id='about'>
      <div className='home-content'>
        <Row>
          <Col md={8} className='home-about-description'>
            <p className='small-text'>Overview of</p>
            <p className='home-about-title'>What is NFT Launchpad?</p>
            <p className='home-about-body'>
              NFT Launchpad is a crowdfunding platform that introduces
              high-quality nft projects to succeed in the NFT market. It creates
              an ecosystem where startups, investors, and entrepreneurs get
              benefitted by showcasing their projects to a targeted audience.
              The NFT launchpad is similar to the other token sale platforms
              which allow the startups to mint NFTs and launch a token sale. The
              intuitive features and ability to generate income have created
              hype for the platform among entrepreneurs and investors.
              <br />
              <br />
              The NFT Launchpads lets the investors reach out to the potential
              and promising NFT projects and buy tokens at a minimal price. The
              notable advantage of NFT launchpads is that early investors gain
              high in their investments with the chance of enormous ROI. Hence,
              business owners and NFT investors take this as a chance to support
              new nft projects to reach a global audience.
            </p>
          </Col>
          <Col md={4} className='myAvtar'>
            <img src={myImg} className='img-fluid' alt='avatar' />
          </Col>
        </Row>
      </div>
    </Container>
  );
}
export default Home2;
