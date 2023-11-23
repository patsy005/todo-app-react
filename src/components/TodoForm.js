export function TodoForm({ todo, setTodo, setTodos, setSortedTodos }) {
	function handleAddTodo(todo) {
		setTodos(todos => [...todos, todo])
		setSortedTodos(todos => [...todos, todo])
	}
	
	function handleSubmit(e) {
		e.preventDefault()

		if (!todo) return

		const newTodo = { todo, id: crypto.randomUUID(), checked: false}
		handleAddTodo(newTodo)
		setTodo('')
	}
	return (
		<div className="box box__input">
			<div className="circle"></div>
			<form className="add-todo" onSubmit={handleSubmit}>
				<input type="text" placeholder="Create a new todo..." value={todo} onChange={e => setTodo(e.target.value)} />
			</form>
		</div>
	)
}
