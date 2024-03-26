import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { LineGraphProps } from "../types/LineGraph";
import {
  getDatasetFromData,
  getLabelsFromData,
} from "../utils/generateDatasets";
import { Box } from "@mui/material";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const LineGraph = (props: LineGraphProps) => {
  const labels = getLabelsFromData(props.data);
  const datasets = getDatasetFromData(props.data);
  return (
    <Box sx={{ marginTop: "3em" }}>
      <Line data={{ labels, datasets }} />
    </Box>
  );
};
