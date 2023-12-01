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
import {Doughnut} from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Main = styled.div`
  width: 50%;
`

export const Data = {
  labels: ["긍정", "중립", "부정"],
  datasets: [
    {
      data: [40, 20, 35],
      backgroundColor: ["#FDF6C2", "#CFF6FF", "#DAF5D3"],
      borderColor: ["#FDF6C2", "#CFF6FF", "#DAF5D3"],
    },
  ],
};

export const Options = {};

export default function AssetDoughnutChart() {
  const chartId = 'myUniqueDoughnutChartId';

  return (
    <Main>
        <Doughnut id={chartId} data={Data} options={Options}></Doughnut>
    </Main>
  );
}