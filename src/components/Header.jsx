import React from 'react';
import { Link } from 'react-router-dom';
import queue from '../assets/images/queue.jpg';

function Header() {
  return (
    <div>
      <style jsx>{`
        .header {
          color: #fff;
          background-color: grey;
          padding-left: 5px;
          font-size: 40pt;
        }
        .image {
          width:50%;
        }
      `}</style>
      <h1 className="header">Help Queue:</h1>
      <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
      <hr/>
      <img className="image" src={queue}/>
    </div>
  );
}

export default Header;
