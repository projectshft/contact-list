import './App.css';
// import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  // const axios = require('axios');
  const path = "db/users.json";

  axios.get(path)
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
  return (
    <div className="App">
    </div>
  );
}

export default App;
