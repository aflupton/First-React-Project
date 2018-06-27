import React from 'react';
import PropTypes from 'prop-types';


function Ticket(props) {
  return (
    <div>
      <style global jsx>{`
        div {
          background-color:#F08080;
          color:#fff;
        }
        .issue {
          font-style: italic;
        }
        .subheader {
          font-size: 16pt;
        }
      `}</style>
      <h3 className="subheader">{props.location} - {props.names}</h3>
      <p className="issue">{props.issue}</p>
      <hr/>
    </div>
  );
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string
};
export default Ticket;
