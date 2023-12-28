import React from "react";
import { useOutletContext } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const NotFound = () => {
  const { theme } = useOutletContext();
  return (
    <Box
      sx={{
        height: "100%",
        p: 5,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        bgcolor: theme.palette.background.paper,
      }}
    >
      <Typography variant="h1" color="error" gutterBottom>
        404
      </Typography>
      <Typography variant="h5" color="text.secondary" paragraph>
        The page does not exist
      </Typography>
      <Button
        variant="contained"
        sx={{
          bgcolor: theme.palette.primary.main,
          ":hover": { bgcolor: theme.palette.primary.dark },
        }}
        component={RouterLink}
      >
        Back Home
      </Button>
    </Box>
  );
};

export default NotFound;
