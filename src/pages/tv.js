import React, { Component } from 'react';
import Header from '../component/header'
import Jumbotron from '../component/jumbotron'
import ListFilm from '../component/listFilem'
import Footer from '../component/foooter'
// router

class Tv extends Component
{
    constructor(props){
        super()
    
    }
    render() 
    {
        return (
            // fragmen
           <>
                <Header token={this.props.token}/>
                <Jumbotron/>
                <ListFilm kategori="TV Series"/>
                <Footer created=" DumpWays Ade 2020"/>
                
            </>
        );
    }
}

export default Tv;