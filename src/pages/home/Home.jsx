import React from 'react'
import Profile from "../../assets/home1.jpg"
import {Link} from 'react-router-dom'
import {FaArrowRight} from 'react-icons/fa'
import "./home.css"


const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />


      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Neha Kumavat.</span> Full Stack Web Developer
          </h1>
          <p className="home__description">I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality result. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things. </p>

          <Link to='/about' className='button'>
            More About Me{' '} <span className='button__icon'><FaArrowRight/></span>
          </Link>
        </div>
      </div>
      <div className="color__block"></div>
    </section>
  )
}

export default Home
