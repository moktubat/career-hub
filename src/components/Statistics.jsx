import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';


const Statistics = () => {
    const assignmentMarks = [
        {
            id: 1,
            name: "Assignment 1",
            mark: 60
        },
        {
            id: 2,
            name: "Assignment 2",
            mark: 55
        },
        {
            id: 3,
            name: "Assignment 3",
            mark: 60
        },
        {
            id: 4,
            name: "Assignment 4",
            mark: 58
        },
        {
            id: 5,
            name: "Assignment 5",
            mark: 58
        },
        {
            id: 6,
            name: "Assignment 6",
            mark: 60
        },
        {
            id: 7,
            name: "Assignment 7",
            mark: 54
        }
    ]
    return (
        <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={assignmentMarks}>
          <PolarGrid />
          <PolarAngleAxis dataKey="mark" />
          <PolarRadiusAxis />
          <Radar name="Assignment Marks" dataKey="name" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    );
};

export default Statistics;