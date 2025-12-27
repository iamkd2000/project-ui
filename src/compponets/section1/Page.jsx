import React from 'react'
import Nav from './Nav'
import Page1content from './Page1content'
const Page = (prob) => {
  return (
    <div className='h-screen w-full white-purple-400'>
      <Nav />
      <Page1content users={prob.users} />
    </div>
  )
}

export default Page
