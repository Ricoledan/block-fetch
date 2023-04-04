import githubResponseObject from "./github/api/combine.api";
import fetchFlipsideDetails from "./flipside/api/fetch.flipside.details";
import fetchEtherscanDetails from "./etherscan/api/combine.api";

export default async function aggregatedResults(protocol: string = 'all') {
    const githubData = await githubResponseObject()
    const etherscanData = await fetchEtherscanDetails()
    const flipsideData = await fetchFlipsideDetails(protocol === 'all' ? undefined : protocol);

    return {
        githubData,
        etherscanData,
        flipsideData // flipside api is usually slow to fetch results from
    }
}
