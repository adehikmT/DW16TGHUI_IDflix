import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Img from '../images/jumbotron.png'


const useStyles = makeStyles((theme) => ({
    root:
    {
        position:'absolute',
        width:'100%'
    },
    text:{
        zIndex:'99',
        position:'relative',
        display:'inline-block',
        marginTop:'200px'
    },
    blur:{
        zIndex:'9',
        position:'relative',
        display:'inline-block',
        width:'100%',
        height:'680px',
    	backgroundImage: 'linear-gradient(to top, rgba(0,0,0,1),rgba(0,0,0,0))',
    },
 }));

export default function Jumbotron(props){
    const classes=useStyles()

    return(
        <>
        <div>
            <img src={Img} alt="null" className={classes.root}/>          
            <div className={classes.blur}>
            <span className={classes.text}> tez</span>
            </div>
          
        </div>
        </>
    )
}