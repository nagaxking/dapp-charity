let contractAddress = "0xAf534715C838ec753f6150d96e4cE3014C6681D2"; 
let contractABI = [
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_id",
                "type": "uint256"
            }
        ],
        "name": "approveFund",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "becomeDAO",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "donate",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "_id",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "_reason",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "newRequest",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "_addr",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "newdao",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "_addr",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "newdonate",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_id",
                "type": "uint256"
            }
        ],
        "name": "releaseFund",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_value",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "_reason",
                "type": "string"
            }
        ],
        "name": "requestFund",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "stateMutability": "payable",
        "type": "receive"
    },
    {
        "inputs": [],
        "name": "_fund_id",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "_owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "_total_count",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "_total_dao",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "_total_donation",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "_total_released",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "DAO_FEE",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "daoList",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "donationList",
        "outputs": [
            {
                "internalType": "address",
                "name": "_addr",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "fundApprovalCount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "fundApprovalList",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "fundRequest",
        "outputs": [
            {
                "internalType": "address",
                "name": "_addr",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "_reason",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_value",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_total_approval",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "_status",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_addr",
                "type": "address"
            }
        ],
        "name": "isDAO",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "total",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "totalDonation",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];

let web3 = new Web3(window.ethereum);
let contract;
let currentAccount;
let isDAO = false;
let isOwner = false;


// Connect Wallet Function
async function connectWallet() {
    if (window.ethereum) {
        try {
            await window.ethereum.enable(); // Request account access
            const accounts = await web3.eth.getAccounts();
            currentAccount = accounts[0];
            document.getElementById("walletStatus").textContent = "Connected";
            document.getElementById("walletAddress").textContent = currentAccount;
            document.getElementById("walletSection").style.display = "none";
            document.getElementById("walletAddressSection").style.display = "block";
            document.getElementById("donationSection").style.display = "block";
            document.getElementById("disconnectWalletButton").style.display = "block";
            
            // Initialize contract
            contract = new web3.eth.Contract(contractABI, contractAddress);
            loadContractData();

            // Check if current account is DAO member
            isDAO = await contract.methods.isDAO(currentAccount).call();
            const owner_addr = await contract.methods.owner().call();
            if (!isDAO) {
                document.getElementById("daoSection").style.display = "block";
            } else {
                document.getElementById("daoSection").style.display = "none";
            }
            
            if(currentAccount == owner_addr)
                isOwner = true;

        } catch (error) {
            console.error("User denied account access", error);
        }
    } else {
        alert("Please install MetaMask to use this dApp!");
    }
}

// Disconnect Wallet Function
function disconnectWallet() {
    document.getElementById("walletStatus").textContent = "Not connected";
    document.getElementById("walletAddress").textContent = "";
    document.getElementById("walletSection").style.display = "block";
    document.getElementById("walletAddressSection").style.display = "none";
    document.getElementById("donationSection").style.display = "none";
    document.getElementById("disconnectWalletButton").style.display = "none";
}

// Connect and Disconnect button event listeners
document.getElementById("connectWalletButton").addEventListener("click", connectWallet);
document.getElementById("disconnectWalletButton").addEventListener("click", disconnectWallet);

// Load contract data like total donations, balance, and fund requests
async function loadContractData() {
    try {
        const totalDonation = await contract.methods._total_donation().call();
        const totalReleased = await contract.methods._total_released().call();
        const balance = await web3.eth.getBalance(contractAddress);

        document.getElementById('totalDonation').textContent = web3.utils.fromWei(totalDonation, 'ether');
        document.getElementById('totalReleased').textContent = web3.utils.fromWei(totalReleased, 'ether');
        document.getElementById('currentBalance').textContent = web3.utils.fromWei(balance, 'ether');

        loadFundRequests();
    } catch (error) {
        showError("Failed to load contract data: " + error.message);
    }
}

// Load fund requests
async function loadFundRequests() {
    try {
        const totalCount = await contract.methods._fund_id().call();
        const totalDAO  = await contract.methods._total_dao().call();
        const owner_addr = await contract.methods.owner().call();
        const fundListDiv = document.getElementById('fundList');
        fundListDiv.innerHTML = ""; // Clear previous content

        for (let i = 1; i <= totalCount; i++) {
            let fundRequest = await contract.methods.fundRequest(i).call();
            let approvalCount = await contract.methods.fundApprovalCount(i).call();
            let approved = await contract.methods.fundApprovalList(i, currentAccount).call();

            let listItem = document.createElement('a');
            listItem.classList.add('list-group-item', 'list-group-item-action');
            listItem.innerHTML = `
                <strong>Request by:</strong> ${fundRequest._addr} <br>
                <strong>Reason:</strong> ${fundRequest._reason} <br>
                <strong>Requested Amount:</strong> ${web3.utils.fromWei(fundRequest._value, 'ether')} ETH <br>
                <strong>Approvals:</strong> ${approvalCount} / ${totalDAO}
            `;

            if (isDAO && !fundRequest._status && !approved) {
                let approveButton = document.createElement('button');
                approveButton.classList.add('btn', 'btn-primary', 'mt-2');
                approveButton.textContent = "Approve";
                approveButton.addEventListener('click', () => approveFundRequest(i));
                listItem.appendChild(approveButton);
            }

            if (isOwner && !fundRequest._status) {
                let approveButton = document.createElement('button');
                approveButton.classList.add('btn', 'btn-primary', 'mt-2');
                approveButton.textContent = "Release";
                approveButton.addEventListener('click', () => releaseFundRequest(i));
                listItem.appendChild(approveButton);
            }

            fundListDiv.appendChild(listItem);
        }
    } catch (error) {
        showError("Failed to load fund requests: " + error.message);
    }
}

// Approve fund request
async function approveFundRequest(fundId) {
    try {
        await contract.methods.approveFund(fundId).send({ from: currentAccount });
        loadContractData(); // Reload data after approval
    } catch (error) {
        showError("Failed to approve fund request: " + error.message);
    }
}

// Release fund request
async function releaseFundRequest(fundId) {
    try {
        await contract.methods.releaseFund(fundId).send({ from: currentAccount });
        loadContractData(); // Reload data after approval
    } catch (error) {
        showError("Failed to Release fund request: " + error.message);
    }
}

// Submit donation form
document.getElementById('donationForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    let amount = document.getElementById('donationAmount').value;

    try {
        await contract.methods.donate().send({
            from: currentAccount,
            value: web3.utils.toWei(amount, 'ether')
        });
        loadContractData(); // Reload data after donation
    } catch (error) {
        showError("Failed to donate: " + error.message);
    }
});

// Become a DAO Member (fixed fee of 0.1 ETH)
document.getElementById('becomeDAOButton').addEventListener('click', async () => {
    try {
        await contract.methods.becomeDAO().send({
            from: currentAccount,
            value: web3.utils.toWei('0.0001', 'ether') // 0.1 ETH fixed fee
        });
        isDAO = true;
        loadContractData(); // Reload data after becoming a DAO member
        document.getElementById("daoSection").style.display = "none";
    } catch (error) {
        showError("Failed to become a DAO member: " + error.message);
    }
});

// Submit fund release request form
document.getElementById('fundRequestForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    // Get the input values
    const fundReason = document.getElementById('fundReason').value;
    const fundAmount = document.getElementById('fundAmount').value;

    try {
        // Call the requestFund method from the smart contract
        await contract.methods.requestFund(
            web3.utils.toWei(fundAmount, 'ether'), // Convert ETH to Wei
            fundReason
        ).send({ from: currentAccount });

        // Reload data after requesting fund release
        loadContractData();

        // Clear form fields
        document.getElementById('fundReason').value = '';
        document.getElementById('fundAmount').value = '';
    } catch (error) {
        showError("Failed to request fund release: " + error.message);
    }
});


// Show error message
function showError(message) {
    const errorDiv = document.getElementById("errorMessage");
    errorDiv.textContent = message;
    errorDiv.style.display = "block";
}
