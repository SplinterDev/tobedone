import React from 'react'
import ReactDOM from 'react-dom'
import Body from './components/Body/Body'
import './index.scss'

ReactDOM.render(
  <React.StrictMode>
    <Body />
    <footer>
      <p>
        &copy; <a href="https://github.com/SplinterDev">@SplinterDev</a> 2021
      </p>
      <p>
        <a href="https://github.com/SplinterDev/tobedone/blob/master/LICENSE">
          Terms of Service
        </a>
      </p>
      <p>
        <a href="https://github.com/SplinterDev/tobedone">
          This repository on GitHub
        </a>
      </p>
    </footer>
  </React.StrictMode>,
  document.getElementById('root'),
)
