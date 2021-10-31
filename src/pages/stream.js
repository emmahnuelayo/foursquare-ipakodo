import * as React from 'react';

//components
import Layout from '../components/Layout';
import Seo from "../components/seo"

//configs
import { graphql } from "gatsby"

//mui
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const childrenStyles = {
  paddingTop: '20px',
  paddingBottom: '20px',
};

const linkStyles = {
  
  color: '#060606',
  display: 'flex',
};

function stream({ data }) {
  return (
    <Layout>
      <Seo title='Stream our programs and connect with us' />
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
                Like, subscribe and share our page with your friends and
                family.
              </Typography>
            </CardContent>
            <Divider />
            <CardContent>
              <Typography gutterBottom variant='h6'>
                Join us on any of these platforms
              </Typography>
              <List>
                <ListItem button>
                  <a href="https://www.youtube.com/channel/UC2biNd2Xuc3aOjk_0N073vA" style={linkStyles}>
                    <ListItemText primary='Youtube' />
                  </a>
                </ListItem>
                <ListItem button>
                  <a href="https://web.facebook.com/foursquarechurch.ebuteipakodo" style={linkStyles}>
                    <ListItemText primary='Facebook' />
                  </a>
                </ListItem>
                <ListItem button>
                  <a href="https://instagram.com/fgcipakodo/" style={linkStyles}>
                    <ListItemText primary='Instagram' />
                  </a>
                </ListItem>
                <ListItem button>
                  <a href="https://mixlr.com/foursquare_ipakodo" style={linkStyles}>
                    <ListItemText primary='Mixlr' />
                  </a>
                </ListItem>
              </List>
              <Typography gutterBottom variant='h6'>
                Need Counselling?
              </Typography>
              <List>
                <ListItem button>
                  {data.allStrapiSenPastor.edges.map(senData => (
                    <a
                      key={senData.node.strapiId}
                      href={senData.node.contact}
                      style={linkStyles}
                    >
                      <ListItemText primary='Chat with the senior pastor' />
                    </a>
                  ))}
                </ListItem>
              </List>        
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Layout>
  );
}

export const senPQuery = graphql`
  query {
    allStrapiSenPastor(sort: { fields: published_at, order: DESC }, limit: 1) {
      edges {
        node {
          strapiId
          contact
        }
      }
    }
  }
`

export default stream;
