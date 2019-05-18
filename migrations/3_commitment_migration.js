const Commitment = artifacts.require('./Commitment.sol');

module.exports = (deployer, network) => {
  if (network === 'development') {
    deployer.deploy(Commitment);
  }

  if (network === 'rinkeby') {
    deployer.deploy(Commitment);
  }

  if (network === 'mainnet') {
    deployer.deploy(Commitment);
  }
};
