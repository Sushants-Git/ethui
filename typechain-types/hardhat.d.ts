/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  DeployContractOptions,
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomicfoundation/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "IERC1155Errors",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155Errors__factory>;
    getContractFactory(
      name: "IERC20Errors",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Errors__factory>;
    getContractFactory(
      name: "IERC721Errors",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Errors__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "IBitcoinLightClient",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBitcoinLightClient__factory>;
    getContractFactory(
      name: "MockLightClient",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockLightClient__factory>;
    getContractFactory(
      name: "MockProverContract",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockProverContract__factory>;
    getContractFactory(
      name: "MockERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockERC20__factory>;
    getContractFactory(
      name: "BitMix",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BitMix__factory>;
    getContractFactory(
      name: "BitMixVerifier",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BitMixVerifier__factory>;
    getContractFactory(
      name: "ISP1Verifier",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISP1Verifier__factory>;
    getContractFactory(
      name: "ISP1VerifierWithHash",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISP1VerifierWithHash__factory>;
    getContractFactory(
      name: "ISP1VerifierGateway",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISP1VerifierGateway__factory>;
    getContractFactory(
      name: "ISP1VerifierGatewayErrors",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISP1VerifierGatewayErrors__factory>;
    getContractFactory(
      name: "ISP1VerifierGatewayEvents",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISP1VerifierGatewayEvents__factory>;
    getContractFactory(
      name: "SP1VerifierGateway",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SP1VerifierGateway__factory>;

    getContractAt(
      name: "Ownable",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "IERC1155Errors",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155Errors>;
    getContractAt(
      name: "IERC20Errors",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Errors>;
    getContractAt(
      name: "IERC721Errors",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Errors>;
    getContractAt(
      name: "ERC20",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "IERC20Metadata",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: "IERC20",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "IBitcoinLightClient",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IBitcoinLightClient>;
    getContractAt(
      name: "MockLightClient",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.MockLightClient>;
    getContractAt(
      name: "MockProverContract",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.MockProverContract>;
    getContractAt(
      name: "MockERC20",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.MockERC20>;
    getContractAt(
      name: "BitMix",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.BitMix>;
    getContractAt(
      name: "BitMixVerifier",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.BitMixVerifier>;
    getContractAt(
      name: "ISP1Verifier",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ISP1Verifier>;
    getContractAt(
      name: "ISP1VerifierWithHash",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ISP1VerifierWithHash>;
    getContractAt(
      name: "ISP1VerifierGateway",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ISP1VerifierGateway>;
    getContractAt(
      name: "ISP1VerifierGatewayErrors",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ISP1VerifierGatewayErrors>;
    getContractAt(
      name: "ISP1VerifierGatewayEvents",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ISP1VerifierGatewayEvents>;
    getContractAt(
      name: "SP1VerifierGateway",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.SP1VerifierGateway>;

    deployContract(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Ownable>;
    deployContract(
      name: "IERC1155Errors",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC1155Errors>;
    deployContract(
      name: "IERC20Errors",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20Errors>;
    deployContract(
      name: "IERC721Errors",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC721Errors>;
    deployContract(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC20>;
    deployContract(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20Metadata>;
    deployContract(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20>;
    deployContract(
      name: "IBitcoinLightClient",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IBitcoinLightClient>;
    deployContract(
      name: "MockLightClient",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MockLightClient>;
    deployContract(
      name: "MockProverContract",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MockProverContract>;
    deployContract(
      name: "MockERC20",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MockERC20>;
    deployContract(
      name: "BitMix",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.BitMix>;
    deployContract(
      name: "BitMixVerifier",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.BitMixVerifier>;
    deployContract(
      name: "ISP1Verifier",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ISP1Verifier>;
    deployContract(
      name: "ISP1VerifierWithHash",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ISP1VerifierWithHash>;
    deployContract(
      name: "ISP1VerifierGateway",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ISP1VerifierGateway>;
    deployContract(
      name: "ISP1VerifierGatewayErrors",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ISP1VerifierGatewayErrors>;
    deployContract(
      name: "ISP1VerifierGatewayEvents",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ISP1VerifierGatewayEvents>;
    deployContract(
      name: "SP1VerifierGateway",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.SP1VerifierGateway>;

    deployContract(
      name: "Ownable",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Ownable>;
    deployContract(
      name: "IERC1155Errors",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC1155Errors>;
    deployContract(
      name: "IERC20Errors",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20Errors>;
    deployContract(
      name: "IERC721Errors",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC721Errors>;
    deployContract(
      name: "ERC20",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC20>;
    deployContract(
      name: "IERC20Metadata",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20Metadata>;
    deployContract(
      name: "IERC20",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20>;
    deployContract(
      name: "IBitcoinLightClient",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IBitcoinLightClient>;
    deployContract(
      name: "MockLightClient",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MockLightClient>;
    deployContract(
      name: "MockProverContract",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MockProverContract>;
    deployContract(
      name: "MockERC20",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MockERC20>;
    deployContract(
      name: "BitMix",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.BitMix>;
    deployContract(
      name: "BitMixVerifier",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.BitMixVerifier>;
    deployContract(
      name: "ISP1Verifier",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ISP1Verifier>;
    deployContract(
      name: "ISP1VerifierWithHash",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ISP1VerifierWithHash>;
    deployContract(
      name: "ISP1VerifierGateway",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ISP1VerifierGateway>;
    deployContract(
      name: "ISP1VerifierGatewayErrors",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ISP1VerifierGatewayErrors>;
    deployContract(
      name: "ISP1VerifierGatewayEvents",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ISP1VerifierGatewayEvents>;
    deployContract(
      name: "SP1VerifierGateway",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.SP1VerifierGateway>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
  }
}
