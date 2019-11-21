
class GenHeaders {
    ipHeader(ipSource, ipDestination) {

        return "11111"
    }

    tcpHeader(portSource, portDestination) {
        return "0000"
    }

    udpHeader(portSource, portDestination, data) {

    }

    macHeader() {

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
}

export default GenHeaders;