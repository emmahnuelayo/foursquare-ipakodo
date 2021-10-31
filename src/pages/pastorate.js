import React from 'react'

//configs
import { graphql } from "gatsby"

//components
import Layout from '../components/Layout';
import PastorCard from '../components/PastorCard';
import Seo from "../components/seo"

//mui
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';

const childrenStyles = {
  paddingTop: '20px',
  paddingBottom: '20px',
};

function pastorate({ data }) {
	return (
		<Layout>
      <Seo title='Our Pastorate And Council Members' />
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
                The Pastorate and Council Members
              </Typography>
              <Typography gutterBottom variant='h6' sx={{ textAlign: 'center' }}>
                Get introduced to our leaders.
              </Typography>
            </CardContent>
            <Divider />
            <CardContent>
            	<Typography gutterBottom variant='h6' sx={{ textAlign: 'center'}}>
            		Pastorate
            	</Typography>
           		<Box sx={{ flexGrow: 1, mt: '10px', ml: '10px', mr: 'auto' }}>
            		<Grid
              		container
              		rowSpacing={2}
              		columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              		sx={{ mb: '10px' }}
            		>
            			{data.allStrapiSenPastor.edges.map(senPData => (
                		<PastorCard
                			key={senPData.node.strapiId}
                			image={senPData.node.senPastorItem.localFile.url}
                			alt={senPData.node.name}
                			title={senPData.node.title}
                			text={senPData.node.name}
              			/>
                	))}
            		</Grid>
            		<Grid
              		container
              		rowSpacing={2}
              		columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            		>
            			{data.allStrapiPastorate.edges.map(PData => (
                		<PastorCard
                			key={PData.node.strapiId}
                			image={PData.node.itemPastorate.localFile.url}
                			alt={PData.node.name}
                			title={PData.node.title}
                			text={PData.node.name}
              			/>
                	))}
            		</Grid>
            	</Box>
            	<Typography gutterBottom variant='h6' sx={{ textAlign: 'center', mt: '20px' }}>
            		Council Members
            	</Typography>
           		<Box sx={{ flexGrow: 1, mt: '10px', ml: '10px', mr: 'auto' }}>
            		<Grid
              		container
              		rowSpacing={2}
              		columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            		>
            			{data.allStrapiCouncil.edges.map(conData => (
                		<PastorCard
                			key={conData.node.strapiId}
                			image={conData.node.itemCouncil.localFile.url}
                			alt={conData.node.name}
                			title={conData.node.title}
                			text={conData.node.name}
              			/>
                	))}
            		</Grid>
            	</Box>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Layout>
	)
}

export const pastorateQuery = graphql`
  query {
    allStrapiPastorate(sort: { fields: published_at, order: DESC }) {
      edges {
        node {
          title
          strapiId
          id
          name
          itemPastorate {
            localFile{
            	childImageSharp {
              	gatsbyImageData(
                	width: 360
                	placeholder: BLURRED
                	formats: [AUTO, WEBP, AVIF]
              	)
            	}
            	url
            }
          }
        }
      }
    }
    allStrapiCouncil(sort: { fields: published_at, order: DESC }) {
      edges {
        node {
          id
          strapiId
          name
          title
          itemCouncil {
            localFile{
            	childImageSharp {
              	gatsbyImageData(
                	width: 360
                	placeholder: BLURRED
                	formats: [AUTO, WEBP, AVIF]
              	)
              }
              url
            }
          }
        }
      }
    }
    allStrapiSenPastor(sort: { fields: published_at, order: DESC }, limit: 1) {
      edges {
        node {
          name
          id
          strapiId
          title
          senPastorItem {
          	localFile{
            	childImageSharp {
              	gatsbyImageData(
                	width: 360
                	placeholder: BLURRED
                	formats: [AUTO, WEBP, AVIF]
              	)
            	}
            	url
            }
          }
        }
      }
    }
  }
`

export default pastorate

