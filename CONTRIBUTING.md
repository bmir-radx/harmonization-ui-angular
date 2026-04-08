# Contributing to Harmonizer

Thank you for your interest in contributing to Harmonizer! We welcome bug reports, feature requests, and pull requests from everyone.

## Code of Conduct

By participating in this project, you agree to abide by basic open-source professionalism: stay respectful, constructive, and collaborative in all issues and pull requests.

## How to Contribute

### 1. Reporting an Issue
If you run into unexpected errors, crashes, or UI bugs, please open an Issue. Include:
- Your Operating System and Version
- Steps to actively reproduce the issue
- Any console errors (accessible via `View > Toggle Developer Tools` in the app)

### 2. Requesting a Feature
If you have an idea for a new transformation mapping tool, AI integration, or workflow enhancement, open an Issue labeled `enhancement` describing the use case and how it benefits researchers.

### 3. Submitting a Pull Request
We follow a standard Gitflow model.
1. **Fork** the repository and create a new feature branch out from `dev` (e.g., `feature/awesome-new-tool`).
2. **Make your local changes** cleanly, and ensure you run `npm run build` locally to verify TypeScript compiles without errors.
3. **Verify the test suite** locally by executing `npm run test:coverage`. Every new core service branch logic must maintain high unit test coverage.
4. Ensure the Angular component budget doesn't drastically exceed UI styling constraints.
5. Open a Pull Request strictly targeting the **`dev`** branch (NOT `main`). 
6. Ensure your PR description explains *why* the change was made and any sidecar dependencies it might have.

> [!IMPORTANT]
> **Continuous Integration Guard:** When your Pull Request is submitted, our automated GitHub Actions workflow (`pr-checks.yml`) will instantly intercept it, boot up a headless browser environment, and run the entire test suite. If any existing core behavior breaks or TypeScript compilation fails, your Pull Request will automatically be blocked from merging until the code is resolved!

### Multi-Repo Note
If your UI feature requires a new endpoint or capability in the Python sidecar, please submit a corresponding PR to the [harmonization-framework](https://github.com/bmir-radx/harmonization-framework) repository first. The UI will only be merged once the backend endpoints are verified.

## Angular Guidelines
- We utilize strict TypeScript compilation. Resolve all `any` casts where an interface applies.
- Adhere to the established PrimeNG component ecosystem whenever possible instead of bringing in entirely new heavy library footprints.
- Use `Signals` over heavy `RxJS` subscriptions where State Management permits.

Thank you for helping us enhance data harmonization!
