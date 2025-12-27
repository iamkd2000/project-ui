import React from 'react'
import Page1 from './compponets/section1/Page'
import Section2 from './compponets/section2/Section2'
const App = () => {
  const users = [
    {
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui obcaecati ad sint voluptatem dicta aspernatur?',
      tag: 'Satisfied',
      color: '#add8e6'
    },
    {
      img: 'https://images.unsplash.com/photo-1507206130118-b5907f817163?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui obcaecati ad sint voluptatem dicta aspernatur?',
      tag: 'Underserved',
      color: '#ffd8a8'

    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1731355865761-69e8d539e328?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui obcaecati ad sint voluptatem dicta aspernatur?',
      tag: 'Underbanked',
      color: '#e6d9ff'

    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1731355865761-69e8d539e328?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tag: 'Underbanked',
      title: 'Bridging the Financial Gap', // Added a title for better UI structure
      intro: 'Exploring how mobile-first fintech solutions are providing essential credit and savings tools to communities traditionally overlooked by legacy banking systems.'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1731355865761-69e8d539e328?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tag: 'Underbanked',
      title: 'Bridging the Financial Gap', // Added a title for better UI structure
      intro: 'Exploring how mobile-first fintech solutions are providing essential credit and savings tools to communities traditionally overlooked by legacy banking systems.'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1731355865761-69e8d539e328?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tag: 'Underbanked',
      title: 'Bridging the Financial Gap', // Added a title for better UI structure
      intro: 'Exploring how mobile-first fintech solutions are providing essential credit and savings tools to communities traditionally overlooked by legacy banking systems.'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1731355865761-69e8d539e328?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tag: 'Underbanked',
      title: 'Bridging the Financial Gap', // Added a title for better UI structure
      intro: 'Exploring how mobile-first fintech solutions are providing essential credit and savings tools to communities traditionally overlooked by legacy banking systems.'
    }

  ]
  return (
    <div >
      <Page1 users={users} />
      <Section2 />

    </div>
  )
}

export default App
