import React from 'react';
import '../styles/Todo-styles.css';

function TodoCounter({ total, completed}){
    return(
    <h1 className="title-counter">
        Haz completado {completed} de {total} tareas
    </h1>
    );
}

export{
    TodoCounter
}