import React from 'react';
import '../styles/Todo-styles.css';

function TodoList({children}){
    return(
        <ul className="todo-list">
            {children}
        </ul>
    );
}

export{ TodoList }