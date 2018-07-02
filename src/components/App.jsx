import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import NewTicketControl from './NewTicketControl';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';

function App(){
  var myStyledComponentStyles = {
    backgroundColor: '#F08080',
    fontFamily: 'sans-serif',
  };
  return (
    <div style={myStyledComponentStyles}>
      <style>{`
          div {
            padding: 10px;
          }
          body {
            background-color: #F08080;
          }
    `}</style>
      <Header/>
      <Switch>
        <Route exact path='/' component={TicketList} />
        <Route path='/newticket' component={NewTicketControl} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
