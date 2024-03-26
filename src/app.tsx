import React, { useEffect, useState } from "react";
import BaseLayout from "./layout/base";
import GraphTile from "./components/graphTile";
import { getEnergyGeneration } from "./utils/getDataFromApi";
import HighlightNumbers from "./components/HighlightNumbers";
import { Box } from "@mui/material";
import { GraphTileDataType } from "./types/GraphTile.type";

const App = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchApi = async () => {
      const apiData = await getEnergyGeneration();
      setData(apiData);
    };
    fetchApi();
  }, []);
  return (
    <BaseLayout>
      <Box display={"flex"}>
        <GraphTile data={data} />
        <Box display={"flex"} width={"50%"} flexWrap={"wrap"}>
          {(data as GraphTileDataType)?.generationmix?.map(({ fuel, perc }) => (
            <HighlightNumbers fuel={fuel} perc={perc} key={fuel} />
          ))}
        </Box>
      </Box>
    </BaseLayout>
  );
};

export default App;
