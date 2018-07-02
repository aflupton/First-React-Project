import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CoffeeBrewing from '../assets/images/CoffeeBrewing.gif';

function Error404(props){
  console.log(props);
  return (
    <div>
      <style jsx>{`
        .image {
          max-width: 75%;
        }
        div {
          padding-left: 20px;
        }
      `}</style>
      <h3>The page you are looking for is still brewing.</h3>
      <br/>
      <img className='image' src={CoffeeBrewing} />
      <br/>
      <h4>Would you like to return <Link to='/'>home</Link> instead?</h4>

    </div>
  );
}

Error404.propTypes = {
  location: PropTypes.object
};

export default Error404;
