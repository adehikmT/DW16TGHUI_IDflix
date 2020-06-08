import React, { Component } from 'react';
import Pay from '../component/addFilem'
import '../styles/profile.css'
import Header from '../component/header'
import Foo from '../component/foooter'
// import Button from '@material-ui/core/Button'


class AddFilem extends Component {

    constructor(){
        super()
        this.state={
            'row':1
        }
    }

    HendleClick(){
        this.setState({
            'row':this.state.row+1
        })
    }

    render() {
        return (
            <>
            <Header token="true" admin={true}/>
            <div className="center">        
                <Pay /> 
            </div>
            <Foo /> 
            </>
        );
    }
}
export default AddFilem;