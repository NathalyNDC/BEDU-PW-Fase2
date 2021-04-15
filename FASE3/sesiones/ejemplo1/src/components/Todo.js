import React from 'react';
import Check from './Checkmark';
import '../css/Todo.css';
import PropTypes from 'prop-types';



//class Todo extends React.Component {
function Todo (props) {
  /*state = {
    done: true,
  }
*/
const onDelete = (event) => {
  props.delete(props.id);
  event.preventDefault();
  event.stopPropagation();
}

  //render () {
    { /* <div className={`list-item ${this.props.done ? 'done' : ''}`}>
        <Check done={this.props.done} change={this.props.change} id={this.props.id}/>
          {this.props.task}
        <button className="delete is-pulled-right">X</button>
    </div>*/}
    return (
      <div className={`list-item ${props.done ? 'done' : ''}`}>
        <Check done={props.done} change={props.change} id={props.id}/>
          {props.task}
        <button className="delete is-pulled-right" onClick={onDelete}>X</button>
      </div>
       
    )
  }
//};

Todo.propTypes = {
  done: PropTypes.bool,

}

export default Todo;