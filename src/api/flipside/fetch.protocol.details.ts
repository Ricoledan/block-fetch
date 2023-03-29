// @ts-ignore
import {Flipside, Query} from "@flipsidecrypto/sdk";

async function fetchQueryResults(apiKey: string) {
    const flipside = new Flipside(apiKey, "https://api.flipsidecrypto.com");

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

    const result = await flipside.query.run(query);

    // Iterate over the results
    // result?.records?.forEach((record: any) => {
    //     const nftAddress = record.nft_address
    //     const mintPriceEth = record.mint_price_eth
    //     const mintPriceUSD = record.mint_price_usd
    //     console.log(`address ${nftAddress} minted at a price of ${mintPriceEth} ETH or $${mintPriceUSD} USD`);
    // });

    return result;
}

export default fetchQueryResults;
