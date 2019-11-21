
class GenHeaders {
    static DefaultWindowSize = 17520;
    static tcpProtocolNum = 0x0006;

    static macHeader() {

    }

    static ipHeader(ipSource, ipDestination, data) {
        var temp = '';
        temp += parseInt(4, 10).toString(16).padStart(1, '0');
        temp += parseInt(5, 10).toString(16).padStart(1, '0');
        // alert(1 << 2);
        // DSCP ECN
        temp += parseInt(0, 10).toString(16).padStart(2, '0');
        temp += parseInt(20 + data.length, 10).toString(16).padStart(4, '0');
        temp += parseInt(0, 10).toString(16).padStart(4, '0');
        // Flags Fragment offset
        temp += parseInt(0, 10).toString(16).padStart(4, '0');
        temp += parseInt(64, 10).toString(16).padStart(2, '0');
        temp += parseInt(128, 10).toString(16).padStart(2, '0');
        temp += this.checksum(ipSource, ipDestination, 128, data.length);
        temp += this.convertIP(ipSource);
        temp += this.convertIP(ipDestination);


        // alert(temp.length)
        // alert(temp);
        return temp;
    }

    static tcpHeader(portSource, portDestination, RecvData, SendData, ipSource, ipDestination) {
        var temp = '';
        temp += parseInt(portSource, 10).toString(16).padStart(4, '0');
        temp += parseInt(portDestination, 10).toString(16).padStart(4, '0');
        temp += parseInt(SendData.length, 10).toString(16).padStart(8, '0');
        temp += parseInt(RecvData.length, 10).toString(16).padStart(8, '0');
        temp += parseInt(5, 10).toString(16).padStart(1, '0');
        temp += '0'.repeat(1);
        temp += '1'             // 0001
        temp += '2'             // 0010
        temp += parseInt(this.DefaultWindowSize, 10).toString(16).padStart(4, '0');
        temp += this.checksum(ipSource, ipDestination, this.tcpProtocolNum, 20);
        temp += '0'.repeat(4);

        // alert(temp.length)
        // alert(this.checksum(ipSource, ipDestination, this.tcpProtocolNum, 20));
        // alert(temp);
        return temp;
    }

    static udpHeader(portSource, portDestination, data) {
        var temp = '';
        temp += parseInt(portSource, 10).toString(16).padStart(4, '0');
        temp += parseInt(portDestination, 10).toString(16).padStart(4, '0');
        temp += parseInt(data.length + 8, 10).toString(16).padStart(4, '0');
        temp += '1'.repeat(4);

        // alert(temp);
        return temp;
    }

    static convertIP(ip) {
        var ipSplit;
        ipSplit = ip.split('.', 4);
        var temp = '';
        for (let index = 0; index < ipSplit.length; index++) {
            const element = ipSplit[index];
            temp += parseInt(element, 10).toString(16).padStart(2, '0');
        }

        return temp;
    }

    static checksum(ipSource, ipDestination, protocolNum, length) {
        var temp = 0;
        temp += parseInt(this.convertIP(ipSource), 16);
        temp += parseInt(this.convertIP(ipDestination), 16);
        temp += protocolNum;
        temp += length;

        var tempString = temp.toString(16);
        if (tempString.length <= 4)
            tempString.padStart(4, '0');
        else {
            tempString = tempString.slice(tempString.length - 4 , tempString.length);
        }

        // alert(tempString);
        return tempString;
    }
}

export default GenHeaders;