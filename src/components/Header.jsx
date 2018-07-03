import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <style global jsx>{`
        h1 {
          font-style: italic;
        }
        .header-btn {
          background-color: inherit;
          border: solid 2px #fff;
          opacity: 0.5;
        }
        .header-btn:hover {
          opacity: 1;
        }
      `}</style>
      <h1 className='header display-3'>Help Queue:</h1>
      <Link className='header-btn btn btn-light' to='/'>Home</Link> | <Link className='header-btn btn btn-light' to='/newticket'>Create Ticket</Link>
    </div>
  );
}

export default Header;
