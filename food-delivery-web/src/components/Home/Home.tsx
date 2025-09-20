import React from 'react'
import Hero from './Hero/Hero'
import Restaurant from './Restaurant/Restaurant'

const Home = () => {
  return (
    <div className='hidden-overflow'>
        <Hero/>
        <Restaurant/>
    </div>
  )
}

export default Home