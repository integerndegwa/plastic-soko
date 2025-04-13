const hre = require("hardhat");

async function main() {
  console.log("🚀 Starting deployment...");

  const PlasticSokoFactory = await hre.ethers.getContractFactory("PlasticSoko");
  const plasticSoko = await PlasticSokoFactory.deploy();

  console.log("✅ PlasticSoko deployed to:", plasticSoko.target || plasticSoko.address);
}

main().catch((error) => {
  console.error("❌ Deployment failed:", error);
  process.exitCode = 1;
});
