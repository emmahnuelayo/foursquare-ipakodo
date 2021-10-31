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

function believe() {
  return (
    <Layout>
    <Seo title='This We believe' />
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
                These We Believe
              </Typography>
            </CardContent>
            <Divider />
            <CardContent>
              <Typography gutterBottom variant='h6' sx={{ textAlign: 'center'}}>
                THE TWENTY-TWO (22) TENETS OF THE FOURSQUARE GOSPEL CHURCH
              </Typography>
              <Typography variant='body2'>
                Our belief is based on core biblical truths we call the
                22 tenets of faith. This we believe; The Foursquare
                Declaration of Faith
              </Typography>
              <Typography variant='h7'>
                1. THE HOLY SCRIPTURES      
              </Typography>
              <Typography variant='body2'>
                We believe that the Bible is God-inspired; perfect, with
                no mistakes; that God told certain men thousands of
                years ago what to write in it; that it is there to help
                us and to show everybody Jesus-the Son of God, the
                Savior of mankind; that it tells people how to live and
                be saved. (Matt. 24:35; 2 Timothy 3:16,17; Psa. 119:105;
                2Pet. 1:19-21; 2Tim. 2:15).
              </Typography>
              <Typography variant='h7'>
                2. THE ETERNAL GODHEAD
              </Typography>
              <Typography variant='body2'>
                We believe THAT THERE IS ONE God, Creator of the
                universe, eternal, holy, loving, all-powerful and
                deserving of our praise and thanks; and that, in the
                unity of Godhead, there are three, equal and divine: the
                Father, the Son and the Holy Spirit; The Father the King
                of the Universe, full of Glory and Majesty, whose
                justice demands that sin be punished, but whose love
                sent His own Son to take that punishment for us. The Son
                Jesus Christ, who has always been with the Father, who
                was born to the virgin Mary by the power of God in
                Israel about 2000 years ago, who taught and healed
                people, who died on the cross to take away sins, who
                lived again to defeat death, who lives with those who
                believe in him and defends them in heaven. The Holy
                Spirit the Spirit of God, always with the Father and
                Son, but now also with believers in Christ, sent by him
                to guide and help them and also in the world to draw
                people to God and salvation. (Deut. 6:4; John 1:1-3;
                Matt.1: 23; 1John 5:7; Isa.9: 6; 2 Corinthians 13:14;
                1Jn. 5:7).
              </Typography>
              <Typography variant='h7'>
                3. THE FALL OF MAN
              </Typography>
              <Typography variant='body2'>
                We believe that man was created in the image of God, but
                that by voluntary disobedience he fell from perfection.
                (Gen1: 27; Gen 3:1-24; Rom. 5:12; Rom. 5:19){' '}
              </Typography>
              <Typography variant='h7'>
                4. THE PLAN OF SALVATION
              </Typography>
              <Typography variant='body2'>
                We believe that while we were yet sinners Christ died
                for us, signing the pardon of all who believe on
                Him-Jesus. (John 3:16; Romans 5:8; Isa. 55:7; Heb.
                7:25;).
              </Typography>
              <Typography variant='h7'>
                5. SALVATION THROUGH GRACE
              </Typography>
              <Typography variant='body2'>
                We believe that we have no righteousness and must come
                to God pleading the righteousness of Christ (Ephesians
                2:8;Rom. 3:10; Rom. 3:23; Isa. 64:6; John 6:47; Eph.
                2:13).            
              </Typography>
              <Typography variant='h7'>
                6. REPENTANCE AND ACCEPTANCE
              </Typography>
              <Typography variant='body2'>
                We believe that upon sincere repentance, and a
                whole-hearted acceptance of Christ, we are justified
                before God (I John 1:9; Rom. 5:1,2; Rom. 8:1; Luke
                1:77-79; 2 Corinthians 5:17; Galatians 2:20).           
              </Typography>
              <Typography variant='h7'>
                7. THE NEW BIRTH
              </Typography>
              <Typography variant='body2'>
                We believe that the change, which takes place in the
                heart and life at conversion, is a very real one (John
                3:3; 2Cor. 5:17; John 15:19; Gal. 2:20; Psa. 1:1,2)
              </Typography>
              <Typography variant='h7'>
                8. DAILY CHRISTIAN LIVING
              </Typography>
              <Typography variant='body2'>
                We believe that it is the will of God that we be
                sanctified daily, growing constantly in the faith
                (Hebrews 6:1; 1Thess. 4:3; 2Cor. 7:1; Heb. 6:1; Rom.
                8:5; Isa. 35:8).
              </Typography>
              <Typography variant='h7'>
                9. BAPTISM AND THE LORD’S SUPPER
              </Typography>
              <Typography variant='body2'>
                We believe that baptism by immersion in water is a sign
                to the world of our new birth; that, just as Christ was
                placed in consider our old self and nature dead and so
                are we “buried” in water and come up again to eternal
                life. (Matt.28: 19;Rom.6:4; Acts 2:41). We believe in
                the commemoration of the Lord’s Supper by the symbolic
                use of the bread and juice of the vine (I Corinthians
                11:24, 25; 1Cor. 11:26; 1Cor. 11; 28; 2Cor. 13:5).       
              </Typography>
              <Typography variant='h7'>
                10. BAPTISM WITH THE HOLY SPIRIT
              </Typography>
              <Typography variant='body2'>
                We believe that the Baptism with the Holy Spirit is to
                endue the believer with power; and that His incoming is
                after the same manner as in Bible days (Acts 2:4).
              </Typography>
              <Typography variant='h7'>
                11. THE SPIRIT-FILLED LIFE
              </Typography>
              <Typography variant='body2'>
                We believe that it is the will of God that we walk in
                the Spirit daily (Ephesians 4:30-32).
              </Typography>
              <Typography variant='h7'>
                12. THE GIFTS AND FRUIT OF THE SPIRIT
              </Typography>
              <Typography variant='body2'>
                We believe that the Holy Spirit has gifts to bestow upon
                the Christian; and that we should show spiritual fruit
                as evidence of a Spirit-filled life (I Corinthians
                12:1-11; Galatians 5:22).
              </Typography>
              <Typography variant='h7'>
                13. MODERATION
              </Typography>
              <Typography variant='body2'>
                We believe that the experience and daily walk of the
                believer should never lead him into extremes of
                fanaticism (Philippians 4:5).        
              </Typography>
              <Typography variant='h7'>
                14. DIVINE HEALING       
              </Typography>
              <Typography variant='body2'>
                We believe that divine healing is the power of Christ to
                heal the physically sick in answer to the prayer of
                faith (James 5:14-16).           
              </Typography>
              <Typography variant='h7'>
                15. THE SECOND COMING OF CHRIST
              </Typography>
              <Typography variant='body2'>
                We believe that the second coming of Christ is personal
                and imminent (I Thessalonians 4:16, 17).        
              </Typography>
              <Typography variant='h7'>
                16. CHURCH RELATIONSHIP
              </Typography>
              <Typography variant='body2'>
                We believe it is our sacred duty to identify ourselves
                with the visible Body of Christ (Acts 16:5; Hebrews
                10:25).
              </Typography>
              <Typography variant='h7'>
                17. CIVIL GOVERNMENT
              </Typography>
              <Typography variant='body2'>
                We believe that rulers should be upheld at all times
                except in things opposed to the will of God (Romans
                13:1-5).   
              </Typography>
              <Typography variant='h7'>
                18. THE FINAL JUDGEMENT 
              </Typography>
              <Typography variant='body2'>
                We believe that all shall stand some day before the
                judgment seat of God, and there receive eternal life or
                death (2 Corinthians 5:10).     
              </Typography>
              <Typography variant='h7'>
                19. HEAVEN
              </Typography>
              <Typography variant='body2'>
                We believe that Heaven is the glorious eternal home of
                born-again believers (John 14:1-3; Revelation 7:15-17).        
              </Typography>
              <Typography variant='h7'>
                20. HELL
              </Typography>
              <Typography variant='body2'>
                We believe that hell is the place of eternal torment for
                all who reject Christ as the Savior (Revelation
                20:10,15).           
              </Typography>
              <Typography variant='h7'>
                21. EVANGELISM 
              </Typography>
              <Typography variant='body2'>
                We believe that soul winning is the most important
                responsibility of the Church (James 5:20).           
              </Typography>
              <Typography variant='h7'>
                22. TITHES AND OFFERINGS 
              </Typography>
              <Typography variant='body2'>
                We believe that the method ordained of God for the
                support and spread of His cause is by giving of tithes
                and free-will offerings (Malachi 3:10; 2 Corinthians
                9:7).
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Layout>
  );
}

export default believe;
