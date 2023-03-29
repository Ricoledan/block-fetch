import dotenv from 'dotenv'
import {Flipside, QueryResultSet} from "@flipsidecrypto/sdk";
import displayJsonAsTable from '../../util/display.json.as.table'
import {transactionQuery, testQuery} from './sql.queries'

dotenv.config()

const {SHROOMDK_API_KEY} = process.env;

if (!SHROOMDK_API_KEY) {
    console.log('Please set your SHROOMDK_API_KEY environment variable, Learn more: https://sdk.flipsidecrypto.xyz/shroomdk')
    process.exit(1)
}

async function fetchQueryResults(): Promise<void> {
    const flipside: Flipside = new Flipside(SHROOMDK_API_KEY as string, 'https://api.flipsidecrypto.com');
    const query: { sql: string, ttlMinutes: number } = {sql: testQuery, ttlMinutes: 10}
    const response: QueryResultSet = await flipside.query.run(query)

    return displayJsonAsTable(response.records)
}

export default fetchQueryResults
