import React from 'react';
import Header from './Header';
import Form from './Form';
import TodoList from './TodoList';

const App = () => {
   return (
    <div className="wrapper">
      <div className="card frame">
        <Header />
        <Form />
        <TodoList/>
      </div>
    </div>
   );
};

export default App;
