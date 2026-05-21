# Counter DApp

A minimal Full-Stack Decentralized Application (DApp) that allows users to interact with a smart contract counter on the Ethereum blockchain. Built with Solidity, JavaScript (Ethers.js v6), and plain HTML/CSS.

## Core Concepts Covered
* Smart Contract State Variables (`uint256`)
* Gas-optimizing operators (`++` and `--`)
* Custom error handling using `require` statements
* Frontend blockchain integration (Read/Write operations using Ethers.js v6)

## Tech Stack
* **Smart Contract:** Solidity `>=0.8.2 <0.9.0`
* **Frontend:** HTML5, CSS3
* **Blockchain Library:** Ethers.js (v6 CDN)
* **Wallet Integration:** MetaMask (Sepolia Testnet)

## Project Structure
```text
counter_dapp/
├── contract/
│   └── contract.sol      # Solidity Smart Contract
├── frontend/
│   └── index.html        # UI and Styling
└── script/
    └── app.js            # Web3 & Ethers.js Logic