"use client"
import React, { useEffect, useRef } from 'react'
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";


function ChartData() {
  let labels = [];
  const chartRef = useRef();
const data = {
  labels: labels,
  datasets: [
    {
      label: "F3",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [],
    },
  ],
};

const chartOption = {
  scales: {
    y: {
      beginAtZero: true
    }
  }
}
  return (
    <div className='w-[720px] h-[405px]  mt-[20px]'>
      <Line data={data}  ref={chartRef} options={chartOption} updateMode='active'/>
    </div>
  )
}

export default ChartData