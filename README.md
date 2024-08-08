# nft_swap

## Project Background

Existing NFT trading websites operate using tokens like ETH, USDT, etc., for conducting NFT transactions. When a user possesses an NFT and wishes to trade it for another NFT, they first must sell their current NFT for tokens and then use these tokens to buy the desired NFT. This process is cumbersome for users and incurs additional gas fees.
The birth of the nft_swap project allows users to directly exchange one NFT for another. In the future, it will also support trading for the desired NFT using one or more NFTs plus tokens.

## Project Introduction

When users want to sell nft on nft_swap market, they must first place the NFT on the market. Interested buyers then make offers, which can be one or more NFTs or(and) some tokens. Upon receiving an offer, the user can accept or decline it. Once accepted, the transaction is completed.

### Content implemented during the mini hackathon

* Implemented `pallet-nft` and `pallet-nft-market`, along with corresponding test code
* Developed the webpage frontend
* Enabled the exchange of one NFT for another
* Supported transactions using the Polkadot.js wallet, or `//Alice` test account when the wallet is not installed

### Future Development

* Enable trading one NFT for multiple NFTs
* Enable trading one NFT for one or more NFTs + tokens

## Contribution

Contributions are welcome! Please fork the repository and submit a pull request with your changes.
