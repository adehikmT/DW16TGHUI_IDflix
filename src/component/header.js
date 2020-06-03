import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import ButtonCustom from './button'
import Img from '../images/IDflix.png'
import { Link } from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
   root:
   {
    position: 'absolute',
    backgroundColor: '#1F1F1F',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
   },
   imgCenter:
   {
    position:'absolute',
    width:'70px',
    height:'40px',
    marginLeft:'150px',
    top:'10px',
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
   }
}));

export default function Header(props) {
  const classes = useStyles();
  
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
               <Grid item md>
                                
                  <ButtonCustom name="Login" href="#log" width="300px" color="secondary" size="small"
                  colortext="red" margin="11px"
                  />                 
                  <ButtonCustom name="Register" href="#reg" width="300px" size="small"
                  colortext="red"
                  />   

                </Grid>
            </Grid>
        </Toolbar>
      </AppBar>
    </>
    )
}