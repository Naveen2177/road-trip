import React from 'react'
import Img from '../images/cityscape-mountains-potala-palace-lhasa-tibet_980x650.jpg'
import '../styles/about.css'

const About = () => {
  return (
    <div className='row mt-5 text'>
        <h1 className='text-center'>About <span className='text-primary'>Us</span></h1>
        <div className='col-6 mt-4'>
            <img src={Img} alt='pic'/>
        </div>
        <nav className='col-6 mt-5'>
                <h2>Explore The Difference</h2>
                <p>
                    Lorem Ipsum, dolor sit amet connsectetur sdipisicing elit.
                    Aspernature qusiquam harum nam cumque explicabo dolorum 
                    sapiente odio unde dolor?
                </p>
                <p>
                    Lorem Ipsum, dolor sit amet connsectetur sdipisicing elit.
                    Aspernature qusiquam harum nam cumque explicabo dolorum 
                    sapiente odio unde dolor?
                </p>
                <button>READ MORE</button>
        </nav>
    </div>
  )
}

export default About