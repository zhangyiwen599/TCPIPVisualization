import React, { Component } from 'react';
import './App.css';
import Show from './component/Show';
import Buttons from './component/Buttons';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

const fadeInAnimation = keyframes`${fadeIn}`;
const fDiv = styled.div`
  animation: 1s ${fadeInAnimation};
`;

class App extends Component {
  constructor() {

    super();
    this.state = {
      data: {
        context: '',
        isReady: Array(9),
        senderTcpHeader: '',
        reciverTcpHeader: '',
        udpHeader: '',
        ipHeader: '',
        macHeader: ''
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
    return (
      <div id="main" className="main">
         <div id="show" className="show">
           <Show data={this.state.data}/>
         </div>


        <div id="buttons" className="buttons">
           <Buttons fn={this.getChildData} />

         </div>
        {/* <div>
            <fDiv><h1>Hello world</h1></fDiv>
        </div>  */}
      
      </div>
    );
  }
}

export default App;
