import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faDollarSign } from '@fortawesome/free-solid-svg-icons'


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
            <div className='grid lg:grid-cols-2 grid-cols-1 py-7 px-12'>
                        {
                            jobs.map(job => <div
                            key={job.id}
                            job={job}>
                            
                                    <div className='mb-12'>
                                        <img className='bg-violet-100 rounded-lg p-3 mb-3' src={job.image} alt="" />
                                        <h4 className='font-extrabold text-2xl text-gray-700 mb-2'>{job.title}</h4>
                                        <div className='pt-6 pb-4'>
                                        <button class="outline outline-2 outline-offset-2 outline-blue-500 text-blue-500 py-.5 px-2 round">{job.category1}</button>
                                        <button class="outline outline-2 outline-offset-2 outline-blue-500 text-blue-500 py-.5 px-2 round ml-5">{job.category2}</button>
                                        </div>
                                        <p className='text-gray-500 my-2'><span><FontAwesomeIcon icon={faLocationDot} /> {job.location}</span> <span className='ml-3'><FontAwesomeIcon icon={faDollarSign} /> Salary: {job.salary}</span></p>
                                        <button className='btn'>View Details</button>
                                    </div>
                            </div>)
                        }
                    </div>
        </div>
    );
};

export default Jobs;