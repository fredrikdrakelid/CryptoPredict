import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Chart = ({ data }) => (
  <LineChart width={600} height={300} data={data}>
    <XAxis dataKey="date" />
    <YAxis />
    <CartesianGrid strokeDasharray="3 3" />
    <Tooltip />
    <Legend />
    <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{ r: 8 }} />
  </LineChart>
);

export default Chart;