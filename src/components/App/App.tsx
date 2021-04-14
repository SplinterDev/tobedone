import React from 'react'
import './App.scss'
import TaskInput from '../TaskInput/TaskInput'
import TaskList from '../TaskList/TaskList'
import Colors from '../Colors/Colors'
import TasksProvider from '../../providers/TasksProvider'
import GlobalStateProvider from '../../providers/GlobalStateProvider'

function App(): JSX.Element {
  return (
    <GlobalStateProvider>
      <TasksProvider>
        <div id="App">
          <TaskInput />
          <TaskList />
          <div style={{ display: 'none' }}>
            <Colors />
          </div>
        </div>
      </TasksProvider>
    </GlobalStateProvider>
  )
}

export default App
