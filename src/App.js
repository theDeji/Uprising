import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import './App.css';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Router>
          <Header />
          <Route exact path='/' component={ Home } />
          <Route path="/About" component={ About } />
          <Route path="/Contact" component={ Contact } />
          <Footer />
      </Router>
    </div>
  );
}

export default App;
