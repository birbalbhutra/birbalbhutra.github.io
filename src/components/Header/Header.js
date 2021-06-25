import React, { useState } from "react";
import Experience from "../Experience/Experience";
import Home from "../Home/Home";
import Projects from "../Projects/Projects";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="header">
      <Router>
        <Navbar dark expand="md">
          <NavbarBrand className="brand" href="/">
            Birbal
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/">
                  <NavLink>Home</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/experience">
                  <NavLink>Experience</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/projects">
                  <NavLink>Projects</NavLink>
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/experience" component={Experience} />
          <Route path="/projects" component={Projects} />
        </Switch>
      </Router>
    </div>
  );
};

export default Header;
