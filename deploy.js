

import { execSync } from 'child_process';

execSync('npm run build -w=@eddy/web-app', { stdio: 'inherit' });