import React, { Component } from 'react';
import './App.css';
import Show from './component/Show';
import Buttons from './component/Buttons';
// import styled, { keyframes } from 'styled-components';
// import { fadeIn } from 'react-animations';
// import SignInSide from './component/SignInSide';
import MenuTabs from './component/MenuTabs'
import ExperimentalButton from './component/ExperimentalButton';
import TCPButtons from './component/TCPButtons';
// import {Router,Route,Link} from 'react-router'


// const fadeInAnimation = keyframes`${fadeIn}`;
// const fDiv = styled.div`
//   animation: 1s ${fadeInAnimation};
// `;

class App extends Component {
  constructor() {

    super();
    this.state = {
      data: {
        context: 'hello',
        isReady: [1,1,0,0,0,0,0,0,0],
        senderTcpHeader: '192.23.34.55',
        reciverTcpHeader: '122.45.66.42',
        udpHeader: '12332',
        ipHeader: '13123',
        macHeader: 'dsdfs'
      },
      mytext: '',
    }

    
  }

 



  getChildData = (newData) => {
    this.setState({
      data: newData
    })
    // alert(newData.senderTcpHeader);
  }

  render() {
    // alert(GenHeaders.convertFourBits(1, 0, 0, 0));
    return (
      <div id="main" className="main">
         {/* <div id="show" className="show">
           <Show data={this.state.data}/>
         </div> */}


        {/* <div id="buttons" className="buttons">
           <Buttons fn={this.getChildData} />

         </div> */}
        {/* <div>
          <SignInSide></SignInSide>    
        </div> 
       */}
        <MenuTabs />
        {/* <ExperimentalButton></ExperimentalButton> */}
        {/* <TCPButtons></TCPButtons> */}
      </div>
      
    );
  }
}


export default App;
