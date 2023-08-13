import React from 'react';
import { AppUI } from './AppUI.jsx';
import { TodoProvider  } from '../components/Context/TodoContext.jsx';

function App() {
  /* Show App component */
  return (
    <TodoProvider>
      <AppUI></AppUI>
    </TodoProvider>
  );
}

export default App;
