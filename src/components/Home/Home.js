import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import homeLogo from '../../Assets/main/nft.webp';
import Home2 from './Home2';
import Roadmap from './Roadmap';
import Partner from './Partner';

function Home() {
  return (
    <section>
      <Container fluid className='home-section' id='home'>
        <div className='home-content'>
          <Row>
            <Col md={7} className='home-header'>
              <p className='small-text'>META-PAD</p>
              <p className='home-about-title'>NFT Launchpad</p>
              <p className='home-about-title'>Development Company</p>
              <p className='home-about-body'>
                Be the reason for the success of the impending NFT projects by
                launching your exemplary NFT Launchpad platform by opting for
                the best-in-class NFT Launchpad Development services from the
                industry-leading NFT services provider.
              </p>
              <a
                href='https://pancakeswap.finance/swap?outputCurrency=0x89161D84e2F13F2AFb0AA97701e335904800C8dc'
                target='_blank'
                rel='noreferrer'
              >
                <Button variant='danger' bsSize='large' active>
                  <h4>Buy $METAPAD</h4>
                </Button>
              </a>
              <div id='dexscreener-embed'>
                <iframe src='https://dexscreener.com/bsc/0xA7D575aC42E02263B0c094735b10a02298eabdDA?embed=1&theme=dark&trades=0&info=0'></iframe>
              </div>
            </Col>
            <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={homeLogo} alt='home pic' className='img-fluid' />
            </Col>
          </Row>
        </div>
        <Home2 />
        <Roadmap />
        <Partner />
      </Container>
    </section>
  );
}

export default Home;
