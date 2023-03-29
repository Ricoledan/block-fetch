# Block-Fetch

🐾 A simple CLI tool that aggregates and analyzes blockchain data from multiple sources and packages it into a single report.

## Prerequisites

* [nvm](https://github.com/nvm-sh/nvm)
* [nodejs](https://nodejs.org/en)

## Installation

Install dependencies

`npm install`

## Usage

Build application before running it

`npm run build`

Run the application

`node dist/index.js -f NameOfProtocol`

[//]: # (Install CLI tool globally)

[//]: # (`npm install block-fetch -g`)

## Supported Options

### Metric Composition List
* `-ts, --transactions` - Transactions Per Day (24h)
* `-st, --storage` - Storage Cost per GB
* `-n, --nodes` - Node Count
* `fund, --funding` - Project Funding
* `is, --issues` - GitHub Issue Count
* `rs, --releases` - GitHub Yearly Releases (Prior Full Year)
* `-cs, --contributors` - GitHub # of Contributors (People making commits)
* `-dev, --developers` - GitHub Full Time Developers

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

## Roadmap

* ~~Review the Spreadsheet and see what metrics I can pull from the API~~
* Group the metrics and stub the functions for those metrics
* ~~Pull them from the API (make needed transformations) and render them in the CLI in a tabular format~~
* Add a flag to the CLI that allows the option to output the metrics to a file/spreadsheet or json
* release CLI tool to GitHub and homebrew

## Contributors 

* Ricardo Ledan
* John Ritondo
