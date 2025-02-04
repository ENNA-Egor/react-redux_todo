
import NewTodo from "./NewTodo";
import TodoList from './TodoList';


import '../App.css';

export default function Todo() {
    return (
        <div className="App">
            <NewTodo />
            <TodoList />
        </div>
    );
}

