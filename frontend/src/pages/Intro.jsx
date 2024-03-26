import React from 'react'
import { Link } from "react-router-dom"
import './Intro.css'

function Intro() {
  return (
    <div className='intro'>

    <Link to={'/home'}>
    <button><p>View Books</p></button>
    </Link>
    </div>
  )
}

export default Intro