import './App.css';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { useDispatch, useSelector } from 'react-redux';
import {
	addTodoAction,
	deleteTodoAction,
	editTodoAction,
	setSearchQueryAction,
	sortTodosAction,
} from './actions';
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

	const handleSearch = (event) => dispatch(setSearchQueryAction(event.target.value));

	const handleEdit = (todo) => {
		const newTitle = prompt('Исправить текст', todo.title);
		if (newTitle) {
			dispatch(editTodoAction(todo.id, newTitle));
		}
	};

	const handleDelete = (id) => dispatch(deleteTodoAction(id));

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
				<button className="btn-sort" onClick={() => dispatch(sortTodosAction())}>
					{isSorted ? 'Изначальный порядок' : 'По алфавиту'}
				</button>
			</div>
			<TodoList todos={todos} handleEdit={handleEdit} handleDelete={handleDelete} />
		</div>
	);
}
