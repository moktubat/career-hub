import React, { useEffect, useState } from "react";

const JobDetails = () => {
  const [jobInfo, setJobInfo] = useState([]);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobInfo(data));
  }, []);
  return (
    <div>
      {jobInfo.map((job) => (
        <div key={job.id} job={job}>
          <div className="mb-12">
            <h4 className="mb-2 text-2xl font-extrabold text-gray-700">
              {job.title}
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobDetails;
