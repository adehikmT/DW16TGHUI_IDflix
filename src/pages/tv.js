import React, { Component } from 'react';
import Header from '../component/header'
import Jumbotron from '../component/jumbotron'
import ListFilm from '../component/listFilem'
import Footer from '../component/foooter'
// router
import Data from '../api/filem'
class Tv extends Component
{
    constructor(props){
        super()
    
    }
    render() 
    {
       var tv=Data.filter(dt=>dt.kategori==='Tv')
        return (
            // fragmen
           <>
                <Header token={this.props.token}/>
                <Jumbotron token={this.props.token}/>
                <ListFilm kategori="TV Series" data={tv}/>
                <Footer created=" DumpWays Ade 2020"/>
                
            </>
        );
    }
}

export default Tv;