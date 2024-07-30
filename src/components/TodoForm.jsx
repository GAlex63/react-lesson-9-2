import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions";

export function TodoForm() {
    const [value, setValue] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault()
        if (value.trim()) {
            dispatch(addTodo(value))
            setValue('')
        }
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




//     const handleSubmit = (event) => {
//         event.preventDefault()
//         if (value) {
//             addTodo(value)
//             setValue('')
//         }
//     }

//     return (
//         <form onSubmit={handleSubmit} className="todoForm">
//         <input 
//         type='text' 
//         value={value} 
//         onChange={(event) => setValue(event.target.value)} 
//         className='todo-input' 
//         placeholder="Новая задача" 
//         />
//         <button type='submit' className='btn-create'>Добавить</button>
//         </form>
//     )
}