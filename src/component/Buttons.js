import React, { Component } from 'react';
import GenHeaders from './GenHeaders'

const ipSource = "192.168.40.3";
const ipDestination = "192.168.40.180";
const portSource = 4000;
const portDestination = 5000;

class Buttons extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: {
                context: "hhh",
                isReady: [0, 0, 0, 0, 0, 0, 0, 0, 0],
                tcpHeader: '',
                udpHeader: '',
                ipHeader: '',
                macHeader: ''
            }
        };

        //this.onClickHanler.bind(this);
        this.onClickHanler = this.onClickHanler.bind(this);
    }



    onClickHanler() {
        this.props.fn(this.state.data);

        var temp = {
            context: this.state.data.context,
            isReady: this.state.data.isReady,
            tcpHeader: this.state.data.tcpHeader,
            udpHeader: this.state.data.udpHeader,
            ipHeader: this.state.data.ipHeader,
            macHeader: this.state.data.macHeader
        };
        // alert(this.state.data.isReady);
        if (this.state.data.isReady[8] === 1) {
            // receiver appl
            this.setState({
                data: temp
            })
        }
        else if (this.state.data.isReady[7] === 1) {
            // receiver trans
            temp.isReady[8] = 1;
            this.setState({
                data: temp
            })
        }
        else if (this.state.data.isReady[6] === 1) {
            // receiver net
            temp.isReady[7] = 1;
            this.setState({
                data: temp
            })
        }
        else if (this.state.data.isReady[5] === 1) {
            // receiver dataCh
            temp.isReady[6] = 1;
            this.setState({
                data: temp
            })
        }
        else if (this.state.data.isReady[4] === 1) {
            // physical
            temp.isReady[5] = 1;
            this.setState({
                data: temp
            })
        }
        else if (this.state.data.isReady[3] === 1) {
            // sender dataCh
            temp.isReady[4] = 1;
            this.setState({
                data: temp
            })
        }
        else if (this.state.data.isReady[2] === 1) {
            // sender net
            temp.isReady[3] = 1;
            temp.ipHeader = GenHeaders.ipHeader(portSource, portDestination);
            this.setState({
                data: temp
            })
        }
        else if (this.state.data.isReady[1] === 1) {
            // sender trans
            temp.isReady[2] = 1;
            temp.tcpHeader = GenHeaders.tcpHeader(ipSource, ipDestination);
            this.setState({
                data: temp
            })
        }
        else if (this.state.data.isReady[0] === 1) {
            // sender appl
            temp.isReady[1] = 1;
            this.setState({
                data: temp
            })
        }
        else {
            temp.isReady[0] = 1;
            this.setState({
                data: temp
            })
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.onClickHanler}>Pick me</button>
            </div>
        )
    }
}

export default Buttons
