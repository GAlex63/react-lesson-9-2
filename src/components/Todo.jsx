import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash} from '@fortawesome/free-solid-svg-icons';


export function Todo ({ todo, handleEdit, handleDelete }) {

// console.log(todo)
return (
    <div className='todo'>
        <span>{todo.title}</span>
        <div className="btn-block">
                 <FontAwesomeIcon
                    icon={faPen} className="pen" onClick={() => handleEdit(todo.id)} />
                <FontAwesomeIcon
                    icon={faTrash} className="trash" onClick={() => handleDelete(todo.id)} />
            </div>
    </div>
)

}


// export function Todo({title, deleteTodo, editTodo, toggleComplete}) {
//     return (
//         <div className='todo'>
//             <p className={`${title.completed ? 'Выполнено' : 'Не выполнено'}`} onClick={() => toggleComplete(title.id)}>{title.title}</p>
//             <div className="btn-block">
//                 <FontAwesomeIcon
//                     icon={faPen} className="pen" onClick={() => editTodo(title.id)} />
//                 <FontAwesomeIcon
//                     icon={faTrash} className="trash" onClick={() => deleteTodo(title.id)} />
//             </div>
            
//         </div>
//     )
// }