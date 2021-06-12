import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import App from './App';
import PropTypes from "prop-types";
 
// App
  // Index page
    //   "Contact List" centered h1
    // "Add Contact" button (bootstrap) << Button component >>

    // table (bootstrap)  << table coponent >>
    // row 1: Profile Pic / Name / Email / Phone Number  
      // row 2: contact # random data   << contact component : child of table >>
      // row 3: contact # random        << contact component : child of table >>

  // Add contact page
    // get to from "Add Contact" button
    // form to add contacts
    // submit button that takes back to index page

  // dyanmic number of pages for each contact - 
    // get to from clicking the table row in index
    // vertical representation of table row in index
    // back button?

  
//   ...

// X GOT: need bootstrap

// const  = () => {
//   return <div>TODO</div>;
// };



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

// Hello.propTypes = {
//   // `name` must be a string, and it can't be `null` or `undefined`!
//   name: PropTypes.string.isRequired,
// };

// Hello.propTypes = {
//   name: PropTypes.string.isRequired,
//   //we simply state that this component should expect an array of objects to be passed as props
//   apiData: PropTypes.arrayOf(PropTypes.object).isRequired,
// };

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

