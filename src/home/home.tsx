import * as React from 'react';
import './home.css'
import { Button } from 'react-bootstrap'

function home() {

    return (
        <div className="img-container" >

            <div className="img-text">
                <h1 >Headline: :)</h1>
            </div>
            <div className="img-button-left">
                <Button variant="primary" size="lg" block>Primary</Button>
               
            </div>
            <div className="img-button-right">
                
                <Button variant="secondary" size="lg" block>Secondary</Button>
            </div>
        </div>
    )
}

export default home