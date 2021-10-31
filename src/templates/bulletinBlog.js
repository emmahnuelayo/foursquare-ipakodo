import React from 'react';

//configs
import { graphql } from 'gatsby';
import ReactMarkdown from 'react-markdown';

//mui
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';

//components
import Layout from '../components/Layout';
import Seo from "../components/seo";

function bulletinBlog({ data }) {
  const bulletin = data.strapiBulletin;
  const title = bulletin.title;
  
  return (
    <Layout>
      <Seo title={`${title}`} />
      <Grid item sx={{ m: 'auto' }}>
        <Card
          sx={{
            mt: '20px',
            mb: '20px',
            maxWidth: { sm: 360, md: 560, lg: 800 },
          }}
        >
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant='h4'>
                {bulletin.title}
              </Typography>
              <Typography gutterBottom variant='h8'>
                Last Updated {bulletin.date}
              </Typography>
            </CardContent>
            <Divider />
            <CardContent>
              <ReactMarkdown>{bulletin.bulletinArticle}</ReactMarkdown>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Layout>
  );
}

export const query = graphql`
  query BulletinQuery($slug: String!) {
    strapiBulletin(slug: { eq: $slug }) {
      strapiId
      title
      date
      bulletinArticle
      slug
      id
    }
  }
`;

export default bulletinBlog;
