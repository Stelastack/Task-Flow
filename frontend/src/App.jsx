import React, { useState } from 'react';
import Login from './components/Login';
import KanbanBoard from './components/KanbanBoard';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
  };

  if (!token) return <Login onLogin={setToken} />;

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Task Flow</h1>
        <button onClick={handleLogout} className="bg-red-500 px-4 py-2 rounded">Logout</button>
      </header>
      <main>
        <KanbanBoard />
      </main>
    </div>
  )
}

export default App