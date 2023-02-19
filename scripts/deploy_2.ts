import { ethers } from "hardhat";

async function main() {
const DestinationGreeter= await ethers.getContractFactory('DestinationGreeter')
const instanceDestinationGreeter= await DestinationGreeter.deploy("0xBEaD5697c8DEAca278f17Ef72dfC3B8FBDAeE987")
await instanceDestinationGreeter.deployed()
console.log('Contract Deployed To :', instanceDestinationGreeter.address)

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
