const { publish } = require('gh-pages');
const { execSync } = require('child_process');

execSync('npm run build');

publish(
 'build', // path to public directory
 {
  branch: 'gh-pages',
  repo: 'https://github.com/josh-thales/coref-lab-feedback.git',
  user: {
   name: 'Josh Pollard',
   email: '124677969+josh-thales@users.noreply.github.com'
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);
