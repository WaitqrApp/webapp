import React from "react";
import { Bar } from "react-chartjs-2";
import "./styles/home.css";

function VerticalBar({ days }) {
  days = [
    "2021-02-07",
    "2021-02-07",
    "2021-01-01",
    "2020-01-01",
    "2021-01-07",
    "2021-01-18",
    "2020-03-01",
    "2020-01-01",
    "2020-01-01",
    "2020-01-01",
  ];

  var distinct_days = [],
    day_counts = [],
    prev;

  days.sort();
  for (var i = 0; i < days.length; i++) {
    if (days[i] !== prev) {
      distinct_days.push(days[i]);
      day_counts.push(1);
    } else {
      day_counts[day_counts.length - 1]++;
    }
    prev = days[i];
  }

  const data = {
    labels: distinct_days,
    datasets: [
      {
        label: "",
        data: day_counts,
        backgroundColor: [
          "rgba(239, 182, 61, 1)",
          "rgba(64, 99, 118, 1)",
          "rgba(246, 135, 32, 1)",
        ],
        borderColor: [
          "rgba(239, 182, 61, 1)",
          "rgba(64, 99, 118, 1)",
          "rgba(246, 135, 32, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
     plugins: {
      title: {
        display: true,
        text: 'Órdenes'
    },
    legend: {
      display: false
    }
  },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            stepSize: 1,
            precision: 0,
          },
        },
      ],
    },
  };
  return (
    <>
      <Bar className="ordenes-chart" data={data} options={options} />
    </>
  );
}

export default VerticalBar;