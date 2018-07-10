import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

function NewTicketForm(props){
  let _names = null;
  let _location = null;
  let _issue = null;

  function handleNewTicketSubmission(event) {
    event.preventDefault();
    props.onNewTicketCreation({names: _names.value, location: _location.value, issue: _issue.value, timeOpen: new Moment()});
    _names.value = '';
    _location.value = '';
    _issue.value = '';
  }

  return (
    <div>
      <style jsx>{`
        input {
          padding: 5px;
          margin-right: 10px;
          border-radius; 2px;
        }
        button {
          border: solid #ddd 2px;
          background-color: inherit;
          opacity: 0.5;
        }
        button:hover {
          opacity: 1;
        }
        form {
          width: 100%;
        }
      `}</style>
      <form className='form-group' onSubmit={handleNewTicketSubmission}>
        <input
          type='text'
          id='names'
          placeholder='Pair Names:'
          ref={(input) => {_names = input;}}/>
        <input
          type='text'
          id='location'
          placeholder='Location:'
          ref={(input) => {_location = input;}}/>
        <input
          id='issue'
          placeholder='Describe your issue:'
          ref={(input) => {_issue = input;}}/>
        <button type='submit' className='btn btn-light'>Help</button>
      </form>
    </div>
  );
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default NewTicketForm;
