import * as React from 'react';

//components
import Layout from '../components/Layout';
import AboutCard from '../components/AboutCard';
import Seo from "../components/seo"

//images
import banner from '../images/bannerImage.jpg';

//mui
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const childrenStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: 'auto',
  textAlign: 'center',
  paddingTop: '20px',
  paddingBottom: '20px',
};

function about() {
  return (
    <Layout>
        <Seo title="About Us" />
        <Box style={childrenStyles}>
          <Typography gutterBottom variant='h5' sx={{ textAlign: 'center' }}>
            Get To Know About Us
          </Typography>
          <Box sx={{ flexGrow: 1, mt: '10px', ml: '10px', mr: 'auto' }}>
            <Grid
              container
              rowSpacing={2}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <AboutCard
                image={banner}
                alt='Our History'
                title='Our History'
                link='/history'
                linkText='Learn more..'
              />
              <AboutCard
                image={banner}
                alt='Our Doctrine'
                title='Our Doctrine'
                link='/doctrine'
                linkText='Learn more..'
              />
              <AboutCard
                image={banner}
                alt='Our Vision and Mission'
                title='Our Vision'
                link='/vision'
                linkText='Learn more..'
              />
              <AboutCard
                image={banner}
                alt='Our Believe'
                title='These We Believe'
                link='/believe'
                linkText='Learn more..'
              />
              <AboutCard
                image={banner}
                alt='Our Leaders'
                title='Our Leaders: Pastorate and Council'
                link='/pastorate'
                linkText='Learn more..'
              />
            </Grid>
          </Box>
        </Box>
    </Layout>
  );
}

export default about;
