import React from 'react'
import RestaurantCard from './RestaurantCard'
import Category from '../Category/Category'

const Restaurant = () => {
  return (
    <div className='pt-16 pb-16'>
        <div className='text-xl sm:text-2xl text-center font-extrabold'>
            Available Restaurant near by
        </div>

        <div className='w-[80%] mx-auto grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 mt-14'>
            <div>
                <RestaurantCard
                image="/images/r1.jpg"
                title="Pizza Hut Delicious Pizza"
                />
            </div>
            <div>
                <RestaurantCard
                image="/images/r2.jpg"
                title="Pizza Hut Delicious Pizza"
                />
            </div>
            <div>
                <RestaurantCard
                image="/images/r3.jpg"
                title="Pizza Hut Delicious Pizza"
                />
            </div>
            <div>
                <RestaurantCard
                image="/images/r4.jpg"
                title="Pizza Hut Delicious Pizza"
                />
            </div>
            <div>
                <RestaurantCard
                image="/images/r5.jpg"
                title="Pizza Hut Delicious Pizza"
                />
            </div>
            <div>
                <RestaurantCard
                image="/images/r6.jpg"
                title="Pizza Hut Delicious Pizza"
                />
            </div>

        </div>

        <div className='mt-16 text-center'>
            <button className='px-9 py-2.5 sm:px-12 sm:py-3.5 cursor-pointer rounded-full font-bold text-base sm:text-lg
             bg-cyan-700 text-white dark:text-black hover:bg-cyan-950 transition-all duration-300 dark:bg-cyan-300 dark:hover:bg-cyan-200'>
                Discover More 
            </button>
        </div>

        <div>
            <Category/>
        </div>
    </div>
  )
}

export default Restaurant