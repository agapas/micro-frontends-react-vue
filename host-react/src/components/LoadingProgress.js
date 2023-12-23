import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Container from "@mui/material/Container";

const LoadingProgress = () => {
  return (
    <Container sx={{ display: "flex", justifyContent: "center", p: 4 }}>
      <CircularProgress color="inherit" />
    </Container>
  );
};

export default LoadingProgress;
