import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import {
  createTheme,
  ThemeProvider,
  StyledEngineProvider,
} from "@mui/material/styles";
import { blueGrey } from "@mui/material/colors";

import Header from "./components/Header";
import RemoteReactApp from "./components/RemoteReactApp";
import RemoteVueApp from "./components/RemoteVueApp";

const theme = createTheme({
  palette: {
    primary: {
      main: "#455a64",
    },
    background: {
      paper: blueGrey[50],
    },
  },
});

const App = () => {
  return (
    <div>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          <RemoteReactApp theme={theme} />
        </ThemeProvider>
        <RemoteVueApp />
      </StyledEngineProvider>
    </div>
  );
};

export default App;
