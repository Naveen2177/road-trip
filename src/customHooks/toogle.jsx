import React, { useState } from 'react'
import useToggle from './useToggle'

const Toggle = () => {

    const {show, toggle} = useToggle(true)

    // const [show,setShow] = useState(false)

    // const handleToggle = () => {
    //     setShow(!show)
    // }
        
    
  return (
    <div>
        <button onClick={toggle}>Toggle</button>
        {show &&<h4>hii</h4>}
    </div>
  )
}

export default Toggle