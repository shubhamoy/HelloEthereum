let Election = artifacts.require("./Election.sol");

contract('Election', () => {
  let electionInstance;

  it("should be initialised with empty values", () => {
    return Election.deployed()
      .then((instance) => {
        return instance.count();
      })
      .then((data) => {
        assert.equal(data.toNumber(), 0, "Vote Count should be zero")
      });
  });
});