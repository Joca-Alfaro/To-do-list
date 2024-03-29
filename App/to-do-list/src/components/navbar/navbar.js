import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import FolderIcon from '@mui/icons-material/Folder';
import StyleIcon from '@mui/icons-material/Style';

import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  margin: theme.spacing(1, 1, 1, 5),
  padding: theme.spacing(4, 3, 3, 3),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function Navbar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const listaTareas = [
    { "Nombre": "Filtros y Etiquetas", "path": '/FiltrosAndEtiquetas' },
    { "Nombre": "Folders", "path": '/Folders' },
    { "Nombre": "Usuarios ", "path": '/Usuarios' },
    { "Nombre": "Favoritos ", "path": 'Favorites' },
    { "Nombre": "Tareas ", "path": '/Tareas' },


  ]
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            App de Tareas
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {listaTareas.map((text, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <Link to={text.path}>
                  <ListItemIcon>

                    {index % 2 === 0 ? <StyleIcon /> : <FolderIcon /> }

                  </ListItemIcon>
                  <ListItemText primary={text.Nombre} />
                </Link>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        {/* <List>
          {listaTareas.map((text, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <Link to={text.path}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <PeopleOutlineIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text.Nombre} />
                </Link>
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
        <Divider />
      </Drawer>
      <DrawerHeader />
    </Box>
  );
}