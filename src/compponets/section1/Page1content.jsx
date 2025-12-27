import React from 'react'
import Left from './Left'
import Rightcontent from './Rightcontent'

const Page1content = (prob) => {
  return (
    <div className='pb-16 pt-6 flex items-center gap-10 h-[90vh]  px-18 '>
      <Left />
      <Rightcontent users={prob.users} />
    </div>
  )
}

export default Page1content
