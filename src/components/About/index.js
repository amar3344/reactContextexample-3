import Navbar from '../Navbar'

import './index.css'

const About = () => (
  <div className="react-app">
    <div className="dark-light-theme">
      <Navbar />
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
          alt=""
          className="home-image"
        />
        <h1>About</h1>
      </div>
    </div>
  </div>
)

export default About
