const MineNftGweiItem = artifacts.require("MineNftGweiItem");
const MineNftToken = artifacts.require("MineNftToken");

module.exports = async (deployer, network, accounts) => {
  await deployer.deploy(MineNftToken, "MineNft Token", "NFT");
  const nft = await MineNftToken.deployed();
  await deployer.deploy(MineNftGweiItem, nft.address, accounts[9]);
};
