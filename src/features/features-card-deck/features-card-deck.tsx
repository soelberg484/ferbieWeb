import React, { useState } from "react";
import "./features-card-deck.css";
import { Card, CardDeck, Button, Accordion } from "react-bootstrap";

import webpage from "../../img/webpage.jpg";
import wifi from "../../img/freewifi.jpg";
import other from "../../img/other.jpg";

function FeaturesCardDeck() {
  return (
        <Accordion defaultActiveKey="0">
      <CardDeck>
        
          <Accordion.Toggle as={Card} eventKey="0">
            <Card.Img variant="top" src={webpage} />
            <Card.Body>
              <Card.Title>Webite</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Accordion.Toggle>
        
          <Accordion.Toggle as={Card} eventKey="1">
            <Card.Img variant="top" src={wifi} />
            <Card.Body>
              <Card.Title>WiFi landing page</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{" "}
              </Card.Text>
            </Card.Body>
          </Accordion.Toggle>

          <Accordion.Toggle as={Card} eventKey="2">
            <Card.Img variant="top" src={other} />
            <Card.Body>
              <Card.Title>Other</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
          </Accordion.Toggle>

      </CardDeck>

      <Accordion.Collapse eventKey="0">
        <div className="expandedCard-container arrow_box_left">Hello! I'm the body1</div>
      </Accordion.Collapse>

      <Accordion.Collapse eventKey="1">
        <div className="expandedCard-container arrow_box">Hello! I'm the bo2dy</div>
      </Accordion.Collapse>

      <Accordion.Collapse eventKey="2">
        <div className="expandedCard-container arrow_box_right">Hello! I'm the bo33dy</div>
      </Accordion.Collapse>
    </Accordion>
  );
}

export default FeaturesCardDeck;
