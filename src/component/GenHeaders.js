
class GenHeaders {
    static DefaultWindowSize = 17520;
    static tcpProtocolNum = 0x0006;
    static macType = 0x0800;
    static ipVersion = 4;
    static ipProtocol = 128;

    // static udpProtocolNum = 0x0004;

    static macHeader(macSource, macDestination) {
        var temp = ''
        temp += this.convertMac(macSource);
        temp += this.convertMac(macDestination);
        temp += this.macType.toString(16).padStart(4, '0');
        // alert(this.macType.toString(16).padStart(4, '0'));

        // alert(temp);
        // alert(temp.length);

        return temp;
    }

    static ipHeader(ipSource, ipDestination, data, IHL, DSCP, ECN, Identification, Flags, FragmentOffset, TTL) {
        var temp = '';
        temp += this.ipVersion.toString(16).padStart(1, '0');
        temp += parseInt(IHL, 10).toString(16).padStart(1, '0');
        // alert(1 << 2);
        // DSCP ECN
        temp += this.convertFourBits(DSCP[0], DSCP[1], DSCP[2], DSCP[3]);
        temp += this.convertFourBits(DSCP[4], DSCP[5], ECN[0], ECN[1]);
        temp += (20 + data.length).toString(16).padStart(4, '0');
        temp += parseInt(Identification, 10).toString(16).padStart(4, '0');
        // Flags Fragment offset
        temp += this.convertFourBits(Flags[0], Flags[1], Flags[3], FragmentOffset[0]);
        temp += this.convertFourBits(FragmentOffset[1], FragmentOffset[2], FragmentOffset[3], FragmentOffset[4]);
        temp += this.convertFourBits(FragmentOffset[5], FragmentOffset[6], FragmentOffset[7], FragmentOffset[8]);
        temp += this.convertFourBits(FragmentOffset[9], FragmentOffset[10], FragmentOffset[11], FragmentOffset[12]);
        temp += parseInt(TTL, 10).toString(16).padStart(2, '0');
        temp += this.ipProtocol.toString(16).padStart(2, '0');
        temp += this.checksum(ipSource, ipDestination, 128, data.length);
        temp += this.convertIP(ipSource);
        temp += this.convertIP(ipDestination);


        // alert(temp.length)
        // alert(temp);
        return temp;
    }

    static tcpHeader(portSource, portDestination, ipSource, ipDestination, SeqNum, ACKNum, DataOffset, NS, CWR, ECE, URG, ACK, PSH, RST, SYN, FIN, WindowSize, UrgentPointer) {

        var temp = '';
        temp += parseInt(portSource, 10).toString(16).padStart(4, '0');
        temp += parseInt(portDestination, 10).toString(16).padStart(4, '0');
        temp += parseInt(SeqNum, 10).toString(16).padStart(8, '0');
        temp += parseInt(ACKNum, 10).toString(16).padStart(8, '0');
        temp += parseInt(DataOffset, 10).toString(16).padStart(1, '0');

        temp += '0'.repeat(1);  // reserved
        temp += this.convertFourBits(NS, CWR, ECE, URG);             // 0001
        temp += this.convertFourBits(ACK, PSH, RST, SYN, FIN);             // 0010
        temp += parseInt(WindowSize, 10).toString(16).padStart(4, '0');
        temp += this.checksum(ipSource, ipDestination, this.tcpProtocolNum, 20);
        temp += parseInt(WindowSize, 10).toString(16).padStart(4, '0');

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

    static convertMac(mac) {
        var macSplit = mac.split(":", 6);
        var temp = '';
        for (let index = 0; index < macSplit.length; index++) {
            const element = macSplit[index];
            temp += element;
        }
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
            tempString = tempString.slice(tempString.length - 4, tempString.length);
        }

        // alert(tempString);
        return tempString;
    }

    static convertFourBits(first, second, third, fourth) {
        var temp = 0;
        if (first === 1)
            temp += 8;
        if (second === 1)
            temp += 4;
        if (third === 1)
            temp += 2;
        if (fourth === 1)
            temp += 1;
        
        return temp.toString(16).padStart(1, '0');
    }
}

export default GenHeaders;