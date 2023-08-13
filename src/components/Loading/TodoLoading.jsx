import React from 'react';
import '../../assets/css/App.css';
import loading from '../../assets/img/Blocks-1s-200px.svg';

function TodoLoading() {
    return (
        <div>
            <img src={loading}  alt="loading..." />
        </div>
    );
}

export { TodoLoading };