import React from 'react';
import Header from './Header';
import TicketList from './TicketList';

function App(){
  var myStyledComponentStyles = {
    backgroundColor: '#F08080',
    fontFamily: 'sans-serif',
    paddingTop: '25px',
    marginLeft: '15px',
    marginRight: '15px'
  };
  return (
    <div style={myStyledComponentStyles}>
      <Header/>
      <TicketList/>
    </div>
  );
}

export default App;

// <style jsx global>{`
//     body {
//       font-family: Helvetica;
//     }
//     .box {
//       border: none;
//       display: block;
//       border-bottom: 2px solid #fff;
//       margin-bottom: 10px;
//     }
//     .box:hover {
//       border-bottom: 2px solid #ccc;
//       outline: 0;
//     }
//     a {
//       color: #888;
//       text-decoration: none;
//     }
//
// `}</style>
