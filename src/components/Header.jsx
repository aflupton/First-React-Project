import React from 'react';
import { Link } from 'react-router-dom';

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
      `}</style>
      <h1 className="header">Help Queue:</h1>
      <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
    </div>
  );
}

export default Header;
