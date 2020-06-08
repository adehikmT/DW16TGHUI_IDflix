import React from 'react';
import Grid from '@material-ui/core/Grid'
import {makeStyles} from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
// slide
import Slide from './slide'
// card
import CardFilm from './cardFilm'
import Admin from './sectionAdmin'
//data

const useStyles = makeStyles((theme) => ({
    root:
    {
        backgroundColor:'#000000',
        width:'100%',
        marginBottom:0,
        paddingBottom:30,
        marginRight:30,
        color:'white',
        position:'relative'
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

var data=[
    {
        'id':1,
        'imgUrl':'https://i.pinimg.com/originals/29/38/09/2938097913a0ffd50f96b2e8c0c9baab.jpg',
        'vidioUrl':'https://www.youtube.com/watch?v=kYZut3DWvek',
        'judul':'Cripto',
        'tahun':'2019',
        'detail':'Directed by John Stalberg Jr.. With Beau Knapp, Luke Hemsworth, Jill Hennessy, Alexis Bledel. Demoted back to his hometown, a young Wall Street banker is drawn into investigating a tangled web of corruption and fraud in Upstate New York, affecting both his personal life and business career',
        'kategori':'filem',
        'imgDetail':[
            'https://3mgj4y44nc15fnv8d303d8zb-wpengine.netdna-ssl.com/wp-content/uploads/2018/08/New-Crypto-Film-with-Kurt-Russell-Required-Some-Research-in-Cryptocurrency-Industry-for-Authenticity-696x449.jpg',
            'https://d3eivijab0jogk.cloudfront.net/wp-content/uploads/2019/03/crypto-film-youtube.jpg',
            'https://img.yts.yt/20190413/20843/crypto-2019-1080p-largescreenshot3.jpg'
        ]
    },
    {
        'id':2,
        'imgUrl':'http://fr.web.img3.acsta.net/pictures/18/06/29/09/23/0847774.jpg',
        'vidioUrl':'https://www.youtube.com/watch?v=M1bS7YZniRk',
        'judul':'Ciber',
        'tahun':'2018',
        'detail':'Bride - After the tragic death of his wife, Rick crippled in loneliness, stumbles onto the dark web after learning that his neighbors very odd wife is actually a cyborg.',
        'kategori':'filem',
        'imgDetail':[
            'https://occ-0-3111-114.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABY4msv6yzsmqA-vmRKUr98GOatkwKMFpY_wSyIOuYgz071wKW_UFFBlZIFFx-0PW1Ll3F1BtKHEs4uzY6Pv3DKOYLSnT3qjYnQ.jpg?r=cbc',
            'https://occ-0-3011-116.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABQNZC0MvOLSoX4EQBdoK7gFwPJCYVn9pgEc6f9XTtoxY_j3Yd201PKCI13iJa8DoItOJ5tIc_qHUAtj5KwkrgmliYChV.jpg?r=c81',
            'https://occ-0-3011-114.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABdbUvnb7IfCykFMgreaupL9TROCY-Zxv3Ajx68B89Ru4A0w60vHBBn6O5X63opco8uomOQ5tB7Faxz62gL1zZws0P5tv.jpg?r=773'
        ]
    }
]

export default function ListFilem(props){
    const classes=useStyles();

    var list=props.id === 1 ? 1 : 0

    function cek(admin){
        if(admin){
                return <Admin detail={true}/>
        }
    }

    return (
        <section className={classes.root}>
            {cek(props.admin)}
            <Container>
        <Grid container >
            <Grid  item lg={3} xl={1}>
            <CardFilm imgUrl={data[list].imgUrl} list={true}/>
            </Grid>
            <Grid item lg={5} xl={1}>
                <h2>{data[list].judul}</h2>
                <p>{data[list].detail}</p>
            </Grid>
            <Grid item lg={4} xl={1}>
            <Slide imgSlide={data[list].imgDetail}/>
            </Grid>
        </Grid>
        </Container>
        </section>
    )
} 