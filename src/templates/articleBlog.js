import React from 'react';

//configs
import { graphql } from 'gatsby';
import ReactMarkdown from 'react-markdown';

//mui
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';

//components
import Layout from '../components/Layout';
import Seo from "../components/seo";

function articleBlog({ data }) {
  const article = data.strapiArticle;
  const title = article.title;
  
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
                {article.title}
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography gutterBottom variant='h8'>
                  {article.author}
                </Typography>
                <Typography gutterBottom variant='h8'>
                  Last Updated {article.date}
                </Typography>
              </Box>
            </CardContent>
            <Divider />
            <CardContent>
              <ReactMarkdown>{article.content}</ReactMarkdown>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Layout>
  );
}

export const query = graphql`
  query ArticleQuery($slug: String!) {
    strapiArticle(slug: { eq: $slug }) {
      strapiId
      title
      date
      author
      content
      slug
      id
    }
  }
`;

export default articleBlog;
