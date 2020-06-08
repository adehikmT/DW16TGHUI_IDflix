import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Divider from '@material-ui/core/Divider';
import MovieIcon from '@material-ui/icons/Movie';
import Payment from '@material-ui/icons/Payment'
import {Link} from 'react-router-dom'
// data
// import Data from '../api/profile'

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('lg')]:
    {
        marginLeft:550
    },
    [theme.breakpoints.down('xs')]: 
    {
       marginTop:-10,
      display:'block'
    },
    
  },
  prof:{
    width:8,
    height:8,
    borderRadius:'50%'
  },
  item:{
    marginRight:10
  },
  link:{
    textDecoration:'none',
    color:'#1F1F1F'
  }
}));

export default function ProfileIcon(props) {
  const classes=useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const cek=(admin)=>{
    if(admin){
     return(<Link to="/transaksi" className={classes.link}><MenuItem onClick={handleClose}><MovieIcon className={classes.item}/>Movies</MenuItem></Link>)
    }else{
      return(<Link to="/payment" className={classes.link}><MenuItem onClick={handleClose}><Payment className={classes.item}/>Pay</MenuItem></Link>)
    }
  }

  const imgicon=<img style={{width:40,height:40,borderRadius:'50%'}} src="https://scontent.fbdo6-1.fna.fbcdn.net/v/t1.0-9/54514220_581505695684382_7911727614937530368_o.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_eui2=AeFtK3Cug8n3n5Pq-bni3ouzqVuMxc2BugupW4zFzYG6C_kFzIMrgfjeWT8H50p8BLoVcC5I8ER7oliKclEAmv9Y&_nc_oc=AQlUlAtxINtEJZNUM0tdA-2pWQz6pP5WThzkvgnGG3rAgAKwDvJ4JeQh9gi01RBjGag&_nc_ht=scontent.fbdo6-1.fna&oh=541cbf0ecc4d95f4aeab8233d3fce3ab&oe=5EFC3D48" alt="img"/>

  return (
            <div  className={classes.root}>
              
                <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                {imgicon}   
              </IconButton> 
              <Menu style={{marginTop:10}}
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <Link to="profile" className={classes.link}><MenuItem onClick={handleClose}><AccountCircle className={classes.item}/>Profile</MenuItem></Link>
                {cek(props.admin)}
                <Divider />
                <Link to="/" className={classes.link}><MenuItem onClick={handleClose}><ExitToAppIcon className={classes.item}/>Logut</MenuItem></Link>
              </Menu> 
    </div>
  );
}
