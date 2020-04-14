import React from 'react';
import Todos from './components/Todos'
import './App.css';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			todos: [ { name: 'Do more projects', id: 0 }, { name: 'Finish puzzle', id: 1 }, { name: 'Game alot', id: 2 } ]
		}
	}
	addTodo = () => {
		if(this.inputElement.value) {
			this.setState({ todos: [
				...this.state.todos, 
				{ name: this.inputElement.value, id: Math.random().toString(36).substr(2, 9)}
			] });
			this.inputElement.value = '';
		}
	}
	removeTodo = (id) => {
		this.setState({
			todos: this.state.todos.filter((todo) => todo.id !== id)
		});
	}
	render() {
		return (
			<div className="App">
				<h1> My ToDoList</h1>
				<div id="inputWrapper">
					<input 
						type="text" 
						placeholder="Type a todo" 
						id="todoInput"
						ref={(node) => this.inputElement = node}/>
					<div 
						id="todoBtn"
						onClick={() => this.addTodo()}>Add</div>
				</div>
				<Todos removeTodo={this.removeTodo} todos={this.state.todos}/>
			</div>
		);
	}
}; 

export default App;
