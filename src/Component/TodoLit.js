import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo, todoSelector, toggleTodo } from '../Redux/todoSlice'

const TodoLit = () => {
    const todos = useSelector(todoSelector)
    const dispatch = useDispatch()
    const [local, setLocal] = useState(null)

    useEffect(() => {
        setLocal(JSON.parse(localStorage.getItem('todos')))
    }, [local])

    const handleDelete = (id) => {
        dispatch(removeTodo(id))
    }
    const handleToogle = (id) => {
        dispatch(toggleTodo(id))
    }
    return (
        <ul className="list-group">
            {
                local ? local.map(todo => (
                    <li onClick={() => handleToogle(todo.id)}  key={todo.id} className="list-group-item d-flex justify-content-between align-items-start">
                        <div className={`ms-2 me-auto ${todo.completed && "text-decoration-line-through"}`}>
                            {todo.text}
                        </div>
                        <button className="badge bg-danger rounded-pill" onClick={() => handleDelete(todo.id)}>X</button>
                    </li>
                )) :

                    todos.map(todo => (
                        <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-start">
                            <div onClick={() => handleToogle(todo.id)} className={`ms-2 me-auto ${todo.completed && "text-decoration-line-through"}`}>
                                {todo.text}
                            </div>
                            <button className="badge bg-danger rounded-pill" onClick={() => handleDelete(todo.id)}>X</button>
                        </li>
                    ))
            }
        </ul>
    )
}

export default TodoLit