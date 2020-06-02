import React, { Component } from 'react'
// import AppBar from '@material-ui/core/AppBar'
// import ToolBar from '@material-ui/core/Toolbar'
// import Typography from '@material-ui/core/Typography'
import {makeStyles,createStyles,AppBar,Toolbar,Typography } from '@material-ui/core'

    
class header extends Component
{
    useStyles = makeStyles((theme) => createStyles({
        appBar:{
            position:'absolute',
            backgroundColor:'#1F1F1F',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
        }
    }))

    render() 
    {    
        const classes=this.useStyles()
        return (
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <Typography>
                       test id ok
                    </Typography>
                </Toolbar>
            </AppBar>
        );
    }
}

export default header;