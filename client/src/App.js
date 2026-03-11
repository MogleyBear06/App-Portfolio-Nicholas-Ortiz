import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import PortfolioContainer from './components/PortfolioContainer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
      <PortfolioContainer/>
    </BrowserRouter>
  );
}

export default App;

