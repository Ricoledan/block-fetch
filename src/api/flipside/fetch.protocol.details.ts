import dotenv from 'dotenv'
import {Flipside} from "@flipsidecrypto/sdk";
import displayJsonAsTable from '../../util/display.json.as.table'

dotenv.config()

const {SHROOMDK_API_KEY} = process.env;

if (!SHROOMDK_API_KEY) {
    console.log('Please set your SHROOMDK_API_KEY environment variable, Learn more: https://sdk.flipsidecrypto.xyz/shroomdk')
    process.exit(1)
}

async function fetchQueryResults() {
    const flipside = new Flipside(SHROOMDK_API_KEY as string, "https://api.flipsidecrypto.com");

    const sqlQuery: string = `
select
  project_name,
  count(*) as mint_count
from
  ethereum.core.ez_nft_mints
where
  project_name is not null
  and block_timestamp > current_date - interval '7 days'
group by
  project_name
order by
  mint_count desc
limit
  8;  
`

    const query = {
        sql: sqlQuery,
        ttlMinutes: 10,
    };

    const response = await flipside.query.run(query);

    return displayJsonAsTable(response.records)
}

export default fetchQueryResults;
