import dotenv from 'dotenv'
import axios from 'axios'

dotenv.config()

const now = new Date()

export default async function getDailyTransactionCount(): Promise<any> {
    try {

        const response =  await axios.get(`https://api.etherscan.io/api?module=stats&action=dailytx&startdate=${new Date(now.getTime() - 24 * 60 * 60 * 1000).toISOString().slice(0, 10)}&enddate=${now.toISOString().slice(0, 10)}&sort=asc&apikey=${process.env.ETHERSCAN_API_KEY}`)

        return response.data.result
        // returns 11683
    } catch (error) {
        console.error(error);
    }
}
