export const environment = {
  production: true,
  chainId: "4",
  smartAccountSCData: '0x60c0604052600560808190527f302e302e3100000000000000000000000000000000000000000000000000000060a09081526200004091600291906200025a565b503480156200004e57600080fd5b5060008054600160a060020a0319163390811790915562000078906401000000006200007e810204565b620002ff565b600054600160a060020a031633146200009657600080fd5b600160a060020a0381161515620000ac57600080fd5b620000fc816040805190810160405280600781526020017f626f756e63657200000000000000000000000000000000000000000000000000815250620000ff640100000000026401000000009004565b50565b6200017b826001836040518082805190602001908083835b60208310620001385780518252601f19909201916020918201910162000117565b51815160209384036101000a6000190180199092169116179052920194855250604051938490030190922092915050640100000000620002358102620012ae1704565b7fbfec83d64eaa953f2708271a023ab9ee82057f8f3578d548c1a4ba0b5b70048982826040518083600160a060020a0316600160a060020a0316815260200180602001828103825283818151815260200191508051906020019080838360005b83811015620001f5578181015183820152602001620001db565b50505050905090810190601f168015620002235780820380516001836020036101000a031916815260200191505b50935050505060405180910390a15050565b600160a060020a0316600090815260209190915260409020805460ff19166001179055565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200029d57805160ff1916838001178555620002cd565b82800160010185558215620002cd579182015b82811115620002cd578251825591602001919060010190620002b0565b50620002db929150620002df565b5090565b620002fc91905b80821115620002db5760008155600101620002e6565b90565b611479806200030f6000396000f3006080604052600436106100e55763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416630988ca8c81146100e75780631479290e1461014e578063217fe6c61461016f57806354fd4d50146101ea578063565c587c146102745780635b7991cd1461029557806382916381146102bc578063888764c8146103285780638da5cb5b14610349578063948adb6f1461037a57806398413ff1146103a0578063a9059cbb146103b8578063c15aea25146103dc578063d466ab6b14610486578063db85d59c1461049b578063f2fde38b146104b3575b005b3480156100f357600080fd5b5060408051602060046024803582810135601f81018590048502860185019096528585526100e5958335600160a060020a03169536956044949193909101919081908401838280828437509497506104d49650505050505050565b34801561015a57600080fd5b506100e5600160a060020a0360043516610542565b34801561017b57600080fd5b5060408051602060046024803582810135601f81018590048502860185019096528585526101d6958335600160a060020a031695369560449491939091019190819084018382808284375094975061059e9650505050505050565b604080519115158252519081900360200190f35b3480156101f657600080fd5b506101ff610611565b6040805160208082528351818301528351919283929083019185019080838360005b83811015610239578181015183820152602001610221565b50505050905090810190601f1680156102665780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561028057600080fd5b506101d6600160a060020a036004351661069c565b3480156102a157600080fd5b506102aa6106b1565b60408051918252519081900360200190f35b3480156102c857600080fd5b50604080516020601f6064356004818101359283018490048402850184019095528184526100e594600160a060020a0381351694602480359560443595369560849493019181908401838280828437509497506106b89650505050505050565b34801561033457600080fd5b506100e5600160a060020a0360043516610748565b34801561035557600080fd5b5061035e6107a1565b60408051600160a060020a039092168252519081900360200190f35b34801561038657600080fd5b506100e5600160a060020a036004351660243515156107b0565b3480156103ac57600080fd5b5061035e600435610a4b565b3480156103c457600080fd5b506100e5600160a060020a0360043516602435610a77565b3480156103e857600080fd5b50604080516020601f6064356004818101359283018490048402850184019095528184526100e594600160a060020a03813516946024803595604435953695608494930191819084018382808284375050604080516020601f89358b018035918201839004830284018301909452808352979a999881019791965091820194509250829150840183828082843750949750610b789650505050505050565b34801561049257600080fd5b506101ff610cbc565b3480156104a757600080fd5b5061035e600435610ce1565b3480156104bf57600080fd5b506100e5600160a060020a0360043516610d09565b61053e826001836040518082805190602001908083835b6020831061050a5780518252601f1990920191602091820191016104eb565b51815160209384036101000a6000190180199092169116179052920194855250604051938490030190922092915050610e0f565b5050565b600054600160a060020a0316331461055957600080fd5b600160a060020a038116151561056e57600080fd5b61059b8160408051908101604052806007815260200160008051602061142e833981519152815250610e24565b50565b600061060a836001846040518082805190602001908083835b602083106105d65780518252601f1990920191602091820191016105b7565b51815160209384036101000a6000190180199092169116179052920194855250604051938490030190922092915050610f45565b9392505050565b6002805460408051602060018416156101000260001901909316849004601f810184900484028201840190925281815292918301828280156106945780601f1061066957610100808354040283529160200191610694565b820191906000526020600020905b81548152906001019060200180831161067757829003601f168201915b505050505081565b60036020526000908152604090205460ff1681565b6004545b90565b3360009081526003602052604090205460ff16806106e05750600054600160a060020a031633145b1515610736576040805160e560020a62461bcd02815260206004820152600c60248201527f556e617574686f72697a65640000000000000000000000000000000000000000604482015290519081900360640190fd5b61074284848484610f64565b50505050565b600054600160a060020a0316331461075f57600080fd5b600160a060020a038116151561077457600080fd5b61059b8160408051908101604052806007815260200160008051602061142e833981519152815250611158565b600054600160a060020a031681565b600080548190600160a060020a031633146107ca57600080fd5b821561089e57600160a060020a03841660009081526003602052604090205460ff1615610841576040805160e560020a62461bcd02815260206004820152601260248201527f416c726561647920617574686f72697a65640000000000000000000000000000604482015290519081900360640190fd5b600480546001810182556000919091527f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b01805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0386161790556109e5565b600160a060020a03841660009081526003602052604090205460ff161515610910576040805160e560020a62461bcd02815260206004820152601460248201527f416c726561647920756e617574686f72697a6564000000000000000000000000604482015290519081900360640190fd5b60048054600019810190811061092257fe5b600091825260209091200154600160a060020a039081169250841682146109d0575060005b6004548110156109d05783600160a060020a031660048281548110151561096a57fe5b600091825260209091200154600160a060020a031614156109c8578160048281548110151561099557fe5b9060005260206000200160006101000a815481600160a060020a030219169083600160a060020a031602179055506109d0565b600101610947565b60048054906109e39060001983016113e6565b505b600160a060020a038416600081815260036020908152604091829020805460ff191687151590811790915582519384529083015280517f71b03471b324bbcc7546b2626d0407dbb70a61e5e77c56214352d9c12893933f9281900390910190a150505050565b6000600482815481101515610a5c57fe5b600091825260209091200154600160a060020a031692915050565b3360009081526003602052604090205460ff1680610a9f5750600054600160a060020a031633145b1515610af5576040805160e560020a62461bcd02815260206004820152600c60248201527f556e617574686f72697a65640000000000000000000000000000000000000000604482015290519081900360640190fd5b604051600160a060020a0383169082156108fc029083906000818181858888f19350505050158015610b2b573d6000803e3d6000fd5b5060408051338152600160a060020a038416602082015280820183905290517fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360600190a15050565b610c9e308686856040516020018085600160a060020a0316600160a060020a03166c0100000000000000000000000002815260140184600160a060020a0316600160a060020a03166c0100000000000000000000000002815260140183815260200182805190602001908083835b60208310610c055780518252601f199092019160209182019101610be6565b6001836020036101000a0380198251168184511680821785525050505050509050019450505050506040516020818303038152906040526040518082805190602001908083835b60208310610c6b5780518252601f199092019160209182019101610c4c565b6001836020036101000a038019825116818451168082178552505050505050905001915050604051809103902082611239565b1515610ca957600080fd5b610cb585858585610f64565b5050505050565b604080518082019091526007815260008051602061142e833981519152602082015281565b6004805482908110610cef57fe5b600091825260209091200154600160a060020a0316905081565b3360009081526003602052604090205460ff1680610d315750600054600160a060020a031633145b1515610d87576040805160e560020a62461bcd02815260206004820152600c60248201527f556e617574686f72697a65640000000000000000000000000000000000000000604482015290519081900360640190fd5b600160a060020a0381161515610d9c57600080fd5b60008054600160a060020a0380841673ffffffffffffffffffffffffffffffffffffffff199092168217928390556040805133815293909116602084015282810191909152517f6954f1cdad46901994f29d9b1f78744c873c527bad04d294b4954cc8caf367da9181900360600190a150565b610e198282610f45565b151561053e57600080fd5b610e8e826001836040518082805190602001908083835b60208310610e5a5780518252601f199092019160209182019101610e3b565b51815160209384036101000a600019018019909216911617905292019485525060405193849003019092209291505061128c565b7fd211483f91fc6eff862467f8de606587a30c8fc9981056f051b897a418df803a82826040518083600160a060020a0316600160a060020a0316815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610f06578181015183820152602001610eee565b50505050905090810190601f168015610f335780820380516001836020036101000a031916815260200191505b50935050505060405180910390a15050565b600160a060020a03166000908152602091909152604090205460ff1690565b6000821115610ff55783600160a060020a03168383908360405180828051906020019080838360005b83811015610fa5578181015183820152602001610f8d565b50505050905090810190601f168015610fd25780820380516001836020036101000a031916815260200191505b50915050600060405180830381858888f193505050501515610ff057fe5b611075565b83600160a060020a0316838260405180828051906020019080838360005b8381101561102b578181015183820152602001611013565b50505050905090810190601f1680156110585780820380516001836020036101000a031916815260200191505b5091505060006040518083038185875af192505050151561107557fe5b7f50d4a783a87f81acfdef1538317cccb0c246befd623f8f75378a8031f95c535633858585856040518086600160a060020a0316600160a060020a0316815260200185600160a060020a0316600160a060020a0316815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156111145781810151838201526020016110fc565b50505050905090810190601f1680156111415780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390a150505050565b6111c2826001836040518082805190602001908083835b6020831061118e5780518252601f19909201916020918201910161116f565b51815160209384036101000a60001901801990921691161790529201948552506040519384900301909220929150506112ae565b7fbfec83d64eaa953f2708271a023ab9ee82057f8f3578d548c1a4ba0b5b70048982826040518083600160a060020a0316600160a060020a03168152602001806020018281038252838181518152602001915080519060200190808383600083811015610f06578181015183820152602001610eee565b60008061125583611249866112d3565b9063ffffffff61131116565b90506112848160408051908101604052806007815260200160008051602061142e83398151915281525061059e565b949350505050565b600160a060020a0316600090815260209190915260409020805460ff19169055565b600160a060020a0316600090815260209190915260409020805460ff19166001179055565b604080517f19457468657265756d205369676e6564204d6573736167653a0a3332000000008152601c8101839052905190819003603c019020919050565b6000806000808451604114151561132b57600093506113dd565b50505060208201516040830151606084015160001a601b60ff8216101561135057601b015b8060ff16601b1415801561136857508060ff16601c14155b1561137657600093506113dd565b60408051600080825260208083018085528a905260ff8516838501526060830187905260808301869052925160019360a0808501949193601f19840193928390039091019190865af11580156113d0573d6000803e3d6000fd5b5050506020604051035193505b50505092915050565b81548183558181111561140a5760008381526020902061140a91810190830161140f565b505050565b6106b591905b808211156114295760008155600101611415565b50905600626f756e63657200000000000000000000000000000000000000000000000000a165627a7a723058204af40e3f1bcf9378b8c2bd5a28eb4c6a14e7d8648946dfc48c9c7a95d86e84b40029'
};
