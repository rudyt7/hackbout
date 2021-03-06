import React from 'react';
import logo from '../../assets/img/logos/hbLogo1.png';
// import { Link } from "react-router-dom";

// reactstrap components
import {
  // Button,
  Collapse,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
  // UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  // UncontrolledTooltip
} from 'reactstrap';

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState('navbar-transparent');
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 199 ||
        document.body.scrollTop > 199
      ) {
        setNavbarColor('');
      } else if (
        document.documentElement.scrollTop < 200 ||
        document.body.scrollTop < 200
      ) {
        setNavbarColor('navbar-transparent');
      }
    };
    window.addEventListener('scroll', updateNavbarColor);
    return function cleanup() {
      window.removeEventListener('scroll', updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.remove('nav-open');
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={'fixed-top ' + navbarColor} expand="lg" color="white">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand href="" id="navbar-brand">
              <img
                src={logo}
                alt="HackBout_logo"
                style={{ height: '40px' }}
              ></img>
            </NavbarBrand>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle('nav-open');
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span
                className="navbar-toggler-bar top-bar"
                style={{ background: 'black' }}
              ></span>
              <span
                className="navbar-toggler-bar middle-bar"
                style={{ background: 'black' }}
              ></span>
              <span
                className="navbar-toggler-bar bottom-bar"
                style={{ background: 'black' }}
              ></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
            style={{ backgroundColor: '#22B573' }}
          >
            <Nav navbar>
              <NavItem>
                <NavLink
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    document.documentElement.classList.remove('nav-open');
                    document.querySelector('.header-main').scrollIntoView({
                      behavior: 'smooth',
                    });
                  }}
                >
                  <h5
                    style={{
                      color: 'black',
                      position: 'relative',
                      top: '5px',
                    }}
                  >
                    <b>Home</b>
                  </h5>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    document.documentElement.classList.remove('nav-open');
                    document.getElementById('tracks-section').scrollIntoView({
                      behavior: 'smooth',
                    });
                  }}
                >
                  <h5
                    style={{ color: 'black', position: 'relative', top: '5px' }}
                  >
                    <b>Tracks</b>
                  </h5>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    document.documentElement.classList.remove('nav-open');
                    document.getElementById('schedule-section').scrollIntoView({
                      behavior: 'smooth',
                    });
                  }}
                >
                  <h5
                    style={{ color: 'black', position: 'relative', top: '5px' }}
                  >
                    <b>Schedule</b>
                  </h5>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    document.documentElement.classList.remove('nav-open');
                    document.getElementById('Mentors-section').scrollIntoView({
                      behavior: 'smooth',
                    });
                  }}
                >
                  <h5
                    style={{ color: 'black', position: 'relative', top: '5px' }}
                  >
                    <b>Mentors</b>
                  </h5>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    document.documentElement.classList.remove('nav-open');
                    document.getElementById('sponsors-section').scrollIntoView({
                      behavior: 'smooth',
                    });
                  }}
                >
                  <h5
                    style={{ color: 'black', position: 'relative', top: '5px' }}
                  >
                    <b>Sponsors</b>
                  </h5>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    document.documentElement.classList.remove('nav-open');
                    document.getElementById('faq-section').scrollIntoView({
                      behavior: 'smooth',
                    });
                  }}
                >
                  <h5
                    style={{ color: 'black', position: 'relative', top: '5px' }}
                  >
                    <b>FAQ</b>
                  </h5>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    document.documentElement.classList.remove('nav-open');
                    document
                      .getElementById('contactUs-section')
                      .scrollIntoView({
                        behavior: 'smooth',
                      });
                  }}
                >
                  <h5
                    style={{ color: 'black', position: 'relative', top: '5px' }}
                  >
                    <b>Contact Us</b>
                  </h5>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
