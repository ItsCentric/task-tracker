import logo from './logo.svg'
import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [tasks, setTasks] = useState(
    [{
        id: 1,
        text: 'Practice Coding',
        day: 'Feb 4th at 3:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Play Valorant',
        day: 'Feb 4th at 5:30pm',
        reminder: false,
    },
    {
        id: 3,
        text: 'Check in on the homies',
        day: 'Feb 4th at 7:30pm',
        reminder: true,
    },
  ])

  // Add Task
  // 1:09:23

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
      <Header />
      <AddTask />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks Left!'}
    </div>
  );
}

export default App;
