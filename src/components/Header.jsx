import React from 'react';

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
    </div>
  );
}

export default Header;
