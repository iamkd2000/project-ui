import React from 'react'
import 'remixicon/fonts/remixicon.css'
import Rightcard from './Rightcard'

const Rightcontent = (prob) => {
  return (
    <div id='right' className='h-full flex rounded-4xl overflow-x-auto flex-nowrap gap-10 w-2/3 p-6 '>

      {prob.users.map(function (elem, idx) {
        return <Rightcard key={idx} id={idx} color={elem.color} img={elem.img} intro={elem.intro} tag={elem.tag} />
      })}
    </div>
  )
}

export default Rightcontent
