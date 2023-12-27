import React, { lazy, Suspense } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { unstable_ClassNameGenerator as ClassNameGenerator } from "@mui/material/className";
// import { blueGrey } from "@mui/material/colors";

import LoadingProgress from "./components/LoadingProgress";

const LandingLazy = lazy(() => import("./components/Landing"));

ClassNameGenerator.configure((componentName) => `rr-${componentName}`);

const defaultTheme = createTheme();
/*
  // Or use the same default theme like in the Host app
  const defaultTheme = createTheme({
    palette: {
      primary: {
        main:  blueGrey[700],
      },
      background: {
        paper: blueGrey[50],
        fallback: blueGrey[300],
      },
    },
  });
*/

const App = ({ theme }) => {
  return (
    <ThemeProvider theme={theme || defaultTheme}>
      <CssBaseline />
      <Suspense fallback={<LoadingProgress />}>
        <LandingLazy />
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
