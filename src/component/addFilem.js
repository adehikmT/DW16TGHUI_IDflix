import React, { Component } from 'react';
import Button from '@material-ui/core/Button'
import AttachFileIcon from '@material-ui/icons/AttachFile';

class Addfilem extends Component {
    render() {
        var styl={
            color:'white',
            border:3,
            backgroundColor:'#1F1F1F',
            borderColor:'white',
            width:226,
            height:25,
            marginBottom:5
        }

        var fon={
            color:'white',
            fontWight:10,
            marginBottom:5
        }
        var styl1={
            color:'white',
            border:3,
            backgroundColor:'#1F1F1F',
            borderColor:'white',
            width:300,
            height:25,
            marginBottom:5,
            marginTop:5
        }
    

        return (
            <div>
                <div style={fon}>Add Filem</div>
                <input type="text" placeholder="title" autoFocus style={styl}/>
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
                        <input type="text" placeholder="year" style={styl1}/>
                        <br></br>
                        <select style={styl1}>
                        <option>Kategori</option>
                        <option>Filem</option>
                        <option>Tv</option>
                        </select>
                        <br></br>
                        <textarea placeholder="deskripsi" style={{backgroundColor:'#1F1F1F',color:'white',width:'295px'}}></textarea>
                        <br></br>
                        <Button variant="contained" color="secondary" style={{width:100,marginTop:7}} className="">
                            save
                        </Button>
            </div>
        );
    }
}

export default Addfilem;