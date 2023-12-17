import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
  const [remoteType, setRemoteType] = useState("React");
  return (
    <div>
      <StyledEngineProvider injectFirst>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header
              remoteType={remoteType}
              onRemoteChange={() =>
                setRemoteType(remoteType === "React" ? "Vue" : "React")
              }
            />
            <Routes>
              <Route path="other-remote" element={<RemoteVueApp />} />
              <Route index element={<RemoteReactApp theme={theme} />} />
            </Routes>
          </ThemeProvider>
        </BrowserRouter>
      </StyledEngineProvider>
    </div>
  );
};

export default App;
