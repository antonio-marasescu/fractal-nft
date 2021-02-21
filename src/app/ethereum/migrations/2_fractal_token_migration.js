const FractalTokenMigration = artifacts.require("FractalToken");

module.exports = function (deployer) {
  deployer.deploy(FractalTokenMigration);
};
