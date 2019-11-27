import React,{Component} from 'react';

import {HashRouter, Route, Switch} from 'react-router-dom';
import SignInSide from './component/SignInSide';
import Show from './component/Show';


class BasicRoute extends Component  {
    render(){
    return(
        <HashRouter>
        <Switch>
            <Route exact path="/" component={SignInSide}/>
            <Route exact path="/show" component={Show}/>
        </Switch>
        </HashRouter>
    )
    }
};


export default BasicRoute;