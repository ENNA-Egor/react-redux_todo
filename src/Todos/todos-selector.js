export const selectAllTodos = (state) => state.todos;

export const selectActiveTodos = (state) => state.todos.filer(todo => todo.compketed ===false);