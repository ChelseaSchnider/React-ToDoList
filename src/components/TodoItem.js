import React from 'react'

class TodoItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			style: {
				transform: 'scale(1, 0)',
				transition: 'transform 1s'
			}
		}
    };
    
	componentDidMount() {
		onNextFrame(() => {
			this.setState({ 
				style: { 
					transform: 'scale(1, 1)',
					transition: 'transform 1s'
				}
			});
		});
    };
    
	removeMe = () => {
		this.setState({
			style: { 
				transform: 'scale(1, 0)',
				transition: 'transform 1s'
			} 
		});
		setTimeout(() => {
			this.props.removeTodo(this.props.id);
		}, 500);
	};
	render() {
		return (
			<div 
				onClick={() => this.removeMe()}
				className="todoItem" 
				style={this.state.style}>
				{this.props.todo}
			</div>
		);
	}
};

const onNextFrame = (callback) => {
    setTimeout(function () {
        window.requestAnimationFrame(callback)
    }, 0);
};

export default TodoItem;