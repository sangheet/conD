import React from 'react';
import './App.css';
import MainContainer from './components/mainContainer';
import SideMenu from './components/SideMenu';
import SideWidgets from './components/SideWidgets';
import {GetCharactersQuery , GetEdificiosQuery} from "./queries/Queries";




function App() {
  
  return (
    <div className="App">
      <SideMenu />
      <MainContainer title="Edificios" content=<GetCharactersQuery/>/>
      <div className="dotW"></div>
      <SideWidgets />
    </div>
  );
}

export default App;
