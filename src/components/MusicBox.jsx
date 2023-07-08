import * as React from "react";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import im from "../assets/per.png";
import Typography from "@mui/material/Typography";
import { useState, createContext, useContext } from "react";
import { UserContext } from "./sidebar menu";

export default function MusicBox(props) {
  const CoverImage = styled("div")({
    width: props.imsize,
    height: props.imsize,
    objectFit: "cover",
    overflow: "hidden",
    flexShrink: 0,
    borderRadius: 8,
    backgroundColor: "rgba(0,0,0,0.08)",
    "& > img": {
      width: "100%",
    },
  });

  const {value,value2} = useContext(UserContext);
  const [stateValue, setStateValue] = value;


  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <CoverImage imsize="56px">
        <img style={{ width: "100%" }} src={im} />
      </CoverImage>
      <Box
        sx={{
          ml: 1.5,
          minWidth: 0,
          ...(props.change
            ? !stateValue && { display: "none" }
            : { display: "block" }),
        }}
      >
        <Typography noWrap letterSpacing={-0.25}>
          Chilling Sunday
        </Typography>

        <Typography variant="caption" color="text.secondary" fontWeight={500}>
          Jun Pulse
        </Typography>
      </Box>
    </Box>
  );
}
