import React, { Component } from "react"
import { observer } from "mobx-react"

const TodoView = observer(({ todo }) => (
  <li>
      <input
          type="checkbox"
          checked={todo.finished}
          onClick={() => (todo.finished = !todo.finished)}
      />
      {todo.title}
  </li>
))

@observer
class App extends Component {

        render() {

        return (
            <div>
                <ul>
                    {this.props.store.todos.map((todo) => (
                        <TodoView todo={todo} key={todo.id} />
                    ))}
                </ul>
                Tasks left: {this.props.store.unfinishedTodoCount}
            </div>
        )
              }
    
}

export default App
