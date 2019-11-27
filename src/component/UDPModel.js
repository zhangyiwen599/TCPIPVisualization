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


export default function TCPModel(props){
    const classes = useStyles();
    //alert(props.state);
        return(
            props.state < 5 ? <Fade in={props.state >= 1} timeout={1000}>
                    <Grid xs="10" container className={classes.blank} direction="row" >
                        <Slide direction="up" in={props.state >= 2} timeout={1000}>

                            <Paper elevation="1" square>
                                SrcPort:
                                    <br></br>
                                4000
                                </Paper>
                        </Slide>
                        <Slide direction="up" in={props.state >= 3} timeout={1000}>
                            <Paper elevation="1" square>
                                DestPort:
                                <br></br>
                                4001
                            </Paper>
                        </Slide>
                        <Slide direction="up" in={props.state >= 4} timeout={1000}>
                            <Paper elevation="1" square>
                                Seq Num:
                                <br></br>
                                123
                            </Paper>
                        </Slide>
                        
                        {/* <MouseOverPopover color="#FFFFCC" data={props.data.isTcp?"Tcp Header":"Udp Header"} hoverData={props.data.isTcp?props.data.senderTcpHeader:props.data.udpHeader}></MouseOverPopover>       */}
                    </Grid>
                </Fade> : <div></div>
        );
    
}

