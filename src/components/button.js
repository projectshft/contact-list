import React, { Component, useState } from 'react';

const Button = (props) => {
  const [clicked, setClicked] = useState(false);
  return <button onClick={() => {setClicked(!clicked)}}>{props.text} {clicked ? "yes" : "no"}</button>
}


export default Button