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

    /* get sender */
    function getMsgSender() constant returns (address) {
        return msg.sender;
    }

    function getBalance(address account) constant returns (uint256) {
        return balance[account];
    }

    function recoverAddress(string transactionToken, uint8 v, bytes32 r, bytes32 s) constant returns (address) {
        bytes memory prefix = "\x19Ethereum Signed Message:\n32";
        bytes32 prefixedHash = sha3(prefix, sha3(transactionToken));
        address addressFromSignature = ecrecover(prefixedHash, v, r, s);
        return addressFromSignature;
    }

    function recoverAddressNonPrefix(string transactionToken, uint8 v, bytes32 r, bytes32 s) constant returns (address) {
        address addressFromSignature = ecrecover(sha3(transactionToken), v, r, s);
        return addressFromSignature;
    }

    function isSenderValid(address sender, string transactionToken, uint8 v, bytes32 r, bytes32 s) constant returns (bool) {
        address addressFromSignature = recoverAddress(transactionToken, v, r, s);
        address addressFromSignatureNonPrefix = recoverAddressNonPrefix(transactionToken, v, r, s);
        return ((addressFromSignature == sender) || (addressFromSignatureNonPrefix == sender));
    }

    function transfer(address sender, address recipient, uint256 value, string transactionToken, uint8 v, bytes32 r, bytes32 s) {

        if (!isSenderValid(sender, transactionToken, v, r, s)) throw;
        if (recipient == 0x0) throw;
        if (balance[sender] < value) throw;
        if (balance[recipient] + value < balance[recipient]) throw;

        balance[sender] -= value;
        balance[recipient] += value;

        Transfer(sender, recipient, value);
    }
}
