import * as React from 'react';

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

const childrenStyles = {
  paddingTop: '20px',
  paddingBottom: '20px',
};

function history() {
	return (
		<Layout>
    <Seo title='Our History' />
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
                Victory Cathedral
              </Typography>
              <Typography gutterBottom variant='h6' sx={{ textAlign: 'center' }}>
                Our History
              </Typography>
            </CardContent>
            <Divider />
            <CardContent>
            	<Typography gutterBottom variant='h7'>     
                Our Birth and Growth
              </Typography>
              <Typography variant='body2'>
                The night Bible College students through their
                evangelistic outreach brought the gospel to Ebute
                Ipakodo and gave birth to the Foursquare Gospel Church
                there in the year 1957.
            	</Typography>
            	<Typography variant='body2'>
                At the inception of the Church, it was called{' '}
                <u>Ijo Oyinbo</u> (the white man's church) or <u>Ijo Onihinrere</u> (the
                Gospel church). Through the providence of God, the
                Foursquare Gospel Church at Ebute Ipakodo was the first
             	  gospel church in the whole area of Ikorodu division,
                though there were one or two orthodox churches in the
                area. Owing to the church's location, the level of
                development coupled with the traditional belief of the
                people, the church was resisted but it prevailed and
                many souls were turned to God.
              </Typography>
              <Typography gutterBottom variant='h7'>         
                Church Building Dedication
              </Typography>
              <Typography variant='body2'>
                The building was named VICTORY CATHEDRAL and was
                dedicated at a colorful ceremony on 26<sup>th</sup>{' '}
                August 2000. Present on that happy occassion were, the
                District Overseer, Shomolu, Rev. Felix Oke, the
                superintendent of Ikorodu, zone, Rev J. O Ajayi and all
                the former pastors. It was a joyful reunion.
         			</Typography>
              <Typography gutterBottom variant='h7'>     
                The Zonal Headquarters Church
              </Typography>
              <Typography variant='body2'>     
                In the year 2002, the church bacame Ipakodo Zonal
                Headquarter church and the Senior Pastor Rev R. I. Egwe
                became the first Zonal Superinterndent.
              </Typography> 
              <Typography gutterBottom variant='h7'>     
                The District Headquarters Church
              </Typography>
              <Typography variant='body2'>     
                In the year 2013, the church bacame Ipakodo District
                Headquarter church and Rev. Kunle Obadina
                became the first District Overseer.
              </Typography>        
              <Typography gutterBottom variant='h7'>     
                The Church Today
              </Typography>
              <Typography variant='body2'>     
                The church hasn't rested on her laurels, rather the church has continued to experience tremendous growth. With an average membership of over 200 souls attending the local church, the LORD continually adds to the church daily as should be saved.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Layout>
	)
}

export default history