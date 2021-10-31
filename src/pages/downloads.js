import * as React from 'react';

//configs
import { graphql } from 'gatsby';

//components
import Layout from '../components/Layout';
import Seo from "../components/seo"

//mui
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

const preventDefault = (event) => event.preventDefault();

const linkStyles = {
  textDecoration: 'none',
  marginBottom: '10px',
};

function downloads({ data }) {
  return (
    <Layout>
    <Seo title='Download latest messages' />
      <Grid item sx={{ m: 'auto' }}>
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
              <Typography gutterBottom variant='h5'>
                Get all our soul lifting messages here.
              </Typography>
            </CardContent>
            <Divider />
            <CardContent>
              <List>
                {data.allStrapiAudioMessage.edges.map((messages) => (
                  <ListItem
                    disablePadding
                    onClick={preventDefault}
                    key={messages.node.strapiId}
                  >
                    <ListItemButton>
                      <Link
                        style={linkStyles}
                        href={messages.node.alternativeLink}
                        sx={{
                          display: 'flex',
                          flexDirection: 'row',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      >
                        <Typography
                          variant='p'
                          gutterBottom
                          color='text.secondary'
                        >
                          {messages.node.title} by {messages.node.author}
                        </Typography>
                      </Link>
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Layout>
  );
}

export const messagesQuery = graphql`
  query {
    allStrapiAudioMessage(sort: { fields: published_at, order: DESC }) {
      edges {
        node {
          title
          strapiId
          updatedAt(formatString: "YYYY-MM-DD")
          author
          alternativeLink
        }
      }
    }
  }
`;

export default downloads;
