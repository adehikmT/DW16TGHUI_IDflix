import React from 'react';
import Grid from '@material-ui/core/Grid'
import {makeStyles} from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
// card
import CardFilm from './cardFilm'
//data
import Data from '../api/filem'

const useStyles = makeStyles((theme) => ({
    root:
    {
        backgroundColor:'#000000',
        width:'100%',
        marginBottom:0,
        marginRight:30,
    },
    judul:{
        color:'white',
        backgroundColor:'#000000',
        fontSize:20,
        paddingLeft:30,
        paddingBottom:20,
        paddingTop:20
    }
}))

const List=Data.map((data,index)=>{
    return(
        <Grid key={index} item lg={2} xl={1}>
                <CardFilm key={index} imgUrl={data.imgUrl} judul={data.judul} tahun={data.tahun} />
            </Grid>
    )
})

export default function ListFilem(props){
    const classes=useStyles();
    
    return (
        <section className={classes.root}>
            <Container>
         <div className={classes.judul}>{props.kategori}</div>
        <Grid container >
          {List}
        </Grid>
        </Container>
        </section>
    )
} 