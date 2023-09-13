# Task Flow

A Kanban-style project management tool with real-time updates and team assignment features.

## Features

- Drag-and-drop Kanban board
- Real-time updates via WebSockets
- User authentication
- Team assignment
- Responsive design

## Setup

1. Clone the repository
2. Install root dependencies: `npm install`
3. Install frontend dependencies: `cd frontend && npm install`
4. Install backend dependencies: `cd backend && npm install`
5. Start the backend: `cd backend && npm run dev`
6. Start the frontend: `cd frontend && npm run dev`
7. Open http://localhost:5173

## API Documentation

### Authentication
- POST /api/users/login - Login user
- POST /api/users - Register user

### Tasks
- GET /api/tasks - Get all tasks
- POST /api/tasks - Create task
- PUT /api/tasks/:id - Update task
- DELETE /api/tasks/:id - Delete task
- GET /api/tasks/assigned/:userId - Get tasks assigned to user

## Technologies

- Frontend: React, Vite, Tailwind CSS, React Beautiful DnD
- Backend: Node.js, Express, SQLite, Socket.io
- Authentication: JWT