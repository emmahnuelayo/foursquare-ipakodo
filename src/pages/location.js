import * as React from 'react';

//components
import Layout from '../components/Layout';
import Seo from "../components/seo"

//configs
import { graphql } from "gatsby"

//mui
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

//mui icons
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

//images
import map from '../images/map.jpg';

const containerStyles = {
  background: `linear-gradient(rgba(20, 20, 20, 0.4), rgba(20, 20, 20, 0.2)), url(${map})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  marginBottom: '20px',
};

const linkStyles = {
  textDecoration: 'none',
  marginBottom: '10px',
  top: {
    marginTop: '50px',
    textDecoration: 'none',
    marginBottom: '10px',
  },
};

function location({ data }) {
  return (
    <Layout>
      <Seo title='Our Location' />
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
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <a href='https://goo.gl/maps/Z3GtRimsP7Kif7eEA' style={linkStyles.top}>
            <Button sx={{ borderRadius: '20px' }} variant='contained'>
              locate using google map
            </Button>
          </a>
          <a href='#centers' style={linkStyles}>
            <Button sx={{ borderRadius: '20px' }} variant='contained'>
              Fellowship Centers
            </Button>
          </a>
        </Box>
      </Box>
      <Box sx={{ pb: '20px', pl: '10px' }}>
        <Box>
          <Typography gutterBottom variant='p'>
            We are located at 24, FRCN Road, Ebute, Ipakodo, Ikorodu, Lagos.
          </Typography>
        </Box>
        <Box id='centers'>
          <Typography gutterBottom variant='h6'>
            Our Fellowship Centers 
          </Typography>
          <Grid
              container
              rowSpacing={2}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={10} sx={{ m: 'auto' }}>
              <Card>
                <CardActionArea>
                  {data.allStrapiFellowship.edges.map(felData => (
                    <Accordion
                      key={felData.node.strapiId}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`panel${felData.node.strapiId}-content`}
                        id={`panel${felData.node.strapiId}-header`}
                      >
                        <Typography gutterBottom variant='h7'>
                          {felData.node.center}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography gutterBottom variant='p'>
                          Address: {felData.node.address}
                        </Typography>
                        <Typography gutterBottom variant='p'>
                          Contact: {felData.node.contact}
                        </Typography>
                        <Typography gutterBottom variant='p'>
                          Coordinator: {felData.node.coordinator}
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  ))}                
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Layout>
  );
}

export const locationQuery = graphql`
  query {
    allStrapiFellowship(sort: { order: DESC, fields: published_at }) {
      edges {
        node {
          address
          center
          contact
          coordinator
          strapiId
        }
      }
    }
  }
`

export default location;
