import React from 'react'
import ReactDOM from 'react-dom'
import Body from './components/Body/Body'
import './index.scss'

ReactDOM.render(
  <React.StrictMode>
    <Body />
    <footer>
      <span>
        &copy; <a href="https://github.com/SplinterDev">@SplinterDev</a> 2021
      </span>
      <a href="https://github.com/SplinterDev/todo/blob/master/LICENSE">
        Terms of Service
      </a>
      <a href="https://github.com/SplinterDev/todo">
        This repository on GitHub
      </a>
    </footer>
  </React.StrictMode>,
  document.getElementById('root'),
)
