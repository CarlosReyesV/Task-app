import React from 'react'
import { RiCloseCircleLine } from 'react-icons/ri';
//import { TiEdit } from 'react-icons/ti';
import { AiFillCheckCircle } from 'react-icons/ai';

function TodoItem(props) {
    return (
        <div className='todo-container'>
            <li className='todo-row'>
                <div className='icons'>
                    <AiFillCheckCircle className={`Icon-check ${props.completed && "Icon-check--active"}`}
                        onClick={props.onComplete}
                    />
                </div>
                <p className={`${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
                <div className='icons'>
                    <div>
                        {/* <TiEdit
                            className='edit-icon Icon-edit'
                        /> */}
                    </div>
                    <div>
                        <RiCloseCircleLine
                            className='delete-icon Icon-delete'
                            onClick={props.onDelete}
                        />
                    </div>
                </div>
            </li>
        </div>
    )
}

export { TodoItem };