const ghpages = require('gh-pages')

// Replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/theang66/connexio.git',
  },
  () => {
    console.log('Deploy complete!')
  }
)
