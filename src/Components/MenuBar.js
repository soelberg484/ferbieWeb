import React from 'react';
import {Navbar} from 'react-bootstrap';
import Nav from "react-bootstrap/es/Nav";
import NavItem from "react-bootstrap/es/NavItem";
import {NavLink} from "react-router-dom";


export class MenuBar extends React.Component {

    render(){
        const navigationBar = (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <NavLink to="/">
                            <a>FerbieWeb</a>
                        </NavLink>
                    </Navbar.Brand>

                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1}>
                            <NavLink to="/om-os">
                            Om os
                            </NavLink>
                        </NavItem>
                        <NavItem eventKey={2}>
                            <NavLink to="/projecter">
                            Projecter
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );

        return navigationBar;

    }

}