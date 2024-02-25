/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IOwnableUpgradeable,
  IOwnableUpgradeableInterface,
} from "../IOwnableUpgradeable";

const _abi = [
  {
    type: "function",
    name: "owner",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
] as const;

export class IOwnableUpgradeable__factory {
  static readonly abi = _abi;
  static createInterface(): IOwnableUpgradeableInterface {
    return new utils.Interface(_abi) as IOwnableUpgradeableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IOwnableUpgradeable {
    return new Contract(address, _abi, signerOrProvider) as IOwnableUpgradeable;
  }
}
