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


export default function TCPButtons() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });
  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
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
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <FormControlLabel
            control={
              <Switch
                checked={state.checkedA}
                onChange={handleChange('checkedA')}
                value="checkedA"
                color="primary" />
            }
            label="NS"
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <FormControlLabel
            control={
              <Switch
                checked={state.checkedB}
                onChange={handleChange('checkedB')}
                value="checkedB"
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
                checked={state.checkedC}
                onChange={handleChange('checkedC')}
                value="checkedC"
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
                checked={state.checkedD}
                onChange={handleChange('checkedD')}
                value="checkedD"
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
                checked={state.checkedE}
                onChange={handleChange('checkedE')}
                value="checkedE"
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
                checked={state.checkedF}
                onChange={handleChange('checkedF')}
                value="checkedF"
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
                checked={state.checkedG}
                onChange={handleChange('checkedG')}
                value="checkedG"
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
                checked={state.checkedH}
                onChange={handleChange('checkedH')}
                value="checkedH"
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
                checked={state.checkedI}
                onChange={handleChange('checkedI')}
                value="checkedI"
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
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="outlined-required"
            label="Urgant pointer"
            defaultValue="5"
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
        </Grid>
      </Grid>
    </div>
  );
}
