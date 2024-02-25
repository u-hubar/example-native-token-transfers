/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ReentrancyGuardUpgradeable,
  ReentrancyGuardUpgradeableInterface,
} from "../ReentrancyGuardUpgradeable";

const _abi = [
  {
    type: "event",
    name: "Initialized",
    inputs: [
      {
        name: "version",
        type: "uint64",
        indexed: false,
        internalType: "uint64",
      },
    ],
    anonymous: false,
  },
  {
    type: "error",
    name: "InvalidInitialization",
    inputs: [],
  },
  {
    type: "error",
    name: "NotInitializing",
    inputs: [],
  },
  {
    type: "error",
    name: "ReentrancyGuardReentrantCall",
    inputs: [],
  },
] as const;

export class ReentrancyGuardUpgradeable__factory {
  static readonly abi = _abi;
  static createInterface(): ReentrancyGuardUpgradeableInterface {
    return new utils.Interface(_abi) as ReentrancyGuardUpgradeableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ReentrancyGuardUpgradeable {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ReentrancyGuardUpgradeable;
  }
}
