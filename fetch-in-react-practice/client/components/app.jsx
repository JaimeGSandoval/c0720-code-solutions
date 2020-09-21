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

    fetch('/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTodo)
    })
      .then(response => response.json())
      .then(responseData => {
        this.state.todos.push(responseData);
        this.setState([{ todos: responseData }]);
      })
      .catch(error => console.error('Post Error:', error));
  }

  toggleCompleted(todoId) {

    const todosArr = this.state.todos;
    for (let i = 0; i < todosArr.length; i++) {
      if (todosArr[i].id === todoId) {
        if (!todosArr[i].isCompleted) {

          todosArr[i].isCompleted = true;

          fetch(`/api/todos/${todoId}`, {
            method: 'PATCH',
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify(todosArr[i])
          })
            .then(response => response.json())
            .then(responseData => this.setState([{ todos: responseData }]))
            .catch(error => console.error('Patch error', error));
        }
      }
    }
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
