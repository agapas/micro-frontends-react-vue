import React, { useState, lazy, Suspense } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Outlet,
  useLocation,
} from "react-router-dom";
import { blueGrey } from "@mui/material/colors";
import CssBaseline from "@mui/material/CssBaseline";
import { unstable_ClassNameGenerator as ClassNameGenerator } from "@mui/material/className";
import {
  createTheme,
  ThemeProvider,
  StyledEngineProvider,
} from "@mui/material/styles";

import LoadingProgress from "./components/LoadingProgress";
import RemoteReactApp from "./components/RemoteReactApp";
import RemoteVueApp from "./components/RemoteVueApp";

const HeaderLazy = lazy(() => import("./components/Header"));

// to avoid styles collision
ClassNameGenerator.configure((componentName) => `ho-${componentName}`);

const theme = createTheme({
  palette: {
    primary: {
      main: blueGrey[700],
    },
    background: {
      paper: blueGrey[50],
      fallback: blueGrey[300],
    },
  },
});

const remoteTypeObject = {
  "/": "React",
  "/other-remote": "Vue",
};

const Layout = () => {
  const location = useLocation();

  return (
    <>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Suspense fallback={<LoadingProgress />}>
            <HeaderLazy remoteType={remoteTypeObject[location.pathname]} />
          </Suspense>
        </ThemeProvider>
      </StyledEngineProvider>
      <Outlet context={{ theme }} />
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
