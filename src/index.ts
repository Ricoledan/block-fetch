#!/usr/bin/env node

import {Command, OptionValues} from 'commander'
import figlet from 'figlet'
import aggregatedResults from "./sources/aggregated.results";

const program: Command = new Command();
console.log(figlet.textSync('Block-Fetch'))

program
    .version('version 1.0.0')
    .description(
        '🐾 A simple CLI tool that aggregates blockchain data from multiple sources and packages it into a single report.'
    )
    .option('-f, --fetch <protocol>', 'Fetch data from blockchain sources', 'all')
    .parse(process.argv)

const options: OptionValues = program.opts()


async function run() {
    switch (true) {
        case Boolean(options.fetch):
            console.log('protocol-in-context: ', program.opts().fetch)
            await aggregatedResults(program.opts().fetch)
            break;
        case !Boolean(process.argv.slice(2).length):
            program.outputHelp()
            break;
        default:
    }
}

run().then(r => r).catch(e => console.log(e))
