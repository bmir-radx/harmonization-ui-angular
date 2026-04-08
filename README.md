# Harmonizer

Harmonizer is a cross-platform desktop application designed for seamless, offline data harmonization. It combines a visually rich Angular frontend with a robust Python processing engine, packaged seamlessly via Electron.

Researchers can load raw datasets and target data dictionaries directly into the application, visually map elements, and leverage the built-in AI/rule-based engine to execute real-time data transformations entirely on their local machine.

## Getting Started

You do not need any coding experience to use Harmonizer. The application runs as a fully contained desktop executable.

1. Navigate to the [Releases page](https://github.com/bmir-radx/harmonization-ui-angular/releases).
2. Download the installer for your operating system:
   - **macOS:** `.dmg`
   - **Windows:** `.exe`
   - **Linux:** `.AppImage`
3. Launch the application and load your source data to begin!

> [!NOTE]
> **macOS Users:** Because this is an open-source research tool and not distributed through the official Mac App Store, Apple's Gatekeeper will initially block the application, stating it cannot check it for malicious software.
> To open it: Simply open your Mac's `System Settings -> Privacy & Security`, scroll down, and click **Open Anyway** next to the Harmonizer block warning.
> Alternatively, if you prefer the terminal, you can instantly clear the quarantine flag by running: `xattr -cr /Applications/Harmonizer.app`

## Architecture

This application operates in a multi-repo environment:
- **Frontend (This Repository):** Angular 17+ and Electron main process.
- **Backend ([harmonization-framework](https://github.com/bmir-radx/harmonization-framework)):** A standalone Python FastAPI application (the "sidecar") dealing with the schema parsing and transformations. 

At runtime, the Electron frontend dynamically allocates a port, spawns the compiled Python sidecar, and securely proxies UI interactions to its endpoints.

## Local Development

If you wish to contribute or modify the application locally:

### 1. Prerequisites
- **Node.js** (v24+ recommended)
- **npm** or **yarn**

### 2. Setup the Workspace
```bash
git clone https://github.com/bmir-radx/harmonization-ui-angular.git
cd harmonization-ui-angular
npm install
```

### 3. Spin up the Dev Environment
During development, the Angular `proxy.conf.json` attempts to route `/api` traffic to `http://localhost:8000`. You must have the [harmonization-framework](https://github.com/bmir-radx/harmonization-framework) running locally on port 8000.

Once the backend is listening, boot the Electron + Angular development server:
```bash
npm run electron:dev
```
This leverages `concurrently` to spin up Angular and immediately attach an Electron window once the compile is complete.

## Building for Production

This project leverages GitHub Actions for CI/CD distribution. Upon pushing a new tag (`v*`), the pipeline will:
1. Download the pre-compiled native Python sidecars from the framework repository.
2. Inject them into the local package environment.
3. Transpile the Angular application.
4. Export `.dmg`, `.exe`, and `.AppImage` installers directly to GitHub Releases using `electron-builder`.

To test the builder manually on your local system:
```bash
npm run pack:mac   # For macOS
npm run pack:win   # For Windows
npm run pack:linux # For Linux
```
*(Note: You must have manually placed the extracted sidecar into `resources/sidecar/<os>/` for local tests to succeed).*

## License
Provided under standard open-source constraints by Stanford University department of Computational Medicine.
