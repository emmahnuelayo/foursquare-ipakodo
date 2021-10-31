import * as React from 'react';

//configs
import { graphql, Link } from 'gatsby';

//components
import Layout from '../components/Layout';
import Seo from "../components/seo"

//mui
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';

const linkStyles = {
  textDecoration: 'none',
  marginBottom: '10px',
};

const childrenStyles = {
  paddingTop: '20px',
  paddingBottom: '20px',
};

function bulletin({ data }) {
  return (
    <Layout>
    <Seo title='Bulletins' />
      <Grid item sx={{ m: 'auto' }} style={childrenStyles}>
        <Card
          sx={{
            mt: '20px',
            mb: '20px',
            minHeight: '80vh',
            maxWidth: {  xs: 400, sm: 550, md: 750, lg: 1000 },
          }}
        >
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant='h5' sx={{ textAlign: 'center' }}>
                Bulletins
              </Typography>
            </CardContent>
            <Divider />
            <CardContent>
              <ul>
                {data.allStrapiBulletin.edges.map((bulletins) => (
                  <Box component='li' key={bulletins.node.strapiId}>
                    <Link
                      style={linkStyles}
                      to={`/bulletin/${bulletins.node.slug}`}
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <Typography
                        variant='h7'
                        gutterBottom
                        color='text.secondary'
                      >
                        {bulletins.node.title}
                      </Typography>
                    </Link>
                  </Box>
                ))}
              </ul>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Layout>
  );
}

export const bulletinsQuery = graphql`
  query {
    allStrapiBulletin(sort: { order: DESC, fields: updatedAt }) {
      edges {
        node {
          slug
          strapiId
          title
          date(formatString: "MMMM Do YYYY")
        }
      }
    }
  }
`;

export default bulletin;
