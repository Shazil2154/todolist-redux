import React, { useState } from "react";
import {connect} from 'react-redux';
import { addElement,removeElement } from "../actions";
import TodoItem from "../components/Todoitem";
const mapStateToProps = state => {
	return {
		list: state.list
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onAddItem: (text) => dispatch(addElement(text)),
		onRemoveItem: (data) => dispatch(removeElement(data))
	}
}

function App(props) {
  const {onAddItem, onRemoveItem, list} = props;
  // we can use redux store for this as well but it will just add unneeded complexity
  //to the code as we dont need it anywhere else 
  const [inputText, setInputText] = useState("");


   const handleChange = (event) => {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  const addItem = () => {
    onAddItem(inputText);
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {list.map((todoItem, index) => (
            <TodoItem
              key={index}
              id={index}
              item={todoItem}
              onChecked={onRemoveItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
