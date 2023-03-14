# scaley-valley
Scaley-Valley Cross-chain marketplace for ETHGlobal Hackathon (Scaling Ethereum, 2023 )

This is the first multichain NFT marketplace where users can by NFT providing ERC20 tokens instead.

[Documentation](https://scaleyvalley.gitbook.io/main/)

The project is based on user interaction with NFT tokens, which are used as characters in a possible game.

Each type of character can be bought for ERC20 token on different networks. Support for the following L2 blockchains is planned:

|    NFT Type   |     Price     |   Token Name  |            Chain            |
| ------------- | ------------- | ------------- | --------------------------- |
|   Aquatique   |      100      |     WATER     | Gnosis testnet chain Chiado |
|     Druid     |      100      |     WOOD      |       Zksync testnet        |
|  Illuminator  |      100      |     OPTIC     |  Optimism testnet Goerli    |

The key idea of using L2 chains is to reduce the user's transaction costs when buying NFTs. The player pays for the purchase of the character of interest on the corresponding network and receives NFT on the goerli chain.

NFT Character can be moved across different networks (for this we use the bridge from Hyperlane). As planned, the user's motivation to move the token from one network to another is that on different networks the player gets access to different game content. For example, to different locations(valleys) or speeding up the leveling of some perk:

|  Valley Name  |     Network     |              Feature             |
| ------------- | --------------- | -------------------------------- |
|  EtherValley  |      Goerli     |      10% boost for leveling      |
|  PolyValley   | Polygon(Mumbai) |        10% agility boost         |
|  OptiValley   | Optimism Goerli | 10% boost for leveling intellect |
