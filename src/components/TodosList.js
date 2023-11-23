
import { Todo } from './Todo'

import { DragDropContext, Droppable } from '@hello-pangea/dnd'

export function TodosList({ todos, onToggleChecked, onDeleteTodo, setTodos, sortedTodos, setSortedTodos }) {

	if (!sortedTodos) return

	function onDragEnd(result) {
		if (!result.destination) return

		const todosTemp = [...sortedTodos]
		console.log(sortedTodos)
		console.log(todosTemp)
		const [reorderedTodo] = todosTemp.splice(result.source.index, 1)
		todosTemp.splice(result.destination.index, 0, reorderedTodo)

		// setSortedTodos(...reorderedTodos)
		setSortedTodos(todosTemp)
	}
	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<Droppable droppableId="sortedTodos">
				{provided => {
					return (
						<div style={{ width: '100%' }} {...provided.droppableProps} ref={provided.innerRef}>
							{sortedTodos.map((todo, index) => (
								<Todo
									todo={todo}
									key={todo.id}
									todos={todos}
									setTodos={setTodos}
									onToggleChecked={onToggleChecked}
									onDeleteTodo={onDeleteTodo}
									index={index}
									setSortedTodos={setSortedTodos}
								/>
							))}
							{provided.placeholder}
						</div>
					)
				}}
			</Droppable>
		</DragDropContext>
	)
}
