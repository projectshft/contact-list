import React from 'react';
import { useHistory } from 'react-router-dom';

const ErrorPage = () => {
  const history = useHistory();
  const returnHandler = (e) => {
    e.preventDefault();
    console.log('return?');
    history.push('/');
  };
  return (
    <div className="container">
      <h1>404</h1>
      <h2>Sorry, you have reached a page that doesn't exist</h2>
      <button type="button" onClick={returnHandler}>
        Go Back
      </button>
    </div>
  );
};

export default ErrorPage;
