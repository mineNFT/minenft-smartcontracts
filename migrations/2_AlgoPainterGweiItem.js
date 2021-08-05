const MineNftGweiItem = artifacts.require("MineNftGweiItem");
const MineNftToken = artifacts.require("MineNftToken");

module.exports = async (deployer, network, accounts) => {
  await deployer.deploy(MineNftToken, "MineNft Token", "ALGOP");
  const algop = await MineNftToken.deployed();
  await deployer.deploy(MineNftGweiItem, algop.address, accounts[9]);
};
