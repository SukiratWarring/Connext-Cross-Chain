import { ethers } from "hardhat";

async function main() {
const SourceGreeter= await ethers.getContractFactory('SourceGreeter')
const instanceSourceGreeter= await SourceGreeter.deploy("0xFCa08024A6D4bCc87275b1E4A1E22B71fAD7f649","0xBEaD5697c8DEAca278f17Ef72dfC3B8FBDAeE987")
await instanceSourceGreeter.deployed()
console.log('Contract Deployed To :', instanceSourceGreeter.address)

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
