import React, { Component } from 'react';
import Header from '../component/header'
import Jumbotron from '../component/jumbotron'
import ListFilm from '../component/listFilem'
import Footer from '../component/foooter'
// router
import {useLocation} from 'react-router-dom'

class dashboard extends Component
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
                <ListFilm kategori="Filem"/>
                <Footer created=" DumpWays Ade 2020"/>
                
            </>
        );
    }
}

export default dashboard;