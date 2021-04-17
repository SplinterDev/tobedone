import React from 'react'
import App from '../App/App'
import Header from '../Header/Header'
import './Body.scss'

const Body = (): JSX.Element => {
  return (
    <div className="Body">
      <Header />
      <App />
    </div>
  )
}

export default Body
