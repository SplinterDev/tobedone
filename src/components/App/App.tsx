import React from 'react'
import './App.scss'
import TaskInput from '../TaskInput/TaskInput'
import TaskList from '../TaskList/TaskList'
import Colors from '../Colors/Colors'

function App(): JSX.Element {
  return (
    <div id="App">
      <TaskInput />
      <TaskList />
      {/* <Colors /> */}
    </div>
  )
}

export default App
