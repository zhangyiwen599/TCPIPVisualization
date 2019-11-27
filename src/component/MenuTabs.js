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
    senderTcpHeader:'',
    reciverTcpHeader:'',
    udpHeader:'',
    ipHeader:'',
    macHeader:'',
    context:'',
    isTcp:true,
    needAdd:false
}
export default function MenuTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(2);
    

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
                {/* <TextField id='test' onChange={handleInput}>
                </TextField>
                <br></br> */}
                <SignInSide fn={handleToOutput} sendData={getChildData}></SignInSide>
                {/* <Button onClick={handleToOutput}>
                    Submit
                </Button> */}
                <br></br>
            </TabPanel>
            <TabPanel value={value} index={2}>
                {/* Item Three
                <br></br> */}
                <Show_new data={inputData} fn={handleToInput} ></Show_new>
                {/* <Button variant="contained" onClick={handleToWelcome} >Back to Welcome</Button>
                <br></br>
                <Button onClick={handleToInput}>Back to Input</Button> */}
            </TabPanel>
        </div>
    );
}
