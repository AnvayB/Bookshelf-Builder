import React from 'react'
import { Link } from "react-router-dom"
import './Intro.css'

function Intro() {
  return (
    <div className='intro'>

    <Link to={'/home'}>
    <button>Go to Home</button>
    </Link>
    </div>
  )
}

export default Intro