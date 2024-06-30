import { EditTodoForm } from "./EditTodoForm";
import { Todo } from "./Todo";

export function TodoList({ todos, editTitle, deleteTodo, editTodo, toggleComplete, searchQuery }) {

   return( 
    todos.map((todo) => todo.isEditing ? 
    (<EditTodoForm editTitle={editTitle} todo={todo} />
) : 
(<Todo 
    key={todo.id} 
    title={todo} 
    deleteTodo={deleteTodo} 
    editTodo={editTodo} 
    />))
)}