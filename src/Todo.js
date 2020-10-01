import { decorate, observable } from "mobx"

class Todo {
    todoItem = {}
}
decorate(Todo, {
    todoItem: observable,
})

export default Todo;