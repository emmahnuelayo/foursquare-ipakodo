import * as React from 'react';

//gatsby components
import { StaticImage } from 'gatsby-plugin-image';

//mui
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

const linkStyles = {
  textDecoration: 'none',
  color: '#060606',
  display: 'flex',
};

const activeStyles = {
  background: '#efefef',
  color: '#1f1f1f',
  fontWeight: '900',
  paddingRight: '40px',
  borderRadius: '5px',
};

function Footer() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        pt: '15px',
        pb:'20px',
        background:
          'linear-gradient(rgba(221, 216, 230, 0.5), rgba(104, 43, 209, 0.5))',
      }}
    >
      <Box sx={{ flexGrow: 1, ml: '10px', mr: 'auto', mb: '20px' }}>
        <Typography variant='h7' sx={{fontWeight: '600'}}>
          Our Weekly Activities
        </Typography>
        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} rowSpacing={2}>
          <Grid item xs={12} md={4}>
            <Typography variant='body2'>
              Sunday School- 8:15am
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant='body2'>
              Sunday Service- 8:45am
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant='body2'>
              Tuesday (Bible Study)- 6pm
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant='body2'>
              Thursday (Prayer meeting)- 6pm
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Divider />
      <Box
        sx={{
          mb: '10px',
          mt: '20px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Button sx={{ mr: '7px', borderRadius: '50%',  backgroundColor: 'white', borderColor: 'white' }} variant='outlined'>
          <a
            href='https://web.facebook.com/foursquarechurch.ebuteipakodo'
            style={linkStyles}
            activeStyle={activeStyles}
          >
          <StaticImage
              src='../images/facebook_icon.png'
              alt='Facebook page link'
              placeholder='blurred'
              layout='fixed'
            />
          </a>
        </Button>
        <Button sx={{ mr: '7px', borderRadius: '50%',  backgroundColor: 'white', borderColor: 'white' }} variant='outlined'>
          <a
            href='https://instagram.com/fgcipakodo/'
            style={linkStyles}
            activeStyle={activeStyles}
          >
            <StaticImage
              src='../images/instagram_icon.png'
              alt='instagam page link'
              placeholder='blurred'
              layout='fixed'
            />
          </a>
        </Button>
        <Button sx={{ mr: '7px', borderRadius: '50%',  backgroundColor: 'white', borderColor: 'white' }} variant='outlined'>
          <a
            href='https://www.youtube.com/channel/UC2biNd2Xuc3aOjk_0N073vA'
            style={linkStyles}
            activeStyle={activeStyles}
          >
            <StaticImage
              src='../images/youtube_icon.png'
              alt='youtube page link'
              placeholder='blurred'
              layout='fixed'
            />
          </a>
        </Button>
        <Button sx={{ borderRadius: '50%',  backgroundColor: 'white', borderColor: 'white', }} variant='outlined'>
          <a
            href='https://mixlr.com/foursquare_ipakodo'
            style={linkStyles}
            activeStyle={activeStyles}
          >
            <StaticImage
              src='../images/mixlr_icon.png'
              alt='mixlr page link'
              placeholder='blurred'
              layout='fixed'
            />
          </a>
        </Button>
      </Box>
      <Box sx={{textAlign: 'center'}}>
        <Typography variant='h8' sx={{ fontSize: '8px' }}>
          &copy; {new Date().getFullYear()} Copyright: Foursquare Gospel Church
          Ipakodo
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
