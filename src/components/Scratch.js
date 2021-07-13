import React, { useState } from 'react';
import './Scratch.css';
import Sketch from './Sketch';

export default function Scratch({title, text, img}) {
  
  const [isActive, setActive] = useState(true);
  const toggleClass = () => {
    setActive(!isActive);
  };
  return (
  <>
  <div className="container">
    <section onClick={toggleClass}>
      <h1 className={isActive ? 'question': 'noQuestion'} > {title} </h1>
      <div className="content">
        <h1>{text} </h1>
        <img src={img} alt="" />
      </div>
      </section>
  </div>
  <Sketch/>
  </>
  )
}
