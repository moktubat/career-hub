import React, { useEffect, useState } from 'react';

const Category = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div className='py-7 px-7'>
            <div className='py-7'>
                <h1 className='font-bold text-5xl text-center'>Job Category List</h1>
                <p  className='text-center py-3 text-gray-500'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
                    <div className='grid lg:grid-cols-4 grid-cols-1 py-7 px-7'>
                    {
                        categories.map(category => <div
                        key={category.category_id}
                        category={category}>
                           
                                <div className='mb-7'>
                                    <img className='bg-violet-100 rounded-lg p-3 mb-3' src={category.img} alt="" />
                                    <h4 className='font-extrabold text-xl text-gray-700 mb-2'>{category.category_name}</h4>
                                    <p className='font-medium text-base text-gray-500'>{category.vacancy}</p>
                                </div>
                        </div>)
                    }
                    </div>
        </div>
    );
};

export default Category;