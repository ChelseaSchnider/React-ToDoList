import React from 'react';
import TodoItem from '../components/TodoItem'

class Todos extends React.Component {
	render() {
		const todos = this.props.todos.map((todo) => {
			return (
				<TodoItem 
					removeTodo={this.props.removeTodo} 
					id={todo.id} 
					key={todo.id} 
					todo={todo.name}
                />
			);
		});
		return (
			<div 
				id="todosWrapper" 
				removeTodo={this.props.removeTodo}>
				{todos}
			</div>
		);
	}
};

export default Todos;
