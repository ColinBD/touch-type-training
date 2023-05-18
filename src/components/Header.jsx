import React from "react";
import Navbar from "react-bootstrap/Navbar";
import styles from "./Header.module.css";

export default () => (
  <React.Fragment>
    <Navbar className={styles.logo}>
      <Navbar.Brand href="#home" style={{color: '#b5232c', fontSize: '20pt'}}>Touch Type Tester</Navbar.Brand>
    </Navbar>
  </React.Fragment>
);
