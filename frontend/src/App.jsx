import KanbanBoard from './components/KanbanBoard';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">Task Flow</h1>
      </header>
      <main>
        <KanbanBoard />
      </main>
    </div>
  )
}

export default App