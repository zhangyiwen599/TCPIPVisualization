import React, { Component } from 'react'
import Block from './Block'
import SubBlock from './SubBlock';

const num = 124;

class Show extends Component {
    constructor(props){
        super(props)
        
    }

 
    render() {
        return (
            <div>
            
                <Block idName="senderAppl">
                    <SubBlock divStyle={{width:"10%"}}>                 
                        {this.props.data.context}{this.props.data.isReady[0]}                    
                    </SubBlock>   
                </Block>
               
                <Block idName="senderTran">
                    <SubBlock divStyle={{width:"10%"}}>
                        {this.props.data.context}{this.props.data.isReady[1]}
                    </SubBlock>
                    <SubBlock divStyle={{width:"20%"}}>
                        {num}
                    </SubBlock>
                </Block>

                
                <Block idName="senderNet">
                    <SubBlock divStyle={{width:"10%"}}>
                        {this.props.data.context}{this.props.data.isReady[2]}
                    </SubBlock>
                    <SubBlock divStyle={{width:"20%"}}>
                        {num}
                    </SubBlock>
                    <SubBlock divStyle={{width:"20%"}}>
                        {num}
                    </SubBlock>
                </Block>
                

                <Block idName="senderDataChain">
                    <SubBlock divStyle={{width:"10%"}}>
                    {this.props.data.context}{this.props.data.isReady[3]}
                    </SubBlock>
                    <SubBlock divStyle={{width:"20%"}}>
                        {num}
                    </SubBlock>
                    <SubBlock divStyle={{width:"20%"}}>
                        {num}
                    </SubBlock>
                    <SubBlock divStyle={{width:"20%"}}>
                        {num}
                    </SubBlock>
                </Block>
                
                {/******************************* */}
                {/***********    reciver     ********** */}
                {/******************************* */}

                <Block idName="reciverAppl">
                    <SubBlock divStyle={{width:"10%"}}>
                    {num}    
                    </SubBlock>   
                </Block>
               
                <Block idName="reciverTran">
                    <SubBlock divStyle={{width:"10%"}}>
                        {num}
                    </SubBlock>
                    <SubBlock divStyle={{width:"20%"}}>
                        {num}
                    </SubBlock>
                </Block>

                
                <Block idName="reciverNet">
                    <SubBlock divStyle={{width:"10%"}}>
                        {num}
                    </SubBlock>
                    <SubBlock divStyle={{width:"20%"}}>
                        {num}
                    </SubBlock>
                    <SubBlock divStyle={{width:"20%"}}>
                        {num}
                    </SubBlock>
                </Block>
                

                <Block idName="reciverDataChain">
                    <SubBlock divStyle={{width:"10%"}}>
                        {num}
                    </SubBlock>
                    <SubBlock divStyle={{width:"20%"}}>
                        {num}
                    </SubBlock>
                    <SubBlock divStyle={{width:"20%"}}>
                        {num}
                    </SubBlock>
                    <SubBlock divStyle={{width:"20%"}}>
                        {num}
                    </SubBlock>
                </Block>


            </div>
        )
    }
}

export default Show
