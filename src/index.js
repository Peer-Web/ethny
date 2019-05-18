import { BN } from 'web3-utils';

class Base {
  async init(config) {
    this.web3 = config.web3;
    this.networkId = await config.getNetwork();
    // this.address = getContractAddress(TODO, this.networkId);
    // this.LicensingHandler = new this.web3.eth.Contract(TODO.abi, this.address);
  }
}

export const getContractAddress = (contractInterface, networkId) => {
  const network = networkId.toString();
  return contractInterface.networks[network].address;
};

/**
 * Adds a 5% boost to the gas for web3 calls as to ensure tx's go through
 *
 * @param {string} gasRequired amount of gas required from `estimateGas`
 */
export const boostGas = gasRequired => {
  const gasBoost = new BN(gasRequired, 10).divRound(new BN('20'));
  return new BN(gasRequired, 10).add(gasBoost);
};

export const dollarToWei = (dollarAmount, exchangeRate) =>
  new BN('1000000000000000000', 10).divRound(new BN(exchangeRate, 10)).mul(new BN(dollarAmount, 10));

export default Base;
