import React from "react";
import Navbar from "react-bootstrap/Navbar";
import styles from "./Header.module.css";
import WebFont from 'webfontloader';

export default () => (
  <React.Fragment>
    <Navbar className={styles.logo}>
      <Navbar.Brand href="#home" style={{color: '#b5232c'}}>Touch Type Tester</Navbar.Brand>
    </Navbar>
  </React.Fragment>
);
