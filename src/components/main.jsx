import * as React from "react";
import { styled, useTheme, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import MuiAppBar from "@mui/material/AppBar";
import { Avatar, Box, Typography } from "@mui/material";
import MCard from "./Mcard";
import p1 from '../assets/p1.mp3';
import p2 from '../assets/p2.mp3';
import dowload from '../assets/download.jpeg'
import per from '../assets/per.png'

import { useEffect, useState } from "react";
import { UserContext } from "./sidebar menu";
import { createContext, useContext } from "react";


const drawerWidth = 240;

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
    },
  },
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: "#000",
  backgroundImage: "none",
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    backgroundColor: "#000",
    backgroundImage: "none",
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const liststyle = (theme) => ({
  backgroundColor: theme.palette.primary.main,
  margin: 1,
  marginLeft: 0,
  padding: 0,
  "&": {
    padding: 0,
  },
  borderRadius: 1,
  height: "87.4vh",
  width: "100%",
  padding: "0.8em 1em",
  overFlow :'hidden'
});

const grad = (theme) => ({
  backgroundImage: `linear-gradient(180deg, rgba(80,56,160,0.5) 0%, rgba(18,18,18,1) 100%)`,
  // backgroundColor: 'rgba(80,56,160,0.1)',
  height: 334,
});

export default function Main() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const stylelistbutton = {
    minHeight: 48,
    justifyContent: open ? "initial" : "center",
    px: 2.5,
    ":hover": {
      backgroundColor: "#121212",
    },
  };

  const {value,value2} = useContext(UserContext);
  const [stateValue2, setStateValue2] = value2;

  const func1 =() => {setStateValue2(p1)};
  const func2 =() => {setStateValue2(p2)};

  return (
    <Box sx={liststyle}>
      <Box sx={grad}>
        <Box sx={{ padding: "2em"}}>
          <Typography
            sx={{ color: "#fff", fontWeight: "900" ,padding:'0.5em  0.5em' }}
            variant="h4"
            component="h2"
          >
            Good evening
          </Typography>
          <Box sx={{ display: "flex" ,flexWrap:'wrap'}}>
            <MCard im={dowload} func={func1} />
            <MCard im={per} func={func2} />


          </Box>
        </Box>
      </Box>
    </Box>
  );
}
