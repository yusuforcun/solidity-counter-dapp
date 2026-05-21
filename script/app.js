const CONTRACT_ADDRESS = "0x915CEdC7dC4C92b170A92C28eA59D6051890D9d1";

const CONTRACT_ABI = [
    "function getCount() public view returns (uint256)",
    "function increment() public",
    "function decrement() public"
];

let provider;
let signer;
let contract;

const connectBtn = document.getElementById('connectBtn');
const walletStatus = document.getElementById('walletStatus');
const counterValue = document.getElementById('counterValue');
const incBtn = document.getElementById('incBtn');
const decBtn = document.getElementById('decBtn');

async function connectWallet() {
    if (typeof window.ethereum !== 'undefined') {
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            
            provider = new ethers.BrowserProvider(window.ethereum);
            signer = await provider.getSigner();
            
            const address = await signer.getAddress();
            walletStatus.innerText = `Connected: ${address.substring(0,6)}...${address.substring(38)}`;
            connectBtn.style.display = 'none';

            contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);

            incBtn.disabled = false;
            decBtn.disabled = false;
            await updateCounter();

        } catch (error) {
            console.error("Connection error:", error);
            alert("Wallet connection rejected.");
        }
    } else {
        alert("Please install MetaMask or a compatible Web3 wallet!");
    }
}

async function updateCounter() {
    try {
        counterValue.innerText = "Loading...";
        const currentCount = await contract.getCount();
        counterValue.innerText = currentCount.toString();
    } catch (error) {
        console.error("Error reading counter:", error);
        counterValue.innerText = "Error!";
    }
}

async function incrementCounter() {
    try {
        incBtn.disabled = true;
        const tx = await contract.increment();
        counterValue.innerText = "Waiting...";
        await tx.wait();
        await updateCounter();
    } catch (error) {
        console.error("Increment error:", error);
    } finally {
        incBtn.disabled = false;
    }
}

async function decrementCounter() {
    try {
        decBtn.disabled = true;
        const tx = await contract.decrement();
        counterValue.innerText = "Waiting...";
        await tx.wait();
        await updateCounter();
    } catch (error) {
        console.error("Decrement error:", error);
    } finally {
        decBtn.disabled = false;
    }
}

connectBtn.addEventListener('click', connectWallet);
incBtn.addEventListener('click', incrementCounter);
decBtn.addEventListener('click', decrementCounter);