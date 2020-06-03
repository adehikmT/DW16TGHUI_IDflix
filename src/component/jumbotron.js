import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Img from '../images/jumbotron.png'
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
// data
import Data from '../api/dashboard'


const useStyles = makeStyles((theme) => ({
    root:
    {
        position:'absolute',
        width:'100%',
        marginTop:40,
        [theme.breakpoints.down('md')]:
        {
            marginTop:40
        }
    },
    text:{
        zIndex:'99',
        position:'relative',
        display:'inline-block',
        marginTop:'100px'
    },
    blur:{
        zIndex:'9',
        position:'relative',
        display:'inline-block',
        width:'100%',
        height:'720px',
        backgroundImage: 'linear-gradient(to top, rgba(0,0,0,5),rgba(0,0,0,0))',
        [theme.breakpoints.down('md')]:
        {
            height:'300px'
        }
    },
    witcher:{
        width:'35%',
        height:'5%',
        display:'inline-block',
        marginLeft:100,
        [theme.breakpoints.down('md')]:
        {
            marginLeft:30,
        }
    },
    quote:{
        width:'45%',
        paddingLeft:100,
        fontSize:20,
        letterSpacing:1,
        fontWeight:400,
        color:'#d0d0d0',
        textShadow:'2px 2px 4px #000000',
        [theme.breakpoints.down('md')]:
        {
            paddingLeft:30,
            fontSize:0
        }
    },
    btnparnt:{
        marginLeft:100,
        [theme.breakpoints.down('md')]:
        {
            width:80,
            height:30,
            fontSize:10,
            marginLeft:55,
            marginTop:5
        }
    }
 }));

export default function Jumbotron(props){
    const classes=useStyles()
    const data=Data;

    return(
        <>
        <div>
            <img src={Img} alt="null" className={classes.root}/>          
            <div className={classes.blur}>
            <div className={classes.text}>
                <Grid container direction="row" alignItems="flex-start">
                    <Grid item lg>
                    <img src={data.img} alt="null" className={classes.witcher}/>          
                    </Grid>
                </Grid> 
                <Grid container direction="row" alignItems="flex-start">
                    <Grid item lg>
                        <p className={classes.quote}>
                        {data.quotes} 
                        <Link to="/tvs" style={{textDecoration:'none',marginLeft:10}}>
                        <Button  size="small" variant="outlined">tv Series</Button>
                        </Link>
                         </p>
                    </Grid>
                </Grid> 
                <Grid container direction="row" alignItems="flex-start">
                    <Grid item lg>
                    <Button className={classes.btnparnt} size="large" variant="contained" color="secondary">Whatc Now !</Button>
                    </Grid>
                </Grid>
            </div>
            </div>
        </div>
        </>
    )
}