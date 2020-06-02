import React, { Component } from 'react';
import Header from '../component/header'
import Modal from '../component/jumbotron'
class dashboard extends Component
{
    render() 
    {
        return (
            // fragmen
           <>
                <Header/>
                <Modal/>
            </>
        );
    }
}

export default dashboard;