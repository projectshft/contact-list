import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div> 
            <h1>React Eval for James Chun</h1>
            <Link to="/contacts">Proceed</Link>
        </div>
    );
}

export default Home;