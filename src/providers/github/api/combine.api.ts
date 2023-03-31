import githubContributors from './github.contributors'


export default async function combineResponseObject() {
    return {
        githubContributors: await githubContributors()
    }
}
