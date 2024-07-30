const initialState = {
	todos: [],
	searchQuery: '',
	isSorted: false,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return { ...state, todos: [...state.todos, action.payload] };
		case 'EDIT_TODO':
			return {
				...state,
				todos: state.todos.map((todo) =>
					todo.id === action.payload.id
						? { ...todo, title: action.payload.title }
						: todo,
				),
			};
		case 'DELETE_TODO':
			return {
				...state,
				todos: state.todos.filter((todo) => todo.id !== action.payload),
			};
		case 'SET_SEARCH_QUERY':
			return { ...state, searchQuery: action.payload };
		case 'SORT_TODOS':
			return { ...state, isSorted: !state.isSorted };
		default:
			return state;
	}
};

export default reducer;
