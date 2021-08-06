import { React, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = () => {

    const [inputValue, setInputValue] = useState("");
    const [todoList, setToDoList] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const handelSubmit = e => {
        e.preventDefault();
        if (inputValue.trim() === "") {
            setErrorMessage("You cannot add empty value");
            return;
        }
        setToDoList([...todoList, { inputText: inputValue, inputId: uuidv4() }]);
        setInputValue('');
        setErrorMessage('');
    }
    const removeItem = (id) => {
       setToDoList(todoList.filter((todoItem)=> todoItem.inputId !== id))
    }
    const clearItems = () => {
        setToDoList([]);
     }
    return (
      <div>
        <div className="container-form">
          <form onSubmit={handelSubmit}>
            <input
              type="text"
              placeholder="input you to do item ..."
              className="form-input"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button className="form-button" type="submit">
              Add
            </button>
          </form>
        </div>
        <div className="container-list">
          <ul>
            {todoList.map((todoItem) => (
              <li key={todoItem.inputId}>
                <span>{todoItem.inputText}</span>
                <button onClick={()=>removeItem(todoItem.inputId)}>x</button>
              </li>
            ))}
            <span>{errorMessage}</span>
          </ul>
          <button onClick={()=>clearItems()}>clear</button>
        </div>
      </div>
    );
}

export default Form;