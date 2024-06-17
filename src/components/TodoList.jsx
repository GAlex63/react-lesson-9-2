import { EditTodoForm } from "./EditTodoForm";
import { Todo } from "./Todo";
import { App } from "../App";

export function TodoList({ todos, editTitle, deleteTodo, editTodo, toggleComplete, searchQuery }) {
   
    // function searchTodos(todos, query) {
    //     if(!query) {
    //         return todos;
    //     } else {
    //         todos.filter(todo => {
    //             todo.title.toLowerCase().includes(query.toLowerCase())
    //         })
    //     }
    // }

    // const filteredTodos = searchTodos(todos, searchTodos)

   return( todos.map((todo) => todo.isEditing ? (<EditTodoForm editTitle={editTitle} todo={todo} />
) : (<Todo key={todo.id} title={todo} deleteTodo={deleteTodo} editTodo={editTodo} toggleComplete={toggleComplete} />))
)}