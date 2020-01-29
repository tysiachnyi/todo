import React,{Component} from "react";
import ReactDOM from 'react-dom';
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import TodoList from "../todo-list";
import ItemAddForm from "../item-add-form";


export default class App extends Component {

    maxId = 100;

    state={
        todoData: [
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Make Awesome App'),
            this.createTodoItem('Have a lunch')

        ]
    };

    createTodoItem(label){
        return{

                label:label,
                important: false,
                done:false,
                id: this.maxId++

        }
    }

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el)=>el.id === id )

            const newArray = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ];

            return {
                todoData: newArray
            };
        });
    };

    addItem = (text) => {
        //
        const newItem = this.createTodoItem(text)

        this.setState(({todoData}) => {
            //
            const newArr = [
                ...todoData,
                newItem
            ];

            return {
                todoData: newArr
            };
        });

    };

    onToggleImportant = (id) => {


    };

    onToggleDone = (id) => {
        this.setState(({todoData})=>{
            const idx = todoData.findIndex((el)=>el.id === id )
            // 1.
            const oldItem = todoData[idx];
            const newItem = {...oldItem, done: !oldItem.done}
            // 2.
            const newArray = [
                ...todoData.slice(0, idx),
                newItem,
                ...todoData.slice(idx + 1)
            ];

            return{
                todoData: newArray
            };

        });
    };




    render() {

        const { todoData} = this.state
        const doneCount = todoData.filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;
        return (
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={doneCount} />
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>

                <TodoList
                    todos={this.state.todoData}
                    onDeleted={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                />
                <ItemAddForm onItemAdded={this.addItem}/>
            </div>
        );
    }


};
