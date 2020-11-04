import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets'

function App() {
  return (
    //BWM CONVENTION
    <div className="app">

      {/**sidbar */}

      <Sidebar />

      {/** feed*/}

      <Feed />

      {/** widget*/}
      <Widgets />
    </div>
  );
}

export default App;
