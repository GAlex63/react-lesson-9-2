import { useSelector, useDispatch } from "react-redux";
import { Todo } from './Todo'
import { editTodoAction, deleteTodoAction, sortTodosAction, setSearchQueryAction } from "../actions";

export function TodoList({ searchQuery, handleEdit, handleDelete }) {
    const todos = useSelector(state => state.todos)

    return (
        <div>
       
        {todos.map(todo => (
            <Todo 
            key={todo.id}
            todo={todo}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            />

        ))}
        </div>
    )
}
