# Decentralized Charity Donation System

This system enables anyone to connect their cryptocurrency wallet and donate to the charity. Donations are transparent, allowing everyone to view them on the blockchain via the smart contract. The total donation amount and the current balance are displayed on the public dashboard for full transparency.

## Key Features:

* Wallet Connection & Donations:
    Users can connect their wallets and donate any amount.
    All donations are publicly visible in the smart contract, ensuring transparency and trust.
* Fund Request and DAO Approval Process:
    Any user can request funds from the charity for specific needs.
    Fund release requests require approval from the Decentralized Autonomous Organization (DAO) before the charity owner can take action.
    To become a DAO member, an address must donate a fixed amount (currently set to 0.0001 ETH for testing) to the charity.
    Once a DAO member approves a fund request, they can only approve it once, and their approval button will be removed from the interface.
* Fund Release by Owner:
    After all DAO members have approved a fund request, only the charity owner has the authority to release the funds.
    Upon release, the requested amount is transferred from the charity’s smart contract to the beneficiary’s address.
* Transparency in Fund Requests:
    All fund requests and their current statuses are visible to the public, ensuring accountability in how the charity’s funds are used.
    This system ensures a decentralized, transparent, and community-driven approach to charity donations and fund disbursements, leveraging blockchain technology to ensure trust and accountability.
