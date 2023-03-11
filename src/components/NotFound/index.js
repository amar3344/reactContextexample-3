import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const getDarkTheme = () => (
        <div className="container">
          <Navbar />
          <div className="dark-theme">
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                alt="not found"
                width={100}
              />
              <h1>Lost Your Way?</h1>
              <p style={{color: '#171f46'}}>We cannot seem to find the page</p>
            </div>
          </div>
        </div>
      )

      const getLightTheme = () => (
        <div className="container">
          <Navbar />
          <div className="light-theme">
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                alt="not found"
                width={100}
              />
              <h1 style={{color: '#fff'}}>Lost Your Way?</h1>
              <p style={{color: '#fff'}}>We cannot seem to find the page</p>
            </div>
          </div>
        </div>
      )

      return isDarkTheme ? getLightTheme() : getDarkTheme()
    }}
  </ThemeContext.Consumer>
)

export default NotFound
