import React, { Component } from 'react';
import './App.css';
import Show from './component/Show';
import Buttons from './component/Buttons';

class App extends Component {
  constructor(){

    super();
    this.state={
      data:{
        context:'',
        isReady: Array(9),
        tcpHeader:'',
        udpHeader:'',
        ipHeader:'',
        macHeader:''
      }
    }

  
  }


  getChildData = (newData)=>{
    this.setState({
      data:newData
    })
  }

  render() {
    return (
      <div id="main" className="main">
        <div id="show" className="show">
            <Show data={this.state.data}/>
        </div>


        <div id="buttons" className="buttons">
          <Buttons fn={this.getChildData}/>

        </div>
      </div>
    );
  }
}

export default App;
