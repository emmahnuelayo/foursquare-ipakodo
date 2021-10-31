import * as React from 'react';

//gatsby components
import { Link } from 'gatsby';

//mui
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import RoomRoundedIcon from '@mui/icons-material/RoomRounded';
import PlayCircleOutlineRoundedIcon from '@mui/icons-material/PlayCircleOutlineRounded';

//images
import banner from '../images/banner.gif';

const containerStyles = {
  background: `linear-gradient(rgba(20, 20, 20, 0.4), rgba(20, 20, 20, 0.2)), url(${banner})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  marginBottom: '20px',
  header: {
    marginTop: '10px',
    marginBottom: '0px',
  },
  middle: {
    marginTop: '10px',
    marginBottom: '10px',
  },
  subtitle: {
    marginBottom: '60px',
  },
};

const linkStyles = {
  textDecoration: 'none',
  marginBottom: '10px',
};

function Banner() {
  return (
    <Box
      style={containerStyles}
      sx={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        color: 'white',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '-10vh',
      }}
    >
      <Typography gutterBottom variant='h2' sx={{ fontSize: { xs: '32px', md: '40px'} }} style={containerStyles.header}>
        Welcome
      </Typography>
      <Typography gutterBottom variant='p' sx={{ fontSize: { xs: '20px', md: '32px'} }} style={containerStyles.middle}>
        To a Place of
      </Typography>
      <Typography gutterBottom variant='p' sx={{ fontSize: { xs: '20px', md: '32px', fontSize: '700' } }} style={containerStyles.subtitle}>
        Worship | Word | Wonders
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row'},
          justifyContent: 'center',
          alignItems: { xs: 'center', md: 'baseline'},
        }}
      >
        <Link to='/location' style={linkStyles}>
          <Button sx={{ borderRadius: '16px', fontSize: '12px' , marginRight: { md: '16px' } }} variant='contained'>
            <RoomRoundedIcon sx={{ marginRight: '12px' }} /> Location | centers
          </Button>
        </Link>
        <Link to='/stream' style={linkStyles}>
          <Button sx={{ borderRadius: '16px', fontSize: '12px' }} variant='contained'>
            <PlayCircleOutlineRoundedIcon sx={{ marginRight: '12px' }} /> Join
            Online
          </Button>
        </Link>
      </Box>
    </Box>
  );
}

export default Banner;
