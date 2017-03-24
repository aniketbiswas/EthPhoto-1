var tagmanagerContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"hash","type":"string"}],"name":"checkIfPhotoExists","outputs":[{"name":"","type":"bool"}],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"hash","type":"string"},{"name":"thumbNailHash","type":"string"}],"name":"addNewPhoto","outputs":[],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"hash","type":"string"},{"name":"thumbNailHash","type":"string"}],"name":"deletePhoto","outputs":[],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"tagName","type":"string"}],"name":"Tag","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"x","type":"bytes32"}],"name":"bytes32ToString","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"v","type":"uint256"}],"name":"uintToBytes","outputs":[{"name":"ret","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"putInNewBlock","outputs":[],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"hash","type":"string"},{"name":"thumbNailHash","type":"string"}],"name":"constrcutHashThumbNailString","outputs":[{"name":"","type":"string"}],"payable":true,"type":"function"},{"constant":true,"inputs":[{"name":"arrLength","type":"uint256"}],"name":"convertToJson","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"tagName","type":"string"},{"indexed":false,"name":"data","type":"string"}],"name":"newBlockAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"message","type":"string"}],"name":"messagePrompt","type":"event"}]);
var tagManager = tagmanagerContract.new(
   {
     from: web3.eth.accounts[0], 
     data: '0x6060604052341561000c57fe5b5b6129fa8061001c6000396000f30060606040523615610097576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063216fb9e4146100995780633d6c91e8146101035780635d960e1a14610198578063749a69b61461022d5780639201de551461028757806394e8767d14610332578063a3d50a481461036e578063beb7c88714610378578063c96a379a14610494575bfe5b6100e9600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190505061053b565b604051808215151515815260200191505060405180910390f35b610196600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919050506105c8565b005b61022b600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050610825565b005b341561023557fe5b610285600480803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050610d25565b005b341561028f57fe5b6102a9600480803560001916906020019091905050610d73565b60405180806020018281038252838181518152602001915080519060200190808383600083146102f8575b8051825260208311156102f8576020820191506020810190506020830392506102d4565b505050905090810190601f1680156103245780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561033a57fe5b6103506004808035906020019091905050610f5e565b60405180826000191660001916815260200191505060405180910390f35b610376611009565b005b61040b600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050611592565b604051808060200182810382528381815181526020019150805190602001908083836000831461045a575b80518252602083111561045a57602082019150602081019050602083039250610436565b505050905090810190601f1680156104865780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561049c57fe5b6104b26004808035906020019091905050611826565b6040518080602001828103825283818151815260200191508051906020019080838360008314610501575b805182526020831115610501576020820191506020810190506020830392506104dd565b505050905090810190601f16801561052d5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b600060016001836040518082805190602001908083835b602083106105755780518252602082019150602081019050602083039250610552565b6001836020036101000a0380198251168184511680821785525050505050509050019150509081526020016040518091039020541015156105b957600190506105c3565b600090506105c3565b5b919050565b60016001836040518082805190602001908083835b6020831061060057805182526020820191506020810190506020830392506105dd565b6001836020036101000a03801982511681845116808217855250505050505090500191505090815260200160405180910390205410151561071a5760016001836040518082805190602001908083835b602083106106735780518252602082019150602081019050602083039250610650565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902054016001836040518082805190602001908083835b602083106106de57805182526020820191506020810190506020830392506106bb565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902081905550610820565b5b600660009054906101000a900460ff1615156107365761071b565b6001600660006101000a81548160ff02191690831515021790555081600360055481548110151561076357fe5b906000526020600020906004020160005b50600001908051906020019061078b92919061269d565b5080600360055481548110151561079e57fe5b906000526020600020906004020160005b5060010190805190602001906107c692919061269d565b504260036005548154811015156107d957fe5b906000526020600020906004020160005b50600201819055506005600081548092919060010191905055506000600660006101000a81548160ff0219169083151502179055505b5b5050565b600060006000600060006001876040518082805190602001908083835b602083106108655780518252602082019150602081019050602083039250610842565b6001836020036101000a0380198251168184511680821785525050505050509050019150509081526020016040518091039020600081548092919060019003919050555060006001886040518082805190602001908083835b602083106108e157805182526020820191506020810190506020830392506108be565b6001836020036101000a0380198251168184511680821785525050505050509050019150509081526020016040518091039020541415610d1b575b600660009054906101000a900460ff16151561093b57600a945061091c565b6001600660006101000a81548160ff0219169083151502179055506002876040518082805190602001908083835b6020831061098c5780518252602082019150602081019050602083039250610969565b6001836020036101000a0380198251168184511680821785525050505050509050019150509081526020016040518091039020549350600a848115156109ce57fe5b049250600a848115156109dd57fe5b06915060016000600086815260200190815260200160002060030160006101000a81548160ff021916908315150217905550600a830290505b600a6001840102811015610b24576000600082815260200190815260200160002060030160009054906101000a900460ff161515610b165760178054806001018281610a62919061271d565b916000526020600020906004020160005b60006000858152602001908152602001600020909190915060008201816000019080546001816001161561010002031660029004610ab292919061274f565b5060018201816001019080546001816001161561010002031660029004610ada92919061274f565b50600282015481600201556003820160009054906101000a900460ff168160030160006101000a81548160ff0219169083151502179055505050505b5b8080600101915050610a16565b610cff6017805480602002602001604051908101604052809291908181526020016000905b82821015610ce9578382906000526020600020906004020160005b5060806040519081016040529081600082018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610c0a5780601f10610bdf57610100808354040283529160200191610c0a565b820191906000526020600020905b815481529060010190602001808311610bed57829003601f168201915b50505050508152602001600182018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610cac5780601f10610c8157610100808354040283529160200191610cac565b820191906000526020600020905b815481529060010190602001808311610c8f57829003601f168201915b50505050508152602001600282015481526020016003820160009054906101000a900460ff16151515158152505081526020019060010190610b49565b50505050600a86811515610cf957fe5b04611dd8565b6000600660006101000a81548160ff0219169083151502179055505b5b50505050505050565b60036007819055506000600660006101000a81548160ff021916908315150217905550600060088190555060006005819055508060099080519060200190610d6e92919061269d565b505b50565b610d7b6127d6565b610d836127ea565b600060006000610d916127ea565b6020604051805910610da05750595b908082528060200260200182016040525b50945060009350600092505b6020831015610e7c578260080260020a876001900402600102915060007f010000000000000000000000000000000000000000000000000000000000000002827effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916141515610e6e57818585815181101515610e3557fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535083806001019450505b5b8280600101935050610dbd565b83604051805910610e8a5750595b908082528060200260200182016040525b509050600092505b83831015610f50578483815181101515610eb957fe5b9060200101517f010000000000000000000000000000000000000000000000000000000000000090047f0100000000000000000000000000000000000000000000000000000000000000028184815181101515610f1257fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053505b8280600101935050610ea3565b8095505b5050505050919050565b60006000821415610f91577f30000000000000000000000000000000000000000000000000000000000000009050611000565b5b6000821115610fff576101008160019004811515610fac57fe5b0460010290507f01000000000000000000000000000000000000000000000000000000000000006030600a84811515610fe157fe5b06010260010281179050600a82811515610ff757fe5b049150610f92565b5b8090505b919050565b6000600754600554111561157257600660009054906101000a900460ff16151561156d576001600660006101000a81548160ff021916908315150217905550600090505b600754811015611135576003816001600554030381548110151561106d57fe5b906000526020600020906004020160005b5060048281548110151561108e57fe5b906000526020600020906004020160005b50600082018160000190805460018160011615610100020316600290046110c792919061274f565b50600182018160010190805460018160011615610100020316600290046110ef92919061274f565b50600282015481600201556003820160009054906101000a900460ff168160030160006101000a81548160ff02191690831515021790555090505060018101905061104d565b6001600854016008819055506007546005540360058190555061115781611826565b600f908051906020019061116c92919061269d565b5061118361117e600160085403610f5e565b610d73565b6011908051906020019061119892919061269d565b506111ac6111a7600854610f5e565b610d73565b601290805190602001906111c192919061269d565b5061140960098054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561125b5780601f106112305761010080835404028352916020019161125b565b820191906000526020600020905b81548152906001019060200180831161123e57829003601f168201915b5050505050604060405190810160405280600181526020017f5f0000000000000000000000000000000000000000000000000000000000000081525060118054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561132d5780601f106113025761010080835404028352916020019161132d565b820191906000526020600020905b81548152906001019060200180831161131057829003601f168201915b5050505050604060405190810160405280600181526020017f5f0000000000000000000000000000000000000000000000000000000000000081525060128054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156113ff5780601f106113d4576101008083540402835291602001916113ff565b820191906000526020600020905b8154815290600101906020018083116113e257829003601f168201915b5050505050612261565b6010908051906020019061141e92919061269d565b507ff7599e85515c7e7fb95afa3449fa764f674b8bb2278f4f45bff5363c9064d04c6010600f6040518080602001806020018381038352858181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156114d15780601f106114a6576101008083540402835291602001916114d1565b820191906000526020600020905b8154815290600101906020018083116114b457829003601f168201915b50508381038252848181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156115545780601f1061152957610100808354040283529160200191611554565b820191906000526020600020905b81548152906001019060200180831161153757829003601f168201915b505094505050505060405180910390a161156c611009565b5b61158e565b6000600660006101000a81548160ff0219169083151502179055505b5b50565b61159a6127d6565b611649604060405190810160405280600681526020017f7b686173683a000000000000000000000000000000000000000000000000000081525084604060405190810160405280600181526020017f2c00000000000000000000000000000000000000000000000000000000000000815250604060405190810160405280600e81526020017f7468756d624e61696c486173683a00000000000000000000000000000000000081525086612261565b600a908051906020019061165e92919061269d565b5061176c600a8054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156116f85780601f106116cd576101008083540402835291602001916116f8565b820191906000526020600020905b8154815290600101906020018083116116db57829003601f168201915b5050505050604060405190810160405280600181526020017f7d00000000000000000000000000000000000000000000000000000000000000815250602060405190810160405280600081525060206040519081016040528060008152506020604051908101604052806000815250612261565b600b908051906020019061178192919061269d565b50600b8054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156118185780601f106117ed57610100808354040283529160200191611818565b820191906000526020600020905b8154815290600101906020018083116117fb57829003601f168201915b505050505090505b92915050565b61182e6127d6565b60006020604051908101604052806000815250600e908051906020019061185692919061269d565b50600090505b82811015611beb576119e660048281548110151561187657fe5b906000526020600020906004020160005b506000018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561191f5780601f106118f45761010080835404028352916020019161191f565b820191906000526020600020905b81548152906001019060200180831161190257829003601f168201915b505050505060048381548110151561193357fe5b906000526020600020906004020160005b506001018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156119dc5780601f106119b1576101008083540402835291602001916119dc565b820191906000526020600020905b8154815290600101906020018083116119bf57829003601f168201915b5050505050611592565b600d90805190602001906119fb92919061269d565b50600081141515611bb857611b9d600e8054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611a9f5780601f10611a7457610100808354040283529160200191611a9f565b820191906000526020600020905b815481529060010190602001808311611a8257829003601f168201915b5050505050604060405190810160405280600181526020017f2c00000000000000000000000000000000000000000000000000000000000000815250600d8054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611b715780601f10611b4657610100808354040283529160200191611b71565b820191906000526020600020905b815481529060010190602001808311611b5457829003601f168201915b505050505060206040519081016040528060008152506020604051908101604052806000815250612261565b600e9080519060200190611bb292919061269d565b50611bdd565b600d600e9080546001816001161561010002031660029004611bdb9291906127fe565b505b5b808060010191505061185c565b611d1e604060405190810160405280600281526020017f7b5b000000000000000000000000000000000000000000000000000000000000815250600e8054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611cbb5780601f10611c9057610100808354040283529160200191611cbb565b820191906000526020600020905b815481529060010190602001808311611c9e57829003601f168201915b5050505050604060405190810160405280600281526020017f5d7d00000000000000000000000000000000000000000000000000000000000081525060206040519081016040528060008152506020604051908101604052806000815250612261565b600e9080519060200190611d3392919061269d565b50600e8054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611dca5780601f10611d9f57610100808354040283529160200191611dca565b820191906000526020600020905b815481529060010190602001808311611dad57829003601f168201915b505050505091505b50919050565b6000600090505b8251811015611e95578281815181101515611df657fe5b90602001906020020151600482815481101515611e0f57fe5b906000526020600020906004020160005b506000820151816000019080519060200190611e3d929190612885565b506020820151816001019080519060200190611e5a929190612885565b506040820151816002015560608201518160030160006101000a81548160ff0219169083151502179055509050508080600101915050611ddf565b611e9e81611826565b60139080519060200190611eb392919061269d565b50611ec5611ec083610f5e565b610d73565b60159080519060200190611eda92919061269d565b50611eef611eea60018401610f5e565b610d73565b60169080519060200190611f0492919061269d565b5061210060098054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611f9e5780601f10611f7357610100808354040283529160200191611f9e565b820191906000526020600020905b815481529060010190602001808311611f8157829003601f168201915b505050505060158054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156120395780601f1061200e57610100808354040283529160200191612039565b820191906000526020600020905b81548152906001019060200180831161201c57829003601f168201915b505050505060168054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156120d45780601f106120a9576101008083540402835291602001916120d4565b820191906000526020600020905b8154815290600101906020018083116120b757829003601f168201915b505050505060206040519081016040528060008152506020604051908101604052806000815250612261565b6014908051906020019061211592919061269d565b507ff7599e85515c7e7fb95afa3449fa764f674b8bb2278f4f45bff5363c9064d04c601460136040518080602001806020018381038352858181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156121c85780601f1061219d576101008083540402835291602001916121c8565b820191906000526020600020905b8154815290600101906020018083116121ab57829003601f168201915b505083810382528481815460018160011615610100020316600290048152602001915080546001816001161561010002031660029004801561224b5780601f106122205761010080835404028352916020019161224b565b820191906000526020600020905b81548152906001019060200180831161222e57829003601f168201915b505094505050505060405180910390a15b505050565b6122696127d6565b6122716127ea565b6122796127ea565b6122816127ea565b6122896127ea565b6122916127ea565b6122996127d6565b6122a16127ea565b600060008e98508d97508c96508b95508a94508451865188518a518c51010101016040518059106122cf5750595b908082528060200260200182016040525b50935083925060009150600090505b88518110156123a357888181518110151561230657fe5b9060200101517f010000000000000000000000000000000000000000000000000000000000000090047f010000000000000000000000000000000000000000000000000000000000000002838380600101945081518110151561236557fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053505b80806001019150506122ef565b600090505b875181101561245c5787818151811015156123bf57fe5b9060200101517f010000000000000000000000000000000000000000000000000000000000000090047f010000000000000000000000000000000000000000000000000000000000000002838380600101945081518110151561241e57fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053505b80806001019150506123a8565b600090505b865181101561251557868181518110151561247857fe5b9060200101517f010000000000000000000000000000000000000000000000000000000000000090047f01000000000000000000000000000000000000000000000000000000000000000283838060010194508151811015156124d757fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053505b8080600101915050612461565b600090505b85518110156125ce57858181518110151561253157fe5b9060200101517f010000000000000000000000000000000000000000000000000000000000000090047f010000000000000000000000000000000000000000000000000000000000000002838380600101945081518110151561259057fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053505b808060010191505061251a565b600090505b84518110156126875784818151811015156125ea57fe5b9060200101517f010000000000000000000000000000000000000000000000000000000000000090047f010000000000000000000000000000000000000000000000000000000000000002838380600101945081518110151561264957fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053505b80806001019150506125d3565b8299505b50505050505050505095945050505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106126de57805160ff191683800117855561270c565b8280016001018555821561270c579182015b8281111561270b5782518255916020019190600101906126f0565b5b5090506127199190612905565b5090565b81548183558181151161274a57600402816004028360005260206000209182019101612749919061292a565b5b505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061278857805485556127c5565b828001600101855582156127c557600052602060002091601f016020900482015b828111156127c45782548255916001019190600101906127a9565b5b5090506127d29190612905565b5090565b602060405190810160405280600081525090565b602060405190810160405280600081525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106128375780548555612874565b8280016001018555821561287457600052602060002091601f016020900482015b82811115612873578254825591600101919060010190612858565b5b5090506128819190612905565b5090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106128c657805160ff19168380011785556128f4565b828001600101855582156128f4579182015b828111156128f35782518255916020019190600101906128d8565b5b5090506129019190612905565b5090565b61292791905b8082111561292357600081600090555060010161290b565b5090565b90565b61298391905b8082111561297f57600060008201600061294a9190612986565b60018201600061295a9190612986565b60028201600090556003820160006101000a81549060ff021916905550600401612930565b5090565b90565b50805460018160011615610100020316600290046000825580601f106129ac57506129cb565b601f0160209004906000526020600020908101906129ca9190612905565b5b505600a165627a7a72305820d0dd28b71d90a9d12634ae5865a3a5829b44bc25b35791931059df76dca5546c0029', 
     gas: '4700000'
   }, function (e, contract){
    console.log(e, contract);
    if (typeof contract.address !== 'undefined') {
         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }
 })