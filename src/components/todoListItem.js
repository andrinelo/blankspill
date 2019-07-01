import React from 'react';


class TodoListItem extends React.Component {

	render(){
		return (
			<div className="todoListItem" onClick={this.props.deleteMethod}>
				{this.props.text}
			</div>
			);
	}
}

export default TodoListItem;