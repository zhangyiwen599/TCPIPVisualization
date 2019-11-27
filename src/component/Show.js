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
    senderAppl: {
        
        position:"absolute",
        left: 200 ,
        top: 100 ,
        // width:20,
        margin:1,
       
    },
    senderTrans:{
        
        position:"absolute",
        left: 200 ,
        top: 200 ,
        // width:20,
        margin:1,
    },
    senderNet:{  
        position:"absolute",
        left: 200 ,
        top: 300 ,
        // width:20,
        margin:1,
    },
    senderDataChain:{
        position:"absolute",
        left: 200 ,
        top: 400 ,
        margin:1,
    },
    reciverDataChain:{
        position:"absolute",
        left: 800 ,
        top: 400 ,
        margin:1,
    },
    reciverNet:{
        position:"absolute",
        left: 800 ,
        top: 300 ,
        margin:1,
    },
    reciverTrans:{
        position:"absolute",
        left: 800 ,
        top: 200 ,
        margin:1,
    },
    reciverAppl:{
        position:"absolute",
        left: 800 ,
        top: 100 ,
        margin:1,
    },
    physical:{
        position:"absolute",
        left: 200 ,
        top: 500 ,
        
        textAlign:"center",
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

            <Fade in={ready >= 1}>
                <Grid container xs={width} className={classes.senderAppl} direction="row">
                    <Paper elevation="3" className={classes.paper}>
                        {props.data.context}
                    </Paper>
                    
                </Grid>
            </Fade>

            <Slide in={ready >= 2}>
                
                    <Grid container xs={width} className={classes.senderTrans} direction="row"> 
                        <Paper elevation="3" className={classes.paper}>
                            {props.data.context}
                        </Paper>
                        <MouseOverPopover color="#FFFFCC" data={props.data.isTcp?"Tcp Header":"Udp Header"} hoverData={props.data.isTcp?props.data.senderTcpHeader:props.data.udpHeader}></MouseOverPopover>
                        
                        
                    </Grid>
                    
            </Slide>

            <Slide in={ready >= 3}>
                
                    <Grid container xs={width} className={classes.senderNet} direction="row"> 
                        <Paper elevation="3" className={classes.paper}>
                            {props.data.context}
                        </Paper>
                        <MouseOverPopover color="#FFFFCC" data={props.data.isTcp?"Tcp Header":"Udp Header"} hoverData={props.data.isTcp?props.data.senderTcpHeader:props.data.udpHeader}></MouseOverPopover>
                        
                        <MouseOverPopover color="#CCFFFF" data={"IP Header"} hoverData={props.data.ipHeader}></MouseOverPopover>
                        
                    </Grid>
                    
            </Slide>


            <Slide in={ready >= 4}>
                
                    <Grid container xs={width} className={classes.senderDataChain} direction="row"> 
                        {props.data.needAdd?<Paper elevation="3" className={classes.paper}> 
                        Byte Stuffing</Paper>:""}
                        <Paper elevation="3" className={classes.paper}>
                            {props.data.context}
                        </Paper>
                        <MouseOverPopover color="#FFFFCC" data={props.data.isTcp?"Tcp Header":"Udp Header"} hoverData={props.data.isTcp?props.data.senderTcpHeader:props.data.udpHeader}></MouseOverPopover>
                        <MouseOverPopover  color="#CCFFFF" data={"IP Header"} hoverData={props.data.ipHeader}></MouseOverPopover>
                        <MouseOverPopover color="#CCFF99" data={"MAC Header"} hoverData={props.data.macHeader}></MouseOverPopover>
                        
                        

                    </Grid>
                    
            </Slide>

            <Slide in={ready >= 5}>
                
                    <Grid container  className={classes.physical} direction="row"> 
                        <Grid xs={8}>
                        <Paper elevation="3" className={classes.paper}>
                            {"Physical Layer"}
                        </Paper>
                        </Grid>
                    </Grid>
                    
            </Slide>

            {/******************************* */}
            {/***********    reciver     ********** */}
            {/******************************* */}

            <Slide in={ready >= 6}>
                
                <Grid container xs={width} className={classes.reciverDataChain} direction="row"> 
                    {props.data.needAdd?<Paper elevation="3" className={classes.paper}> 
                     Byte Stuffing</Paper>:""}
                    <Paper elevation="3" className={classes.paper}>
                        {props.data.context}
                    </Paper>
                    <MouseOverPopover color="#FFFFCC" data={props.data.isTcp?"Tcp Header":"Udp Header"} hoverData={props.data.isTcp?props.data.reciverTcpHeader:props.data.udpHeader}></MouseOverPopover>
                    <MouseOverPopover color="#CCFFFF" data={"IP Header"} hoverData={props.data.ipHeader}></MouseOverPopover>
                    <MouseOverPopover color="#CCFF99" data={"MAC Header"} hoverData={props.data.macHeader}></MouseOverPopover>
                    

                </Grid>
                
            </Slide>


            <Slide in={ready >= 7}>
                
                <Grid container xs={width} className={classes.reciverNet} direction="row"> 
                    <Paper elevation="3" className={classes.paper}>
                        {props.data.context}
                    </Paper>
                    <MouseOverPopover color="#FFFFCC" data={props.data.isTcp?"Tcp Header":"Udp Header"} hoverData={props.data.isTcp?props.data.reciverTcpHeader:props.data.udpHeader}></MouseOverPopover>
                    <MouseOverPopover  color="#CCFFFF" data={"IP Header"} hoverData={props.data.ipHeader}></MouseOverPopover>
                   

                </Grid>
                
            </Slide>


            <Slide in={ready >= 8}>
                
                <Grid container xs={width} className={classes.reciverTrans} direction="row"> 
                    <Paper elevation="3" className={classes.paper}>
                        {props.data.context}
                    </Paper>
                    <MouseOverPopover color="#FFFFCC" data={props.data.isTcp?"Tcp Header":"Udp Header"} hoverData={props.data.isTcp?props.data.reciverTcpHeader:props.data.udpHeader}></MouseOverPopover>
                  

                </Grid>
                
            </Slide>

            <Slide in={ready >= 9}>
                <Grid container xs={width} className={classes.reciverAppl} direction="row">
                    <Paper elevation="3" className={classes.paper}>
                        {props.data.context}
                    </Paper>
                    
                </Grid>
            </Slide>
            {/* 
                <div id="physical">
                    
                </div>  */}

            {/* <CenteredGrid>

                </CenteredGrid> */}


        </div>
    )
}


