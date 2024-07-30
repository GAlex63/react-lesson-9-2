import { useState } from "react";
import { v4 as uuidv4} from 'uuid';
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "../../actions";
// export const useAddTodo = () => {
//     const [todos, setTodos] = useState([])

//     const addTodo = (todo) => {
//     setTodos([
//         ...todos,
//         { id: uuidv4(), title: todo, completed: false, isEditing: false },
//     ]);
// }

// const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

//     return { todos, setTodos, addTodo, deleteTodo }
// };

export const useAddTodo = () => {
    const [title, setTitle] = useState ('')
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todos)

    const addTodo = () => {
        if (title) {
            const newTodo = {
                id: uuidv4(),
                title: title,
                completed: false,
                isEditing: false,
            }
            dispatch(addTodo(newTodo))
            setTitle('')
        }
    }
    const deleteTodo = (id) => {
        dispatch(deleteTodo(id))
    }

    return { addTodo, deleteTodo }
}