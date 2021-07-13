import React from 'react';
import './Whitespace.css';

export default function Whitespace({title,img, text}) {
  return (
    <div className="whitespace">
      <h1>{title} </h1>
      <img className="img" src={img} width="100%" height="100%" alt="" />
      <span>{text} </span>
    </div>
  )
}
