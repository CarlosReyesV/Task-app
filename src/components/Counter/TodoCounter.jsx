import React from 'react';
import { TodoContext } from '../Context/TodoContext';

function TodoCounter() {
    const {
        completedTodos,
        totalTodos,
    } = React.useContext(TodoContext)

    return ( completedTodos === totalTodos
        /* If all task completed*/
        ? <div>
            <h1>
                No tasks to be completed 
            </h1>
        </div>
        /* Else, pending message */
        :
        <div>
            <h1>
                You've completed {completedTodos} of {totalTodos} tasks
            </h1>
        </div>
    )
}

export { TodoCounter };