import React from 'react';
import accounts from '../assets/icons/accounts.png'
import business from '../assets/icons/business.png'
import socialMedia from '../assets/icons/socialMedia.png'
import chip from '../assets/icons/chip.png'

const Category = () => {
    return (
        <div className='py-7 px-7'>
            <div className='py-7'>
                <h1 className='font-bold text-5xl text-center'>Job Category List</h1>
                <p  className='text-center py-3 text-gray-500'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className='grid lg:grid-cols-4 grid-cols-1 py-7 px-7'>
                <div className='mb-7'>
                    <img className='bg-violet-100 rounded-lg p-3 mb-3' src={accounts} alt="" />
                    <h4 className='font-extrabold text-xl text-gray-700 mb-2'>Account & Finance</h4>
                    <p className='font-medium text-base text-gray-500'>300 Jobs Available</p>
                </div>
                <div className='mb-7'>
                    <img className='bg-violet-100 rounded-lg p-3 mb-3' src={business} alt="" />
                    <h4 className='font-extrabold text-xl text-gray-700 mb-2'>Creative Design</h4>
                    <p className='font-medium text-base text-gray-500'>100+ Jobs Available</p>
                </div>
                <div className='mb-7'>
                    <img className='bg-violet-100 rounded-lg p-3 mb-3' src={socialMedia} alt="" />
                    <h4 className='font-extrabold text-xl text-gray-700 mb-2'>Marketing & Sales</h4>
                    <p className='font-medium text-base text-gray-500'>150 Jobs Available</p>
                </div>
                <div>
                    <img className='bg-violet-100 rounded-lg p-3 mb-3' src={chip} alt="" />
                    <h4 className='font-extrabold text-xl text-gray-700 mb-2'>Engineering Job</h4>
                    <p className='font-medium text-base text-gray-500'>224 Jobs Available</p>
                </div>
            </div>
        </div>
    );
};

export default Category;