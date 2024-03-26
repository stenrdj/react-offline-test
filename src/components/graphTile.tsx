import { Box, Typography } from "@mui/material";
import * as React from "react";
import { GraphTileProps } from "../types/GraphTile.type";
import { DateRange } from "./DateRange";
import { LineGraph } from "./LineGraph";
const GraphTile = ({ data }: GraphTileProps) => {
  return (
    <>
      <Box
        sx={{
          border: "1px solid #ccc",
          padding: "1em",
          borderRadius: "2px",
          width: "calc(50% - 24px)",
          display: "inline-block",
          marginBottom: "24px",
        }}
      >
        <Typography variant="h6" sx={{ marginBottom: "1em" }}>
          Energy overview for dates below :
        </Typography>
        <DateRange onChange={(e) => e} />

        {data && <LineGraph data={data} />}
        {!data && <p>Loading...</p>}
      </Box>
    </>
  );
};
export default GraphTile;
