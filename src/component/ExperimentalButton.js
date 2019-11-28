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

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    button: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    buttonPos: {
        height: "10%",
        position: "absolute",
        top: "0%",
        bottom: "90%",
        left: "40%",
        right: "40%"
    },
    stepperPos: {
        // width: "98%",
        height: "5%",
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

export default function ExperimentalButton(props) {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        if (activeStep === getSteps().length - 1)
        {
            // props.fn()
            alert("Should Show");
            return;
        }
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    };

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

            <div className={classes.buttonPos}>
                <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                <div>
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
                </div>
            </div>

            <Panel value={activeStep} index={0}>
                <h1>0000</h1>
            </Panel>
            <Panel value={activeStep} index={1}>
                <TCPButtons></TCPButtons>
            </Panel>
        </div>
    );
}
