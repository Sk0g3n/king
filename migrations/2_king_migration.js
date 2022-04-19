const King = artifacts.require("King");
const Hacking = artifacts.require('Hacking');

module.exports = function (deployer, network, accounts) {
  deployer.deploy(King).then(() => deployer.deploy(Hacking, King.address, {from: accounts[1]} ));
};
