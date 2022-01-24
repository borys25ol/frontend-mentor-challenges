import moment from 'moment'

export function extractData(response) {
  return {
    name: response.name,
    login: response.login,
    avatartUrl: response.avatar_url,
    joined: formatDate(response.created_at),
    bio: response.bio ? response.bio.trim() : null,
    repos: response.public_repos,
    followers: response.followers,
    following: response.following,
    location: response.location,
    blog: response.blog,
    twitterUsername: response.twitter_username,
    company: response.company,
  }
}

function formatDate(dateStr) {
  const date = new Date(dateStr)
  return moment(date).format('D MMM YYYY')
}
