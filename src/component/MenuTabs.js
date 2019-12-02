import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Welcome from './Welcome';
import { Button, TextField } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import SignInSide from './SignInSide';
import Show from './Show'
import Show_new from './Show_new'
import ExperimentalButton from './ExperimentalButton';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            <Box p={3}>{children}</Box>
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        //backgroundColor: theme.palette.background.paper,
        // justifyContent: 'center',
    },
    appbar: {
        height: 50,
        backgroundColor: "#0099CC",
    }
}));



var inputData = {
    sourceIp:"",
    sourcePort:"",
    sourceMac:"",
    destIp:"",
    destPort:"",
    destMac:"",
    context:'',
    senderTcpHeader:'',
    reciverTcpHeader:'',
    udpHeader:'',
    ipHeader:'',
    macHeader:'',
    isTcp:true,
    needAdd:false,
    SeqNum: 1,
    ACKNum: 1,
    DataOffset: 5,
    NS: 0,
    CWR: 0,
    ECE: 0,
    URG: 0,
    ACK: 1,
    PSH: 0,
    RST: 0,
    SYN: 0,
    FIN: 0,
    WindowSize: 5,
    UrgantPointer: 0
}
export default function MenuTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(1);
    

    const handleChange = (event, newValue) => {
        // alert(newValue);
        setValue(newValue);
    };

    const handleToWelcome = () => {
        setValue(0);
    };

    const handleToInput = () => {
        setValue(1);
    };

    const handleToOutput = () => {
        setValue(2);
    };

    const handleInput = (event) => {
        // alert(event.target.value)
    }

    const getChildData = (newData) => {
        inputData = newData;
        // alert(inputData.ACK)
    }

  

    // alert(inputValue.step);

    return (
        <div className={classes.root}>
            <AppBar className={classes.appbar} position="relative">
                <Tabs className={classes.tabs} value={value} onChange={handleChange} aria-label="simple tabs example" centered>
                    <Tab label="Welcome" {...a11yProps(0)} />
                    <Tab label="Input" {...a11yProps(1)} />
                    <Tab label="output" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <Welcome fn={handleToInput}/>
                {/* <br></br>
                <Button onClick={handleToInput}>Next to Input</Button> */}
            </TabPanel>
            <TabPanel value={value} index={1}>
                
                {/* <SignInSide fn={handleToOutput} sendData={getChildData}></SignInSide> */}
                <ExperimentalButton toOutput={handleToOutput}  sendData={getChildData}></ExperimentalButton>

                <br></br>
            </TabPanel>
            <TabPanel value={value} index={2}>
                
                <Show_new data={inputData} fn={handleToInput} ></Show_new>
                
            </TabPanel>
        </div>
    );
}
