import { ethers } from "ethers";
import abi from "./PlasticSokoABI.json";

const CONTRACT_ADDRESS = "0xF6474B8281C7C2c6860Bc89bC2e68bfD7A67b021";

export function getContract(providerOrSigner) {
  return new ethers.Contract(CONTRACT_ADDRESS, abi, providerOrSigner);
}
