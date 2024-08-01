import { v4 as uuidv4 } from 'uuid';

export const addTodoAction = (title) => ({
	type: 'ADD_TODO',
	payload: { id: uuidv4(), title: title, completed: false, isEditing: false },
});

export const editTodoAction = (id, title) => ({
	type: 'EDIT_TODO',
	payload: { id, title },
});

export const deleteTodoAction = (id) => ({
	type: 'DELETE_TODO',
	payload: id,
});

export const setSearchQueryAction = (query) => ({
	type: 'SET_SEARCH_QUERY',
	payload: query,
});

export const sortTodosAction = () => ({
	type: 'SORT_TODOS',
});
