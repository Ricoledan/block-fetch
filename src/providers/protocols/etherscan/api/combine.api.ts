import getTotalNodesCount from './total.nodes.count'
import getDailyTransactionCount from './daily.transaction.count'

export default async function getEtherscanData() {
    const totalNodesCount = await getTotalNodesCount();
    const dailyTransactionCount = await getDailyTransactionCount();

    return [
        {
            'Total Nodes Count': totalNodesCount,
            'Transactions Per Day (24h)': dailyTransactionCount
        }
    ];
}
