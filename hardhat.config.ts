import "@typechain/hardhat";

module.exports = {
  solidity: "0.8.20",
  typechain: {
    outDir: "typechain-types", // Directory where generated types will be saved
    target: "ethers-v5", // Target ethers.js
  },
};

