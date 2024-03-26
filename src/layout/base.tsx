import { Box, Button, Container, Typography } from "@mui/material";
import * as React from "react";
import { BaseLayoutProps } from "../types/BaseLayout.type";
import "./style.css";
const BaseLayout = (props: BaseLayoutProps) => {
  return (
    <>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            padding: "1em",
            border: "1px solid #ccc",
            borderRadius: "2px",
          }}
        >
          <Typography>UK Energy Mix</Typography>
          <Button variant="outlined">Update</Button>
        </Box>
      </Container>
      <Container sx={{ paddingTop: "2em" }}>{props.children}</Container>
    </>
  );
};
export default BaseLayout;
