
// TODO: https://github.com/ethers-io/ethers.js/issues/656
// TODO: https://github.com/ethers-io/ethers.js/issues/62
// import { getWeb3NoAccount } from './web3';

/**
 * Accepts an array of contract method calls and batches them
 *
 * Example:
 *
 * [
 *  contract.method.balanceOf().call,
 *  contract.method.startBlockNumber().call
 * ]
 */

const makeBatchRequest = (calls: any[]) => {
  try {
    // TODO: not used for now
    // const web3 = getWeb3NoAccount();
    // const batch = new web3.BatchRequest();
    // const promises = calls.map(call => {
    //   return new Promise((resolve, reject) => {
    //     batch.add(
    //       call.request({}, (err, result) => {
    //         if (err) {
    //           reject(err);
    //         } else {
    //           resolve(result);
    //         }
    //       })
    //     );
    //   });
    // });
    // batch.execute();
    // return Promise.all(promises);

    return Promise.all(calls);
  } catch {
    return null;
  }
};

export default makeBatchRequest;
