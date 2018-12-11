import React from "react";
import {
  Button,
  Container,
  Row,
  Table,
  Col,
  Form,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => (
  <div className="container">
    <p className="text-center">
      <a href="#">Privacy</a> | <a href="#">DMCA</a> |{" "}
      <a href="#">Terms of Service</a>
    </p>
  </div>
);

export default Footer;
