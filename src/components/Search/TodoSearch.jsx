import React from 'react';
import { TodoContext } from "../Context/TodoContext";

function TodoSearch({setOpenModal}) {
    const {
        searchValue,
        setSearchValue,
    } = React.useContext(TodoContext)

    return (
        <div>
            <input placeholder='Search task...'
            name='text'
            className='todo-input'
            value={searchValue}
            onChange={(event) => {
                setSearchValue(event.target.value);
            }}
            />
            <button 
                className='todo-button'
                onClick={
                    () => {
                        setOpenModal(state => !state);
                    }
                }
            >
                Add
            </button>
        </div>
    )
}

export { TodoSearch };