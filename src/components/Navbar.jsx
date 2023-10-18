import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
        <h1>
            <span>Emmy.</span>
            <span>dev</span>
        </h1>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/service">Service</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
    </nav>
  )
}
