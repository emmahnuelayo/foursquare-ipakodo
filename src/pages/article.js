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

function article({ data }) {
  return (
    <Layout>
      <Seo title='Articles' />
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
                Articles
              </Typography>
            </CardContent>
            <Divider />
            <CardContent>
              <ul>
                {data.allStrapiArticle.edges.map((articles) => (
                  <Box component='li' key={articles.node.strapiId}>
                    <Link
                      style={linkStyles}
                      to={`/article/${articles.node.slug}`}
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
                        {articles.node.title}
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

export const articlesQuery = graphql`
  query {
    allStrapiArticle(sort: { order: DESC, fields: updatedAt }) {
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

export default article;
