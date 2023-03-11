import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const getDarkTheme = () => (
        <div className="container">
          <Navbar />
          <div className="dark-theme">
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
                alt="home"
                className="home-image"
              />
              <h1>Home</h1>
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
                src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
                alt="home"
                className="home-image"
              />
              <h1 style={{color: '#fff'}}>Home</h1>
            </div>
          </div>
        </div>
      )

      return isDarkTheme ? getLightTheme() : getDarkTheme()
    }}
  </ThemeContext.Consumer>
)

export default Home
