import React from 'react'
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  YAxis,
  Legend,
  BarChart,
  Bar
} from 'recharts'


const Chart2 = ({ title, data, dataKey, grid }) => {
  return (
    
        

    <div>
        <h3 className="chartTitle">Sales Analysis</h3>
      <ResponsiveContainer width="100%" aspect={2}>
        <BarChart width={730} height={250} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
    
  )
}
export default Chart2
