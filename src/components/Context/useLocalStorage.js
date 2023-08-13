import React from 'react';

function useLocalStorage(itemName, initialValue) {
    /* Storage todos */
    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    /* Render animation */
    React.useEffect(() => {
        setTimeout(() => {
            try{
                const localStorageItem = localStorage.getItem(itemName);
            
                let parsedItem;
    
                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = initialValue;
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                    setItem(parsedItem);
                }
    
                setLoading(false);
            } catch(error) {
                setLoading(false);
                setError(true);
            }
        }, 2000);
    }, []);

    /* Save changes */
    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
    };

    return {item, saveItem, loading, error};
}

export { useLocalStorage };

/* const defaultTodos = [
    { text: 'Terminado', completed: false },
    { text: 'Terminado 2', completed: true },
    { text: 'Terminado 3', completed: true },
    { text: 'Terminado 4', completed: false },
    { text: 'Terminado 5', completed: true },
];

localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos)); */
/* localStorage.removeItem('TODOS_V1'); */
