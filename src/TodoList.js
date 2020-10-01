
import { decorate, observable, computed } from "mobx"

class TodoList {
    todo = {} 
    get unfinishedTodoCount() {
        return this.todo.todoItem.items.filter((todo) => !todo.finished).length
    }
}

decorate(TodoList, {
    todo: observable,
    unfinishedTodoCount: computed,
  });

export default TodoList;