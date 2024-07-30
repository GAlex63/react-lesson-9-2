import './App.css';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, editTodo, setSearchQuery, sortTodos } from './actions';
// import useSearch from './components/hooks/useSearch';
// import { useAddTodo } from './components/hooks/useAddTodo';
// import useSortedTodo from './components/hooks/useSortedTodo';
// import useEdit from './components/hooks/useEdit';

export function App() {
	const dispatch = useDispatch();
	const { todos, searchQuery, isSorted } = useSelector((state) => ({
		todos: state.todos,
		searchQuery: state.searchQuery,
		isSorted: state.isSorted,
	}));

	const handleSearch = (event) => dispatch(setSearchQuery(event.target.value));

	const handleEdit = (todo) => {
		const newTitle = prompt('Исправить текст', todo.title);
		if (newTitle) {
			dispatch(editTodo(todo.id, newTitle));
		}
	};

	const handleDelete = (id) => dispatch(deleteTodo(id));
	// const handleDelete = (id) => todos.filter((todo) => todo.id !== id);

	const filteredTodos = todos.filter(
		(todo) => todo.title && todo.title.includes(searchQuery),
	);

	const sortedTodos = isSorted
		? [...filteredTodos].sort((a, b) => a.title.localeCompare(b.title))
		: filteredTodos;

	console.log(todos);
	todos.forEach((todo) => {
		console.log(todo.title);
	});

	return (
		<div className="App">
			<h1>Список добрых дел:</h1>
			<TodoForm />
			<div>
				<input
					className="search-input"
					type="text"
					value={searchQuery}
					onChange={handleSearch}
					placeholder="Поиск по фразе"
				></input>
				<button className="btn-sort" onClick={() => dispatch(sortTodos())}>
					{isSorted ? 'Изначальный порядок' : 'По алфавиту'}
				</button>
			</div>
			<TodoList todos={todos} onEdit={handleEdit} onDelete={handleDelete} />
		</div>
	);
}

// export const App = () => {
// 	const dispatch = useDispatch();
// 	const { todos, searchQuery, isSorted } = useSelector((state) => ({
// 		todos: state.todos,
// 		searchQuery: state.searchQuery,
// 		isSorted: state.isSorted,
// 	}));

// 	const handleSearch = (event) => dispatch(setSearchQuery(event.target.value));

// 	const sortedTodos = isSorted
// 		? [...todos].sort((a, b) => a.title.localeCompare(b.title))
// 		: todos;

// 	const filteredTodos = sortedTodos.filter(
// 		(todo) => todo.title && todo.title.includes(searchQuery),
// 	);
// 	const { addTodo, deleteTodo } = useAddTodo();
// 	// const { searchQuery, handleSearch } = useSearch();
// 	// const { todos, setTodos, addTodo, deleteTodo } = useAddTodo();
// 	// const { isSorted, isSortedTodos, isFiltered, isFilteredTodos, sortTodo } =
// 	// 	useSortedTodo(todos, searchQuery);
// 	// const { editTodo, editTitle } = useEdit(todos, setTodos);

// 	return (
// 		<div className="App">
// 			<h1>Список добрых дел:</h1>
// 			<TodoForm addTodo={(todo) => dispatch(addTodo(todo))} />
// 			<div>
// 				<input
// 					className="search-input"
// 					type="text"
// 					value={searchQuery}
// 					onChange={handleSearch}
// 					placeholder="Поиск по фразе"
// 				></input>
// 				<button className="btn-sort" onClick={() => dispatch(sortTodos())}>
// 					{isSorted ? 'Изначальный порядок' : 'По алфавиту'}
// 				</button>
// 			</div>
// 			<TodoList
// 				todos={filteredTodos}
// 				// editTitle={(id, title) => dispatch(editTitle(id, title))}
// 				deleteTodo={(id) => dispatch(deleteTodo(id))}
// 				editTodo={(id, title) => dispatch(editTodo(id, title))}
// 			/>
// 		</div>
// 	);
// };
