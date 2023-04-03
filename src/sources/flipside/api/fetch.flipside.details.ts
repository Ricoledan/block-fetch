import dotenv from 'dotenv';
import {Flipside, QueryResultSet} from '@flipsidecrypto/sdk';
import displayJsonAsTable from '../../../util/display.json.as.table';
import {ledgerLengthQuery, transactionQuery} from "../sql.queries";

dotenv.config();

const {SHROOMDK_API_KEY, DEBUG} = process.env;

if (!SHROOMDK_API_KEY) {
    console.log(
        'Please set your SHROOMDK_API_KEY environment variable, Learn more: https://sdk.flipsidecrypto.xyz/shroomdk'
    );
    process.exit(1);
}

const totalProtocolList: string[] = [
    'Ethereum',
    'Solana',
    'Polygon',
    'Cosmos',
    'Avalanche',
    'Arbitrum',
    'Optimism',
    'Base',
];

const queries = [
    {sql: transactionQuery, ttlMinutes: 1},
    {sql: ledgerLengthQuery, ttlMinutes: 1},
];

async function fetchFlipsideQueryResults(
    protocolList: string[] | string = totalProtocolList
): Promise<void> {
    if (typeof protocolList === 'string') {
        protocolList = [protocolList];
    }

    const flipside: Flipside = new Flipside(SHROOMDK_API_KEY as string, 'https://api.flipsidecrypto.com');

    for (const protocol of protocolList) {
        console.log(`Running queries for protocol: ${protocol}`);
        for (const query of queries) {
            const sqlWithProtocol = query.sql.replace(/:protocol/g, protocol.toLowerCase());
            const queryWithProtocol = { ...query, sql: sqlWithProtocol };
            const response: QueryResultSet = await flipside.query.run(queryWithProtocol);

            if (response.records !== null) {
                displayJsonAsTable(response.records);
            } else {
                console.log(`No records found for protocol: ${protocol}`);
                if (DEBUG === 'true') {
                    console.log(`Query: ${sqlWithProtocol}`);
                }
            }
        }
    }
}

export default fetchFlipsideQueryResults;
