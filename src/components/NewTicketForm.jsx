import React from 'react';

function NewTicketForm(){
  return (
    <div>
      <style jsx>{`
        .form {
          width: 50%;
        }
      `}</style>
      <form className="form">
        <input
          type='text'
          id='names'
          placeholder='Pair Names'/>
        <input
          type='text'
          id='location'
          placeholder='Location'/>
        <input
          id='issue'
          placeholder='Describe your issue.'/>
        <button type='submit'>Help!</button>
      </form>
    </div>
  );
}

export default NewTicketForm;
