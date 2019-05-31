import React from 'react';
import './App.css';

import webLayout from './web-layout/web-layout' 
import home from './home/home'

const App: React.FC = () => {
  const web_Layout = webLayout(home());
  
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

  return (
    <div className="App">
       
        {web_Layout}
    </div>
  );
}

export default App;
