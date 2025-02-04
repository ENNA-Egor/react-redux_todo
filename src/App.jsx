import Counter from './Counter';
import Todo from './Todo/AppTodo';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="App">
                    <h2>Hello Redux Counter</h2>
                    <Counter />
                </div>
                <div>
                    <h2>Hello Redux Todo</h2>
                    <Todo />
                </div>
            </header>
        </div>
    );
}



export default App;
