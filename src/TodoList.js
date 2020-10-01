
import { decorate, observable, computed } from "mobx"

class TodoList {
    todos = []
    get unfinishedTodoCount() {
        return this.todos.filter((todo) => !todo.finished).length
    }
}

decorate(TodoList, {
    todos: observable,
    unfinishedTodoCount: computed,
  });

export default TodoList;