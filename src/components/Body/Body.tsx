import React from 'react'
import TasksProvider from '../../providers/TasksProvider'
import App from '../App/App'
import Header from '../Header/Header'
import './Body.scss'

const Body = (): JSX.Element => {
  return (
    <div className="Body">
      <TasksProvider>
        <Header />
        <App />
      </TasksProvider>
    </div>
  )
}

export default Body
