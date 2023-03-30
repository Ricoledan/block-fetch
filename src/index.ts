#! /usr/bin/env node
import {Command, OptionValues} from 'commander'
import figlet from 'figlet'
import fetchProtocolDetails from './api/flipside/fetch.protocol.details'
import {ledgerLengthQuery, testQuery, transactionQuery} from "./api/flipside/sql.queries";

const program: Command = new Command();

console.log(figlet.textSync('Block-Fetch'))

program
    .version('version 1.0.0')
    .description('🐾 A simple CLI tool that aggregates and analyzes blockchain data from multiple sources and packages it into a single report.')
    // TODO: Create a command to fetch information from the blockchain (flipsidecrypto.xyz)
    .option('-f, --fetch <value>', 'Fetch data from the blockchain')
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
        fetchProtocolDetails(queries).then((r: void) => r).catch(e => console.log(e))
    } else {
        fetchProtocolDetails(queries, options.fetch).then((r: void) => r).catch(e => console.log(e))
    }


}

if (options.save) {
    console.log('Save data to a spreadsheet')
}

if (!process.argv.slice(2).length) {
    program.outputHelp()
}
