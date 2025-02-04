import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, toggleTodo } from '../store';
import '../App.css';


const TodoList = () => { // отрисовываем данные
      const todos = useSelector((state) => state.todos);
      const dispatch = useDispatch();
      return (
        // <h3>TodoList</h3>
        <ul>
          {todos.map((todo) => (
            <li key={todo.title}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch(toggleTodo(todo.id))}
              />{" "}
              {"Ф.      "}{todo.title}{" И.     "}{todo.title1}
              <button 
              onClick={()=>dispatch(removeTodo(todo.id))}>delete</button>
            </li>
          ))}
        </ul>
      );
    };


    export default TodoList