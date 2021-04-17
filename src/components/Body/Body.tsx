import React, { useEffect, useState } from 'react'
import TasksProvider from '../../providers/TasksProvider'
import App from '../App/App'
import Header from '../Header/Header'
import './Body.scss'
import BMACButton from '../../assets/buy-me-a-coffee-btn.png'

const Body = (): JSX.Element => {
  const [showAbout, setShowAbout] = useState(false)

  return (
    <div className="Body">
      <TasksProvider>
        <Header onClickAbout={() => setShowAbout((prevAbout) => !prevAbout)} />
        {showAbout ? (
          <div>
            <p>
              <b>To Be Done</b> is a simple to do list app that stores your
              tasks locally, in the browser. That is, if you clear your cache,
              your tasks will be lost.
            </p>

            <p>
              It&apos;s a simple app that I created for fun, to exercise some
              skills, but that can also be pretty useful.
            </p>

            <p>It was developed using React and Typescript.</p>

            <p>
              If you like the stuff I do, please consider buying me a coffee. :)
            </p>
            <a
              href="https://www.buymeacoffee.com/fjcm"
              target="_blank"
              rel="noreferrer"
            >
              <img style={{ maxWidth: '50%' }} src={BMACButton} />
            </a>
          </div>
        ) : (
          <App />
        )}
      </TasksProvider>
    </div>
  )
}

export default Body
