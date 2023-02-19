import { ethers } from "hardhat";

async function main() {
const SimpleBridge= await ethers.getContractFactory('SimpleBridge')
const instanceSimpleBridge= await SimpleBridge.deploy("0xFCa08024A6D4bCc87275b1E4A1E22B71fAD7f649")
await instanceSimpleBridge.deployed()
console.log('Contract Deployed To :', instanceSimpleBridge.address)

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
