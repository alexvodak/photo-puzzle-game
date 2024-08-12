import React, { useState } from 'react';
import Container from './components/container/Container';
import Header from './components/header/Header';

const App: React.FC = () => {
  return (
      //<Header />
      <Container idValue='root-container'>
        <Header > 
          <li><a href = "/">Home</a></li>
        </Header>

      </Container>
      // <header className="App-header">
      //   {/* <img src={logo} className="App-logo" alt="logo" /> */}
      //   Puzzles
      // </header>
  );
}

export default App;
