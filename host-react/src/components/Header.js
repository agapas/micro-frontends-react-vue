import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";

const Header = ({ remoteType, onRemoteChange }) => {
  const onOtherRemoteClick = () => {
    if (onRemoteChange) {
      onRemoteChange();
    }
  };
  return (
    <AppBar
      position="relative"
      elevation={0}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1, textDecoration: "none" }}
          component={RouterLink}
          to="/"
        >
          {remoteType ? `The Remote in ${remoteType}` : "The Remote"}
        </Typography>
        <nav>
          <Link
            variant="button"
            color="inherit"
            href="#"
            sx={{ my: 1, mx: 1.5 }}
            component={RouterLink}
            to={remoteType === "React" ? "other-remote" : "/"}
            onClick={onOtherRemoteClick}
          >
            Other Remote
          </Link>
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
