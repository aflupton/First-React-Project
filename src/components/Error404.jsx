import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CoffeeBrewing from '../assets/images/CoffeeBrewing.gif';

function Error404(props){
  console.log(props);
  return (
    <div>
      <style global jsx>{`
        .image {
          max-width: 75%;
        }
        div {
          padding-left: 20px;
        }
        h3 {
          margin-top: 25px;
        }
      `}</style>
      <img className='image img-circle' src={CoffeeBrewing} />
      <h3 className=''>The page {props.location.pathname} you are looking for is still brewing.</h3>
      <h4>Would you like to return <Link className="header-btn btn btn-light" to='/'>Home</Link> instead?</h4>

    </div>
  );
}

Error404.propTypes = {
  location: PropTypes.object
};

export default Error404;
