import React from 'react';
import Header from './Header';
import Form from './Form';
import TodoList from './TodoList';

class App extends React.Component {
  state = {
    tasks: [{ task: 'hola', status: false, id: (Math.random() * 1000).toFixed() }, { task: 'hola2', status: true, id: (Math.random() * 1000).toFixed() }, { task: 'hola3', status: true, id: (Math.random() * 1000).toFixed() }],
    value: ''
  }
  

  change = (id) => {
    let arr = [...this.state.tasks];
    let indexModif = arr.findIndex(element => element.id === id);
    arr[indexModif].status = !arr[indexModif].status;
    this.setState({ tasks: arr });
  }

  createTask = (task) => {
    let arr = [...this.state.tasks];
    let repeated=false;
    arr.forEach(element => {
      if(element.task===task){
        repeated=true;
      }
    });
    if(!repeated){
      arr.push({ task: task, status: false, id: (Math.random() * 1000).toFixed() });//se generan valores entre 0 y 1 y se multiplican por 1000, toFixed redondea val sin cero decimales al no enviar parámetro
      this.setState({ tasks: arr, value: '' });
    } else{
      alert("Tarea repetida, ya existe!");
    }
    
    
  }

  changeValue = (newValue) => {
    this.setState({value: newValue});
  }

  render() {
    return (
      <div className="wrapper">
        <div className="card frame">
          <Header counter={this.state.tasks.length} />
          <Form createTask={this.createTask} value={this.state.value} changeValue={this.changeValue}/>
          <TodoList change={this.change} tasks={this.state.tasks}/>
        </div>
      </div>
    );
  };
}


export default App;
