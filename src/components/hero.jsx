import React from 'react'
import Banner from '../images/Kerala-Road-Trip.png'
import '../styles/hero.css'

const Hero = () => {
  return (
    <div className='mt-3'>
        <img src={Banner} alt='' style={{width:'100%',height:'600px'}}/>
        <nav className='txt'>
          <h1 className='fw-bolder'>BACKROADS APP</h1>
          <p>Lorem ipsum dolor sit consectetur adipisicing elit. vitae<br/>
            explicable debits est autem dicta.
          </p>
          <button className='py-2 px-3 fw-bold text-primary' style={{border:'1px solid white'}}>EXPLORE TOURES</button>
        </nav>
    </div>
  )
}

export default Hero
