import React from "react";
import TodoLostItem from "./todo-list-item";

const TodoList = () =>{

    return(
        <ul>
            <li><TodoLostItem/></li>
            <li><TodoLostItem/></li>
        </ul>
    );
};

export default TodoList;
