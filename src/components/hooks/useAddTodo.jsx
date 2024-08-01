import { useState } from "react";
import { v4 as uuidv4} from 'uuid';
import { useDispatch, useSelector } from "react-redux";
import { addTodoAction, deleteTodoAction } from "../../actions";

export const useAddTodo = (value, setValue) => {
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todos)

    const addTodo = (title) => {
        console.log(title)
        if (title) {
            dispatch(addTodoAction(title))
            setValue('')
        }
    }
    const deleteTodo = (id) => {
        dispatch(deleteTodoAction(id))
    }

    return { addTodo, deleteTodo }
}
