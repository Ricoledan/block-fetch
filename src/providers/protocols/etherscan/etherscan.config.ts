import { init } from 'etherscan-api';
import dotenv from "dotenv";

dotenv.config();

const etherscanApi = init(process.env.ETHERSCAN_API_KEY)

export default etherscanApi