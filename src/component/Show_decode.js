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
import { read } from 'fs';
import { ReactDOM } from 'react-dom';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TCPModel from './TCPModel'
import TCPTable from './TCPTable';
import UDPModel from './UDPModel';
import UDPTable from './UDPTable';
import IPModel from './IPModel';
import IPTable from './IPTable';
import MACModel from './MACModel';
import MACTable from './MACTable';
const num = 124;


var useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,


    },
    header: {
        padding: '0px',
        margin: '0px'
    },
    blank: {
        // padding: theme.spacing(2),
        width: '900px',
        textAlign: "center",
        // borderWidth: 1,
        // borderBlockColor: 'black',
        backgroundColor: "yellow"
    },
    headerContext: {

    },
    senderAppl: {

        position: "absolute",
        left: 0,
        top: 350,
        // width:20,
        margin: 1,
        zIndex: -100
    },
    myButton: {
        position: "absolute",
        left: 20,
        top: 150,
        backgroundColor: '#0099CC'
    },
    myButton1: {
        position: "absolute",
        left: 20,
        top: 200,
        backgroundColor: '#0099CC'
    },
    myButton2: {
        position: "absolute",
        left: 20,
        top: 250,
        backgroundColor: '#0099CC'
    },
    myButton3: {
        position: "absolute",
        left: 20,
        top: 300,
        backgroundColor: '#0099CC'
    },
    config: {
        position: "absolute",
        left: "1200px",
        top: "50px"
    }

}));

export default function Show(props) {
    const classes = useStyles();
    const [ready, setReady] = React.useState(0);
    const [tcpState,setTcpState] = React.useState(0);
    const clickHandler = () => {
        setReady(ready => ready + 1);
        if(ready==1 && props.data.isTcp){
            setReady(ready => 101);
        }
        else if (ready==1){
            setReady(ready => 201)
        }

        if(ready==119){
            setReady(ready=>300);
        }
        else if(ready==205){
            setReady(ready=>300)
        }
    }

    const backHandler = () => {
        setReady(ready => ready - 1);
        if(ready==300){
            if(props.data.isTcp)
                setReady(ready => 119)
            else
                setReady(ready => 205)
        }
        if(ready == 101 || ready==201){
            setReady(ready => 1);
        }
    };

    const resetHandler = () => {
        setReady(ready => 0);
        props.fn();
    };

    const skipHandler =()=>{
        if(ready>=301&&ready<314){
            setReady(ready=>314);
        }
        else if(ready>=101&&ready<119){
            setReady(ready=>119);
        }
        else if(ready>=201&&ready<205){
            setReady(ready=>205);
        }
        else if(ready>=316&&ready<319){
            setReady(ready=>319)
        }

    }

    var width = 11;

    return (

        <div >

            <Button className={classes.myButton} variant="contained" color="primary" onClick={clickHandler}>click</Button>
            <Button className={classes.myButton1} variant="contained" color="primary" onClick={backHandler}>back</Button>
            <Button className={classes.myButton2} variant="contained" color="primary" onClick={resetHandler}>reset</Button>
            <Fade in={(ready>=101&&ready<119)||(ready>=201&&ready<205)||(ready>=301&&ready<314)||(ready>=316&&ready<319)}>
            <Button className={classes.myButton3} variant="contained" color="primary" onClick={skipHandler}>skip</Button>
            </Fade>

            {/* TCP/IP model */}
            
            <Grid container xs={10} className={classes.senderAppl} direction="row-reverse" >

                {/* context */}
                <Fade in={ready >= 1}>
                    <Paper elevation="3" className={classes.paper}>
                        {props.data.context}{'hello'}
                    </Paper>
                </Fade>


                {props.data.isTcp?<TCPModel state={ready-100}></TCPModel>:<UDPModel state={ready-200}></UDPModel>}


                <Fade in={ready >= 300} timeout={1000}>
                    <Paper elevation="3" className={classes.header} >
                        <MouseOverPopover color="#FFFFCC" data={props.data.isTcp ? "Tcp Header" : "Udp Header"} hoverData={props.data.isTcp ? props.data.senderTcpHeader : props.data.udpHeader}></MouseOverPopover>
                    </Paper>
                </Fade>

                <IPModel state={ready-300}></IPModel>

                <Fade in={ready >= 315} timeout={1000}>
                    <Paper elevation="3" className={classes.header} >
                        <MouseOverPopover color="#FFFFCC" data="IP Header" hoverData={props.data.ipHeader}></MouseOverPopover>
                    </Paper>
                </Fade>

                <MACModel state={ready-315}></MACModel>

                {ready<321?<Fade in={ready == 320} timeout={1000}>
                    <Paper elevation="3" className={classes.header} >
                        <MouseOverPopover color="#FFFFCC" data="MAC Header" hoverData={props.data.macHeader}></MouseOverPopover>
                    </Paper>
                </Fade>:<div></div>}
            </Grid>




            {/* table */}
            <Grid container xs={width} className={classes.config}>

                <Paper>

                    <Table className={classes.table} size="small" aria-label="simple table">
                        {/* <TableHead>
                            <TableRow>
                                <TableCell>Configure</TableCell>
                                <TableCell align="right">Value</TableCell>
                            </TableRow>
                        </TableHead> */}
                        
                        {ready<315?ready<300?props.data.isTcp?<TCPTable state={ready-100}></TCPTable>:<UDPTable state={ready-200}></UDPTable>:<IPTable state={ready-300}></IPTable>:<MACTable state={ready-315}> </MACTable>}
                        
                    </Table>
                </Paper>

            </Grid>





        </div>
    )
}

