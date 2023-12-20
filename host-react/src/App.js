import React, { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Outlet,
  useLocation,
} from "react-router-dom";
import { blueGrey } from "@mui/material/colors";
import CssBaseline from "@mui/material/CssBaseline";
import {
  createTheme,
  ThemeProvider,
  StyledEngineProvider,
} from "@mui/material/styles";
import { unstable_ClassNameGenerator as ClassNameGenerator } from "@mui/material/className";

import Header from "./components/Header";
import RemoteReactApp from "./components/RemoteReactApp";
import RemoteVueApp from "./components/RemoteVueApp";

// to avoid styles collision
ClassNameGenerator.configure((componentName) => `ho-${componentName}`);

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

const Layout = () => {
  const location = useLocation();
  const defaultRemote =
    location.pathname.indexOf("other-remote") > -1 ? "Vue" : "React";

  const [remoteType, setRemoteType] = useState(defaultRemote);

  const onRemoteChange = () => {
    setRemoteType(remoteType === "React" ? "Vue" : "React");
  };

  return (
    <>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header remoteType={remoteType} onRemoteChange={onRemoteChange} />
        </ThemeProvider>
      </StyledEngineProvider>
      <Outlet context={{ theme, remote: [remoteType, setRemoteType] }} />
    </>
  );
};

const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      { path: "/", Component: RemoteReactApp },
      { path: "other-remote", Component: RemoteVueApp },
      { path: "*", Component: Root },
    ],
  },
]);

const HostApp = () => <RouterProvider router={router} />;
const Root = () => <Routes />;

export default HostApp;
