import React from 'react'
import './App.scss'
import TaskInput from '../TaskInput/TaskInput'
import TaskList from '../TaskList/TaskList'

function App(): JSX.Element {
  return (
    <div className="App">
      <div className="content">
        <TaskInput />
        <TaskList />
      </div>
    </div>
  )
}

export default App
