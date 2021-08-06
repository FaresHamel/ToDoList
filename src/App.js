import './App.css';
import Form from './components/Form';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

const App = () => {

  // const [inputValue, setInputValue] = useState('');
  
  return (
    <div className="App">
      <div className="container">
        <h1 className="title">To Do List</h1>
        <Form/>
    </div>
    </div>
  );
}
 export default App;
