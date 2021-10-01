import React from 'react';
import './App.css';
import Button from '@mui/material/Button';
import Header from './Header';
import { Container } from '@mui/material';

const Box = () => {
  return (
    <div className='textbox'>
      <span className='box-title'>
        This is a info box
      </span>
      <div className='cart'>
      <button className='cart-action decrement'>-</button>
      <span className='cart-total'>3</span>
      <button className='cart-action increment'>+</button>
      </div>
    </div>
  );
  }


const App = () => (
   <Container>
    <Header/>
    <Box/>
  </Container>
);

export default App;