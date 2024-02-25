/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IMessageTransmitter,
  IMessageTransmitterInterface,
} from "../IMessageTransmitter";

const _abi = [
  {
    type: "function",
    name: "receiveMessage",
    inputs: [
      {
        name: "message",
        type: "bytes",
        internalType: "bytes",
      },
      {
        name: "signature",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [
      {
        name: "success",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "replaceMessage",
    inputs: [
      {
        name: "originalMessage",
        type: "bytes",
        internalType: "bytes",
      },
      {
        name: "originalAttestation",
        type: "bytes",
        internalType: "bytes",
      },
      {
        name: "newMessageBody",
        type: "bytes",
        internalType: "bytes",
      },
      {
        name: "newDestinationCaller",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "sendMessage",
    inputs: [
      {
        name: "destinationDomain",
        type: "uint32",
        internalType: "uint32",
      },
      {
        name: "recipient",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "messageBody",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint64",
        internalType: "uint64",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "sendMessageWithCaller",
    inputs: [
      {
        name: "destinationDomain",
        type: "uint32",
        internalType: "uint32",
      },
      {
        name: "recipient",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "destinationCaller",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "messageBody",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint64",
        internalType: "uint64",
      },
    ],
    stateMutability: "nonpayable",
  },
] as const;

export class IMessageTransmitter__factory {
  static readonly abi = _abi;
  static createInterface(): IMessageTransmitterInterface {
    return new utils.Interface(_abi) as IMessageTransmitterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IMessageTransmitter {
    return new Contract(address, _abi, signerOrProvider) as IMessageTransmitter;
  }
}
