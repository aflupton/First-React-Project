import React from 'react';

function NewTicketForm(){
  let _names = null;
  let _location = null;
  let _issue = null;

  function handleNewTicketSubmission(event) {
    console.log(_names.value);
    console.log(_location.value);
    console.log(_issue.value);
    _names.value = '';
    _location.value = '';
    _issue.value = '';
    event.preventDefault();
  }

  return (
    <div>
      <style jsx>{`
        input {
          padding: 5px;
          margin-right: 10px;
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
      <form onSubmit={handleNewTicketSubmission}>
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

export default NewTicketForm;
