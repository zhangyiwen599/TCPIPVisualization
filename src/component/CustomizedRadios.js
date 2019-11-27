import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function CustomizedRadios(props) {
  const [value, setValue] = React.useState('tcp');

  const handleChange = event => {
    setValue(event.target.value);
    props.fn(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">protocol options</FormLabel>
      <RadioGroup aria-label="position" name="position" value={value} onChange={handleChange} row>
        
        <FormControlLabel
          value="tcp"
          control={<Radio color="primary" />}
          label="tcp"
          labelPlacement="end"
        />
        <FormControlLabel
          value="udp"
          control={<Radio color="primary" />}
          label="udp"
          labelPlacement="end"
        />
      </RadioGroup>
    </FormControl>
  );
}
