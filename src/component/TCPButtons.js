import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';


const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  root: {
    flexGrow: 1,
    position: "absolute",
    top: "30%",
    bottom: "0%"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  test: {
    textAlign:'center',
  }
}));


export default function TCPButtons(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    SeqNum: 1,
    ACKNum: 1,
    DataOffset: 5,
    NS: false,
    CWR: false,
    ECE: false,
    URG: false,
    ACK: true,
    PSH: false,
    RST: false,
    SYN: false,
    FIN: false,
    WindowSize: 5,
    UrgantPointer: 0
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
    props.sendData(state);
  };


  return (
    <div className={classes.root}>
      <Grid container spacing={3} className={classes.test} direction="row"> 
        <Grid item xs={12} sm={4} >
          <TextField
            required
            id="outlined-required"
            label="Seq Num"
            defaultValue="1"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            onChange={handleChange('SeqNum')}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="outlined-required"
            label="ACK Num"
            defaultValue="1"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            onChange={handleChange('ACKNum')}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="outlined-required"
            label="Data Offset"
            defaultValue="5"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            onChange={handleChange('DataOffset')}
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <FormControlLabel
            control={
              <Switch
                checked={state.NS}
                onChange={handleChange('NS')}
                value="NS"
                color="primary" />
            }
            label="NS"
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <FormControlLabel
            control={
              <Switch
                checked={state.CWR}
                onChange={handleChange('CWR')}
                value="CWR"
                color="primary"
              />
            }
            label="CWR"
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <FormControlLabel
            control={
              <Switch
                checked={state.ECE}
                onChange={handleChange('ECE')}
                value="ECE"
                color="primary"
              />
            }
            label="ECE"
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <FormControlLabel
            control={
              <Switch
                checked={state.URG}
                onChange={handleChange('URG')}
                value="URG"
                color="primary"
              />
            }
            label="URG"
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <FormControlLabel
            control={
              <Switch
                checked={state.ACK}
                onChange={handleChange('ACK')}
                value="ACK"
                color="primary"
              />
            }
            label="ACK"
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <FormControlLabel
            control={
              <Switch
                checked={state.PSH}
                onChange={handleChange('PSH')}
                value="PSH"
                color="primary"
              />
            }
            label="PSH"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormControlLabel
            control={
              <Switch
                checked={state.RST}
                onChange={handleChange('RST')}
                value="RST"
                color="primary"
              />
            }
            label="RST"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormControlLabel
            control={
              <Switch
                checked={state.SYN}
                onChange={handleChange('SYN')}
                value="SYN"
                color="primary"
              />
            }
            label="SYN"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormControlLabel
            control={
              <Switch
                checked={state.FIN}
                onChange={handleChange('FIN')}
                value="FIN"
                color="primary"
              />
            }
            label="FIN"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="outlined-required"
            label="Window Size"
            defaultValue="5"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            onChange={handleChange('WindowSize')}
            />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="outlined-required"
            label="Urgant pointer"
            defaultValue="0"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            onChange={handleChange('UrgantPointer')}
            />
        </Grid>
      </Grid>
    </div>
  );
}
