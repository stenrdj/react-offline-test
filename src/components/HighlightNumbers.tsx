import { Box, Typography } from "@mui/material";
import * as React from "react";
import { GenerationMixType } from "../types/GraphTile.type";
import { SwitchLeft } from "@mui/icons-material";

const ArrowIcon = (props) => {
  const { value } = props;
  if (value > 0)
    return <SwitchLeft sx={{ color: "green", transform: "rotate(-90deg)" }} />;
  return <SwitchLeft sx={{ color: "red", transform: "rotate(90deg)" }} />;
};
const HighlightNumbers = (props: GenerationMixType) => {
  const { fuel, perc } = props;
  return (
    <>
      <Box
        sx={{
          border: "1px solid #ccc",
          padding: "1em",
          borderRadius: "2px",
          width: "calc(39.7%)",
          marginLeft: "24px",
          marginBottom: "24px",
          textAlign: "center",
        }}
      >
        <Typography variant="h6">{fuel.toUpperCase()}</Typography>
        <Typography display={"flex"} justifyContent={"center"}>
          <ArrowIcon value={perc} /> {perc.toString()}%
        </Typography>
      </Box>
    </>
  );
};
export default HighlightNumbers;
