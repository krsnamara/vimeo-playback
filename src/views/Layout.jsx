import { Outlet, NavLink } from 'react-router-dom'
import './Layout.css'

export function Layout() {
  return (
    <>
      <div className="Layout">
        <nav className="Nav">
          <NavLink to="/" className="Nav-Link">
            Home
          </NavLink>
          <NavLink to="/uwave" className="Nav-Link">
            UWave Player
          </NavLink>
          <NavLink to="/vimeoAPI" className="Nav-Link">
            VimeoAPI Player
          </NavLink>
        </nav>
        <header className="Layout-header">
          <h1>Smart shopping list</h1>
        </header>
        <main className="Layout-main">
          <Outlet />
        </main>
      </div>
    </>
  )
}
