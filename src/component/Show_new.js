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
        width: 100,
        textAlign: "center",
        // borderWidth: 1,
        // borderBlockColor: 'black',
        backgroundColor: "yellow"
    },
    headerContext: {

    },
    senderAppl: {

        position: "absolute",
        left: 200,
        top: 500,
        // width:20,
        margin: 1,

    },
    myButton: {
        position: "absolute",
        left: 20,
        top: 200,
        backgroundColor: '#0099CC'
    },
    myButton1: {
        position: "absolute",
        left: 20,
        top: 250,
        backgroundColor: '#0099CC'
    },
    myButton2: {
        position: "absolute",
        left: 20,
        top: 300,
        backgroundColor: '#0099CC'
    },
    config:{
        position:"absolute",
        left:"600px",
        top:"80px"
    }

}));

export default function Show(props) {
    const classes = useStyles();
    const [ready, setReady] = React.useState(0);
    const clickHandler = () => {
        setReady(ready => ready + 1);
    };

    const backHandler = () => {
        setReady(ready => ready - 1);
    };

    const resetHandler = () => {
        setReady(ready => 0);
        props.fn();
    };

    var width = 6;

    return (

        <div >

            <Button className={classes.myButton} variant="contained" color="primary" onClick={clickHandler}>click</Button>
            <Button className={classes.myButton2} variant="contained" color="primary" onClick={backHandler}>back</Button>
            <Button className={classes.myButton1} variant="contained" color="primary" onClick={resetHandler}>reset</Button>


            <Grid container xs={width} className={classes.senderAppl} direction="row-reverse" >
                <Fade in={ready >= 1}>
                    <Paper elevation="3" className={classes.paper}>
                        {props.data.context}{'hello'}
                    </Paper>
                </Fade>
                {ready < 5 ? <Fade in={ready >= 2} timeout={1000}>
                    <Grid xs={width} container className={classes.blank} direction="row" >
                        <Slide direction="up" in={ready >= 3} timeout={1000}>

                            <Paper elevation="1" square>
                                sendPort:
                                    <br></br>
                                4000
                                </Paper>
                        </Slide>
                        <Slide direction="up" in={ready >= 4} timeout={1000}>
                            <Paper elevation="1" square>
                                ReciverPort:
                                <br></br>
                                4001
                            </Paper>
                        </Slide>


                        {/* <MouseOverPopover color="#FFFFCC" data={props.data.isTcp?"Tcp Header":"Udp Header"} hoverData={props.data.isTcp?props.data.senderTcpHeader:props.data.udpHeader}></MouseOverPopover>       */}
                    </Grid>
                </Fade> : ""}


                <Fade in={ready >= 5} timeout={1000}>
                    <Paper elevation="3" className={classes.header} >
                        <MouseOverPopover color="#FFFFCC" data={props.data.isTcp ? "Tcp Header" : "Udp Header"} hoverData={props.data.isTcp ? props.data.senderTcpHeader : props.data.udpHeader}></MouseOverPopover>
                    </Paper>
                </Fade>


            </Grid>



            <Grid container xs={width} className={classes.config}>
                <Paper>
                    <Table className={classes.table} size="small" aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Configure</TableCell>
                                <TableCell align="right">Value</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <Slide direction="down" in={ready<3} timeout={1000}>
                            <TableRow >
                                <TableCell component="th" scope="row">
                                    {"SenderPort"}
                                </TableCell>
                                <TableCell align="right">4000</TableCell>
                            </TableRow>
                            </Slide>

                            <Slide direction="down" in={ready<4} timeout={1000}>
                            <TableRow >
                                <TableCell component="th" scope="row">
                                    {"ReciverPort"}
                                </TableCell>
                                <TableCell align="right">4001</TableCell>
                            </TableRow>
                            </Slide>
                        </TableBody>
                    </Table>
                </Paper>
            </Grid>





        </div>
    )
}


