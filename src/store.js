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
    }
    case "TOGGLE_TODO": {
    }
    case "REMOVE_TODO": {
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
export const addTodo = { type: "ADD_TODO" };
export const toggleTodo = { type: "TOGGLE_TODO" };
export const removeTodo = { type: "REMOVE_TODO" };