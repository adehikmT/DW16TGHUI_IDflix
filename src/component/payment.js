import React, { Component } from 'react';
import Button from '@material-ui/core/Button'
import AttachFileIcon from '@material-ui/icons/AttachFile';

class payment extends Component {
    render() {
        var styl={
            color:'white',
            border:3,
            backgroundColor:'#1F1F1F',
            borderColor:'white',
            width:170,
            height:25,
            marginBottom:5
        }

        var fon={
            color:'white',
            fontWight:10,
            marginBottom:5
        }

        var dump={
            color:'#f50057',
            fontWight:100,
            marginBottom:5
        }

        return (
            <>
                <div style={fon}>Bayar sekarang dan nikmati filem filem yang kekinian dari <span style={dump}>Dumplix</span></div>
                <div style={fon}><span style={dump}>Dumplix</span> : 0090909090</div>
                <input type="text" autoFocus style={styl}/>
                <input
                        accept="image/*"
                        className=""
                        style={{ display: 'none' }}
                        id="raised-button-file"
                        type="file"
                        />
                        <label htmlFor="raised-button-file">
                        <Button variant="contained" style={{backgroundColor:'white',maxWidth:8,marginLeft:10}} component="span" className="">
                            <AttachFileIcon style={{color:'#1F1F1F'}}/>
                        </Button>
                        </label> <br></br>
                        <Button variant="contained" color="secondary" style={{width:240,marginTop:7}} className="">
                            submit
                        </Button>
            </>
        );
    }
}

export default payment;