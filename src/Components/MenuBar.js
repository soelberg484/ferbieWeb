import React from 'react';
import {Navbar, Nav, NavItem, MenuItem, NavDropdown} from 'react-bootstrap';

export class MenuBar extends React.Component {

    render(){
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#home">FerbieWeb</a>
                    </Navbar.Brand>
                </Navbar.Header>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">
                            Om os
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                            Projecter
                        </NavItem>
                    </Nav>
            </Navbar>
        );
    }

}