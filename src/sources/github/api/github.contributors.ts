import {octokit} from "../github.config";

// @todo: create enum for mapping protocols to an official GitHub repo somewhere
export default async function getContributors(owner: string = 'ethereum', repo: string = 'go-ethereum') {
    // @ts-ignore
    const response = await octokit.paginate.iterator('GET /repos/{owner}/{repo}/contributors', {
        owner,
        repo,
        per_page: 100,
        headers: {
            'X-GitHub-Api-Version': '2022-11-28'
        }, query: {
            affiliation: 'direct'
        }
    });

    let totalContributors = 0;

    for await (const {data: contributors} of response) {
        for (const contributor of contributors) {
            totalContributors += contributor.contributions
        }
    }

    return totalContributors
}
