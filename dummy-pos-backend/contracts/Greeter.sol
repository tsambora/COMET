contract mortal {
    /* Define variable owner of the type address*/
    address owner;

    /* this function is executed at initialization and sets the owner of the contract */
    function mortal() { owner = msg.sender; }

    /* Function to recover the funds on the contract */
    function kill() { if (msg.sender == owner) suicide(owner); }
}

contract greeter is mortal {
    /* define variable greeting of the type string */
    string greeting;
    
    /* this runs when the contract is executed */
    function greeter(string tes) public {
        greeting = tes;
    }

    /* main function */
    function greet() constant returns (string) {
        return greeting;
    }

    /* get sender */
    function getSender() constant returns (address) {
        return msg.sender;
    }

    function recoverAdress(bytes32 msgHash, uint8 v, bytes32 r, bytes32 s) constant returns (address) {
        bytes memory prefix = "\x19Ethereum Signed Message:\n32";
        bytes32 prefixedHash = sha3(prefix, msgHash);
        return ecrecover(prefixedHash, v, r, s);
    }

    function sendValue(bytes32 msgHash, uint8 v, bytes32 r, bytes32 s) constant returns (address) {
        bytes memory prefix = "\x19Ethereum Signed Message:\n32";
        bytes32 prefixedHash = sha3(prefix, msgHash);
        return ecrecover(prefixedHash, v, r, s);
    }
}