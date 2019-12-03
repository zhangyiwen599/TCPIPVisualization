
import Slide from '@material-ui/core/Slide'
import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';



export default function MACTable(props) {



    return (
        <TableBody>
      
       

        <Slide direction="down" in={props.state < 4} timeout={1000}>
            <TableRow >
                <TableCell component="th" scope="row">
                    {"Protocol"}
                </TableCell>
                <TableCell align="right">{props.data.protocol}</TableCell>
            </TableRow>
        </Slide>

        <Slide direction="down" in={props.state < 3} timeout={1000}>
            <TableRow >
                <TableCell component="th" scope="row">
                    {"DestMac"}
                </TableCell>
                <TableCell align="right">{props.data.destMac}</TableCell>
            </TableRow>
        </Slide>

        <Slide direction="down" in={props.state < 2} timeout={1000}>
            <TableRow >
                <TableCell component="th" scope="row">
                    {"SrcMac"}
                </TableCell>
                <TableCell align="right">{props.data.sourceMac}</TableCell>
            </TableRow>
        </Slide>
        </TableBody>
    )
}

