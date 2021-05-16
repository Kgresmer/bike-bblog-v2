import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  appBar: {
    backgroundColor: 'darkmagenta'
  },
  menuButton: {
    flex: 1
  },
  title: {
    flex: 15
  },
  login: {
    flex: 1
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
      <Toolbar>
        <IconButton aria-controls="simple-menu" aria-haspopup="true" edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleClick}>
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem className={classes.menuItem} onClick={() => handleClose('/home')}>Home</MenuItem>
          <MenuItem className={classes.menuItem} onClick={() => handleClose('/gallery')}>Gallery</MenuItem>
        </Menu>
        <Typography variant="h6" className={classes.title}>
          News
        </Typography>
        <Button color="inherit" className={classes.login}>Login</Button>
      </Toolbar>
    </AppBar>
  )
}
