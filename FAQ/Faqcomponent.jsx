import { useState } from "react"
import React from 'react'

const Faqcomponent = ({id,Title,Desc}) => {
    const [toggle,setToggle]=useState(false);
  return (
    <article>
        <div>
            <h1>{Title}</h1>
            <button onClick={()=>{setToggle(!toggle)}}>
                {toggle ? '-': '+'}
            </button>
        </div>
       {toggle &&  <p>{Desc}</p>}
    </article>
  )
}

export default Faqcomponent