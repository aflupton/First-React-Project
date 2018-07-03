import React from 'react';
import PropTypes from 'prop-types';

function ConfirmationQuestions(props) {
  return (
    <div>
      <style jsx>{`
        
      `}</style>
      <p>Have you gone through all the steps on the Learn How to Program debugging lesson?</p>
      <button className='header-btn btn btn-light' onClick={props.onTroubleShootingConfirmation}>Yes</button>
    </div>
  );
}

ConfirmationQuestions.propTypes = {
  onTroubleShootingConfirmation: PropTypes.func
};

export default ConfirmationQuestions;
