import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Roadmapcontent from './RoadmapContent';

function Roadmap() {
  return (
    <Container fluid className='roadmap-section'>
      <Container>
        <h1 className='purple'>ROADMAP</h1>
        <Row className='roadmap'>
          <Col md={6} className='roadmap-left'>
            <h3 className='roadmap-title'>PHASE 1</h3>
            <Roadmapcontent
              title='Concept development'
              content={['Launchpad project incorporates NFT']}
            />
            <Roadmapcontent
              title='Finalization of MetaPad project'
              content={['Complete website', 'Community building']}
            />

            <h3 className='roadmap-title'>PHASE 2</h3>
            <Roadmapcontent title='Launch Pancakeswap' content={[]} />
            <Roadmapcontent title='Marketing' content={[]} />
            <Roadmapcontent title='200 holders' content={[]} />
            <Roadmapcontent title='Applied CMC, CGC' content={[]} />
          </Col>
          <Col md={6} className='roadmap-right'>
            <h3 className='roadmap-title'>PHASE 3</h3>
            <Roadmapcontent title='Development LaunchPad' content={[]} />
            <Roadmapcontent title='Website V2' content={[]} />
            <Roadmapcontent title='Listing On CMC, CGC' content={[]} />
            <Roadmapcontent title='500 holders' content={[]} />

            <h3 className='roadmap-title'>PHASE 4</h3>
            <Roadmapcontent title='1000 holders' content={[]} />
            <Roadmapcontent title='Launch of the NFT collection' content={[]} />
            <Roadmapcontent title='Partnership' content={[]} />
            <Roadmapcontent title='List CEX' content={[]} />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Roadmap;
