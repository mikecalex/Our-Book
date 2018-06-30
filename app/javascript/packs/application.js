console.log("Hello World from Webpacker")

import React from 'react'
import ReactDOM from 'react-dom'

document.addEventListener('DOMContentLoaded', () => {
  let reactElement = document.getElementById('app')

  if (reactElement) {
    ReactDOM.render(
      <h1>Got that bitch</h1>,
      reactElement
    )
  }
})
