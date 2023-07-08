import * as React from "react";
import IconButton from "@mui/material/IconButton";
import { styled, useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
// import qala from "../assets/qala.mp3";

import PauseRounded from "@mui/icons-material/PauseRounded";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
import FastForwardRounded from "@mui/icons-material/FastForwardRounded";
import FastRewindRounded from "@mui/icons-material/FastRewindRounded";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

import { useEffect, useState } from "react";
import { UserContext } from "./sidebar menu";
import { createContext, useContext } from "react";
import useSound from "use-sound";

const TinyText = styled(Typography)({
  fontSize: "0.75rem",
  opacity: 0.38,
  fontWeight: 800,
  letterSpacing: 0.2,
  color: "#fff",
  margin: "0 1em",
});

const Widget = styled("div")(({ theme }) => ({
  width: 504,
  margin: "auto",
  position: "relative",
  zIndex: 1,
}));

export default function Musicplayer() {
  const theme = useTheme();
  const [position, setPosition] = React.useState(32);
  const [paused, setPaused] = React.useState(false);
  function formatDuration(value) {
    const minute = Math.floor(value / 60);
    const secondLeft = value - minute * 60;
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  }
  const mainIconColor = theme.palette.mode === "dark" ? "#fff" : "#000";

  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState({
    min: "",
    sec: "",
  });
  const [currTime, setCurrTime] = useState({
    min: "",
    sec: "",
  });

  const [seconds, setSeconds] = useState();


  const {value,value2} = useContext(UserContext);
  const [stateValue2, setStateValue2] = value2;

  const [play, { pause, duration, sound }] = useSound(stateValue2);

  useEffect(() => {
    if (duration) {
      const sec = duration / 1000;
      const min = Math.floor(sec / 60);
      const secRemain = Math.floor(sec % 60);
      setTime({
        min: min,
        sec: secRemain,
      });
    }
  }, [isPlaying]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sound) {
        setSeconds(sound.seek([]));
        const min = Math.floor(sound.seek([]) / 60);
        const sec = Math.floor(sound.seek([]) % 60);
        setCurrTime({
          min,
          sec,
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [sound]);

  const playingButton = () => {
    if (isPlaying) {
      pause();
      setIsPlaying(false);
    } else {
      play();
      setIsPlaying(true);
    }
  };



  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      <Widget>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: -1,
          }}
        >
          <IconButton aria-label="previous song">
            <FastRewindRounded fontSize="large" htmlColor={mainIconColor} />
          </IconButton>
          <IconButton
            aria-label={paused ? "play" : "pause"}
            onClick={() => setPaused(!paused)}
          >

                    {!isPlaying ? (
              <PlayArrowRounded onClick={playingButton}
              sx={{ fontSize: "3rem" }}
              htmlColor={mainIconColor}
            />
        ) : (
            <PauseRounded  onClick={playingButton}
            sx={{ fontSize: "3rem" }}
            htmlColor={mainIconColor}
            />
        )}
          </IconButton>
          <IconButton aria-label="next song">
            <FastForwardRounded fontSize="large" htmlColor={mainIconColor} />
          </IconButton>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mt: -2,
          }}
        >
          <TinyText>{currTime.min}:{currTime.sec}</TinyText>
          <Slider
            type="range"
            aria-label="time-indicator"
            size="small"
            value={seconds}
            min={0}
            step={1}
            max={duration / 1000}
            onChange={(e) => {
                sound.seek([e.target.value]);
              }}
            sx={{
              color: "#fff",
              height: 4,
              "& .MuiSlider-thumb": {
                width: 8,
                height: 8,
                "&.Mui-active": {
                  width: 20,
                  height: 20,
                },
              },
            }}
          />
          <TinyText>{time.min}:{time.sec}</TinyText>
        </Box>
      </Widget>
    </Box>
  );
}
