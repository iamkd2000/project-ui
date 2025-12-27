import React from 'react'

const RightCardcontent = (prob) => {
  return (
    <div>
      <p className='text-lg leading-relaxed text-white mb-14'>{prob.intro}</p>
      <div className='flex justify-between'>
        <button style={{backgroundColor:prob.color}}ty className='bg-blue-600 text-white font-medium px-8 py-2 rounded-full '>{prob.tag}</button>
        <button className='bg-blue-600 text-white font-medium px-3 py-2 rounded-full'><i className="ri-arrow-right-line"></i></button>
      </div>
    </div>
  )
}

export default RightCardcontent
