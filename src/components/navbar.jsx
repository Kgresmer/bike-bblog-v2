import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {useHistory} from 'react-router-dom';
import {Link} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  toolbar: {
    backgroundColor: 'darkmagenta',
    justifyContent: 'space-between'
  },
  menuButton: {},
  title: {
    color: 'white',
    '&:hover': {
      textDecoration: 'none !important'
    },
  },
  navButton: {
    padding: '0 15px'
  },
  menuItem: {
    padding: '10px 40px'
  }
}));

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();
  const history = useHistory();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (routeName) => {
    setAnchorEl(null);
    history.push(routeName);
  };

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        {/* Adjust later to be hamburger with mobile*/}
        {/*<IconButton aria-controls="simple-menu" aria-haspopup="true" edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleClick}>*/}
        {/*  <MenuIcon />*/}
        {/*</IconButton>*/}
        {/*<Menu*/}
        {/*  id="menu"*/}
        {/*  anchorEl={anchorEl}*/}
        {/*  keepMounted*/}
        {/*  open={Boolean(anchorEl)}*/}
        {/*  onClose={handleClose}*/}
        {/*>*/}
        {/*  <MenuItem className={classes.menuItem} onClick={() => handleClose('/home')}>Home</MenuItem>*/}
        {/*  <MenuItem className={classes.menuItem} onClick={() => handleClose('/about')}>About</MenuItem>*/}
        {/*</Menu>*/}
        <div>
          <Link href='/home' className={classes.title}>
            <Typography variant="h3">
              120 Spokes
            </Typography>
          </Link>
        </div>
        <div>
          <Link color="inherit" className={classes.navButton} href='/tours'>Bike Tours</Link>
          <Link color="inherit" className={classes.navButton} href='/about'>About</Link>
        </div>
      </Toolbar>
    </AppBar>
  )
}
