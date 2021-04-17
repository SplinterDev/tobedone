import React from 'react'
import './App.scss'
import TaskInput from '../TaskInput/TaskInput'
import TaskList from '../TaskList/TaskList'
import Colors from '../Colors/Colors'
import GlobalStateProvider from '../../providers/GlobalStateProvider'
import AlertsProvider from '../../providers/AlertsProvider'

function App(): JSX.Element {
  return (
    <GlobalStateProvider>
      <AlertsProvider>
        <div id="App">
          <TaskInput />
          <TaskList />
          <div style={{ display: 'none' }}>
            <Colors />
          </div>
        </div>
      </AlertsProvider>
    </GlobalStateProvider>
  )
}

export default App
