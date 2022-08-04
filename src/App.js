import './App.css';
import {React,useContext} from 'react';
import { BrowserRouter } from 'react-router-dom';
import RoutePaths from './RoutePaths';
import { AppProvider } from './AppContext';

import Nav from "./components/nav/Nav";

function App() {

  return (
    <div className="App">
      <AppProvider>
      <div className="App">
        <BrowserRouter>
          <Nav/>
          <RoutePaths/>
        </BrowserRouter>
      </div>
    </AppProvider>
    </div>
  );
}

export default App;
