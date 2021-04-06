import React from 'react';
import Header from './Header';
import Form from './Form';
import Todo from './Todo';

const App = () => {
   return (
    <div className="wrapper">
      <div className="card frame">
        <Header />
        <Form />
        <Todo/>
      </div>
    </div>
   );
};

export default App;
