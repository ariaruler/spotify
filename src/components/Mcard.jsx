import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import styled from "@emotion/styled";
import Avatar from "@mui/material/Avatar";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const CoverImage = styled("div")({
  width: 179,
  height: 179,
  objectFit: "cover",
  overflow: "hidden",
  flexShrink: 0,
  borderRadius: 8,
  backgroundColor: "rgba(0,0,0,0.08)",
  "& > img": {
    width: "100%",
  },
});

export default function MCard(props) {
  return (
    <Card
      sx={{
        maxWidth: 224,
        minWidth: 198,
        margin: 1.5,
        backgroundColor: "rgb(256,256,256,0.05)",
      }}
    >
      <CardActionArea
        sx={{
          justifyContent: "center",
          display: "flex",
          "& ": { display: "flex" },
        }}
      >
        <CardContent sx={{ justifyContent: "center" }}>
          <CoverImage imsize="56px">
            <img style={{ width: "100%" }} src={props.im} />
          </CoverImage>
          <Typography
            sx={{ fontWeight: 900, padding: "4px 0" }}
            gutterBottom
            variant="h5"
            component="div"
          >
            Lizard
          </Typography>

          <Button
            onClick={props.func}
            sx={{ position: "absolute", top: '50%' , left: '60%' }}
          >
            <Avatar sx={{ bgcolor: "#1ed760",width: 48, height: 48  }}>
              <PlayArrowIcon />
            </Avatar>
          </Button>

          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
