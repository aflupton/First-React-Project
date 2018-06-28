import React from 'react';

function NewTicketForm(){
  return (
    <div>
      <style jsx>{`
        input {
          padding: 5px;
          padding-left: 0px;
          margin-right: 10px;
          margin-left: 0px;
          font-size: 10pt;
        }
        button {
          padding: 5px;
          margin-left: 0px;
          border: solid lightgrey 3px;
        }
        button:hover {
          background-color: red;
          color: white;
        }
      `}</style>
      <form className="form">
        <input
          type='text'
          id='names'
          placeholder='Pair Names:'/>
        <input
          type='text'
          id='location'
          placeholder='Location:'/>
        <input
          id='issue'
          placeholder='Describe your issue:'/>
        <button type='submit'>Help!</button>
      </form>
    </div>
  );
}

export default NewTicketForm;
