import React from 'react';

import { TodoCounter } from '../components/Counter/TodoCounter.jsx';
import { TodoSearch } from '../components/Search/TodoSearch.jsx';
import { TodoList } from '../components/List/TodoList.jsx';
import { TodoItem } from '../components/Item/TodoItem.jsx';
import { TodoLoading } from '../components/Loading/TodoLoading.jsx';
import { TodoError } from '../components/Errors/TodoError.jsx';
import { EmptyTodos } from '../components/Empty/EmptyTodos.jsx';
import { TodoContext } from '../components/Context/TodoContext.jsx';
import { Modal } from '../components/Modal/Modal.jsx';
import { TodoForm } from '../components/Form/TodoForm.jsx';

import '../assets/css/App.css';

function AppUI() {
    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext);
    
    return(
        <div className="todo-app">
            <TodoCounter></TodoCounter>
            <div>
                <TodoSearch setOpenModal={setOpenModal}/>
            </div>
            <div>
                <TodoList>
                    {loading && <TodoLoading></TodoLoading>}
                    {error && <TodoError></TodoError>}
                    {(!loading && searchedTodos.length === 0) && <EmptyTodos></EmptyTodos>}
                    {searchedTodos.map(todo => (
                        <TodoItem
                            key={todo.text} 
                            text={todo.text}
                            completed={todo.completed}
                            onComplete={() => completeTodo(todo.text)}
                            onDelete={() => deleteTodo(todo.text)}
                        >
                        </TodoItem>
                    )) }
                </TodoList> 
                {openModal && (    
                    <Modal>
                        <TodoForm></TodoForm>
                    </Modal>
                )}
            </div>
        </div>
    );
}

export { AppUI };