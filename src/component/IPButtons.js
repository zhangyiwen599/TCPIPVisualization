import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';


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
    textAlign: 'center',
  },
  header: {
    position: "absolute",
    left: "42%",
    top: "60px"
  }

}));


export default function IPButtons(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    IHL: 5,
    DSCP: 0,
    ECN: 0,
    Identification: 0,
    Flags: 0,
    FragmentOffset: 0,
    TTL: 128
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
    props.sendData(state);
  };


  return (
    <div >
      <Typography variant="h5" className={classes.header}>
        IP advanced configuration
      </Typography>

      <Grid className={classes.root}>
        <Grid container spacing={1} className={classes.test} direction="row">
          <Grid item xs={12} sm={4} >
            <TextField
              required
              id="outlined-required"
              label="IHL"
              defaultValue={state.IHL}
              className={classes.textField}
              margin="normal"
              variant="outlined"
              onChange={handleChange('IHL')}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              required
              id="outlined-required"
              label="DSCP"
              defaultValue={state.DSCP}
              className={classes.textField}
              margin="normal"
              variant="outlined"
              onChange={handleChange('DSCP')}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              required
              id="outlined-required"
              label="ECN"
              defaultValue={state.ECN}
              className={classes.textField}
              margin="normal"
              variant="outlined"
              onChange={handleChange('ECN')}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="outlined-required"
              label="Identification"
              defaultValue={state.Identification}
              className={classes.textField}
              margin="normal"
              variant="outlined"
              onChange={handleChange('Identification')}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="outlined-required"
              label="Flags"
              defaultValue={state.Flags}
              className={classes.textField}
              margin="normal"
              variant="outlined"
              onChange={handleChange('Flags')}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="outlined-required"
              label="FragmentOffset"
              defaultValue={state.FragmentOffset}
              className={classes.textField}
              margin="normal"
              variant="outlined"
              onChange={handleChange('FragmentOffset')}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="outlined-required"
              label="TTL"
              defaultValue={state.TTL}
              className={classes.textField}
              margin="normal"
              variant="outlined"
              onChange={handleChange('TTL')}
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
