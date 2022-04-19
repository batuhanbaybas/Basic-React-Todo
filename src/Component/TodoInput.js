import React, { useState } from 'react'
import { useDispatch, useSelector, } from 'react-redux';
import { themeSelector } from '../Redux/themeSlice';
import { addTodo, } from '../Redux/todoSlice';

const TodoInput = () => {

    const dispatch = useDispatch();
    const theme = useSelector(themeSelector)

    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);
    }
    const handleSubmit = (e) => {
        dispatch(addTodo({ text }));
        setText('');

    }

    return (
        <div className="input-group my-5">
            <input value={text} onChange={(e) => handleChange(e)} type="text" maxLength={40} className="form-control" placeholder="Add new ..." />
            <button onClick={handleSubmit} className={`btn btn-${theme ? "warning" : "primary"} ${text.trim().length <= 0 && "disabled" }`} type="button" id="button-addon2">Ekle</button>
        </div>
    )
}

export default TodoInput