import './App.css';
import {React,useContext} from 'react';
import { HashRouter } from 'react-router-dom';
import RoutePaths from './RoutePaths';
import { AppProvider } from './AppContext';
import Header from "./components/header/Header";

import Nav from "./components/nav/Nav";

function App() {

  return (
    <div className="App">
      <AppProvider>
      <div className="App">
        <HashRouter>
          <Header/>
          <Nav/>
          <RoutePaths/>
        </HashRouter>
      </div>
    </AppProvider>
    </div>
  );
}

export default App;
