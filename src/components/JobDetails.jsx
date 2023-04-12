import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import bannerImg from '../assets/images/Vector-2.png'

const JobDetails = () => {
    const jobData = useLoaderData()
    console.log(jobData);
  return (
    <div>
        <div className="relative mt-12">
        <h1 className="text-center text-5xl font-bold">Job Details</h1>
        <div>
        <img className="absolute inset-y-0 left-0" src={bannerImg} alt="" />
        </div> 
        </div>   
    </div>
  );
};

export default JobDetails;
