import React from 'react'
import './Color.scss'

const Colors = (): JSX.Element => {
  return (
    <div className="Color">
      <div className="color black">black</div>
      <div className="color charcoal">charcoal</div>
      <div className="color anchor">anchor</div>
      <div className="color smoke">smoke</div>
      <div className="color white">white</div>
    </div>
  )
}

export default Colors
