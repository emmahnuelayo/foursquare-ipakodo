import * as React from 'react';

//mui
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function PastorCard(props) {
  return (
    <Grid item xs={12} md={6} lg={4} sx={{ m: 'auto' }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component='img'
            height='140'
            image={props.image}
            alt={props.alt}
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              {props.title}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              {props.text}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default PastorCard;
