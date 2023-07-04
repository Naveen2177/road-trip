import React from 'react'
import {tours}  from '../data/data'
import Tour from './tours'
import '../styles/tours.css'


const Tours = () => {
  return (
    <div className='mt-5'>
        <div className='text-center'>
          <h1>FEATURED <span className='text-primary'>TOURS</span></h1>
        </div>
        <div className='tour mt-5 '>
            {
                tours.map((tour)=>{
                    return<Tour key={tour.id} {...tour} />
                })
            }
        </div>
    </div>
  )
}

export default Tours