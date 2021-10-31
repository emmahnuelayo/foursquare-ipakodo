import React from 'react'

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

function vision() {
	return (
		<Layout>
      <Seo title='Our Vision'/>
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
                Our Mission and Vision
              </Typography>
            </CardContent>
            <Divider />
            <CardContent>
            	<Typography gutterBottom variant='h7'>
            		Vision
            	</Typography>
            	<Typography variant='body2'>
	              The vision of The Foursquare Gospel Church in Nigeria is
                to present Jesus Christ, God’s Son, to every person in
                every culture and nation as The Savior, The Baptizer
                with the Holy Spirit, The Healer and The Soon-Coming
                King. Since the founding of The Foursquare Church in
                1923, that vision has been realized through evangelizing
             	  the lost and establishing local congregations in the
                United States and abroad, through the nurturing and
                training of believers into leadership on all levels of
                church life, and in cooperation with other members of
                the body of Christ at large in the fellowship of the
                Gospel and the fulfillment of the biblical mandate to be
                “light” and “salt” on the earth.
              </Typography>
              <Typography gutterBottom variant='h7'>
								Strategy
							</Typography>
							<Typography variant='body2'>
                The strategy of The Foursquare Gospel Church in Nigeria
                is to follow the pattern of church development found in
                the New Testament. The Holy Spirit led the Early Church
                in this development. The pattern has four stages. It
                helps us understand where we are in the growth process
                and where we need to go. Each stage is different but
                connects closely with the others.
              </Typography>
              <Typography gutterBottom variant='h7'>
								Stage 1: Pioneer
							</Typography>
              <Typography variant='body2'>
                The church starts when workers bring the lost to Christ
                and plant local congregations. The goal is responsible
                disciples who evangelize and reproduce themselves. The
                church at Thessalonica in Greece started this way (Acts
                17:1-9; 1 Thessalonians 1:1-10).
              </Typography>
              <Typography gutterBottom variant='h7'>
              	Stage 2: Establish
              </Typography>
              <Typography variant='body2'>
                The church grows stronger when workers give practical
                Christian teaching and train leaders. The goal is
                responsible, reproducing leaders who serve their
                families and the local church. The church on the island
                of Crete matured this way (Titus 1-3).
              </Typography>
              <Typography gutterBottom variant='h7'>
              	Stage 3: Empower
              </Typography>
              <Typography variant='body2'>
                The national church organizes to govern and support
                itself and to do its own evangelism in a way that is
                sensitive to local cultures. The goal is responsible
                local congregations that plant other churches. Together
                they become a national church movement to reach the
                entire country. The church at Ephesus in Turkey
                developed and multiplied this way (Acts 19-20).
              </Typography>
              <Typography gutterBottom variant='h7'>
             		Stage 4: Send
             	</Typography>
              <Typography variant='body2'>
                The national church reaches out to people of other
                cultures and languages. The goal is responsible national
                churches that send and support workers who serve other
                cultures and countries. In obedience to the Holy Spirit,
                the church at Antioch in Syria became such a church when
                they sent Paul and Barnabas (Acts 13:1-4).
              </Typography>
              <Typography gutterBottom variant='h7'>
             		Summary
             	</Typography>
             	<Typography variant='body2'>
                Each national church preaches the gospel within a
                growing sphere of influence as it moves through the four
                stages. It looks forward to the day when “this gospel of
                the kingdom will be preached in the whole world as a
                testimony to all nations, and then the end will come”
                (Matthew 24:14). The spirit of The Foursquare Church is
                loving unity. It seeks to provide affirming and freeing
                relationships while following New Testament order. In so
                doing, we carry out the command of our Lord Jesus
                Christ. We glorify God and advance His kingdom.
              </Typography>
              <Typography variant='p'>
                * The dedication statement on the cornerstone of Angelus
                Temple, the first Foursquare church started January 1,
                1923.
              </Typography>            
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Layout>
	)
}

export default vision