import * as React from 'react';

//components
import Layout from '../components/Layout';
import Seo from "../components/seo"

//mui
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

//mui icons
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const childrenStyles = {
  paddingTop: '20px',
  paddingBottom: '20px',
};

function give() {
  return (
    <Layout>
    <Seo title='Give Tithes, Offerings and Donations'/>
      <Grid item sx={{ m: 'auto' }} style={childrenStyles}>
        <Card
          sx={{
            mt: '20px',
            mb: '20px',
            minHeight: '80vh',
            maxWidth: { xs: 400, sm: 550, md: 750, lg: 1000 },
          }}
        >
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant='h5' sx={{ textAlign: 'center' }}>
                Offering, Welfare and Donations
              </Typography>
            </CardContent>
            <Divider />
            <CardContent>
              <Typography variant='p'>
                Each of you should give what you have decided in your heart to
                give, not reluctantly or under compulsion, for God loves a
                cheerful giver. 2 Corinthians 9:7
              </Typography>
              <Typography gutterBottom variant='h6' sx={{ mt: '10px' }}>
                The church operates the following zenith bank accounts:
              </Typography>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls='panel1a-content'
                  id='panel1a-header'
                >
                  <Typography>
                    Tithe and Offering
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Foursquare Gospel Church Ipakodo 1014625814
                  </Typography>
                  <Typography>
                    For operations like tithe, offering and thanksgiving
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls='panel2a-content'
                  id='panel2a-header'
                >
                  <Typography>
                    Welfare
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Foursquare Gospel Church Ipakodo Welfare 1017370414
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls='panel3a-content'
                  id='panel3a-header'
                >
                  <Typography>
                     Projects
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Foursquare Gospel Church Ipakodo Projects 1017370658                    
                  </Typography>
                  <Typography>
                    For projects like building offering, Ebenezer, my best for God, etc
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Box sx={{ mt: '20px' }}>
                <Typography variant='p'>
                  Thank you for your interest in supporting the work of God
                    through foursquare gospel church Ipakodo. God bless you.
                </Typography>
              </Box>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Layout>
  );
}

export default give;
