import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require('@openzeppelin/hardhat-upgrades');
require('dotenv').config();

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: process.env.REACT_APP_GOERLI_URL || "",
      accounts:
        process.env.REACT_APP_WALLET_KEY !== undefined
          ? [`0x${process.env.REACT_APP_WALLET_KEY}`]
          : [],
    },
    mumbai: {
      url: process.env.REACT_APP_MUMBAI_URL || "",
      accounts:
        process.env.REACT_APP_WALLET_KEY !== undefined
          ? [process.env.REACT_APP_WALLET_KEY]
          : [],
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  },
};

export default config;
