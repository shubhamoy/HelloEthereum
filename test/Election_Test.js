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

  it("should be able to have an upvote", () => {
    return Election.deployed()
      .then((instance) => {
        electionInstance = instance;
        return electionInstance.upvote();
      })
      .then(() => {
        return electionInstance.count();
      })
      .then((data) => {
        assert.equal(data.toNumber(), 1, "Vote Count should be one")
      })
  });

  it("should be able to have a downvote", () => {
    return Election.deployed()
      .then((instance) => {
        electionInstance = instance;
        return electionInstance.downvote();
      })
      .then(() => {
        return electionInstance.count();
      })
      .then((data) => {
        assert.equal(data.toNumber(), 0, "Vote Count should be zero");
      })
  });
});