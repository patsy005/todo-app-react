import checkIcon from '../images/icon-check.svg'
import crossIcon from '../images/icon-cross.svg'
import { Draggable } from '@hello-pangea/dnd'
// import styled from 'styled-components'

// const Container = styled.div`
// 	background-color: ${props => (props.$isDragging ? 'hsl(233, 24%, 29%)' : 'hsl(235, 24%, 19%)')};
// `

export function Todo({ todo, setTodos, setSortedTodos, index }) {
	function handleToggleChecked(id) {
		setTodos(todos => todos.map(todo => (todo.id === id ? { ...todo, checked: !todo.checked } : todo)))
		setSortedTodos(todos => todos.map(todo => (todo.id === id ? { ...todo, checked: !todo.checked } : todo)))
	}

	function handleDeleteTodo(id) {
		setTodos(todos => todos.filter(todo => todo.id !== id))
		setSortedTodos(todos => todos.filter(todo => todo.id !== id))
	}

	return (
		<Draggable key={todo.id} draggableId={todo.id} index={index}>
			{(provided, snapshot) => {
				return (
					<div
						className={`box__todo`}
						ref={provided.innerRef}
						{...provided.dragHandleProps}
						{...provided.draggableProps}
						// $isDragging={snapshot.isDragging}
					>
						<div className="task">
							<div
								className={`checkbox circle ${todo.checked === true ? 'checked' : ''}`}
								onClick={() => {
									handleToggleChecked(todo.id)
								}}>
								<img src={checkIcon} alt="check icon" style={todo.checked === true ? { visibility: 'visible' } : {}} />
							</div>
							<p className={todo.checked === true ? 'line-through' : ''}>{todo.todo}</p>
						</div>

						<img src={crossIcon} alt="cross icon" onClick={() => handleDeleteTodo(todo.id)} />
					</div>
				)
			}}
		</Draggable>
	)
}
