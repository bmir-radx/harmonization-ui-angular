const fs = require('fs');
const path = require('path');
const https = require('https');

const targetOs = process.argv[2]; // 'mac', 'win', or 'linux'

if (!['mac', 'win', 'linux'].includes(targetOs)) {
    console.error('Please specify target OS: mac, win, or linux');
    process.exit(1);
}

const resourcesDir = path.join(__dirname, '..', 'resources', 'sidecar', targetOs, 'harmonization-sidecar');
const binaryName = targetOs === 'win' ? 'harmonization-sidecar.exe' : 'harmonization-sidecar';
const binaryPath = path.join(resourcesDir, binaryName);

// For the purposes of this workflow without a public artifact registry URL, 
// we will verify if the user has manually placed the sidecar in the proper path,
// or provide a stub where automatic download logic would go.

if (!fs.existsSync(binaryPath)) {
    console.error(`
[ERROR] Missing sidecar binary for ${targetOs}.
Please manually download the harmonization-sidecar for ${targetOs} and extract it to:
${resourcesDir}

Expected binary at: ${binaryPath}
(Ensure the _internal folder is also present alongside the executable).
`);
    process.exit(1);
} else {
    console.log(`[SUCCESS] Found sidecar binary for ${targetOs} at ${binaryPath}`);
}
