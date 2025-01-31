import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo, toggleTodo } from '../store';
import '../App.css';


const TodoList = () => {
      const todos = [{id: 1, title: "React", cjmpleted: false}];
    //   const dispatch = useDispatch();
      return (
        // <h3>TodoList</h3>
        <ul>
          {todos.map((todo) => (
            <li key={todo.title}>
              <input
                type="checkbox"
                checked={todo.completed}
                // onChange={() => dispatch(toggleTodo(todo.id))}
              />{" "}
              {todo.title}{" "}
              <button >delete</button>
            </li>
          ))}
        </ul>
      );
    };


    export default TodoList