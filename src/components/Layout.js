import React from 'react';

//gatsby components
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

//components
import Footer from './Footer';

//mui
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Drawer,
  CssBaseline,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

//mui icons
import PeopleIcon from '@mui/icons-material/People';
import DevicesIcon from '@mui/icons-material/Devices';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import NotesIcon from '@mui/icons-material/Notes';
import ArticleIcon from '@mui/icons-material/Article';
import DownloadIcon from '@mui/icons-material/Download';
import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth = 240;

const linkStyles = {
  textDecoration: 'none',
  color: '#060606',
  display: 'flex',
};

const activeStyles = {
  background: '#efefef',
  color: '#1f1f1f',
  fontWeight: '900',
  paddingRight: '40px',
  borderRadius: '5px',
};

export default function Layout(props) {
  // const window = props.window;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ListItem button>
          <Link to='/about' style={linkStyles} activeStyle={activeStyles}>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary='About' />
          </Link>
        </ListItem>
        <ListItem button>
          <Link to='/stream' style={linkStyles} activeStyle={activeStyles}>
            <ListItemIcon>
              <DevicesIcon />
            </ListItemIcon>
            <ListItemText primary='Connect' />
          </Link>
        </ListItem>
        <ListItem button>
          <Link to='/give' style={linkStyles} activeStyle={activeStyles}>
            <ListItemIcon>
              <VolunteerActivismIcon />
            </ListItemIcon>
            <ListItemText primary='Give' />
          </Link>
        </ListItem>
        <ListItem button>
          <Link to='/article' style={linkStyles} activeStyle={activeStyles}>
            <ListItemIcon>
              <ArticleIcon />
            </ListItemIcon>
            <ListItemText primary='Articles' />
          </Link>
        </ListItem>
        <ListItem button>
          <Link to='/bulletin' style={linkStyles} activeStyle={activeStyles}>
            <ListItemIcon>
              <NotesIcon />
            </ListItemIcon>
            <ListItemText primary='Bulletins' />
          </Link>
        </ListItem>
        <ListItem button>
          <Link to='/downloads' style={linkStyles} activeStyle={activeStyles}>
            <ListItemIcon>
              <DownloadIcon />
            </ListItemIcon>
            <ListItemText primary='Downloads' />
          </Link>
        </ListItem>
      </List>
    </div>
  );

  // const container =
  //   window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position='fixed'
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          boxShadow: 'none',
          background:
            'linear-gradient(rgba(221, 216, 230, 0.5), rgba(104, 43, 209, 0.5))',
        }}
      >
        <Toolbar>
          <IconButton
            edge='start'
            color='info'
            aria-label='open drawer'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Link to='/'>
            <StaticImage
              src='../images/logo.png'
              alt='Foursquare Ipakodo Gospel Church Logo'
              placeholder='blurred'
              layout='fixed'
            />
          </Link>
        </Toolbar>
      </AppBar>
      <Box
        component='nav'
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label='mailbox folders'
      >
        <Drawer
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant='permanent'
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component='main' 
        sx={{ flexGrow: 1, 
        p: 3, 
        padding: 0,
        body: {
          fontFamily: '"Work Sans", sans-serif',
          fontWeight: 400,
        },
        h1: {
          fontFamily: '"Montserrat", sans-serif',
          fontWeight: 700,
        },
        h2: {
          fontFamily: '"Montserrat", sans-serif',
          fontWeight: 700,
        },
        h3: {
          fontFamily: '"Montserrat", sans-serif',
          fontWeight: 700,
        },
        h4: {
          fontFamily: '"Montserrat", sans-serif',
          fontWeight: 700,
        },
        h5: {
          fontFamily: '"Montserrat", sans-serif',
          fontWeight: 700,
        },
        h6: {
          fontFamily: '"Montserrat", sans-serif',
          fontWeight: 700,
        },
      }}>
        <Toolbar />
        <Box
          sx={{
            minHeight: '60vh',       
          }}
        >
          {props.children}
        </Box>
        <Footer />
      </Box>
    </Box>
  );
}
