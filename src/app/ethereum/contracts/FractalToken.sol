pragma solidity >=0.4.22 <0.9.0;

contract FractalToken{
  uint public fractal_id;

  function getFractalId() external view returns(uint){
    return fractal_id;
  }

  function setFractalId(uint id) public{
    fractal_id = id;
  }
}
