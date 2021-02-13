
const Server = {
    isAvailable: false,

    getUrl(url) {
        return this.isAvailable ? url : '/local' + url + '.json';
    }
}

console.log('server available:', Server.isAvailable);