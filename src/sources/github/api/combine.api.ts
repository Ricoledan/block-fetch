import githubContributors from './github.contributors'

// TODO: combine data into one large object

export default async function combineResponseObject() {
    return {
        githubContributors: await githubContributors()
    }
}
