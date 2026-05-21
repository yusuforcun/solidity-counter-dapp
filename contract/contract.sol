// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;


contract Storage {

    uint256 public count = 0;

   
    function getCount() public  view returns(uint256){
        return count;
    }

    function increment() public {
        count ++ ;
    }

    function decrement() public {
        require(count > 0 , "count is couldnt be smaller than zero");
        count -- ;
    }

    
}