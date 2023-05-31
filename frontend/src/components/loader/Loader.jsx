import React from 'react'
import "./loader.css"
const Loader = () => {
  return (
    <div className="loadingPage">
    <div className="ring"></div>
    <div className="ring"></div>
    <div className="ring"></div>
    <span className="loading">Loading...</span>
  </div>
  )
}

export default Loader