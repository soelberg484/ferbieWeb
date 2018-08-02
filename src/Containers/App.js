import React, { Component } from 'react';
import '../Design/App.css';
import {MenuBar} from "../Components/MenuBar";
import {AboutUs} from "../Components/AboutUs";
import {Projects} from "../Components/Projects";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";

class App extends Component {
  render() {
    return (
        <HashRouter>
            <div>
                <MenuBar/>
                <div className="content">
                    <Route path="/om-os" component={AboutUs}/>
                    <Route path="/projecter" component={Projects}/>
                </div>
            </div>
        </HashRouter>
    );
  }
}

export default App;
