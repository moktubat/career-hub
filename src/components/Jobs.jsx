import React, { useEffect, useState } from 'react';

const Jobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])
    return (
        <div className='py-7 px-7'>
            <div className='py-7'>
                <h1 className='font-bold text-5xl text-center'>Featured Jobs</h1>
                <p  className='text-center py-3 text-gray-500'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid lg:grid-cols-2 grid-cols-1 py-7 px-7'>
                        {
                            jobs.map(job => <div
                            key={job.id}
                            job={job}>
                            
                                    <div className='mb-7'>
                                        <img className='bg-violet-100 rounded-lg p-3 mb-3' src={job.image} alt="" />
                                        <h4 className='font-extrabold text-2xl text-gray-700 mb-2'>{job.title}</h4>
                                        <div className='pt-6 pb-4'>
                                        <button class="outline outline-2 outline-offset-2 outline-blue-500 text-blue-500 py-.5 px-2 rounded-md">{job.category1}</button>
                                        <button class="outline outline-2 outline-offset-2 outline-blue-500 text-blue-500 py-.5 px-2 rounded-md ml-5">{job.category2}</button>
                                        </div>
                                        <p className='text-gray-500'>{job.location} Salary: {job.salary}</p>
                                    </div>
                            </div>)
                        }
                    </div>
        </div>
    );
};

export default Jobs;