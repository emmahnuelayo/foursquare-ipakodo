import React from 'react';

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
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const childrenStyles = {
  paddingTop: '20px',
  paddingBottom: '20px',
};

function doctrine() {
	return (
		<Layout>
    <Seo title=' Our Doctrine' />
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
                Our Doctrine
              </Typography>
            </CardContent>
            <Divider />
            <CardContent>
            	<Typography variant='body2'>
              	The Foursquare Church exists to glorify God and advance
                His kingdom. Jesus Christ’s command is to preach the
                gospel and make disciples of all nations (Mark 16:15;
                Matthew 28:19). Therefore, we are “Dedicated unto the
                cause of Inter-denominational and Worldwide
                Evangelism.”* These words express our spirit and our
                focus.
              </Typography>
              <Typography variant='body2'>
                Our call is to preach Jesus Christ, God’s Son, as The
                Savior, The Baptizer, The Healer and The Coming King.
              </Typography>
              <Typography variant='body2'>
                Our assignment is to develop healthy, growing churches.
                Our commitment is to plant national churches around the
                world led by loving servants of Jesus Christ. Churches
                developed in this manner will reproduce again and
                again.This makes possible the spread of the gospel to
                those who have not heard or accepted the message of
                God’s Son.
              </Typography>
              <Typography variant='body2'>
                <b>Our Name</b>– The Foursquare Gospel Church:
                “Foursquare” is a Biblical term used of the tabernacle
               	in the Book of Exodus, of the Temple of the Lord in
                Ezekiel 40:47, and of Heaven, as described in the book
                of the Revelation.
              </Typography>
              <Typography variant='body2'>  
                The term “Foursquare Gospel” was given in the
                inspiration of revival to the denomination’s founder,
                Aimee Semple McPherson, during an evangelistic campaign
                in Oakland, Calif., in 1922. It represents that which is
                equally balanced on all sides, established and enduring.
                Such confidence in the power of the Gospel is also
                expressed by the verse, Hebrews 13:8, displayed in
                Foursquare churches proclaiming, “Jesus Christ the Same,
                Yesterday and Today and Forever.”
              </Typography>
              <Typography variant='body2'>
                The name represents the four-fold ministries of Jesus
                as:
              </Typography>
              <Typography gutterBottom variant='h7'>     
                We believe that Jesus Christ is THE SAVIOUR of the
                world.
              </Typography>
              <List>
              	<ListItem>
              		“For God so loved the world that he gave his only
                  begotten Son, that whosoever believes in him should
                  not perish, but have everlasting life.” – John 3:16              
              	</ListItem>
              	<ListItem>
              		“But He was wounded for our transgressions, He was
                  bruised for our iniquities; the chastisement for our
                  peace was upon Him…” – Isaiah 53:5         
              	</ListItem>
              	<ListItem>
              		“Who gave himself for us, that he might redeem us from
                  all iniquity, and purify unto himself a peculiar
                  people, zealous of good works.” – Titus 2:14              
              	</ListItem>
              </List>
              <Typography gutterBottom variant='h7'>     
             		We believe that Jesus Christ is THE HEALER.
             	</Typography>
              <List>
              	<ListItem>
              		"that it might be fulfilled which was spoken through
                	Isaiah the prophet, saying: Himself took our
                	infirmities, and bare our diseases..” – Mathew 8:17                     
              	</ListItem>
               	<ListItem>
              		” And these signs will follow those who believe: In My
                  name they will cast out demons; they will speak with
                  new tongues; 18 they[a] will take up serpents; and if
                  they drink anything deadly, it will by no means hurt
                  them; they will lay hands on the sick, and they will.”
                  – Mark 16:17-18         
              	</ListItem>
              </List>
              <Typography gutterBottom variant='h7'>     
             	  We believe that Jesus Christ is THE BAPTIZER with THE
                HOLY SPIRIT.
              </Typography>
              <List> 
              	<ListItem>
              		"for John truly baptized with water, but you shall be
                  baptized with the Holy Spirit not many days from. But
                  you shall receive power when the Holy Spirit has come
                  upon you; and you shall be witnesses to Me in
                  Jerusalem, and in all Judea and Samaria, and to the
                  end of the earth.” – Acts 1:5,8      
              	</ListItem>
              	<ListItem>
									" Do you not know that you are the temple of God and
                  that the Spirit of God dwells in you? ” – 1
                  Corinthians 3:16   	
              	</ListItem>
              </List>
              <Typography gutterBottom variant='h7'>     
                We believe that Jesus Christ is THE SOON COMING KING.
              </Typography> 
              <List> 
              	<ListItem>           
                  "For the Lord Himself will descend from heaven with a
                  shout, with the voice of an archangel, and with the
                  trumpet of God. And the dead in Christ will rise
                  first. Then we who are alive and remain shall be
                  caught up together with them in the clouds to meet the
                  Lord in the air. And thus we shall always be with the
                  Lord. ” – 1 Thessalonians 4:16-17
                </ListItem> 
                <ListItem>
                	"so Christ was offered once to bear the sins of many.
                  To those who eagerly wait for Him He will appear a
                  second time, apart from sin, for salvation. ” – Hebrew
                  9:28
                </ListItem>
              </List>          
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Layout>
	)
}

export default doctrine