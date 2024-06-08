import React from 'react';
import '../styles/Todo-styles.css';

function TodoCreateButton(){
    return(
        <button className="todo-add-button" onClick={
          (event) => {
            console.log("CLICK")
            console.log(event)
            console.log(event.target)
          }
        }>
        <span className="button-content"
        >+</span>
        </button>

    );
  }

export { TodoCreateButton}