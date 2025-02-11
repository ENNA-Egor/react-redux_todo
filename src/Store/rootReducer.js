import { createStore, combineReducers } from "redux";
import {todosReducer} from './Todos/todos-reduser';
import {counterReducer} from './Counter/counter-reduser';
import {filters} from './Filters/filters-reducer';
import {loadState, saveState} from './Todos/local-storage';

const el = loadState();
console.log (el)

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer,
  filters,
  
});


export const cofigureStore = () => {
  const persistedState = loadState();
  console.log (persistedState)
  const store = createStore(
    rootReducer, 
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
  store.subscribe(()=>{
    saveState(store.getState());
  });

   return store ;
};



 



