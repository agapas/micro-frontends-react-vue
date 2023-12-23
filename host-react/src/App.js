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
import {
  createTheme,
  ThemeProvider,
  StyledEngineProvider,
} from "@mui/material/styles";
import { unstable_ClassNameGenerator as ClassNameGenerator } from "@mui/material/className";

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
          <Suspense fallback={<LoadingProgress />}>
            <HeaderLazy
              remoteType={remoteType}
              onRemoteChange={onRemoteChange}
            />
          </Suspense>
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
