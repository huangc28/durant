import React, { PropTypes } from 'react'
import './App.css'

const App = props => <div> {props.children} </div>

App.propTypes = {
  children: PropTypes.node,
}

export default App
