import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const getDarkTheme = () => (
        <div className="container">
          <Navbar />
          <div className="dark-theme">
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                alt="about"
                className="home-image"
              />
              <h1>About</h1>
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
                src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                alt="about"
                className="home-image"
              />
              <h1 style={{color: '#fff'}}>About</h1>
            </div>
          </div>
        </div>
      )

      return isDarkTheme ? getLightTheme() : getDarkTheme()
    }}
  </ThemeContext.Consumer>
)

export default About
