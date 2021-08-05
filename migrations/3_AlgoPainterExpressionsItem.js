const MineNftExpressionsItem = artifacts.require("MineNftExpressionsItem");

module.exports = async (deployer, network, accounts) => {
  await deployer.deploy(MineNftExpressionsItem, accounts[9], accounts[8]);
};
