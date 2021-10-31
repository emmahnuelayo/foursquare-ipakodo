import * as React from 'react';

//configs
import { graphql, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

//bootstrap
import { Carousel } from 'react-bootstrap';

//components
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import IndexCard from '../components/IndexCard';
import Seo from "../components/seo"

//mui
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

//images
import banner from '../images/bannerImage.jpg';

const childrenStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: 'auto',
  textAlign: 'center',
  marginTop: '16px',
};

const introStyles = {
  quotes: {
    fontSize: '48px',
  },
};

const carouselStyles = {
  item: {
    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
    border: '4px hidden grey',
    borderRadius: '24px',
  },
};

const linkStyles = {
  textDecoration: 'none',
  marginBottom: '12px',
};


function index({ data }) {
  return (
    <Layout>
      <Seo title='Foursquare Ipakodo District Headquarters Church' />
      <Banner />
      <Box style={childrenStyles}>
        <Box>
          <Typography gutterBottom variant='h1' sx={{ fontSize: {xs: '24px', md: '32px'} }}>
            WELCOME T0 FOURSQUARE GOSPEL CHURCH, IPAKODO
          </Typography>
          <Typography variant='p' sx={{ fontSize: {xs: '14px', md: '16px'} }}>
            <strong style={introStyles.quotes}>&#8220;</strong>
            Jesus Christ the Savior, Baptizer, Healer, Coming King
            <strong style={introStyles.quotes}>&#8221;</strong>
          </Typography>
        </Box>
        <Box sx={{ mb: '10px' }}>
          <Typography gutterBottom variant='h5'>
            BUILD YOUR FAITH
          </Typography>
          <Typography variant='p' sx={{ mb: '10px' }}>
            Either through our Message series, House Fellowship or Sunday
            Service, we are aimed at helping you grow.
          </Typography>
          <Box sx={{ flexGrow: 1, mt: '10px', ml: '10px', mr: 'auto' }}>
            <Grid
              container
              rowSpacing={2}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <IndexCard
                image={banner}
                alt='about us'
                title='About us'
                text='Get to know more about us, our doctrine, our believe, our leaders...'
                link='/about'
                linkText='Learn more..'
              />
              <IndexCard
                image={banner}
                alt='streaming platforms'
                title='Streaming Platforms'
                text='Either through facebook, instagram, youtube or mixlr, you can join us for our various services...'
                link='/stream'
                linkText='Click here'
              />
              <IndexCard
                image={banner}
                alt='fellowship centers'
                title='House fellowship Centers'
                text='We have a community to drive your faith in your locality. Find out the center closest to you...'
                link='/location'
                linkText='Locate our centers'
              />
            </Grid>
          </Box>
        </Box>
        <Box sx={{ m: 'auto', mt: '20px', mb: '20px' }}>
          <Box sx={{ m: 'auto', mt: '40px' }}>
            <Typography gutterBottom variant='h5'>
              UPCOMING EVENTS
            </Typography>
            <Container>
              <Carousel>
                {data.allStrapiEvent.edges.map((imageData) => (
                  <Carousel.Item key={imageData.node.strapiId}>
                    <GatsbyImage
                      image={
                        imageData.node.itemEvent.localFile.childImageSharp
                          .gatsbyImageData
                      }
                      style={carouselStyles.item}
                      alt=''
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </Container>
          </Box>
          <Box sx={{ m: 'auto', mt: '20px', mb: '20px' }}>
            <Typography gutterBottom variant='h5'>
              LATEST ARTICLES
            </Typography>
            <Box>
              {data.allStrapiArticle.edges.map((articles) => (
                <Box key={articles.node.strapiId}>
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
                    <Typography variant='h8' color='text.secondary'>
                      {articles.node.title}
                    </Typography>
                  </Link>
                </Box>
              ))}
            </Box>
          </Box>
          <Box sx={{ m: 'auto', mt: '20px', mb: '20px' }}>
            <Typography gutterBottom variant='h5'>
              LATEST BULLETINS
            </Typography>
            <Box>
              {data.allStrapiBulletin.edges.map((bulletins) => (
                <Box key={bulletins.node.strapiId}>
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
                    <Typography variant='h8' color='text.secondary'>
                      {bulletins.node.title}
                    </Typography>
                  </Link>
                </Box>
              ))}
            </Box>
          </Box>
          <Box sx={{ m: 'auto', mt: '40px' }}>
            <Typography gutterBottom variant='h5'>
              GALLERY
            </Typography>
            <Container>
              <Carousel>
                {data.allStrapiGallery.edges.map((imageData) => (
                  <Carousel.Item key={imageData.node.strapiId}>
                    <GatsbyImage
                      image={
                        imageData.node.itemGallery.localFile.childImageSharp
                          .gatsbyImageData
                      }
                      style={carouselStyles.item}
                      alt=''
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </Container>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}

export const indexQuery = graphql`
  query {
    allStrapiEvent(limit: 5, sort: { order: DESC, fields: updatedAt }) {
      edges {
        node {
          itemEvent {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 700
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
          strapiId
        }
      }
    }
    allStrapiGallery(limit: 5, sort: { fields: updatedAt, order: DESC }) {
      edges {
        node {
          itemGallery {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 700
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
          strapiId
        }
      }
    }
    allStrapiArticle(limit: 5, sort: { order: DESC, fields: updatedAt }) {
      edges {
        node {
          author
          content
          slug
          strapiId
          title
          date(formatString: "MMMM Do YYYY")
        }
      }
    }
    allStrapiBulletin(limit: 5, sort: { order: DESC, fields: updatedAt }) {
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

export default index;
