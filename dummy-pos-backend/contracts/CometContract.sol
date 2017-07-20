pragma solidity ^0.4.8;

contract CometContract {
    string public standard = 'CometContract 0.1';
    uint256 public totalBalance;

    mapping (address => uint256) public balance;
    mapping (address => string) public usedTransactionToken;

    event Transfer(address indexed sender, address indexed recipient, uint256 value);

    function CometContract(uint256 initialBalance) {
        balance[msg.sender] = initialBalance;
        totalBalance = initialBalance;
    }

    function transfer(address sender, address recipient, uint256 value, string transactionToken, uint8 v, bytes32 r, bytes32 s) {
        bytes memory prefix = "\x19Ethereum Signed Message:\n32";
        bytes32 prefixedHash = sha3(prefix, sha3(transactionToken));
        address addressFromSignature = ecrecover(prefixedHash, v, r, s);

        if (addressFromSignature != sender) throw;
        if (recipient == 0x0) throw;
        if (balance[sender] < value) throw;
        if (balance[recipient] + value < balance[recipient]) throw;
        if (value > allowance[sender][msg.sender]) throw;

        balance[sender] -= value;
        balance[recipient] += value;

        Transfer(sender, recipient, value);
    }
}
