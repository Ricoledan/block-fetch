import getTotalNodesCount from './total.nodes.count'
import getDailyTransactionCount from './daily.transaction.count'

// TODO: combine data into one large object

export default async function getEtherscanData() {
    const totalNodesCount = await getTotalNodesCount();
    const dailyTransactionCount = await getDailyTransactionCount();

    return console.table([
        {
            'Total Nodes Count': totalNodesCount,
            'Transactions Per Day (24h)': dailyTransactionCount
        }
    ]);
}
