import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { unstable_ClassNameGenerator as ClassNameGenerator } from "@mui/material/utils";
// import { blueGrey } from "@mui/material/colors";
import Landing from "./components/Landing";

ClassNameGenerator.configure((componentName) => `rr-${componentName}`);

const defaultTheme = createTheme();
/*
  // Or use the same default theme like in the Host app
  const defaultTheme = createTheme({
    palette: {
      primary: {
        main: "#455a64",
      },
      background: {
        paper: blueGrey[50],
      },
    },
  });
*/

const App = ({ theme }) => {
  return (
    <ThemeProvider theme={theme || defaultTheme}>
      <CssBaseline />
      <Landing />
    </ThemeProvider>
  );
};

export default App;
