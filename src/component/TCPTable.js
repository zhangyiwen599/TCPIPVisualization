
import Slide from '@material-ui/core/Slide'
import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';



export default function TCPTable(props) {



    return (
        <TableBody>
        <Slide direction="down" in={props.state < 19} timeout={1000}>
            <TableRow >
                <TableCell component="th" scope="row">
                    {"Urgent pointer"}
                </TableCell>
                <TableCell align="right">{props.data.UrgantPointer}</TableCell>
            </TableRow>
        </Slide>
        <Slide direction="down" in={props.state < 18} timeout={1000}>
            <TableRow >
                <TableCell component="th" scope="row">
                    {"Checksum"}
                </TableCell>
                <TableCell align="right">{props.data.tcpCheckSum}</TableCell>
            </TableRow>
        </Slide>

        <Slide direction="down" in={props.state < 17} timeout={1000}>
            <TableRow >
                <TableCell component="th" scope="row">
                    {"Window Size"}
                </TableCell>
                <TableCell align="right">{props.data.WindowSize}</TableCell>
            </TableRow>
        </Slide>
        <Slide direction="down" in={props.state < 16} timeout={1000}>
            <TableRow >
                <TableCell component="th" scope="row">
                    {"FIN"}
                </TableCell>
                <TableCell align="right">{props.data.FIN}</TableCell>
            </TableRow>
        </Slide>

        <Slide direction="down" in={props.state < 15} timeout={1000}>
            <TableRow >
                <TableCell component="th" scope="row">
                    {"SYN"}
                </TableCell>
                <TableCell align="right">{props.data.SYN}</TableCell>
            </TableRow>
        </Slide>
        <Slide direction="down" in={props.state < 14} timeout={1000}>
            <TableRow >
                <TableCell component="th" scope="row">
                    {"RST"}
                </TableCell>
                <TableCell align="right">{props.data.RST}</TableCell>
            </TableRow>
        </Slide>

        <Slide direction="down" in={props.state < 13} timeout={1000}>
            <TableRow >
                <TableCell component="th" scope="row">
                    {"PSH"}
                </TableCell>
                <TableCell align="right">{props.data.PSH}</TableCell>
            </TableRow>
        </Slide>

        <Slide direction="down" in={props.state < 12} timeout={1000}>
            <TableRow >
                <TableCell component="th" scope="row">
                    {"ACK"}
                </TableCell>
                <TableCell align="right">{props.data.ACK}</TableCell>
            </TableRow>
        </Slide>

        <Slide direction="down" in={props.state < 11} timeout={1000}>
            <TableRow >
                <TableCell component="th" scope="row">
                    {"URG"}
                </TableCell>
                <TableCell align="right">{props.data.URG}</TableCell>
            </TableRow>
        </Slide>

        <Slide direction="down" in={props.state < 10} timeout={1000}>
            <TableRow >
                <TableCell component="th" scope="row">
                    {"ECE"}
                </TableCell>
                <TableCell align="right">{props.data.ECE}</TableCell>
            </TableRow>
        </Slide>

        <Slide direction="down" in={props.state < 9} timeout={1000}>
            <TableRow >
                <TableCell component="th" scope="row">
                    {"CWR"}
                </TableCell>
                <TableCell align="right">{props.data.CWR}</TableCell>
            </TableRow>
        </Slide>

        <Slide direction="down" in={props.state < 8} timeout={1000}>
            <TableRow >
                <TableCell component="th" scope="row">
                    {"NS"}
                </TableCell>
                <TableCell align="right">{props.data.NS}</TableCell>
            </TableRow>
        </Slide>
        <Slide direction="down" in={props.state < 7} timeout={1000}>
            <TableRow >
                <TableCell component="th" scope="row">
                    {"Reserved"}
                </TableCell>
                <TableCell align="right">000</TableCell>
            </TableRow>
        </Slide>

        <Slide direction="down" in={props.state < 6} timeout={1000}>
            <TableRow >
                <TableCell component="th" scope="row">
                    {"Data offset"}
                </TableCell>
                <TableCell align="right">{props.data.DataOffset}</TableCell>
            </TableRow>
        </Slide>

        <Slide direction="down" in={props.state < 5} timeout={1000}>
            <TableRow >
                <TableCell component="th" scope="row">
                    {"ACK num"}
                </TableCell>
                <TableCell align="right">{props.data.ACKNum}</TableCell>
            </TableRow>
        </Slide>

        <Slide direction="down" in={props.state < 4} timeout={1000}>
            <TableRow >
                <TableCell component="th" scope="row">
                    {"Sequence num"}
                </TableCell>
                <TableCell align="right">{props.data.SeqNum}</TableCell>
            </TableRow>
        </Slide>

        <Slide direction="down" in={props.state < 3} timeout={1000}>
            <TableRow >
                <TableCell component="th" scope="row">
                    {"DestPort"}
                </TableCell>
                <TableCell align="right">{props.data.destPort}</TableCell>
            </TableRow>
        </Slide>

        <Slide direction="down" in={props.state < 2} timeout={1000}>
            <TableRow >
                <TableCell component="th" scope="row">
                    {"SrcPort"}
                </TableCell>
                <TableCell align="right">{props.data.sourcePort}</TableCell>
            </TableRow>
        </Slide>
        </TableBody>
    )
}

