import '../index.css'
// import sun from './images/icons.svg#sun'

import { useEffect, useState } from 'react'

import todosArr from '../initialData/data'
import { Background } from './Background'
import TopSection from './TopSection'
import Heading from './Heading'
import { TodoForm } from './TodoForm'
import { BottomSection } from './BottomSection'
import { TodosList } from './TodosList'
import { Actions } from './Actions'
import SortBtnMobileSection from './SortBtnMobileSection'
import Attribution from './Attribution'
import Msg from './Msg'

function App() {
	const storedTodos = JSON.parse(localStorage.getItem('todos'))
	const [mode, setMode] = useState('dark')
	const [todo, setTodo] = useState('')
	// const [todos, setTodos] = useState(storedTodos === null ? [] : storedTodos)
	const [todos, setTodos] = useState(storedTodos)
	const [sortedTodos, setSortedTodos] = useState(todos)
	const [sortMode, setSortMode] = useState('all')
	const [activeBtn, setActiveBtn] = useState('all')

	// localStorage.clear()

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos))
	}, [todos])

	function handleChangeMode() {
		setMode(m => (m === 'dark' ? 'light' : 'dark'))
	}

	function handleSortByAll() {
		setSortMode('all')
		setSortedTodos(todos)
		setActiveBtn('all')
	}

	function handleSortByActive() {
		setSortMode('active')
		// setTodos(todos=>todos.filter(todo => !todo.checked))
		setSortedTodos(todos.filter(todo => !todo.checked))
		setActiveBtn('active')
	}

	function handleSortByComleted() {
		setSortMode('completed')
		// setTodos(todos.filter(todo => todo.checked))
		setSortedTodos(todos.filter(todo => todo.checked))
		setActiveBtn('completed')
	}

	return (
		<div className="body" data-mode={mode}>
			<main>
				<Background />
				<TopSection>
					<Heading onChangeMode={handleChangeMode} mode={mode} />
					<TodoForm todo={todo} setTodo={setTodo} setTodos={setTodos} setSortedTodos={setSortedTodos} />
				</TopSection>
				<BottomSection>
					{todos.length === 0 || sortedTodos.length === 0 ? (
						<Msg />
					) : (
						<>
							<TodosList todos={todos} setTodos={setTodos} sortedTodos={sortedTodos} setSortedTodos={setSortedTodos} />
							<Actions
								todos={todos}
								setTodos={setTodos}
								sortedTodos={sortedTodos}
								setSortedTodos={setSortedTodos}
								onSortAll={handleSortByAll}
								onSortByActive={handleSortByActive}
								onSortByCompleted={handleSortByComleted}
								activeBtn={activeBtn}
							/>
						</>
					)}
				</BottomSection>
				<SortBtnMobileSection
					onSortAll={handleSortByAll}
					onSortByActive={handleSortByActive}
					onSortByCompleted={handleSortByComleted}
					activeBtn={activeBtn}
				/>
				<Attribution />
				<p className="drag-n-drop">Drag and drop to reored list</p>
			</main>
		</div>
	)
}

export default App
