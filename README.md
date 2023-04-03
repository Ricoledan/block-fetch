# Block-Fetch

🐾 A simple CLI tool that aggregates and analyzes blockchain data from multiple sources and packages it into a single report.

## Prerequisites

* [nvm](https://github.com/nvm-sh/nvm)
* [nodejs](https://nodejs.org/en) (use nodejs 19+)

## Installation

Install dependencies

`npm install`

## Usage

Build application before running it

`npm run build`

Run the application

`node dist/index.js -f NameOfProtocol`

or 

`node dist/index.js -f all`

[//]: # (Install CLI tool globally)

[//]: # (`npm install block-fetch -g`)

## Supported Options


[//]: # (### Metric Composition List &#40;WIP&#41;)

[//]: # ()
[//]: # (* `-ts, --transactions` - Transactions Per Day &#40;24h&#41;)

[//]: # ()
[//]: # (* `-st, --storage` - Storage Cost per GB)

[//]: # ()
[//]: # (* `-n, --nodes` - Node Count)

[//]: # ()
[//]: # (* `fund, --funding` - Project Funding)

[//]: # ()
[//]: # (* `is, --issues` - GitHub Issue Count)

[//]: # ()
[//]: # (* `rs, --releases` - GitHub Yearly Releases &#40;Prior Full Year&#41;)

[//]: # ()
[//]: # (* `-cs, --contributors` - GitHub # of Contributors &#40;People making commits&#41;)

[//]: # ()
[//]: # (* `-dev, --developers` - GitHub Full Time Developers)

## Supported Sources & Protocols

### [Flipside Crypto](https://flipsidecrypto.xyz/)

* Ethereum
* Solana
* Polygon
* Cosmos
* Avalanche
* Arbitrum
* Optimism
* Base

### [Etherscan](https://etherscan.io/)

* Ethereum

## Roadmap

* ~~Review the Spreadsheet and see what metrics I can pull from the API~~
* Group the metrics and stub the functions for those metrics
* ~~Pull them from the API (make needed transformations) and render them in the CLI in a tabular format~~
* Add a flag to the CLI that allows the option to output the metrics to a file/spreadsheet or json
* release CLI tool to GitHub and homebrew

## Known Issues

The @flipsidecrypto SDK needs some additional commands run to get it to work properly:

`cd node_modules/@flipsidecrypto/sdk/`

`npm install`

`tsc`

That should get it working.
I'll be looking into a better solution for this in the future.
Reach out in their discord if you have any questions.

* [sdk-general](https://discord.com/channels/784442203187314689/992103637587337226)
* [sdk-support](https://discord.com/channels/784442203187314689/991341227586879578)

## Contributors 

* Ricardo Ledan
* John Ritondo
