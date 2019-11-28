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
        else if (ready==2){
            setReady(ready => 201)
        }

        if(ready==119){
            setReady(ready=>300);
        }
    }

    const backHandler = () => {
        setReady(ready => ready - 1);
        if(ready==300){
            setReady(ready => 119)
        }
        if(ready == 101 || ready==201){
            setReady(ready => 1);
        }
    };

    const resetHandler = () => {
        setReady(ready => 0);
        props.fn();
    };

    var width = 11;

    return (

        <div >

            <Button className={classes.myButton} variant="contained" color="primary" onClick={clickHandler}>click</Button>
            <Button className={classes.myButton2} variant="contained" color="primary" onClick={backHandler}>back</Button>
            <Button className={classes.myButton1} variant="contained" color="primary" onClick={resetHandler}>reset</Button>



            {/* TCP/IP model */}
            <Grid container xs={10} className={classes.senderAppl} direction="row-reverse" >

                {/* context */}
                <Fade in={ready >= 1}>
                    <Paper elevation="3" className={classes.paper}>
                        {props.data.context}{'hello'}
                    </Paper>
                </Fade>


                {props.data.isTcp?<TCPModel state={ready-100}></TCPModel>:{}}


                <Fade in={ready >= 300} timeout={1000}>
                    <Paper elevation="3" className={classes.header} >
                        <MouseOverPopover color="#FFFFCC" data={props.data.isTcp ? "Tcp Header" : "Udp Header"} hoverData={props.data.isTcp ? props.data.senderTcpHeader : props.data.udpHeader}></MouseOverPopover>
                    </Paper>
                </Fade>


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
                        
                        {props.data.isTcp?<TCPTable state={ready-100}></TCPTable>:{}}
                        
                    </Table>
                </Paper>

            </Grid>





        </div>
    )
}


