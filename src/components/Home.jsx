import React from 'react'
import { Link } from 'react-router-dom'
import coverImage from '../assets/images/hero.png';

const Home = () => {
  return (
    <div className='bg-indigo-100 my-container flex flex-col items-center justify-between lg:flex-row'>
      {/* Text Content */}
      <div className='mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0'>
        <div className='max-w-xl mb-6 lg:mt-8'>
          <div>
          </div>
          <h1 className='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-7xl sm:leading-none'>
          One Step <br className='hidden md:block' /> Closer To Your{' '} <br className='hidden md:block' />
            <span className='inline-block text-blue-400'>Dream Job</span>
          </h1>
          <p className='text-base text-gray-500 md:text-lg'>
          Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
          </p>
        </div>
        <div className='flex flex-col items-center md:flex-row'>
          <Link to='/books' className='btn md:w-auto md:mr-4'>
            <div className='inline-flex items-center justify-center w-full h-full'>
              <p className='mr-3'>Get Started</p>
            
            </div>
          </Link>
        </div>
      </div>
      {/* Lottie Animation */}
      <div className='relative lg:w-1/2 w-1/2'>
        <div className='w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96'>
            <img src={coverImage} alt="" />
        </div>
      </div>
    </div>  
  )
}

export default Home