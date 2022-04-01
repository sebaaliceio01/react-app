import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const styles = {
  headerText: {
    textAlign: "center",
  },
};

function Header() {
  let navigate = useNavigate()

  return (
    <div className="container">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          ¡Bienvenido!
          </Typography>
        <Button variant="primary" onClick={() => navigate("/about-me")}>About Me</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
