import React from 'react';
import '../App.css';

const Button = props => {
  console.log(props);
  return (
    <div className='button-container'>
      Click to toggle image
      <div className=" btn-floating btn-large red right" onClick={props.handleClick}>
        <i className="material-icons">add</i>
      </div>
    </div>
  )
}

export default Button;
