export const bitMixABI = [
  {
    inputs: [
      { internalType: "address", name: "_wbtcTokenAddress", type: "address" },
      {
        internalType: "address",
        name: "_proverContractAddress",
        type: "address",
      },
      { internalType: "address", name: "_lightClientAddress", type: "address" },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "user", type: "address" },
      {
        indexed: true,
        internalType: "bytes32",
        name: "orderID",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "pubkey",
        type: "bytes32",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "orderID",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "blockhash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "cipherText",
        type: "bytes",
      },
    ],
    name: "OrderValidated",
    type: "event",
  },
  {
    inputs: [
      { internalType: "uint256", name: "amount", type: "uint256" },
      { internalType: "bytes32", name: "pubkey", type: "bytes32" },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "lightClient",
    outputs: [
      { internalType: "contract ILightClient", name: "", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "nonces",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    name: "orderMap",
    outputs: [
      { internalType: "uint256", name: "amount", type: "uint256" },
      { internalType: "bytes32", name: "pubkey", type: "bytes32" },
      { internalType: "bytes", name: "cipherText", type: "bytes" },
      { internalType: "bool", name: "isValidated", type: "bool" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proverContract",
    outputs: [
      { internalType: "contract IProverContract", name: "", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "orderID", type: "bytes32" },
      { internalType: "bytes", name: "proof", type: "bytes" },
      { internalType: "bytes", name: "publicInputs", type: "bytes" },
    ],
    name: "validate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "wbtcToken",
    outputs: [{ internalType: "contract IERC20", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
];
