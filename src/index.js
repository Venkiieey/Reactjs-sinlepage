import React from 'react';
import ReactDOM from 'react-dom';


import Navbar from './components/Navbar';
import Slider from './components/Slider';
import ContentBody from './components/Content.jsx';
import Footer from './components/footer.jsx';


ReactDOM.render(
  <React.StrictMode>
  
    <Navbar />
    <Slider />
    <ContentBody />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);


