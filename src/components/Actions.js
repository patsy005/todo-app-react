

import { SortBtns } from './SortBtns'

export function Actions({
	todos,
	setTodos,
	onSortAll,
	onSortByActive,
	onSortByCompleted,
	activeBtn,
	setSortedTodos,
	sortedTodos
}) {

	

	if(!todos || !sortedTodos) return 

	const todosLeft = todos.filter(todo => !todo.checked).length

	function clearCompleted() {
		setSortedTodos(todos => todos.filter(todo => todo.checked === false))
		setTodos(todos => todos.filter(todo => todo.checked === false))
	}


	return (
		<div className="box__todo-sumup">
			<p>
				{sortedTodos.length === 0 && <span>0 items left</span>}
				{sortedTodos.length >= 1 && (
					<span>
						{todosLeft} {sortedTodos.length === 1 ? 'item' : 'items'} left
					</span>
				)}
			</p>

			{/* // <span>{todos.length} </span> <span> {todos.length === 1 ? 'item' : 'items'} </span> left */}

			<div className="box box__btns-sort box__btns-sort--desktop">
				<SortBtns
					onSortAll={onSortAll}
					onSortByActive={onSortByActive}
					onSortByCompleted={onSortByCompleted}
					activeBtn={activeBtn}
				/>
			</div>

			<button onClick={clearCompleted}>Clear Completed</button>
		</div>
	)
}
