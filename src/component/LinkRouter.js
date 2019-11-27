/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { MemoryRouter as Router } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Show from './Show';
import {Route} from 'react-router';


// The use of React.forwardRef will no longer be required for react-router-dom v6.
// See https://github.com/ReactTraining/react-router/issues/6056
const Link1 = React.forwardRef((props, ref) => <RouterLink innerRef={ref} {...props} />);

const Link2 = React.forwardRef((props, ref) => (
  <RouterLink innerRef={ref} to="/show" {...props} />
));

export default function LinkRouter() {
  return (
    <Router>
      <div>
        {/* <Link component={Link1} to="/">
          With prop forwarding
        </Link>
        <br /> */}
        <Link to="/show" component={Show}>Without prop forwarding</Link>
      </div>

      
        {/* <Route path="/show" component={Show} /> */}
        
    </Router>
  );
}
