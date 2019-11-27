import React, { Component } from 'react';
import GenHeaders from './GenHeaders';


// const ipSource = "192.168.40.3";
// const ipDestination = "192.168.40.180";
// const portSource = 4000;
// const portDestination = 5000;


//var sender_ip= '192.168.80.88';



class Buttons extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: {
                context: "hello",
                isReady: [0, 0, 0, 0, 0, 0, 0, 0, 0],
                senderTcpHeader: '',
                reciverTcpHeader: '',
                udpHeader: '',
                ipHeader: '',
                macHeader: ''
            },
            reciver_ip : '192.168.80.90',
            reciver_port :'8081',
            reciver_mac: "80:00:20:7A:3F:3E",
            sender_ip: '192.168.80.88',
            sender_port : '8000',
            sender_mac : '80:00:20:20:3A:AE',
            isTcp:true,
            temp_reciver_ip: '',
            temp_reciver_port: '',
            temp_reciver_mac: "",
            temp_sender_ip: '',
            temp_sender_port: '',
            temp_sender_mac: '',
            temp_context: "",
            fileData: ''
        };

        //this.onClickHanler.bind(this);
        this.onClickHanler = this.onClickHanler.bind(this);
        this.getArg = this.getArg.bind(this);
        this.getData = this.getData.bind(this);
        this.getFileData = this.getFileData.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        // this.getFileData();
        // this.getArg();

        this.handleSourceIpChange = this.handleSourceIpChange.bind(this);
        this.handleSourcePortChange = this.handleSourcePortChange.bind(this);
        this.handleSourceMacChange = this.handleSourceMacChange.bind(this);
        this.handleRecvIpChange = this.handleRecvIpChange.bind(this);
        this.handleRecvPortChange = this.handleRecvPortChange.bind(this);
        this.handleRecvMacChange = this.handleRecvMacChange.bind(this);
        this.handleContextChange = this.handleContextChange.bind(this);


    }

    getData() { //请求数据函数
        fetch(`http://39.97.241.72:8081/`, {
            method: 'GET'
        }).then(res => res.text()).then(
            data => {
                this.setState({ fileData: data })
            }
        )
    }

    getFileData() {
        this.getData();
        this.getData();
        alert("load successfully");
        alert(this.state.fileData);
    }


    getArg() {
        var s = this.state.data;
        var data = this.state.fileData.split("\n");
        var sender_ipAddr = "";
        var sender_portNum = "";
        var sender_macAddr = "";
        var reciver_ipAddr = "";
        var reciver_portNum = "";
        var reciver_macAddr = ""
        var i;
        var temp = "";


        for (i in data) {
            temp = data[i].split("=");
            // if(temp.length()!=2)
            //     continue;

            if (temp[0] === "sender_ip")
                sender_ipAddr = temp[1];
            else if (temp[0] === "sender_port")
                sender_portNum = temp[1];
            else if (temp[0] === "sender_mac")
                sender_macAddr = temp[1];
            else if (temp[0] === "reciver_ip")
                reciver_ipAddr = temp[1];
            else if (temp[0] === "reciver_port")
                reciver_portNum = temp[1];
            else if (temp[0] === "reciver_mac")
                reciver_macAddr = temp[1];
            else if (temp[0] === "context") {
                s.context = temp[1];

            }
        }

        this.setState({
            reciver_ip: reciver_ipAddr,
            reciver_port: reciver_portNum,
            reciver_mac: reciver_macAddr,
            sender_ip: sender_ipAddr,
            sender_port: sender_portNum,
            sender_mac: sender_macAddr,
        });
        var temp = this.state.data;
        temp.senderTcpHeader = GenHeaders.tcpHeader(sender_portNum, reciver_portNum, "", s.context, sender_ipAddr, reciver_ipAddr);
        temp.reciverTcpHeader = GenHeaders.tcpHeader(sender_portNum, reciver_portNum, s.context, "", sender_ipAddr, reciver_ipAddr);

        temp.context = s.context;
        temp.ipHeader = GenHeaders.ipHeader(sender_ipAddr, reciver_ipAddr, s.context);
        this.setState({
            data: temp
        })
        // alert(data.context);

    }

    onClickHanler() {

        // let gen = new GenHeaders();

        var temp = {
            context: this.state.data.context,
            isReady: this.state.data.isReady,
            senderTcpHeader: this.state.data.senderTcpHeader,
            reciverTcpHeader: this.state.data.reciverTcpHeader,
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
            this.setState({
                data: temp
            })
        }
        else if (this.state.data.isReady[1] === 1) {
            // sender trans
            temp.isReady[2] = 1;
            this.setState({
                data: temp
            })
        }
        else if (this.state.data.isReady[0] === 1) {
            // sender appl
            //alert(temp.tcpHeader);
            temp.isReady[1] = 1;
            this.setState({
                data: temp
            })
        }
        else {
            
            temp.isReady[0] = 1;
            temp.senderTcpHeader = GenHeaders.tcpHeader(this.state.sender_port,this.state.reciver_port,"",this.state.data.context,this.state.sender_ip,this.state.reciver_ip);
            temp.reciverTcpHeader = GenHeaders.tcpHeader(this.state.sender_port,this.state.reciver_port,this.state.data.context,"",this.state.sender_ip,this.state.reciver_ip);

            temp.ipHeader = GenHeaders.ipHeader(this.state.sender_ip, this.state.reciver_ip,this.state.data.context);
            temp.macHeader = GenHeaders.macHeader(this.state.sender_mac,this.state.reciver_mac);
            
            this.setState({
                data: temp
            });

            
            // this.props.fn(this.state.data);
        }

        // alert(this.state.data.senderTcpHeader);
        this.props.fn(this.state.data);
    }

    onSubmitHandler() {
        //alert("HHH");
        var a = this.state.data;
        a.context = this.state.temp_context;

        // sender_ip= this.state.temp_sender_ip;
        
        this.setState({
            sender_ip: this.state.temp_sender_ip===""?this.state.sender_ip:this.state.temp_sender_ip,
            sender_port : this.state.temp_sender_port===""?this.state.sender_port:this.state.temp_sender_port,
            sender_mac : this.state.temp_sender_mac===""?this.state.sender_mac:this.state.temp_sender_mac,
            reciver_ip : this.state.temp_reciver_ip===""?this.state.reciver_ip:this.state.temp_reciver_ip,
            reciver_port : this.state.temp_reciver_port===""?this.state.reciver_port:this.state.temp_reciver_port,
            reciver_mac : this.state.temp_reciver_mac===""?this.state.reciver_mac:this.state.temp_reciver_mac
        })
        //alert(sender_ip);

    }
    handleContextChange(event) {
        this.setState({
            temp_context: event.target.value
        });
    }

    handleSourceIpChange(event) {
        this.setState({
            temp_sender_ip: event.target.value
        });
    }

    handleSourcePortChange(event) {
        this.setState({
            temp_sender_port: event.target.value
        });
    }


    handleSourceMacChange(event) {
        this.setState({
            temp_sender_mac: event.target.value
        });
    }

    handleRecvIpChange(event) {
        this.setState({
            temp_reciver_ip: event.target.value
        });
    }

    handleRecvPortChange(event) {
        this.setState({
            temp_reciver_ip: event.target.value
        });
    }

    handleRecvMacChange(event) {
        this.setState({
            temp_reciver_ip: event.target.value
        });
    }


    render() {
        // alert(sender_ip);
        // sender_ip = this.state.temp_sender_ip;
        return (
            <div>
                {/* <button onClick={this.onClickHanler}>Pick me</button>
                 */}

                <br></br>
                <div className="input-value">
                    <p>
                        <label>source ip</label>
                        <input type="text" value={this.state.temp_sender_ip} onChange={this.handleSourceIpChange} align="left"></input>
                    </p>
                    <p>
                        <label>source port:</label> 
                        <input type="text" value={this.state.temp_sender_port} onChange={this.handleSourcePortChange} align="left"></input>
                    </p>

                    <p>
                        <label>source MAC:</label>
                        <input type="text" value={this.state.temp_sender_mac} onChange={this.handleSourceMacChange} align="left"></input>
                    </p>

                    <p>
                        <label>recive ip:</label>
                        <input type="text" value={this.state.temp_reciver_ip} onChange={this.handleRecvIpChange} align="left"></input>
                    </p>
                    <p>
                        <label>recive port:</label>
                        <input type="text" value={this.state.temp_reciver_port} onChange={this.handleRecvPortChange} align="left"></input>
                    </p>
                    <p>
                        <label>recive MAC:</label>
                        <input type="text" value={this.state.temp_reciver_mac} onChange={this.handleRecvMacChange} align="left"></input>
                    </p>

                    <p>
                        <label>context:</label>
                        <input type="text" value={this.temp_context} onChange={this.handleContextChange} align="left"></input>
                    </p>
                    {/* <p>
                    <label>tcp or udp </label>
                        <input type="radio"  align="left">Tcp</input>
                        
                    </p> */}

                    <button onClick={this.onSubmitHandler} >Submit</button>
                </div>
                <br>
                </br>
                

                {/* <div className="output-table">
                <table border="1">
                    <tr>
                        <td>source ip:</td>
                        <td>{this.state.sender_ip}</td>
                    </tr>
                    <tr>
                        <td>source port:</td>
                        <td>{this.state.sender_port}</td>
                    </tr>
                    <tr>
                        <td>source MAC:</td>
                        <td>{this.state.sender_mac}</td>
                    </tr>
                    <tr>
                        <td>recive ip:</td>
                        <td>{this.state.reciver_ip}</td>
                    </tr>
                    <tr>
                        <td>recive port:</td>
                        <td>{this.state.reciver_port}</td>
                    </tr>
                    <tr>
                        <td>recive MAC:</td>
                        <td>{this.state.reciver_mac}</td>
                    </tr>
                </table>
                </div> */}
            </div>

        )
    }
}

export default Buttons
