import React, { Component } from 'react';
import Header from '../component/header'
import Jumbotron from '../component/jumbotron'
import ListFilm from '../component/listFilem'
import Footer from '../component/foooter'
// data
import Data from '../api/filem'

class dashboard extends Component
{
    constructor(props){
        super()
    
    }
    render() 
    {
        var filem=Data.filter(dt=>dt.kategori==='Filem')
        var tv=Data.filter(dt=>dt.kategori==='Tv')
        return (
            // fragmen
           <>
                <Header token={this.props.token}/>
                <Jumbotron/>
                <ListFilm kategori="TV Series" data={tv}/>
                <ListFilm kategori="Movies" data={filem}/>
                <Footer created=" DumpWays Ade 2020"/>
                
            </>
        );
    }
}

export default dashboard;