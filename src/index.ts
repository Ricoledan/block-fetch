#! /usr/bin/env node
import {Command, OptionValues} from 'commander'
import figlet from 'figlet'
import fetchFlipsideDetails from './providers/protocols/flipside/fetch.flipside.details'
import fetchEtherscanDetails from './providers/protocols/etherscan/api/combine.api'
import {ledgerLengthQuery, transactionQuery} from "./providers/protocols/flipside/sql.queries"


const program: Command = new Command()

console.log(figlet.textSync('Block-Fetch'))

program
    .version('version 1.0.0')
    .description('🐾 A simple CLI tool that aggregates and analyzes blockchain data from multiple sources and packages it into a single report.')
    .option('-f, --fetch <value>', 'Fetch data from the blockchain')
    .option('-p, --provider <value>', 'Provider to use for fetching data from a blockchain source')
    // TODO: Create a command saves information from the blockchain to a spreadsheet
    .option('-s, --save <value>', 'Save data to a spreadsheet')
    .parse(process.argv)

const options: OptionValues = program.opts()

const queries = [
    {sql: transactionQuery, ttlMinutes: 1},
    {sql: ledgerLengthQuery, ttlMinutes: 1},
];

if (options.fetch) {
    // TODO: maybe check for opposite
    if (options.fetch === 'all') {
        // TODO: Fetch all data fields from the blockchain
        console.log('execute special code for "all"')
        fetchFlipsideDetails(queries).then((r: void) => r).catch(e => console.log(e))
    } else {
        fetchFlipsideDetails(queries, options.fetch).then((r: void) => r).catch(e => console.log(e))
    }
}

if (options.provider) {
    console.log('Ethereum')
    fetchEtherscanDetails().then((r: any) => console.table(r)).catch(e => console.log(e))
}

if (options.save) {
    console.log('Save data to a spreadsheet')
}

if (!process.argv.slice(2).length) {
    program.outputHelp()
}
