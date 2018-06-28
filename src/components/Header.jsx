import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <style jsx>{`
        h1 {
          font-size: 28pt;
          font-style: italic;
        }
        Link {
          font-size: 16pt;
        }
      `}</style>
      <h1 className="header">Help Queue:</h1>
      <Link className="link" to="/">Home</Link> | <Link className="link" to="/newticket">Create Ticket</Link>
    </div>
  );
}

export default Header;
