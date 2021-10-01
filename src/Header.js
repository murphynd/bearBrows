import React from 'react';
import './App.css';
import Button from '@mui/material/Button';

const title = 'Bear Brows Cosmetic Tatooing';
const desc = 'Bear Brows Cosmetic Tattooing is now proudly offered at Adorn Uptown in Vancouver, Washington. Specializing in a variety of services including eyebrow microblading, permanent makeup, freckles, gender affirming services,and areola restoration. Certified as a permanent makeup artist from the Permatech Makeup Training Studio in 2008 and an active member of the American Micro-pigmentation Academy, regularly practicing up-to-date techniques. Using the highest grade, pharmaceutical iron-oxidebased pigments and mama bear care to guarantee a warm and fuzzy experience.';
const myTitleID = 'main-title';
const name = 'Natalie';


const Header=()=> {
  return (
    <header className='App-header'>
      <h1 id={ myTitleID }> {title}</h1>
      <span className='description'>{ desc }</span>
      <Button variant="contained">Book Now</Button>
    </header>
  );
}
export default Header;