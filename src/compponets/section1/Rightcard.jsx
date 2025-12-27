import React from 'react'
import RightCardcontent from './RightCardcontent'
const Rightcard = (prob) => {
    return (
        <div className=' shrink-0 relative overflow-hidden h-full w-80 rounded-4xl'>
            <img className='h-full w-full object-cover' src={prob.img} />
            <div className='text-shadow-2xs absolute top-0 left-0 h-full w-full  p-8 flex flex-col justify-between'>
                <h2 className='text-xl font-semibold bg-white rounded-full h-12 w-12 flex justify-center items-center'>{prob.id+1}</h2>
              <RightCardcontent tag={prob.tag} intro={prob.intro} color={prob.color}  />
            </div>
        </div>

    ) 
}

export default Rightcard
