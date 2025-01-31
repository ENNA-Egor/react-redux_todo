import { createStore, combineReducers } from "redux";

const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT": {
      return state + 1;
    }
    case "DECREMENT": {
      return state - 1;
    }
    case "RESET": {
      return 0;
    }
    default: {
      return state;
    }
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO": {
      return[
        ...state,
        {
          id: Date.now(),
          title: action.title,
          completed: false
        }
      ]
    };
    case "TOGGLE_TODO": {
      return state.map((todo)=>
        todo.id === action.id ? {...state, completed: !todo.completed}: todo
      )
    }
    case "REMOVE_TODO": {
      return state.filter((todo)= todo.id !==action.id);
    }
    default: {
      return state;
    }
  }
};

export const store = combineReducers(counter, todos);

// actions
export const increment = { type: "INCREMENT" };
export const decrement = { type: "DECREMENT" };
export const reset = { type: "RESET" };
export const addTodo = (title)=> ({ 
  type: "ADD_TODO", 
  title
});
export const toggleTodo = (id) =>({ 
  type: "TOGGLE_TODO",
  id 
});
export const removeTodo = (id)=> ({ 
  type: "REMOVE_TODO",
  id
});