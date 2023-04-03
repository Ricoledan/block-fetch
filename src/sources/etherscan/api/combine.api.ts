import getTotalNodesCount from './total.nodes.count'
import getDailyTransactionCount from './daily.transaction.count'
import displayJsonAsTable from "../../../util/display.json.as.table";

// TODO: combine data into one large object

export default async function getEtherscanData() {
    const totalNodesCount = await getTotalNodesCount();
    const dailyTransactionCount = await getDailyTransactionCount();

    return displayJsonAsTable([
        {
            'Total Nodes Count': totalNodesCount,
            'Transactions Per Day (24h)': dailyTransactionCount
        }
    ])
}
