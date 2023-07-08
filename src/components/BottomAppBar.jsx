import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';

import Slider from '@mui/material/Slider';

import Stack from '@mui/material/Stack';
import VolumeUpRounded from '@mui/icons-material/VolumeUpRounded';
import VolumeDownRounded from '@mui/icons-material/VolumeDownRounded';

import MusicBox from './MusicBox';
import Musicplayer from './Musicplay';



const Widget = styled('div')(({ theme }) => ({
  width: 504,
  margin: 'auto',
  position: 'relative',
  zIndex: 1,


}));




const appbarstyle = {
  top: 'auto',
  bottom: 0,
  zIndex: 10000,
  height: '9vh',
  backgroundColor: 'trasparent',
  background: 'none'
}




export default function BottomAppBar() {
  const theme = useTheme();
  const lightIconColor =
  theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)';
  return (
    <React.Fragment>
      <AppBar sx={appbarstyle}>
        <Toolbar>
          
          <Widget>
          <MusicBox imsize={56} change={false} />
          </Widget>
          
          <Musicplayer />

          <Stack spacing={2} direction="row" sx={{ mb: 1, px: 1 }} alignItems="center">
            <VolumeDownRounded htmlColor={lightIconColor} />
            <Slider
              aria-label="Volume"
              defaultValue={30}
              sx={{
                color: '#fff',
                width: 100,
                '& .MuiSlider-track': {
                  border: 'none',

                },
                '& .MuiSlider-thumb': {
                  width: 24,
                  height: 24,
                  backgroundColor: '#fff',
                  '&:before': {
                    boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
                  },
                  '&:hover, &.Mui-focusVisible, &.Mui-active': {
                    boxShadow: 'none',
                  },
                },
              }}
            />
            <VolumeUpRounded htmlColor={lightIconColor} />
          </Stack>
          {/* </Widget> */}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}