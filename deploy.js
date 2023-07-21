

import { execSync } from 'child_process';

console.log('starting up!');

execSync('npm run build -w=@eddy/web-app', { stdio: 'inherit' });