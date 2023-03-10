import {Link} from 'react-router-dom'

import './index.css'

const Navbar = () => (
  <nav>
    <img
      src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
      alt=""
      className="nav-images"
    />
    <ul className="nav-links">
      <li>
        <Link className="nav-elements" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="nav-elements" to="/about">
          About
        </Link>
      </li>
    </ul>
    <img
      src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
      alt=""
      className="nav-images"
    />
  </nav>
)

export default Navbar
