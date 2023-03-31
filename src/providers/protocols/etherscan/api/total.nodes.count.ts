import dotenv from 'dotenv'
import axios from 'axios'

dotenv.config()

export default async function getTotalNodesCount(): Promise<any> {
    try {
        const response = await axios.get(`https://api.etherscan.io/api?module=stats&action=nodecount&apikey=${process.env.ETHERSCAN_API_KEY}`)

        return response.data.result.TotalNodeCount // returns 11683
    } catch (error) {
        console.error(error);
    }
}
