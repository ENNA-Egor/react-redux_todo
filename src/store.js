import { createStore, combineReducers } from "redux";

const counterReducer = (state = 0, action) => {
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

const todosReducer = (state = [], action)=> {
  if (action.type === "ADD_TODO"){
    return [...state, 
      {id: 1, 
        title: "React", 
        completed: false
      }];
  }
  return state;
}

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer
});
 const store = createStore(rootReducer);

  console.log("State:", store.getState());

 
 // actions
 export const increment = { type: "INCREMENT" };
 export const decrement = { type: "DECREMENT" };
 export const reset = { type: "RESET" };
 export const addtodo = { type: "ADD_TODO"}

 export default store ;