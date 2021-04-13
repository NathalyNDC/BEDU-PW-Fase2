import React from 'react';
import PropTypes from 'prop-types';
import '../css/Checkmark.css';



  function Checkmark(props) {
    const onChangeTask = (event) => {
        console.log("entro");
        props.change(props.id);
        event.preventDefault();
        event.stopPropagation();
    }
    return (
    <span className={`check ${props.done ? '': 'doneMark'}`}  onClick={ (event) => onChangeTask(event)} >
      <div>:)</div>
    </span>
  )
};

Checkmark.propTypes = {
  done: PropTypes.bool
}

export default Checkmark