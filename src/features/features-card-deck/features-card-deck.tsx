
import React, { useState } from 'react';
import './features-card-deck.css'
import {Card, CardDeck} from 'react-bootstrap';

import webpage from '../../img/webpage.jpg'
import wifi from '../../img/freewifi.jpg'
import other from '../../img/other.jpg'


function FeaturesCardDeck() {

    return (
        <CardDeck>
            <Card>
                <Card.Img variant="top" src={webpage} />
                <Card.Body>
                    <Card.Title>Webite</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
      </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src={wifi} />
                <Card.Body>
                    <Card.Title>WiFi landing page</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
        content.{' '}
                    </Card.Text>
                </Card.Body>
                
            </Card>
            <Card>
                <Card.Img variant="top" src={other} />
                <Card.Body>
                    <Card.Title>Other</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
      </Card.Text>
                </Card.Body>
            </Card>
        </CardDeck>
    );
}

export default FeaturesCardDeck