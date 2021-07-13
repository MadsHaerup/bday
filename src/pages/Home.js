import React from 'react';
import './Home.css';
import bboy from './bboy.svg'

export default function Home() {
  return (
    <div className="home">
      <h1>Happy Birthday Babe!</h1>
      <h2>Are you ready to see what the day brings?</h2>
      <img className="bboy" src={bboy} alt=""  width="100%" height="100%"/>
    </div>
  )
}
