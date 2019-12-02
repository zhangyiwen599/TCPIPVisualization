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
        width: '900px',
        textAlign: "center",
          backgroundColor: "yellow"
    },


}));


export default function IPModel(props){
    const classes = useStyles();
    //alert(props.state);
        return(
            props.state < 15 ? <Fade in={props.state >= 1} timeout={1000}>
                    <Grid xs="10" container className={classes.blank} direction="row" >
                        <Slide direction="up" in={props.state >= 2} timeout={1000}>

                            <Paper elevation="1" square>
                                Version:
                                    <br></br>
                            
                                </Paper>
                        </Slide>
                        <Slide direction="up" in={props.state >= 3} timeout={1000}>
                            <Paper elevation="1" square>
                                IHL:
                                <br></br>
                                4001
                            </Paper>
                        </Slide>
                        <Slide direction="up" in={props.state >= 4} timeout={1000}>
                            <Paper elevation="1" square>
                                DSCP:
                                <br></br>
                                123
                            </Paper>
                        </Slide>
                        <Slide direction="up" in={props.state >= 5} timeout={1000}>
                            <Paper elevation="1" square>
                                ECN:
                                <br></br>
                                123
                            </Paper>
                        </Slide>
                        <Slide direction="up" in={props.state >= 6} timeout={1000}>
                            <Paper elevation="1" square>
                                Total Len:
                                <br></br>
                                99
                            </Paper>
                        </Slide>
                        <Slide direction="up" in={props.state >= 7} timeout={1000}>
                            <Paper elevation="1" square>
                                Identification:
                                <br></br>
                                000
                            </Paper>
                        </Slide>
                        <Slide direction="up" in={props.state >= 8} timeout={1000}>
                            <Paper elevation="1" square>
                                Flags:
                                <br></br>
                                0
                            </Paper>
                        </Slide>

                        <Slide direction="up" in={props.state >= 9} timeout={1000}>
                            <Paper elevation="1" square>
                                Fragment Offset:
                                <br></br>
                                1
                            </Paper>
                        </Slide>
                        <Slide direction="up" in={props.state >= 10} timeout={1000}>
                            <Paper elevation="1" square>
                                Time To Live:
                                <br></br>
                                0
                            </Paper>
                        </Slide>
                        <Slide direction="up" in={props.state >= 11} timeout={1000}>
                            <Paper elevation="1" square>
                                Protocol:
                                <br></br>
                                1
                            </Paper>
                        </Slide>
                        <Slide direction="up" in={props.state >= 12} timeout={1000}>
                            <Paper elevation="1" square>
                                Header Checksum:
                                <br></br>
                                0
                            </Paper>
                        </Slide>
                        <Slide direction="up" in={props.state >= 13} timeout={1000}>
                            <Paper elevation="1" square>
                                SrcIP:
                                <br></br>
                                1
                            </Paper>
                        </Slide>
                        <Slide direction="up" in={props.state >= 14} timeout={1000}>
                            <Paper elevation="1" square>
                                DestIP:
                                <br></br>
                                1
                            </Paper>
                        </Slide>
                        

                        {/* <MouseOverPopover color="#FFFFCC" data={props.data.isTcp?"Tcp Header":"Udp Header"} hoverData={props.data.isTcp?props.data.senderTcpHeader:props.data.udpHeader}></MouseOverPopover>       */}
                    </Grid>
                </Fade> : <div></div>
        );
    
}

