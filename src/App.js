import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Footer from './components/Footer';
import man from './components/assets/vison man.webp'


function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="part">
        <h1>NokiaEDU Learn . Perform. Share</h1>
      </header>
      <Content />
      <h1>Welcome to Nokia Operation</h1>
      <div className='space'>
        <h2>  Discover the efficient operations and services provided by Nokia. <br/>

Experience seamless communication and connectivity.</h2>
      </div>
      <h1>💻</h1>
      <img width="1000" src={man} alt="Nokia" />
      <Footer/>
    </div>
  );
}

export default App;
