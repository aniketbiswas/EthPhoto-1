var manageinteractionsContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"tag","type":"string"}],"name":"checkIFTagExists","outputs":[{"name":"","type":"bool"}],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"hash","type":"string"},{"name":"tag","type":"string"}],"name":"viewPhoto","outputs":[{"name":"","type":"bool"}],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"tag","type":"string"},{"name":"hash","type":"string"},{"name":"thumbNailHash","type":"string"}],"name":"deletePhoto","outputs":[],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"tag","type":"string"},{"name":"hash","type":"string"},{"name":"thumbNailHash","type":"string"}],"name":"addPhoto","outputs":[],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"tag","type":"string"},{"name":"contractAddress","type":"address"}],"name":"addTagContract","outputs":[],"payable":true,"type":"function"}]);
var manageinteractions = manageinteractionsContract.new(
   {
     from: web3.eth.accounts[0], 
     data: '0x6060604052341561000c57fe5b5b610d4c8061001c6000396000f30060606040526000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806379eafe8814610067578063921c6e4c146100d1578063a2a80f171461017e578063b3ebaa9014610256578063ee1617631461032e575bfe5b6100b7600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190505061039f565b604051808215151515815260200191505060405180910390f35b610164600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050610478565b604051808215151515815260200191505060405180910390f35b610254600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919050506106e3565b005b61032c600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919050506109ab565b005b61039d600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610c73565b005b6000600073ffffffffffffffffffffffffffffffffffffffff166000836040518082805190602001908083835b602083106103ef57805182526020820191506020810190506020830392506103cc565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415156104695760019050610473565b60009050610473565b5b919050565b600060006000600073ffffffffffffffffffffffffffffffffffffffff166000856040518082805190602001908083835b602083106104cc57805182526020820191506020810190506020830392506104a9565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415156106d1576000846040518082805190602001908083835b602083106105735780518252602082019150602081019050602083039250610550565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1691508173ffffffffffffffffffffffffffffffffffffffff1663216fb9e4866000604051602001526040518263ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018080602001828103825283818151815260200191508051906020019080838360008314610669575b80518252602083111561066957602082019150602081019050602083039250610645565b505050905090810190601f1680156106955780820380516001836020036101000a031916815260200191505b5092505050602060405180830381600087803b15156106b057fe5b60325a03f115156106bd57fe5b5050506040518051905090508092506106db565b600092506106db565b5b505092915050565b6000600073ffffffffffffffffffffffffffffffffffffffff166000856040518082805190602001908083835b602083106107335780518252602082019150602081019050602083039250610710565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151561099e576000846040518082805190602001908083835b602083106107da57805182526020820191506020810190506020830392506107b7565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff16635d960e1a84846040518363ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018080602001806020018381038352858181518152602001915080519060200190808383600083146108cc575b8051825260208311156108cc576020820191506020810190506020830392506108a8565b505050905090810190601f1680156108f85780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360008314610940575b8051825260208311156109405760208201915060208101905060208303925061091c565b505050905090810190601f16801561096c5780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600087803b151561098957fe5b60325a03f1151561099657fe5b5050506109a4565b60006000fd5b5b50505050565b6000600073ffffffffffffffffffffffffffffffffffffffff166000856040518082805190602001908083835b602083106109fb57805182526020820191506020810190506020830392506109d8565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515610c66576000846040518082805190602001908083835b60208310610aa25780518252602082019150602081019050602083039250610a7f565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff16633d6c91e884846040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808060200180602001838103835285818151815260200191508051906020019080838360008314610b94575b805182526020831115610b9457602082019150602081019050602083039250610b70565b505050905090810190601f168015610bc05780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360008314610c08575b805182526020831115610c0857602082019150602081019050602083039250610be4565b505050905090810190601f168015610c345780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600087803b1515610c5157fe5b60325a03f11515610c5e57fe5b505050610c6c565b60006000fd5b5b50505050565b806000836040518082805190602001908083835b60208310610caa5780518252602082019150602081019050602083039250610c87565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b50505600a165627a7a723058206a1dfcc2f287d4bf65be784518a448e5cc17a7bd7d08b3fe9132e410f53476300029', 
     gas: '4700000'
   }, function (e, contract){
    console.log(e, contract);
    if (typeof contract.address !== 'undefined') {
         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }
 })