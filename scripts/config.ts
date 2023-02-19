import { SdkConfig } from "@connext/sdk";
import { ethers } from "ethers";

// Create a Signer and connect it to a Provider on the sending chain
const privateKey = process.env.REACT_APP_WALLET_KEY || '';

let signer = new ethers.Wallet(privateKey);

// Use the RPC url for the origin chain
const provider = new ethers.providers.JsonRpcProvider("https://rpc.ankr.com/eth_goerli");
signer = signer.connect(provider);
const signerAddress = signer.address;
console.log('signerAddress_in_config', signerAddress)
const sdkConfig: SdkConfig = {
  signerAddress: signerAddress,
  // Use `mainnet` when you're ready...
  network: "testnet",
  // Add more chains here! Use mainnet domains if `network: mainnet`.
  // This information can be found at https://docs.connext.network/resources/supported-chains
  chains: {
    1735353714: { // Goerli domain ID
      providers: ["https://rpc.ankr.com/eth_goerli"],
    },
    9991: { //  Mumbai domain ID
      providers: process.env.REACT_APP_MUMBAI_URL!==undefined ?[process.env.REACT_APP_MUMBAI_URL]:[''],
    },
  },
};

export { signer, sdkConfig };