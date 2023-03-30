import { useContext } from "react";

import {
  Box,
  ListItem,
  Drawer,
  List,
  Typography,
  ListItemIcon,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import MailIcon from "@mui/icons-material/Mail";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { UIContext } from "@/context/ui";

const menuItems: string[] = ["Inbox", "Starred", "Send Email", "Drafts"];

export const Sidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useContext(UIContext);

  return (
    <Drawer anchor="left" open={isSidebarOpen} onClose={toggleSidebar}>
      <Box sx={{ width: 250 }}>
        <Box sx={{ padding: "5px 10px" }}>
          <Typography variant="h4">Menú</Typography>
        </Box>

        <List>
          {menuItems.map((item, index) => (
            <ListItem key={index} onClick={toggleSidebar} button>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>

        <Divider />

        <List>
          {menuItems.map((item, index) => (
            <ListItem key={index} button>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};
