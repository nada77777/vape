import { Radar } from "react-chartjs-2";
import { Chart, RadialLinearScale, PointElement, LineElement, Filler } from "chart.js";
import { useDarkModeContext } from "@/context/Dark__mode__context";

import { extractFlavorData } from "@/api/radarData/extractRadarData";

import S from "./Radar__chart.module.scss";

import { array } from "prop-types";

Chart.register(RadialLinearScale, PointElement, LineElement, Filler);

const RadarChart = ({ item }) => {
  const { darkMode } = useDarkModeContext();

  const { flavors, levels } = extractFlavorData(item);

  const data = {
    labels: flavors,
    datasets: [
      {
        data: levels,
        backgroundColor: "rgba(142, 202, 206, 0.4)",
        borderColor: "rgba(142, 202, 206, 1)",
        pointBackgroundColor: "rgba(142, 202, 206, 1)",
        borderWidth: 1,
        pointRadius: 3,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        ticks: {
          beginAtZero: true,
          min: 0,
          max: 10,
          stepSize: 1,
          display: false,
        },
        angleLines: {
          display: true,
          color: darkMode ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.1)",
        },
        grid: {
          display: true,
          color: darkMode ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.1)",
        },
        pointLabels: {
          fontSize: 14,
          color: darkMode ? "rgba(255, 255, 255, 0.5)" : "#607D8B",
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className={S.radar__container}>
      <Radar data={data} options={options} />
    </div>
  );
};

export default RadarChart;

RadarChart.propTypes = {
  item: array.isRequired,
};
