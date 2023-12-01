import React from 'react';
import {styled} from "styled-components";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';
import { defaults } from 'chart.js';
import 'chart.js/auto';

//기본 Bar 차트
//https://react-chartjs-2.js.org/components/bar

defaults.font.family = "Pretendard-Regular";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: 'top' as const,
    },
    title: {
      display: false,
      text: '이모지를 통한 리뷰 통계',
    }
  },
  scales: {
    // to remove the labels
    x: {
      ticks: {
        font: {
          size: 20 //this change the font size
        },
      },

      // to remove the x-axis grid
      grid: {
        drawBorder: false,
        display: false,
      },
    },
    // to remove the y-axis labels
    y: {
      ticks: {
        display: false,
        beginAtZero: true,
      },
      // to remove the y-axis grid
      grid: {
        drawBorder: false,
        display: false,
      },
    },
  },
};

const labels = ['😄', '😭', '🥹', '🥱', '😡', '😔', '😍'];

export const data = {
  labels,
  datasets: [
    {
      label: '분류 1',
      data: [5, 1, 5, 4, 2, 3, 0],
      backgroundColor: '#FDF6C2',
      borderRadius: 15
    }
  ]
};

export default function BarChart() {
  return (
      <Bar id="myUniqueBarChartId" options={options} data={data} border-radius="15px" />
  );
}