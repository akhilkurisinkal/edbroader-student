import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RoutePaths from './RoutePaths';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <RoutePaths/>
      </BrowserRouter>
    </div>
  );
}

export default App;
