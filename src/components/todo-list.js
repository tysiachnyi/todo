import React from "react";
import TodoLostItem from "./todo-list-item";

const TodoList = ({todos}) =>{

    const elements = todos.map((item) => {

        const { id, ...itemProps} = item;
       return(
           <li key={id}>
               <TodoLostItem {...itemProps}
            // label={item.label}
            // important={item.important}
               />
           </li>
       )
    })
    return(
        <ul>
            { elements }
        </ul>
    );
};

export default TodoList;
