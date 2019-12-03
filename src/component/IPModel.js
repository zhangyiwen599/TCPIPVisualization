import Paper from '@material-ui/core/Paper';
import Fade from '@material-ui/core/Fade';
import Slide from '@material-ui/core/Slide'
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import React, { Component } from 'react'

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
       
        textAlign: "center",
        //backgroundColor: "yellow"
        backgroundColor:"#cbf5fb",
    },


}));


export default function IPModel(props){
    const classes = useStyles();
    //alert(props.state);
        return(
            props.state < 15 ? <Fade in={props.state >= 1} timeout={1000}>
                    <Grid  container xs={9} className={classes.blank} direction="row" >
                        <Slide direction="up" in={props.state >= 2} timeout={1000}>

                            <Paper elevation="1" square>
                                Version:
                                    <br></br>
                                    4 bit
                                <br></br>
                                {props.data.version}
                                </Paper>
                        </Slide>
                        <Slide direction="up" in={props.state >= 3} timeout={1000}>
                            <Paper elevation="1" square>
                                IHL:
                                <br></br>
                                4 bit
                                <br></br>
                                {props.data.IHL}
                            </Paper>
                        </Slide>
                        <Slide direction="up" in={props.state >= 4} timeout={1000}>
                            <Paper elevation="1" square>
                                DSCP:
                                <br></br>
                                6 bit
                                <br></br>
                                {props.data.DSCP}
                            </Paper>
                        </Slide>
                        <Slide direction="up" in={props.state >= 5} timeout={1000}>
                            <Paper elevation="1" square>
                                ECN:
                                <br></br>
                                2 bit
                                <br></br>
                                {props.data.ECN}
                            </Paper>
                        </Slide>
                        <Slide direction="up" in={props.state >= 6} timeout={1000}>
                            <Paper elevation="1" square>
                                Total Len:
                                <br></br>
                                16 bit
                                <br></br>
                                {props.data.totalLength}
                            </Paper>
                        </Slide>
                        <Slide direction="up" in={props.state >= 7} timeout={1000}>
                            <Paper elevation="1" square>
                                Identification:
                                <br></br>
                                16 bit
                                <br></br>
                                {props.data.identification}
                            </Paper>
                        </Slide>
                        <Slide direction="up" in={props.state >= 8} timeout={1000}>
                            <Paper elevation="1" square>
                                Flags:
                                <br></br>
                                3 bit
                                <br></br>
                                {props.data.flags}
                            </Paper>
                        </Slide>

                        <Slide direction="up" in={props.state >= 9} timeout={1000}>
                            <Paper elevation="1" square>
                                Fragment Offset:
                                <br></br>
                                13 bit
                                <br></br>
                                {props.data.fragmentOffset}
                            </Paper>
                        </Slide>
                        <Slide direction="up" in={props.state >= 10} timeout={1000}>
                            <Paper elevation="1" square>
                                Time To Live:
                                <br></br>
                                8 bit
                                <br></br>
                                {props.data.timeToLive}
                            </Paper>
                        </Slide>
                        <Slide direction="up" in={props.state >= 11} timeout={1000}>
                            <Paper elevation="1" square>
                                Protocol:
                                <br></br>
                                8 bit
                                <br></br>
                                {props.data.protocol}
                            </Paper>
                        </Slide>
                        <Slide direction="up" in={props.state >= 12} timeout={1000}>
                            <Paper elevation="1" square>
                                Header Checksum:
                                <br></br>
                                16 bit
                                <br></br>
                                {props.data.headerChecksum}
                            </Paper>
                        </Slide>
                        <Slide direction="up" in={props.state >= 13} timeout={1000}>
                            <Paper elevation="1" square>
                                SrcIP:
                                <br></br>
                                32 bit
                                <br></br>
                                {props.data.sourceIp}
                            </Paper>
                        </Slide>
                        <Slide direction="up" in={props.state >= 14} timeout={1000}>
                            <Paper elevation="1" square>
                                DestIP:
                                <br></br>
                                32 bit
                                <br></br>
                                {props.data.destIp}
                            </Paper>
                        </Slide>
                        

                        {/* <MouseOverPopover color="#FFFFCC" data={props.data.isTcp?"Tcp Header":"Udp Header"} hoverData={props.data.isTcp?props.data.senderTcpHeader:props.data.udpHeader}></MouseOverPopover>       */}
                    </Grid>
                </Fade> : <div></div>
        );
    
}

