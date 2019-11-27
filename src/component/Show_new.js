import React, { Component } from 'react'
import Block from './Block'
import SubBlock from './SubBlock';
import GenHeaders from './GenHeaders';
// inport {bounce} from "react-"

import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Fade from '@material-ui/core/Fade';
import Slide from '@material-ui/core/Slide'

import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import MouseOverPopover from './MouseOverPopover';
import { border } from '@material-ui/system';

const num = 124;


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper:{
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    header:{
        padding:'0px',
        margin:'0px'
    },
    blank:{
        // padding: theme.spacing(2),
        width:100,
        textAlign:"left",
        border:1
    },
    headerContext:{
        
    },
    senderAppl: {
        
        position:"absolute",
        left: 200 ,
        top: 500 ,
        // width:20,
        margin:1,
       
    },
    myButton:{
        position:"absolute",
        left: 20 ,
        top: 200 ,
        backgroundColor :'#0099CC'
    },
    myButton1:{
        position:"absolute",
        left: 20 ,
        top: 250 ,
        backgroundColor :'#0099CC'
    }

}));

export default function Show(props) {
    const classes = useStyles();
    const [ready,setReady] = React.useState(0);
    const clickHandler = () => {
        setReady(ready=>ready+1);
    };

    const resetHandler = () => {
        setReady(ready=>0);
        props.fn();
    };

    var width = 6;
   
    return (
        
        <div>

            <Button className={classes.myButton} variant="contained" color="primary" onClick={clickHandler}>click</Button>
            <Button className={classes.myButton1} variant="contained" color="primary" onClick={resetHandler}>reset</Button>

        
            <Grid container xs={width} className={classes.senderAppl} direction="row-reverse" >
                <Fade in={ready >= 1}>
                    <Paper elevation="3" className={classes.paper}>
                        {props.data.context}
                    </Paper>
                </Fade>
                <Slide in={ready >= 2}>
                    <Grid container xs={width} className={classes.blank} direction="row">      
                            <Fade in={ready>=3} timeout={1000}>
                                <Paper elevation='3' elevation="0">
                                    haha
                                </Paper>
                            </Fade>
                            <Fade in={ready>=4} timeout={1000}>
                                <Paper elevation="3">
                                    hehe
                                </Paper>
                            </Fade>
                        
                        {/* <MouseOverPopover color="#FFFFCC" data={props.data.isTcp?"Tcp Header":"Udp Header"} hoverData={props.data.isTcp?props.data.senderTcpHeader:props.data.udpHeader}></MouseOverPopover>       */}
                    </Grid>
                </Slide>
                
                <Slide in={ready >= 20}>
                    <Paper elevation="3" className={classes.header}>
                    <MouseOverPopover color="#FFFFCC" data={props.data.isTcp?"Tcp Header":"Udp Header"} hoverData={props.data.isTcp?props.data.senderTcpHeader:props.data.udpHeader}></MouseOverPopover>      
                    </Paper>
                </Slide>
            </Grid>
           

           
            <Grid container xs={width} className={classes.senderApplConfig}>
                <Paper>

                </Paper>
            </Grid>
            

          


        </div>
    )
}


