
import Slide from '@material-ui/core/Slide'
import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';



export default function IPTable(props) {



    return (
        <TableBody>
      
        <Slide direction="down" in={props.state < 14} timeout={1000}>
            <TableRow >
                <TableCell component="th" scope="row">
                    {"DestIP"}
                </TableCell>
                <TableCell align="right">{props.data.destIp}</TableCell>
            </TableRow>
        </Slide>

        <Slide direction="down" in={props.state < 13} timeout={1000}>
            <TableRow >
                <TableCell component="th" scope="row">
                    {"SrcIP"}
                </TableCell>
                <TableCell align="right">{props.data.sourceIp}</TableCell>
            </TableRow>
        </Slide>

        <Slide direction="down" in={props.state < 12} timeout={1000}>
            <TableRow >
                <TableCell component="th" scope="row">
                    {"Checksum"}
                </TableCell>
                <TableCell align="right">{props.data.ipCheckSum}</TableCell>
            </TableRow>
        </Slide>

        <Slide direction="down" in={props.state < 11} timeout={1000}>
            <TableRow >
                <TableCell component="th" scope="row">
                    {"Protocol"}
                </TableCell>
                <TableCell align="right">128</TableCell>
            </TableRow>
        </Slide>

        <Slide direction="down" in={props.state < 10} timeout={1000}>
            <TableRow >
                <TableCell component="th" scope="row">
                    {"TTL"}
                </TableCell>
                <TableCell align="right">{props.data.TTL}</TableCell>
            </TableRow>
        </Slide>

        <Slide direction="down" in={props.state < 9} timeout={1000}>
            <TableRow >
                <TableCell component="th" scope="row">
                    {"FragOffset"}
                </TableCell>
                <TableCell align="right">{props.data.FragmentOffset}</TableCell>
            </TableRow>
        </Slide>

        <Slide direction="down" in={props.state < 8} timeout={1000}>
            <TableRow >
                <TableCell component="th" scope="row">
                    {"Flags"}
                </TableCell>
                <TableCell align="right">{props.data.Flags}</TableCell>
            </TableRow>
        </Slide>
        <Slide direction="down" in={props.state < 7} timeout={1000}>
            <TableRow >
                <TableCell component="th" scope="row">
                    {"Identification"}
                </TableCell>
                <TableCell align="right">{props.data.Identification}</TableCell>
            </TableRow>
        </Slide>

        <Slide direction="down" in={props.state < 6} timeout={1000}>
            <TableRow >
                <TableCell component="th" scope="row">
                    {"Tatol Len"}
                </TableCell>
                <TableCell align="right">{20+props.data.context.length}</TableCell>
            </TableRow>
        </Slide>

        <Slide direction="down" in={props.state < 5} timeout={1000}>
            <TableRow >
                <TableCell component="th" scope="row">
                    {"ECN"}
                </TableCell>
                <TableCell align="right">{props.data.ECN}</TableCell>
            </TableRow>
        </Slide>

        <Slide direction="down" in={props.state < 4} timeout={1000}>
            <TableRow >
                <TableCell component="th" scope="row">
                    {"DSCP"}
                </TableCell>
                <TableCell align="right">{props.data.DSCP}</TableCell>
            </TableRow>
        </Slide>

        <Slide direction="down" in={props.state < 3} timeout={1000}>
            <TableRow >
                <TableCell component="th" scope="row">
                    {"IHL"}
                </TableCell>
                <TableCell align="right">{props.data.IHL}</TableCell>
            </TableRow>
        </Slide>

        <Slide direction="down" in={props.state < 2} timeout={1000}>
            <TableRow >
                <TableCell component="th" scope="row">
                    {"Version"}
                </TableCell>
                <TableCell align="right">4</TableCell>
            </TableRow>
        </Slide>
        </TableBody>
    )
}

