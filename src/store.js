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
  switch (action.type){
    case "ADD_TODO":{
      return [
        ...state, 
        {id: Date.now(), 
          title: action.title, 
          title1: action.title1, 
          completed: false
        }
      ];
    }
    case "REMOVE_TODO":{
      return state.filter((todo)=> todo.id !== action.id);
    }
    case  "TOGGLE_TODO":{
      return state.map((todo)=>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    }
    default: {
      return state;
    }
  }
}

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer
});
export const store = createStore(rootReducer);

  // console.log("State:", store.getState());

 
 // actions
 export const increment = { type: "INCREMENT" };
 export const decrement = { type: "DECREMENT" };
 export const reset = { type: "RESET" };

// actionsCreators

 export const addTodo = (title, title1) => ({ 
  type: "ADD_TODO",
  title,
  title1
})
 export const toggleTodo = (id) => ({ 
  type: "TOGGLE_TODO",
  id
 });
 export const removeTodo = (id) =>({ 
  type: "REMOVE_TODO",
  id
 });


