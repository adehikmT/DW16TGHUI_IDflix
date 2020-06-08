import React, { Component } from 'react';
import Pay from '../component/addFilem'
import '../styles/profile.css'
import Header from '../component/header'
import Foo from '../component/foooter'
import Button from '@material-ui/core/Button'


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

    // componentWillMount(){
    //     var save=<Pay/>
    // }

    render() {
        return (
            <>
            <Header token="true" admin={true}/>
            <div className="center">        
                <Pay /> 
                {/* {this.save} */}
                    <Button variant="contained" onClick={()=>this.HendleClick} color="secondary" style={{width:100,marginTop:7}} className="">
                            save
                    </Button>
            </div>
            <Foo /> 
            </>
        );
    }
}
export default AddFilem;