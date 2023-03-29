// Transactions Per Day
export const transactionQuery: string = `
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

// Storage Cost per GB
// Node Count
// Project Funding
// GitHub Issue Count
// GitHub Yearly Releases (Prior Full Year)
// GitHub # of Contributors (People making commits)
// GitHub Full Time Developers

export const testQuery: string = `
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
