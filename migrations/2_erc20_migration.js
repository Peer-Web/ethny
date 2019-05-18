const ERC20 = artifacts.require('./ERC20.sol');

module.exports = (deployer, network) => {
  if (network === 'development') {
    deployer.deploy(ERC20);
  }

  if (network === 'rinkeby') {
    deployer.deploy(ERC20);
  }

  if (network === 'mainnet') {
    deployer.deploy(ERC20);
  }
};
