/*!

=========================================================
* BLK Design System React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

export default function ExamplesNavbar() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [collapseOut, setCollapseOut] = React.useState("");
  const [color, setColor] = React.useState("navbar-transparent");
  React.useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);
  const changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      setColor("bg-info");
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      setColor("navbar-transparent");
    }
  };
  const toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    setCollapseOpen(!collapseOpen);
  };
  const onCollapseExiting = () => {
    setCollapseOut("collapsing-out");
  };
  const onCollapseExited = () => {
    setCollapseOut("");
  };
  return (
    <Navbar className={"fixed-top " + color} color-on-scroll="100" expand="lg">
      <Container>
        <div className="navbar-translate">
          <button
            aria-expanded={collapseOpen}
            className="navbar-toggler navbar-toggler"
            onClick={toggleCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
          <NavbarBrand to="/" id="navbar-brand" tag={Link}>
            <span>Kosmo• </span>
            Aliens
          </NavbarBrand>
          <UncontrolledTooltip placement="bottom" target="navbar-brand">
            Designed and Coded by Leon
          </UncontrolledTooltip>
        </div>
        <Collapse
          className={"justify-content-end " + collapseOut}
          navbar
          isOpen={collapseOpen}
          onExiting={onCollapseExiting}
          onExited={onCollapseExited}
        >
          <div className="navbar-collapse-header">
            <Row>
              <Col className="collapse-brand" xs="6">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                <span>Kosmo• </span>
            Aliens
                </a>
              </Col>
              <Col className="collapse-close text-right" xs="6">
                <button
                  aria-expanded={collapseOpen}
                  className="navbar-toggler"
                  onClick={toggleCollapse}
                >
                  <i className="tim-icons icon-simple-remove" />
                </button>
              </Col>
            </Row>
          </div>
          <Nav navbar>
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="/https://twitter.com/KozmoAliens"
                rel="noopener noreferrer"
                target="_blank"
                title="Follow us on Twitter"
              >
              
              <i className="fab fa-twitter" />
                <p className="d-lg-none d-xl-none">Twitter</p>
              </NavLink>
            </NavItem>
      
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="https://discord.gg/BUWUC7gQ"
                rel="noopener noreferrer"
                target="_blank"
                title="Follow us on Instagram"
              >
                <i className="fab fa-discord" />
                <p className="d-lg-none d-xl-none">Discord</p>
              </NavLink>
            </NavItem>
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="/landing-page"
                rel="noopener noreferrer"
                target="_blank"
                title="Check out our game"
              >
                 <i className="tim-icons icon-laptop" />
                <p className="d-lg-none d-xl-none">Game</p>
              </NavLink>
            </NavItem>
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="/landing-page"
                rel="noopener noreferrer"
                target="_blank"
                title="Check out our game"
              >
                 <i className="tim-icons icon-paper" />
                <p className="d-lg-none d-xl-none">Whitepaper</p>
              </NavLink>
            </NavItem>
           
        
            <NavItem>
              <Button
                className="nav-link d-none d-lg-block"
                color="primary"
                target="_blank"
                href="/landing-page"
              >
                <i className="tim-icons icon-spaceship" /> Game 
              </Button>
            </NavItem>

            <NavItem>
              <Button
                className="nav-link d-none d-lg-block"
                color="primary"
                target="_blank"
                href="/landing-page"
              >
                <i className="tim-icons icon-paper" /> Whitepaper
              </Button>
            </NavItem>
           
          
         
          </Nav>

          
        </Collapse>
      </Container>
    </Navbar>
  );
}
