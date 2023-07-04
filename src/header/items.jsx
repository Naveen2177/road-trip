import React from 'react'
import { pageLinks } from "../data/data";

const Items = () => {
  return (
    <div className='d-flex grid gap-3 mt-3 fw-bold fs-5 justify-content-center'>
        {
        pageLinks.map((item) => {
          return (
            <div key={item.id}>
              <ul className="list-unstyled ">
                <li>
                  <a href='/' className='text-decoration-none text-black'>
                  {item.text}
                  </a>
                </li>
              </ul>
            </div>
          );
        })
      }
    </div>
  )
}

export default Items