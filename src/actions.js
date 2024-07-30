import { v4 as uuidv4 } from 'uuid';

export const addTodo = (todo, title) => ({
	type: 'ADD_TODO',
	payload: { id: uuidv4(), title: title, completed: false, isEditing: false },
});

export const editTodo = (id, title) => ({
	type: 'EDIT_TODO',
	payload: { id, title },
});

export const deleteTodo = (id) => ({
	type: 'DELETE_TODO',
	payload: id,
});

export const setSearchQuery = (query) => ({
	type: 'SET_SEARCH_QUERY',
	payload: query,
});

export const sortTodos = () => ({
	type: 'SORT_TODOS',
});
