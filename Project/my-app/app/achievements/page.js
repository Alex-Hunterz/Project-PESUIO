"use client";
import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const MessiStats = () => {
  const data = {
    labels: ["Goals", "Assists", "Appearances"],
    datasets: [
      {
        label: "La Liga",
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        data: [474, 216, 520],
      },
      {
        label: "Champions League",
        backgroundColor: "rgba(38, 194, 129, 0.5)",
        borderColor: "rgba(38, 194, 129, 1)",
        borderWidth: 1,
        data: [129, 45, 163],
      },
      {
        label: "Ligue 1",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        data: [22, 31, 58],
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl font-semibold mb-4">Lionel Messi's Stats</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default MessiStats;
