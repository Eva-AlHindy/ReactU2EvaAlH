/* NavBarComponent is a class component which renders three links.*/
import React, {Component} from 'react';
import { Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';

class NavBarComponent extends Component {

    render() {
        return (
          <Nav className="sidebar">
            <Link to="/">Login</Link>
            <br />
            <Link to="/dashboard">Dashboard</Link>
            <br />
            <Link to="/user">User</Link><br />
          </Nav>
        );
    }
}

export default NavBarComponent;
