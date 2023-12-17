import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const Header = ({ remoteType = "React" }) => {
  return (
    <AppBar
      position="relative"
      elevation={0}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          {`The Remote in ${remoteType}`}
        </Typography>
        <nav>
          <Link
            variant="button"
            color="inherit"
            href="#"
            sx={{ my: 1, mx: 1.5 }}
          >
            Other Remote
          </Link>
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
