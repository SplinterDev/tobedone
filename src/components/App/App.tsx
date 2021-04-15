import React from 'react'
import './App.scss'
import TaskInput from '../TaskInput/TaskInput'
import TaskList from '../TaskList/TaskList'
import Colors from '../Colors/Colors'
import TasksProvider from '../../providers/TasksProvider'
import GlobalStateProvider from '../../providers/GlobalStateProvider'
import AlertsProvider from '../../providers/AlertsProvider'

function App(): JSX.Element {
  return (
    <GlobalStateProvider>
      <AlertsProvider>
        <TasksProvider>
          <div id="App">
            <TaskInput />
            <TaskList />
            <div style={{ display: 'none' }}>
              <Colors />
            </div>
          </div>
        </TasksProvider>
      </AlertsProvider>
    </GlobalStateProvider>
  )
}

export default App
