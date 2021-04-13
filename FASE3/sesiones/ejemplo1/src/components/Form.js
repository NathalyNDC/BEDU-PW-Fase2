import React from 'react';
import '../css/form.css';

function Form(props) {
  function onSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    props.createTask(props.value);
    
  }
  function onChange(e) {
    e.preventDefault();
    e.stopPropagation();
    props.changeValue(e.target.value)
  }

  return (
    <form onSubmit={onSubmit}>
      <input 
        type='text'
        className='input'
        placeholder='Agrega una tarea' value={props.value} onChange={onChange}
      />
      <button className='button'>Enviar</button>
    </form>
  )
};

export default Form;