import React from "react";
import { AppBar, Link, Toolbar, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Header = ({ remoteType }) => {
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
          >
            Other Remote
          </Link>
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
