pragma solidity ^0.4.23;

contract Election {
  uint votes;

  constructor() public {
    votes = 0;
  }

  function upvote() public {
    votes++;
  }

  function downvote() public {
    votes--;
  }

  function count() public view returns (uint) {
    return votes;
  }
}