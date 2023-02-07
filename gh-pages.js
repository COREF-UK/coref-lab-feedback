import { publish } from 'gh-pages';

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