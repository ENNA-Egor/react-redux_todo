import { createStore, combineReducers } from "redux";
import {todosReducer} from './Todos/todos-reduser';
import {counterReducer} from './Counter/counter-reduser';
import {filters} from './Filters/filters-reducer'





const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer,
  filters,
  
});
export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());



 



