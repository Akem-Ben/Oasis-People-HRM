import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function DashboardChart() {

const labels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const data1 = [12, 19, 3, 5, 2, ]
const data2 = [10, 17, 2, 4, 1,]

const chartData = {
  labels: labels,
  datasets: [
    {
      label: "On Time",
      data: data1,
      backgroundColor: "rgba(60, 179, 113, 0.7)",
    },
    {
      label: "Late",
      data: data2,
      backgroundColor: "rgba(255, 0, 0)",
    },
  ],
};

const chartOptions = {
  responsive: true,
  scales: {
    x: {
      stacked: true,
      title: {
        display: true,
        text: "Days",
      },
    },
    y: {
      stacked: true,
      title: {
        display: true,
        text: "No of Employees",
      },
      min: 0,
      max: 60,
    },
  },
};


  return (
    <div className="bg-white border rounded-xl p-4 w-full lg:w-[80%]">
      <h2 className="font-lexend text-xl mb-4">Daily Attendance Data</h2>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
}

export default DashboardChart;
