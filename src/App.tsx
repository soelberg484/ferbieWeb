import React from 'react';
import './App.css';

import webLayout from './web-layout/web-layout' 
import home from './home/home'

const App: React.FC = () => {
  const web_Layout = webLayout(home());
  

  return (
    <div className="App">
       
        {web_Layout}
    </div>
  );
}

export default App;
