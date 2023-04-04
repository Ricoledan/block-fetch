import githubContributors from './github.contributors'
import displayJsonAsTable from "../../../util/display.json.as.table";

// TODO: combine data into one large object

export default async function combineResponseObject() {

    return displayJsonAsTable({
        githubContributors: await githubContributors(),

    })
}
