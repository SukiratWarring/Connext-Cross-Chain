import { create } from "@connext/sdk";
import { ethers } from "ethers";
import { signer, sdkConfig } from "./config";
import simpleBridgeContract from "../artifacts/contracts/SimpleBridge.sol/SimpleBridge.json"
async function main(){
const {sdkBase} = await create(sdkConfig);
const signerAddress = await signer.getAddress();
const deployedContract="0x9b00022dDdc7BB82618700Ce88F5965e46114F50" 
const contractInstance = new ethers.Contract(deployedContract, simpleBridgeContract.abi, signer)
// xTransfer parameters
const originDomain = "1735353714";
const destinationDomain = "9991";
const originAsset = "0x7ea6eA49B0b0Ae9c5db7907d139D9Cd3439862a1";
const amount = "1000000000000000000";
const slippage = "10000";
// Estimate the relayer fee
const relayerFee = (
  await sdkBase.estimateRelayerFee({
    originDomain, 
    destinationDomain
  })
).toString();
console.log('relayerFee.toString()', relayerFee.toString())
console.log('originAsset,signerAddress,destinationDomain,slippage,relayerFee', originAsset,signerAddress,destinationDomain,slippage,relayerFee)
// Send the 
const trx = await contractInstance.xTransfer(originAsset,amount,signerAddress,destinationDomain,slippage,relayerFee,{ value: relayerFee.toString()})
await trx.wait()
console.log('trx', trx)
}
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });