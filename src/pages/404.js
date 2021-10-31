import * as React from "react"

//components
import Layout from "../components/Layout"
import Seo from "../components/seo"

//mui
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const childrenStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: 'auto',
  textAlign: 'center',
  paddingTop: '20px',
  paddingBottom: '20px',
};

const NotFoundPage = () => (
  <Layout>
    <Box style={childrenStyles}>
      <Seo title="404: Not found" />
      <Typography gutterBottom variant='h5' sx={{ textAlign: 'center' }}>404: Page Not Found</Typography>
      <Typography gutterBottom variant="p">You just hit a route that doesn&#39;t exist...</Typography>
    </Box>
  </Layout>
)

export default NotFoundPage
