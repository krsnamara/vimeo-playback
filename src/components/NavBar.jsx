import React from 'react'
import { NavLink } from 'react-router-dom'

export function NavBar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/uwave">UWave Player</NavLink>
      <NavLink to="/vimeoAPI">VimeoAPI Player</NavLink>
    </nav>
  )
}
