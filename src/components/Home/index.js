import Navbar from '../Navbar'

import './index.css'

const Home = () => (
  <div className="react-app">
    <div className="dark-light-theme">
      <Navbar />
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
          alt=""
          className="home-image"
        />
        <h1>Home</h1>
      </div>
    </div>
  </div>
)

export default Home
