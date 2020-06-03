import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Img from '../images/IDflix.png'
import { Link } from 'react-router-dom'
// modal
import Modal from './modal'

const useStyles = makeStyles((theme) => ({
   root:
   {
    position: 'fixed',
    backgroundColor: '#1F1F1F',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
   },
   imgCenter:
   {
    position:'absolute',
    width:'65px',
    height:'35px',
    marginLeft:'150px',
    top:'15px',
    alignItems:'center',
    [theme.breakpoints.down('md')]:
    {
        display:'none'
    }
   },
   link :{
       textDecoration:'none',
       paddingLeft:'30px',
       color:'white',
   },
   tombol:
   {
    position:"relative",
    width:100,
    height:theme.height,
    marginRight:'30px',
    float:"right",
    zIndex:200
   }
}));

function cek(isLogin)
{
    if(!isLogin){
    return(
        <div>
        <Modal color="secondary" width="20" height="20" size="small" name="Login"/>                 
        <Modal width="20" height="20" size="small" name="Register"/>  
         </div>
     )}else{
         
     }
}


export default function Header(props) {
  const classes = useStyles();
  const {token}=props

  return (
      <>
      <AppBar className={classes.root}>
        <Toolbar>
            <Grid container direction="row" justify="space-evenly" alignItems="center">
               <Grid item lg>
                <Typography>
                    <Link to="/" className={classes.link}>
                        Home
                    </Link>
                    <Link to="/tvs" className={classes.link}>
                        TV Shows
                    </Link>
                    <Link to="/movies" className={classes.link}>
                        Movies
                    </Link>
                </Typography>
                </Grid>
               <Grid item lg >
                <img src={Img} className={classes.imgCenter} alt="img" />
                </Grid>
               <Grid item justify="flex-end" md>
                 {cek(token)}
                </Grid> 
            </Grid>
        </Toolbar>
      </AppBar>
    </>
    )
}