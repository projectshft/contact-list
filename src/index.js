import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import App from './App';
import PropTypes from "prop-types";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";


// //json for data:
// {
// 	"contacts": [
// 		{
// 			"id" = 0, // random number
// 			"name" = "Danimal",
// 			"imageUrl" = "https://media-exp1.licdn.com/dms/image/C5603AQEVBdx_tFCXhQ/profile-displayphoto-shrink_200_200/0/1605652332508?e=1628121600&v=beta&t=Nt1DLbvN9xLCZKqYmgfhQLeESueKvieVJ9-WEyBqiqs"
// 			"email" = "danpiston@hotmail.com",
// 			"phoneNumber" = 9199199919,
// 		}
// 	]
// }

const generateId = () => Math.round(Math.random() * 100000000);



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

