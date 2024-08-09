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

## Installation, Compilation, and Execution

### Substrate

```
$ cd nft_swap_substrate
```

#### Compilation

```
$ cargo build --release
```

#### Pallet Unit Tests

##### pallet-nft

```
$ cargo test -p pallet-nft

running 8 tests
test mock::test_genesis_config_builds ... ok
test tests::create_collections ... ok
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::transfer ... ok
test tests::transfer_when_nft_not_owned ... ok
test tests::create_collections_fail_when_already_exist ... ok
test tests::mint ... ok
test tests::mint_fail_when_exceed ... ok

test result: ok. 8 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

   Doc-tests pallet-nft

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
```

##### pallet-nft-market

```
$ cargo test -p pallet-nft-market

running 7 tests
test mock::test_genesis_config_builds ... ok
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::list_nft ... ok
test tests::place_offer ... ok
test tests::accept_offer ... ok
test tests::list_nft_fail_when_not_owner ... ok
test tests::place_offer_fail_with_wrong_nft ... ok

test result: ok. 7 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

   Doc-tests pallet-nft-market

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
```

#### Running

```
$ ./target/release/solochain-template-node --dev --tmp
```

### web

```
$ cd nft_swap_web
```

#### Installation

```
$ npm install
```

#### Running

```
$ npm run dev
```

## Substrate Pallet Data Structures and Function Descriptions

### pallet-nft

#### storage

##### NFTCollectionIds
* Description: Array of NFT collection IDs
* Type: StorageValue
* Value: Array of collection_id

##### NFTCollections
* Description: Information about NFT collections
* Type: StorageMap
* Key: collection_id
* Value: Detailed information about the NFT collection, such as the maximum number of items that can be minted and collection information

##### OwnedNFTs
* Description: NFTs owned by an account
* Type: StorageMap
* Key: User account
* Value: Array of owned NFT items

##### NFTMetadata
* Description: Information about NFTs
* Type: StorageMap
* Key: NFT item
* Value: Detailed information about the NFT

##### NFTOwners
* Description: Owners of the NFT
* Type: StorageMap
* Key: NFT item
* Value: Owner of the NFT

#### Events

##### NFTCollectionCreated
* Description: NFT collection has been created

##### NFTMinted
* Description: NFT has been minted successfully

##### NFTTransferred
* Description: NFT has been transferred

#### Functions

##### create_collection(origin: OriginFor<T>, max_items: u32, metadata: BoundedVec<u8, MaxMetadataLength>)
* Description: Create an NFT collection
* Parameters:
    * max_items: Maximum number of NFT items
    * metadata: Information about the NFT collection

##### mint_nft(origin: OriginFor<T>, collection_id: H256, metadata: BoundedVec<u8, MaxMetadataLength>)
* Description: Mint an NFT
* Parameters:
    * collection_id: NFT collection
    * metadata: Information about the NFT

##### transfer_nft(origin: OriginFor<T>, to: T::AccountId, nft_item: NftItem)
* Description: Transfer an NFT
* Parameters:
    * to: Target account
    * nft_item: NFT item to transfer

### pallet-nft-market

#### storage

##### Listings
* Description: Listed NFTs and the holders
* Type: StorageMap
* key: Listed NFT
* value: NFT Holder

##### Offers
* Description: The NFTs needed to be purchased and the offers given
* Type: StorageMap
* key: NFT Offered To
* value: Received Offer

#### Event

##### NftListed

* Description: NFT Listed

##### OfferPlaced

* Description: Offer Made

##### OfferAccepted

* Description: Offer Accepted

#### Function

##### list_nft(origin: OriginFor<T>, nft_item: NftItem)
* Description: List NFT
* Parameters:
    * nft_item: NFT to be listed

##### place_offer(origin: OriginFor<T>, nft_item: NftItem, offer_nft_item: NftItem)
* Description: Place Offer
* Parameters:
    * nft_item: Target NFT
    * offer_nft_item: NFT offered as a bid

##### accept_offer(origin: OriginFor<T>, nft_item: NftItem, offer_nft_item: NftItem)
* Description: Accept Offer
* Parameters:
    * nft_item: Target NFT
    * offer_nft_item: NFT offered as a bid

## Contribution

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

