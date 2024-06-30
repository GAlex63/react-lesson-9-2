export default function useEdit(todos, setTodos, isEditing) {
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

	return { editTodo, editTitle };
}
