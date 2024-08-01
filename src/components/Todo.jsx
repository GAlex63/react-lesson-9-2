import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash} from '@fortawesome/free-solid-svg-icons';


export function Todo ({ todo, handleEdit, handleDelete }) {

return (
    <div className='todo'>
        <p>{todo.title}</p>
        <div className="btn-block">
                 <FontAwesomeIcon
                    icon={faPen} className="pen" onClick={() => handleEdit(todo.id)} />
                <FontAwesomeIcon
                    icon={faTrash} className="trash" onClick={() => handleDelete(todo.id)} />
            </div>
    </div>
)

}
