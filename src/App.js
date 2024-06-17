import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';

import './App.css';
import { EditTodoForm } from './components/EditTodoForm';
import { TodoForm } from './components/TodoForm';
import { Todo } from './components/Todo';
import { TodoList } from './components/TodoList';

export const App = () => {
	const [todos, setTodos] = useState([]);
	// const [isLoading, setIsLoading] = useState(false);
	// const [isCreating, setIsCreating] = useState(false);
	const [filterText, setFilterText] = useState('');
	const [sortedList, setSortedList] = useState(false);
	const [isSorted, setIsSorted] = useState(false);
	const [isSortedTodos, setIsSortedTodos] = useState([]);
	const [searchQuery, setSearchQuery] = useState('');
	const [isFiltered, setIsFiltered] = useState(false);
	const [isFilteredTodos, setIsFilteredTodos] = useState([]);

	// useEffect(() => {
	// 	setIsLoading(true);

	// 	fetch('https://jsonplaceholder.typicode.com/todos')
	// 		.then((loadedData) => loadedData.json())
	// 		.then((loadedTodos) => {
	// 			setTodos(loadedTodos);
	// 		})
	// 		.finally(() => setIsLoading(false));
	// }, []);

	// const requestAddTodo = () => {
	// 	setIsCreating(true);

	// 	fetch('https://jsonplaceholder.typicode.com/todos', {
	// 		method: 'POST',
	// 		headers: { 'Content-type': 'application/json;charset=utf-8' },
	// 		body: JSON.stringify({
	// 			title: 'delectus aut autem',
	// 			completed: 'false',
	// 			userId: 1,
	// 		}),
	// 	})
	// 		.then((rawResponse) => rawResponse.json())
	// 		.then((response) => {
	// 			setTodos([...todos, response]);
	// 		})
	// 		.finally(() => setIsCreating(false));
	// };

	const addTodo = (todo) => {
		setTodos([
			...todos,
			{ id: uuidv4(), title: todo, completed: false, isEditing: false },
		]);
	};

	const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

	const toggleComplete = (id) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo,
			),
		);
	};

	const editTodo = (id) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo,
			),
		);
	};

	const editTitle = (title, id) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id ? { ...todo, title, isEditing: !todo.isEditing } : todo,
			),
		);
	};

	const sortTodo = () => {
		if (!isSorted) {
			const sortedTodos = [...todos].sort((a, b) => a.title.localeCompare(b.title));
			setIsSortedTodos(sortedTodos);
		}
		setIsSorted(!isSorted);
	};

	useEffect(() => {
		if (searchQuery) {
			const filteredTodos = todos.filter((todo) =>
				todo.title.toLowerCase().includes(searchQuery.toLocaleLowerCase()),
			);
			setIsFilteredTodos(filteredTodos);
			setIsFiltered(true);
		} else {
			setIsFilteredTodos(todos);
			setIsFiltered(false);
		}
	}, [todos, searchQuery]);

	const handleSearch = (event) => {
		const query = event.target.value;
		setSearchQuery(query);
	};

	return (
		<div className="App">
			<h1>Список добрых дел:</h1>
			<TodoForm addTodo={addTodo} />
			<div>
				<input
					className="search-input"
					type="text"
					value={searchQuery}
					onChange={handleSearch}
					placeholder="Поиск по фразе"
				></input>
				<button className="btn-sort" onClick={() => sortTodo()}>
					{isSorted ? 'Изначальный порядок' : 'По алфавиту'}
				</button>
			</div>
			{isFiltered ? (
				<TodoList
					todos={isFilteredTodos}
					editTitle={editTitle}
					deleteTodo={deleteTodo}
					editTodo={editTodo}
					toggleComplete={toggleComplete}
				/>
			) : isSorted ? (
				<TodoList
					todos={isSortedTodos}
					editTitle={editTitle}
					deleteTodo={deleteTodo}
					editTodo={editTodo}
					toggleComplete={toggleComplete}
				/>
			) : (
				<TodoList
					todos={todos}
					editTitle={editTitle}
					deleteTodo={deleteTodo}
					editTodo={editTodo}
					toggleComplete={toggleComplete}
				/>
			)}
			{/* <button className="btn-create" disabled={isCreating} onClick={requestAddTodo}>
				Добавить заметку
			</button>
			{isLoading ? (
				<div className="loader" />
			) : (
				todos.map(({ id, title, completed }) => (
					<div
						key={id}
						className="todo"
						style={{ textDecoration: completed ? 'line-through' : null }}
					>
						{title} - {completed}
						<FontAwesomeIcon
							icon={faPen}
							className="pen"
							onClick={todos.map((todo) =>
								todo.isEditing && editTitle(todo)} 
								{todo.isEditing ? <EditTodoForm editTodo={editTitle} task={todo} /> : null}
									
								,
							
						/>
						<FontAwesomeIcon
							icon={faTrash}
							className="trash"
							onClick={deleteTodo(id)}
						/>
					</div>
				))
			)} */}
		</div>
	);
};
