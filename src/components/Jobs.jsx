import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div className="px-7 py-7">
      <div className="py-7">
        <h1 className="text-center text-5xl font-bold">Featured Jobs</h1>
        <p className="py-3 text-center text-gray-500">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-1 px-12 py-7 lg:grid-cols-2">
        {jobs.map((job) => (
          <div key={job.id} job={job}>
            <div className="mb-12">
              <img
                className="mb-3 rounded-lg bg-violet-100 p-3"
                src={job.image}
                alt=""
              />
              <h4 className="mb-2 text-2xl font-extrabold text-gray-700">
                {job.title}
              </h4>
              <div className="pb-4 pt-6">
                <button class="py-.5 round px-2 text-blue-500 outline outline-2 outline-offset-2 outline-blue-500">
                  {job.category1}
                </button>
                <button class="py-.5 round ml-5 px-2 text-blue-500 outline outline-2 outline-offset-2 outline-blue-500">
                  {job.category2}
                </button>
              </div>
              <p className="my-2 text-gray-500">
                <span>
                  <FontAwesomeIcon icon={faLocationDot} /> {job.location}
                </span>{" "}
                <span className="ml-3">
                  <FontAwesomeIcon icon={faDollarSign} /> Salary: {job.salary}
                </span>
              </p>
              <Link to={`jobs/${job.id}`} className="btn">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
