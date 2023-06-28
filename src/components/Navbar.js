import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import logo from '../Assets/main/logo.png';
import { Link } from 'react-router-dom';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { PiSwapBold } from 'react-icons/pi';
import { PiRocketLaunchFill } from 'react-icons/pi';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaTelegram } from 'react-icons/fa';

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener('scroll', scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed='top'
      expand='md'
      className={navColour ? 'sticky' : 'navbar'}
    >
      <Container>
        <Navbar.Brand href='/'>
          <img src={logo} className='img-fluid logo' alt='brand' />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls='responsive-navbar-nav'
          onClick={() => {
            updateExpanded(expand ? false : 'expanded');
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ml-auto' defaultActiveKey='#home'>
            <Nav.Item>
              <Nav.Link as={Link} to='/' onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: '2px' }} /> Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to='/' onClick={() => updateExpanded(false)}>
                <AiOutlineUser style={{ marginBottom: '2px' }} /> NFT
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                target='_blank'
                rel='noreferrer'
                to='/'
                onClick={() => updateExpanded(false)}
              >
                <PiSwapBold style={{ marginBottom: '2px' }} /> Swap
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                target='_blank'
                rel='noreferrer'
                to='/'
                onClick={() => updateExpanded(false)}
              >
                <PiRocketLaunchFill style={{ marginBottom: '2px' }} /> Launchpad
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
        <ul className='home-about-social-links'>
          <li className='social-icons'>
            <a
              href='https://t.me/MetaPadOfficial'
              target='_blank'
              rel='noreferrer'
              className='icon-colour home-social-icons'
            >
              <FaTelegram />
            </a>
          </li>
          <li className='social-icons'>
            <a
              href='https://twitter.com/MetaPadSocial'
              target='_blank'
              rel='noreferrer'
              className='icon-colour  home-social-icons'
            >
              <AiOutlineTwitter />
            </a>
          </li>
        </ul>
      </Container>
    </Navbar>
  );
}

export default NavBar;
