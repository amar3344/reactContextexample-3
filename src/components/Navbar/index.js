import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const getToggleButton = () => toggleTheme()

      const getDarkTheme = () => (
        <nav className="dark-theme-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
            alt="website logo"
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
          <button
            type="button"
            className="nav-button"
            onClick={getToggleButton}
            data-testid="theme"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
              alt="theme"
              className="nav-images"
            />
          </button>
        </nav>
      )

      const getLightTheme = () => (
        <nav className="light-theme-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
            alt="website logo"
            className="nav-images"
          />
          <ul className="nav-links">
            <li>
              <Link className="nav-elements" style={{color: '#fff'}} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link
                className="nav-elements"
                style={{color: '#fff'}}
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>
          <button
            type="button"
            className="nav-button"
            onClick={getToggleButton}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
              alt="theme"
              className="nav-images"
            />
          </button>
        </nav>
      )

      return isDarkTheme ? getLightTheme() : getDarkTheme()
    }}
  </ThemeContext.Consumer>
)

export default Navbar
