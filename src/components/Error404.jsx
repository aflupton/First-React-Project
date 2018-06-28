import React from 'react';
import { Link } from 'react-router-dom';
import queue from '../assets/images/queue.jpg';

function Error404(props){
  console.log(props);
  return (
    <div>
      <hr/>
      <img className="image" src={queue} />
      <hr/>
      <h2>The page you are looking for does not exist!</h2>
      <h3>Would you like to return <Link to="/">home</Link> instead?</h3>

    </div>
  );
}

export default Error404;
