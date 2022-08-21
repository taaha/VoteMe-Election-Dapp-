import web3 from './web3';
import ElectionFactory from './build/ElectionFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(ElectionFactory.interface),
    '0x4AEc458b9C2dBFDB4a7c71F0F331C836ff132C7E' //Replace with your own address
);

export default instance;