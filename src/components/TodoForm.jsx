import { useState } from "react";

export function TodoForm({addTodo}) {
    const [value, setValue] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        if (value) {
            addTodo(value)
            setValue('')
        }
    }

    return (
        <form onSubmit={handleSubmit} className="todoForm">
        <input 
        type='text' 
        value={value} 
        onChange={(event) => setValue(event.target.value)} 
        className='todo-input' 
        placeholder="Новая задача" 
        />
        <button type='submit' className='btn-create'>Добавить</button>
        </form>
    )
}