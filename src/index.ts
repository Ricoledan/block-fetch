#! /usr/bin/env node

import {Command} from 'commander'
import figlet from "figlet"
import fetchProtocolDetails from "./api/flipside/fetch.protocol.details";

const program = new Command();

console.log(figlet.textSync('BlockFetch'))

program
    .version("version 1.0.0")
    .description("🐾 A simple CLI tool that aggregates and analyzes blockchain data from multiple sources and packages it into a single report.")
    // TODO: Create a command to fetch information from the blockchain (flipsidecrypto.xyz)
    .option("-f, --fetch <value>", "Fetch data from the blockchain")
    // TODO: Create a command saves information from the blockchain to a spreadsheet
    .option("-s, --save <value>", "Save data to a spreadsheet")
    .parse(process.argv)

const options = program.opts();

if (options.fetch) {
    console.log('Fetch data from the blockchain', options.fetch);
    fetchProtocolDetails().then(r => r).catch(e => console.log(e))
}

if (options.save) {
    console.log('Save data to a spreadsheet');
}

// If no arguments are passed, display help
if (!process.argv.slice(2).length) {
    program.outputHelp();
}
