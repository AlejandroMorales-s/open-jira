import { useContext } from "react";

import { Typography, AppBar, Toolbar, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { UIContext } from "@/context/ui";

export const Navbar = () => {
  const { toggleSidebar } = useContext(UIContext);

  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton onClick={toggleSidebar} size="large" edge="start">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">OpenJira</Typography>
      </Toolbar>
    </AppBar>
  );
};
