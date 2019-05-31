import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import './web-layout.css'
import { FaBeer } from 'react-icons/fa';

import Pricing from '../pricing/pricing'
import Home from '../home/home'
import Features from '../features/features'

function WebLayout(content: any) {
    
    const [route, setRoute] = useState(content);

    return (
        <div className="main-container">
            <header className="header">
                <Navbar bg="light" variant="light" >
                    <Navbar.Brand href="#home"><FaBeer /></Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link onClick={() => setRoute(Home())}>Home</Nav.Link>
                        <Nav.Link onClick={() => setRoute(Features())}>Features</Nav.Link>
                        <Nav.Link onClick={() => setRoute(Pricing())}>Pricing</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-primary">Search</Button>
                    </Form>
                </Navbar>
            </header>
            <div className="content-container">
                {route}
                
            </div>
        </div>
    )
}

export default WebLayout