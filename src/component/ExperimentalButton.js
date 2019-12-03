import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types"
import TCPButtons from './TCPButtons'
import SignInSide from './SignInSide';
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    button: {
       // marginRight: theme.spacing(1),
        marginTop: theme.spacing(4)
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        
      
    },
    buttonPos: {
        height: "10%",
        position: "absolute",
        top: "75%",
        left: "45%",
        zIndex:20
    },
    stepperPos: {
        // width: "98%",
        height: "50px",
        position: "absolute",
        top: "87%",
        bottom: "0%",
        left: "0%",
        right: "0%",
    }
}));

function Panel(props) {
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

Panel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function getSteps() {
    return ['Basic input', 'For TCP'];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return 'Basic input...';
        case 1:
            return 'For TCP...';
        default:
            return 'Unknown step';
    }
}

const data = {
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
    UrgantPointer: 0,
    hasChange:1
  };

export default function ExperimentalButton(props) {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    
    const steps = getSteps();

    const handleNext = () => {
        if (activeStep === getSteps().length - 1)
        {
            // props.fn()
            props.sendData(data);
           
            props.toOutput();
            setActiveStep(prevActiveStep => 0);
            
            return;
        }
        else if(!data.isTcp){
            props.sendData(data);
        
            props.toOutput();
            setActiveStep(prevActiveStep => 0);
            return;
        }
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    };

    const getBasicData = (newData) => {
        data.sourceIp=newData.sourceIp;
        data.sourcePort=newData.sourcePort;
        data.sourceMac = newData.sourceMac;
        data.destIp = newData.destIp;
        data.destPort = newData.destPort;
        data.destMac = newData.destMac;

        data.senderTcpHeader = newData.senderTcpHeader;
        data.reciverTcpHeader = newData.reciverTcpHeader;
        data.udpHeader = newData.udpHeader;
        data.ipHeader = newData.ipHeader;
        data.macHeader = newData.macHeader;
        data.context = newData.context;
        data.isTcp = newData.isTcp;
        data.needAdd = newData.needAdd;
    }

    const getTcpData = (newData) =>{
        data.SeqNum = newData.SeqNum;
        data.ACKNum= newData.ACKNum;
        data.DataOffset= newData.DataOffset;
        data.NS= newData.NS;
        data.CWR= newData.CWR;
        data.ECE= newData.ECE;
        data.URG= newData.URG;
        data.ACK= newData.ACK;
        data.PSH= newData.PSH;
        data.RST= newData.RST;
        data.SYN= newData.SYN;
        data.FIN= newData.FIN;
        data.WindowSize= newData.WindowSize;
        data.UrgantPointer= newData.UrgantPointer;
        //alert(data.ACK);
    }

    return (
        <div className={classes.root}>
            <Stepper className={classes.stepperPos} activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>

            <Grid className={classes.buttonPos}>
                {/* <Typography className={classes.instructions}>
                    {getStepContent(activeStep)}
                </Typography> */}
                
                <Fade in={activeStep!=0}>
                <Grid>
                    <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        className={classes.button}>
                        Back
                    </Button>

                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                        className={classes.button}
                    >
                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                </Grid>
                </Fade>
               
            </Grid>

            <Panel value={activeStep} index={0}>
                <SignInSide sendData={getBasicData} next = {handleNext}></SignInSide>
            </Panel>
            <Panel value={activeStep} index={1}>
                <TCPButtons sendData={getTcpData}></TCPButtons>
            </Panel>
        </div>
    );
}
