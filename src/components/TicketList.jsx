import React from 'react';
import PropTypes from 'prop-types';
import Ticket from './Ticket';


function TicketList(props){
  return (
    <div>
      <hr/>
      {props.ticketList.map((ticket) =>
        <Ticket
          names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          timeOpen={ticket.timeOpen}
          key={ticket.id}/>
      )}
    </div>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.array
};

export default TicketList;
