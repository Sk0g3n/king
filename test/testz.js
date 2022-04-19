const King = artifacts.require("King");
const Hacking = artifacts.require('Hacking');

contract('King', (accounts) => {
    let king;
    let hacking;

    beforeEach( async () => {
        king = await King.deployed();
        hacking = await Hacking.deployed();
    })

    it('test rekt', async () => {
        instance = hacking.address;
        //await web3.eth.sendTransaction({to: instance, from: accounts[2]});
        hacking.kinghack({from: accounts[2]});
        Owner = await king.owner();
        assert.equal(Owner, accounts[0]);
    })

})