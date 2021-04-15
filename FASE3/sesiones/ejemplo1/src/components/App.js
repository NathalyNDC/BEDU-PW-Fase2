//import React from 'react';
import React, { useState } from 'react';
import Header from './Header';
import Form from './Form';
import TodoList from './TodoList';

//class App extends React.Component {
function App (){
  /*state = {
    tasks: [{ task: 'hola', status: false, id: (Math.random() * 1000).toFixed() }, { task: 'hola2', status: true, id: (Math.random() * 1000).toFixed() }, { task: 'hola3', status: true, id: (Math.random() * 1000).toFixed() }],
    value: ''
  }
  */
  const [tasks, setTasks] = React.useState([{ task: 'hola', status: false, id: (Math.random() * 1000).toFixed() }, { task: 'hola2', status: true, id: (Math.random() * 1000).toFixed() }, { task: 'hola3', status: true, id: (Math.random() * 1000).toFixed() }]);
  const [value, setValue] = React.useState('');
  const [show, setShow] = React.useState(false);
  
  const change = (id) => {
    //let arr = [...this.state.tasks];
    let arr = [...tasks]
    let indexModif = arr.findIndex(element => element.id === id);
    arr[indexModif].status = !arr[indexModif].status;
    //this.setState({ tasks: arr });
    setTasks(arr);
  }

  const createTask = (task) => {
    //let arr = [...this.state.tasks];
    let arr = [...tasks]
    let repeated=false;
    arr.forEach(element => {
      if(element.task===task){
        repeated=true;
      }
    });
    if(!repeated){
      arr.push({ task: task, status: false, id: (Math.random() * 1000).toFixed() });//se generan valores entre 0 y 1 y se multiplican por 1000, toFixed redondea val sin cero decimales al no enviar parámetro
     // this.setState({ tasks: arr, value: '' });
      setTasks(arr);
      setValue('');
    } else{
      alert("Tarea repetida, ya existe!");
    }
  }
  const handleClickDelete = (id) => {
      let arr = [...tasks]
      let indexDelete = arr.findIndex(element => element.id === id);
      arr.splice(indexDelete,1);
      setTasks(arr);
  }


  const changeValue = (newValue) => {
   // this.setState({value: newValue});
   setValue(newValue);
  }

  const showHide = () => {
    setShow(!show);
  }

  //render() {
    return (
      <div className="wrapper">
        <div className="card frame">
         {/* <Header counter={this.state.tasks.length} />
          <Form createTask={this.createTask} value={this.state.value} changeValue={this.changeValue}/>
          <TodoList change={this.change} tasks={this.state.tasks}/>
        */}
           <Header tasks={tasks} show = {show}/>
          <Form createTask={createTask} value={value} changeValue={changeValue}/>
          <TodoList change={change} tasks={tasks} show = {show} delete={handleClickDelete}/>
          <div class="box has-text-centered">
            <button className='button' onClick={showHide}>Show/Hide</button>
          </div>
        </div>
      </div>
    );
  };
//}


export default App;
