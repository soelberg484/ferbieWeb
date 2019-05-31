
import React, {useState} from 'react';
import './features.css'

import { Button } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'

import FeaturesCardDeck from './features-card-deck/features-card-deck'

function Features() {

    const mockData = {
        first: "Homepage",
        WiFi: "Company WiFi landingpage",
        other: "other: contact"
    }

    return (
        <>
        <header className="features-header">
            <div className="parallelogram">
            <h1>Headline2</h1>
            </div>
            <div className="header-details">
               <h3>
               Nulla vitae elit libero, a pharetra augue mollis interdum.
                </h3> 

            <div className="header-button left">
                <Button variant="outline-primary" size="lg" block>Pricing</Button>
               
            </div>
            <div className="header-button right">
                
                <Button variant="outline-secondary" size="lg" block>Contact</Button>
            </div>    
            
            </div>
        </header>
        <Carousel>
            <Carousel.Item>
            <div className="item-content">
                <h2>{mockData.first}</h2>
                </div>
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <div className="item-content">
                <h2>{mockData.WiFi}</h2>
                </div>
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className="item-content">
                <h2>{mockData.other}</h2>
                </div>
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <div className="cardDeck-container">
        {FeaturesCardDeck()}
        </div>
        </>
    );
}

export default Features