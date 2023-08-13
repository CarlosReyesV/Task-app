import React from "react";
import '../../assets/css/Modal.css';
import { TodoContext } from "../Context/TodoContext";

function TodoForm() {
    const {
        setOpenModal,
        addTodo
    } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    return (
        <form onSubmit={onSubmit}className="ModalText">
            <label>Write a new task...</label>
            <textarea 
                value={newTodoValue} 
                cols="30" 
                rows="10"
                onChange={onChange}
            >
            </textarea>
            <div>
                <button style={{backgroundColor: "#6efe00"}} className="Save">Save</button>
            </div>
        </form>
    )
}

export { TodoForm }