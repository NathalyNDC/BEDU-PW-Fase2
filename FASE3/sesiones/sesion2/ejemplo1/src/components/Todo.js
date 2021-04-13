import React from 'react';
import Check from './Checkmark';
import '../css/Todo.css';
import PropTypes from 'prop-types';



class Todo extends React.Component {
  /*state = {
    done: true,
  }
*/
  render () {
    return (
     
      <div className={`list-item ${this.props.done ? 'done' : ''}`}>
        <Check done={this.props.done} change={this.props.change} id={this.props.id}/>
          {this.props.task}
        <button className="delete is-pulled-right">X</button>
      </div>
    )
  }
};

Todo.propTypes = {
  done: PropTypes.bool,

}

export default Todo;