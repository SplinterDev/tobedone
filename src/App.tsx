import React from 'react'
import './App.scss'
import TaskInput from './components/TaskInput/TaskInput'
import TaskList from './components/TaskList/TaskList'

function App(): JSX.Element {
  return (
    <div className="App">
      <TaskInput />
      <TaskList />
    </div>
  )
}

export default App
