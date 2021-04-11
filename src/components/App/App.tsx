import React from 'react'
import './App.scss'
import TaskInput from '../TaskInput/TaskInput'
import TaskList from '../TaskList/TaskList'
import Colors from '../Colors/Colors'
import TasksProvider from '../../providers/TasksProvider'

function App(): JSX.Element {
  return (
    <TasksProvider>
      <div id="App">
        <TaskInput />
        <TaskList />
        <div style={{ display: 'none' }}>
          <Colors />
        </div>
      </div>
    </TasksProvider>
  )
}

export default App
