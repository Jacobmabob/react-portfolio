import React from 'react';
import Button from '../Button';

export default function About() {
  return (
    <>
      <h1>Welcome.</h1>
      <h3>My name is Jacob.</h3>
      <p>I am a <span>Front-end Developer </span><br></br> 
      based in Atlanta, GA.</p>
      <div>
        <Button text={'Contact'}/>
        <Button text={'Resume'}/>
      </div>
    </>
  );
}
