import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo, toggleTodo } from '../store';
import '../App.css';


const TodoList = () => {
    //   const todos = useSelector((state) => state);
    //   const dispatch = useDispatch();
      return (
        <h3>TodoList</h3>
    //     <ul>
    //       {todos.map((todo) => (
    //         <li key={todo.title}>
    //           <input
    //             type="checkbox"
    //             checked={todo.completed}
    //             onChange={() => dispatch(toggleTodo(todo.id))}
    //           />{" "}
    //           {todo.title}{" "}
    //           <button onClick={() => dispatch(removeTodo(todo.id))}>delete</button>
    //         </li>
    //       ))}
    //     </ul>
      );
    };


    export default TodoList