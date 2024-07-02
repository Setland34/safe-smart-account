/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  CompatibilityFallbackHandler,
  CompatibilityFallbackHandlerInterface,
} from "../../../contracts/handler/CompatibilityFallbackHandler";

const _abi = [
  {
    inputs: [],
    name: "NAME",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "VERSION",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
    ],
    name: "getMessageHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract GnosisSafe",
        name: "safe",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
    ],
    name: "getMessageHashForSafe",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getModules",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_dataHash",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
    ],
    name: "isValidSignature",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
    ],
    name: "isValidSignature",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "targetContract",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "calldataPayload",
        type: "bytes",
      },
    ],
    name: "simulate",
    outputs: [
      {
        internalType: "bytes",
        name: "response",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "tokensReceived",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50611574806100206000396000f3fe608060405234801561001057600080fd5b50600436106100ce5760003560e01c80636ac247841161008c578063bc197c8111610066578063bc197c81146107bb578063bd61951d14610951578063f23a6e6114610a63578063ffa1ad7414610b63576100ce565b80636ac24784146105ea578063a3f4df7e146106d9578063b2494df31461075c576100ce565b806223de29146100d357806301ffc9a71461020b5780630a1028c41461026e578063150b7a021461033d5780631626ba7e1461043357806320c13b0b146104e9575b600080fd5b610209600480360360c08110156100e957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019064010000000081111561017057600080fd5b82018360208201111561018257600080fd5b803590602001918460018302840111640100000000831117156101a457600080fd5b9091929391929390803590602001906401000000008111156101c557600080fd5b8201836020820111156101d757600080fd5b803590602001918460018302840111640100000000831117156101f957600080fd5b9091929391929390505050610be6565b005b6102566004803603602081101561022157600080fd5b8101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610bf0565b60405180821515815260200191505060405180910390f35b6103276004803603602081101561028457600080fd5b81019080803590602001906401000000008111156102a157600080fd5b8201836020820111156102b357600080fd5b803590602001918460018302840111640100000000831117156102d557600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610d2a565b6040518082815260200191505060405180910390f35b6103fe6004803603608081101561035357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001906401000000008111156103ba57600080fd5b8201836020820111156103cc57600080fd5b803590602001918460018302840111640100000000831117156103ee57600080fd5b9091929391929390505050610d3d565b60405180827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200191505060405180910390f35b6104b46004803603604081101561044957600080fd5b81019080803590602001909291908035906020019064010000000081111561047057600080fd5b82018360208201111561048257600080fd5b803590602001918460018302840111640100000000831117156104a457600080fd5b9091929391929390505050610d52565b60405180827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200191505060405180910390f35b6105b5600480360360408110156104ff57600080fd5b810190808035906020019064010000000081111561051c57600080fd5b82018360208201111561052e57600080fd5b8035906020019184600183028401116401000000008311171561055057600080fd5b90919293919293908035906020019064010000000081111561057157600080fd5b82018360208201111561058357600080fd5b803590602001918460018302840111640100000000831117156105a557600080fd5b9091929391929390505050610f0a565b60405180827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200191505060405180910390f35b6106c36004803603604081101561060057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019064010000000081111561063d57600080fd5b82018360208201111561064f57600080fd5b8035906020019184600183028401116401000000008311171561067157600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929050505061115b565b6040518082815260200191505060405180910390f35b6106e16112cd565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610721578082015181840152602081019050610706565b50505050905090810190601f16801561074e5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610764611306565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156107a757808201518184015260208101905061078c565b505050509050019250505060405180910390f35b61091c600480360360a08110156107d157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019064010000000081111561082e57600080fd5b82018360208201111561084057600080fd5b8035906020019184602083028401116401000000008311171561086257600080fd5b90919293919293908035906020019064010000000081111561088357600080fd5b82018360208201111561089557600080fd5b803590602001918460208302840111640100000000831117156108b757600080fd5b9091929391929390803590602001906401000000008111156108d857600080fd5b8201836020820111156108ea57600080fd5b8035906020019184600183028401116401000000008311171561090c57600080fd5b909192939192939050505061146d565b60405180827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200191505060405180910390f35b6109e86004803603604081101561096757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001906401000000008111156109a457600080fd5b8201836020820111156109b657600080fd5b803590602001918460018302840111640100000000831117156109d857600080fd5b9091929391929390505050611485565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610a28578082015181840152602081019050610a0d565b50505050905090810190601f168015610a555780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610b2e600480360360a0811015610a7957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019092919080359060200190640100000000811115610aea57600080fd5b820183602082011115610afc57600080fd5b80359060200191846001830284011164010000000083111715610b1e57600080fd5b90919293919293905050506114ef565b60405180827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200191505060405180910390f35b610b6b611505565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610bab578082015181840152602081019050610b90565b50505050905090810190601f168015610bd85780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b5050505050505050565b60007f4e2312e0000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610cbb57507f150b7a02000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610d2357507f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b9050919050565b6000610d36338361115b565b9050919050565b600063150b7a0260e01b905095945050505050565b60008033905060008173ffffffffffffffffffffffffffffffffffffffff166320c13b0b876040516020018082815260200191505060405160208183030381529060405287876040518463ffffffff1660e01b8152600401808060200180602001838103835286818151815260200191508051906020019080838360005b83811015610deb578082015181840152602081019050610dd0565b50505050905090810190601f168015610e185780820380516001836020036101000a031916815260200191505b508381038252858582818152602001925080828437600081840152601f19601f8201169050808301925050509550505050505060206040518083038186803b158015610e6357600080fd5b505afa158015610e77573d6000803e3d6000fd5b505050506040513d6020811015610e8d57600080fd5b810190808051906020019092919050505090506320c13b0b60e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614610ef657600060e01b610eff565b631626ba7e60e01b5b925050509392505050565b6000803390506000610f608288888080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505061115b565b905060008585905014156110755760008273ffffffffffffffffffffffffffffffffffffffff16635ae6bd37836040518263ffffffff1660e01b81526004018082815260200191505060206040518083038186803b158015610fc157600080fd5b505afa158015610fd5573d6000803e3d6000fd5b505050506040513d6020811015610feb57600080fd5b81019080805190602001909291905050501415611070576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260118152602001807f48617368206e6f7420617070726f76656400000000000000000000000000000081525060200191505060405180910390fd5b611147565b8173ffffffffffffffffffffffffffffffffffffffff1663934f3a1182898989896040518663ffffffff1660e01b81526004018086815260200180602001806020018381038352878782818152602001925080828437600081840152601f19601f8201169050808301925050508381038252858582818152602001925080828437600081840152601f19601f82011690508083019250505097505050505050505060006040518083038186803b15801561112e57600080fd5b505afa158015611142573d6000803e3d6000fd5b505050505b6320c13b0b60e01b92505050949350505050565b6000807f60b3cbf8b4a223d68d641b3b6ddf9a298e7f33710cf3d3a9d1146b5a6150fbca60001b83805190602001206040516020018083815260200182815260200192505050604051602081830303815290604052805190602001209050601960f81b600160f81b8573ffffffffffffffffffffffffffffffffffffffff1663f698da256040518163ffffffff1660e01b815260040160206040518083038186803b15801561120957600080fd5b505afa15801561121d573d6000803e3d6000fd5b505050506040513d602081101561123357600080fd5b81019080805190602001909291905050508360405160200180857effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168152600101847effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191681526001018381526020018281526020019450505050506040516020818303038152906040528051906020012091505092915050565b6040518060400160405280601881526020017f44656661756c742043616c6c6261636b2048616e646c6572000000000000000081525081565b6060600033905060008173ffffffffffffffffffffffffffffffffffffffff1663cc2f84526001600a6040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060006040518083038186803b15801561138057600080fd5b505afa158015611394573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f8201168201806040525060408110156113be57600080fd5b81019080805160405193929190846401000000008211156113de57600080fd5b838201915060208201858111156113f457600080fd5b825186602082028301116401000000008211171561141157600080fd5b8083526020830192505050908051906020019060200280838360005b8381101561144857808201518184015260208101905061142d565b5050505090500160405260200180519060200190929190505050509050809250505090565b600063bc197c8160e01b905098975050505050505050565b60606040517fb4faba09000000000000000000000000000000000000000000000000000000008152600436036004808301376020600036836000335af15060203d036040519250808301604052806020843e6000516114e657825160208401fd5b50509392505050565b600063f23a6e6160e01b90509695505050505050565b6040518060400160405280600581526020017f312e302e300000000000000000000000000000000000000000000000000000008152508156fea26469706673582212204251d58f2a197439239faafa82818b7696d25bb75655794a81cc773a0e39ed2b64736f6c63430007060033";

type CompatibilityFallbackHandlerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CompatibilityFallbackHandlerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CompatibilityFallbackHandler__factory extends ContractFactory {
  constructor(...args: CompatibilityFallbackHandlerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      CompatibilityFallbackHandler & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): CompatibilityFallbackHandler__factory {
    return super.connect(runner) as CompatibilityFallbackHandler__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CompatibilityFallbackHandlerInterface {
    return new Interface(_abi) as CompatibilityFallbackHandlerInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): CompatibilityFallbackHandler {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as CompatibilityFallbackHandler;
  }
}
