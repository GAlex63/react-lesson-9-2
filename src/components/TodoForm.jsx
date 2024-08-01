import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTodoAction } from "../actions";
import { useAddTodo } from "./hooks/useAddTodo";

export function TodoForm() {
    const [value, setValue] = useState('')
    const dispatch = useDispatch()

    const { addTodo } = useAddTodo(value, setValue)

    const handleSubmit = (event) => {
        event.preventDefault()
        addTodo(value)
        console.log('event', value)
        }
    

    return (
        <form onSubmit={handleSubmit} className='todoForm'>
            <input 
            className='todo-input'
            type='text'
            value={value}
            onChange={event => setValue(event.target.value)}
            placeholder='Новая задача'/>
            <button 
            className='btn-create'
            type='submit'
            >
                Добавить
            </button>
        </form>
    )
}
