import { useState } from "react";
import { v4 as uuidv4} from 'uuid';

export const useAddTodo = () => {
    const [todos, setTodos] = useState([])

    const addTodo = (todo) => {
    setTodos([
        ...todos,
        { id: uuidv4(), title: todo, completed: false, isEditing: false },
    ]);
}

const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

    return { todos, setTodos, addTodo, deleteTodo }
};