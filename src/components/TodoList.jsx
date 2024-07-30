import { useSelector, useDispatch } from "react-redux";
import { Todo } from './Todo'
import { editTodo, deleteTodo, sortTodos, setSearchQuery } from "../actions";

export function TodoList({ searchQuery, handleEdit, handleDelete }) {
    const todos = useSelector(state => state.todos)

    return (
        <div>
       
        {todos.map(todo => (
            <Todo 
            key={todo.id}
            todo={todo}
            onEdit={handleEdit}
            onDelete={handleDelete}
            />

        ))}
        </div>
    )
}




// <div>
//         // <button onClick={() => dispatch(sortTodos())}>Сортировка по алфавиту</button>
//         {todos.map(todo => (
//             <Todo 
//             key={todo.id}
//             todo={todo}
//             onEdit={handleEdit}
//             onDelete={handleDelete}
//             />

//         ))}
//         </div>






// import { EditTodoForm } from "./EditTodoForm";
// import { Todo } from "./Todo";
// import { editTodo } from "../actions";

// export function TodoList({ todos, editTitle, deleteTodo, editTodo, toggleComplete, searchQuery }) {

//    return( 
//     todos.map((todo) => todo.isEditing ? 
//     (<EditTodoForm editTitle={editTitle} todo={todo} />
// ) : 
// (<Todo 
//     key={todo.id} 
//     title={todo} 
//     deleteTodo={deleteTodo} 
//     editTodo={editTodo} 
//     />))
// )}