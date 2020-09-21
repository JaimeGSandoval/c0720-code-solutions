import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    this.getAllTodos();
  }

  getAllTodos() {

    fetch('/api/todos')
      .then(response => response.json())
      .then(responseData => this.setState({ todos: responseData }))
      .catch(error => console.error('Fetch error', error));
  }

  addTodo(newTodo) {

    const req = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTodo)
    };

    fetch('/api/todos', req)
      .then(response => response.json())
      .then(todo => {
        this.setState(state => {
          return {
            todos: state.todos.concat(todo)
          };
        });
      })
      .catch(error => console.error('Post Error:', error));
  }

  toggleCompleted(todoId) {

    let todoIndex;

    for (let i = 0; i < this.state.todos.length; i++) {
      if (this.state.todos[i].id === todoId) {
        todoIndex = i;
        break;
      }
    }

    const targetTodo = this.state.todos[todoIndex];
    const currentIsCompleted = targetTodo.isCompleted;
    const update = {
      isCompleted: !currentIsCompleted
    };

    const req = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(update)
    };

    fetch(`/api/todos/${todoId}`, req)
      .then(response => response.json())
      .then(updatedTodo => {
        const newTodos = this.state.todos.slice();
        newTodos[todoIndex] = updatedTodo;
        this.setState({ todos: newTodos });
      })
      .catch(error => console.error('Patch error', error));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="React Todo" />
            <TodoForm onSubmit={this.addTodo} />
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
