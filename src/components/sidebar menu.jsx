import * as React from "react";
import { styled, useTheme, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import { useState, createContext, useContext } from "react";

import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import MailIcon from "@mui/icons-material/Mail";
import SearchIcon from "@mui/icons-material/Search";
import Main from "./main";

import p1 from '../assets/p1.mp3';
import p2 from '../assets/p2.mp3';

import BottomAppBar from "./BottomAppBar";
import MusicBox from "./MusicBox";

// import qala from "../assets/qala.mp3";



const drawerWidth = 240;

const openedMixin = (theme) => ({
  overflowX: "hidden",
  border: "none",
  width: 300,
});

const closedMixin = (theme) => ({
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1em)`,
  },
  border: "none",
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  // padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const liststyle = (theme) => ({
  backgroundColor: theme.palette.primary.main,
  margin: 1,
  marginBottom: 0,
  borderRadius: 1,
  padding: "0.8em 1em",
});

const iconstyle = {
  fontSize: 30,
  fill: "#fff",
};

const CoverImage = styled("div")({
  width: 48,
  height: 48,
  objectFit: "cover",
  overflow: "hidden",
  flexShrink: 0,
  borderRadius: 8,
  backgroundColor: "rgba(0,0,0,0.08)",
  "& > img": {
    width: "100%",
  },
});

export const UserContext = createContext();

export default function SidebarMenu() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [music, setMusic] = useState(p1);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const liststyletxt = {
    ":hover": {
      color: "#fff",
    },
    display: open ? "block" : "none",
  };
  const stylelistbutton = (theme) => ({
    minHeight: 48,
    justifyContent: open ? "initial" : "center",
    px: 2.5,
    ":hover": {
      backgroundColor: theme.palette.primary.main,
    },
  });
  return (
    <UserContext.Provider value={{value :[open,setOpen],value2:[music,setMusic]}}>
      <Box sx={{ display: "flex" }}>
        <Drawer variant="permanent" open={open}>
          <List sx={liststyle} style={{ height: "12.5vh"}}>
            <ListItem key={"Home"} disablePadding sx={{ display: "block" }}>
              <ListItemButton color="primary" sx={stylelistbutton}>
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    role="img"
                    height={24}
                    width={24}
                    aria-hidden="true"
                    className="Svg-sc-ytk21e-0 haNxPq home-active-icon"
                    viewBox="0 0 24 24"
                    data-encore-id="icon"
                    style={iconstyle}
                  >
                    <path d="M13.5 1.515a3 3 0 0 0-3 0L3 5.845a2 2 0 0 0-1 1.732V21a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6h4v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7.577a2 2 0 0 0-1-1.732l-7.5-4.33z" />
                  </svg>
                </ListItemIcon>

                <ListItemText primary={"Home"} sx={liststyletxt} />
              </ListItemButton>
            </ListItem>

            <ListItem
              key={"Search"}
              disablePadding
              sx={{
                display: "block",
              }}
            >
              <ListItemButton sx={stylelistbutton}>
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    role="img"
                    height="24"
                    width="24"
                    aria-hidden="true"
                    class="Svg-sc-ytk21e-0 haNxPq search-icon"
                    viewBox="0 0 24 24"
                    data-encore-id="icon"
                    style={iconstyle}
                  >
                    <path d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 1 0 1.414-1.414l-4.344-4.344a9.157 9.157 0 0 0 2.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z"></path>
                  </svg>
                </ListItemIcon>

                <ListItemText primary={"Search"} sx={liststyletxt} />
              </ListItemButton>
            </ListItem>
          </List>

          <List sx={liststyle} style={{ height: "67.2vh", marginBottom: 1 }}>
            <ListItem key={"Search"} disablePadding sx={{ display: "block" }}>
              <ListItemButton sx={stylelistbutton}>
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    role="img"
                    height="24"
                    width="24"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-encore-id="icon"
                    class="Svg-sc-ytk21e-0 haNxPq"
                    onClick={handleDrawerOpen}
                    style={{
                      ...(open && { display: "none" }),
                      fontSize: 30,
                      fill: "#fff",
                    }}
                  >
                    <path d="M14.5 2.134a1 1 0 0 1 1 0l6 3.464a1 1 0 0 1 .5.866V21a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V3a1 1 0 0 1 .5-.866zM16 4.732V20h4V7.041l-4-2.309zM3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zm6 0a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1z"></path>
                  </svg>

                  <svg
                    role="img"
                    height="24"
                    width="24"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-encore-id="icon"
                    class="Svg-sc-ytk21e-0 haNxPq"
                    onClick={handleDrawerClose}
                    style={{
                      ...(!open && { display: "none" }),
                      fontSize: 30,
                      fill: "#fff",
                    }}
                  >
                    <path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path>
                  </svg>
                </ListItemIcon>

                <ListItemText
                  primary={"Search"}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>

            <ListItem key={"Search"} disablePadding sx={{ display: "block" }}>
              <ListItemButton sx={stylelistbutton}>
                <MusicBox  imsize={48} change={true}/>
              </ListItemButton>
            </ListItem>


            <ListItem key={"Search"} disablePadding sx={{ display: "block" }}>
              <ListItemButton sx={stylelistbutton}>
                <MusicBox  imsize={48} change={true}/>
              </ListItemButton>
            </ListItem>


            <ListItem key={"Search"} disablePadding sx={{ display: "block" }}>
              <ListItemButton sx={stylelistbutton}>
                <MusicBox  imsize={48} change={true}/>
              </ListItemButton>
            </ListItem>


            <ListItem key={"Search"} disablePadding sx={{ display: "block" }}>
              <ListItemButton sx={stylelistbutton}>
                <MusicBox  imsize={48} change={true}/>
              </ListItemButton>
            </ListItem>


            <ListItem key={"Search"} disablePadding sx={{ display: "block" }}>
              <ListItemButton sx={stylelistbutton}>
                <MusicBox  imsize={48} change={true}/>
              </ListItemButton>
            </ListItem>


            <ListItem key={"Search"} disablePadding sx={{ display: "block" }}>
              <ListItemButton sx={stylelistbutton}>
                <MusicBox  imsize={48} change={true}/>
              </ListItemButton>
            </ListItem>


            <ListItem key={"Search"} disablePadding sx={{ display: "block" }}>
              <ListItemButton sx={stylelistbutton}>
                <MusicBox  imsize={48} change={true}/>
              </ListItemButton>
            </ListItem>


          </List>
        </Drawer>

        <Main />
      </Box>
      <BottomAppBar />
      </UserContext.Provider>
  );
}
