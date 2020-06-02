import React from 'react'
import CardMedia from '@material-ui/core/CardMedia'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root:
    {
     position:'absolute'
    },
 }));

export default function Jumbotron(props){
    const classes=useStyles()

    return(
        <>
        <h1>test</h1>
        <CardMedia className={classes.root} image="https://1000logos.net/wp-content/uploads/2017/11/Netflix-Logo-png.png" title="test"/>
        </>
    )
}