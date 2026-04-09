# Harmonizer Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.0.0-beta.4] - 2026-04-09

### Changed
* **Stanford Licensing:** Formally replaced the generic BSD open-source license with the strict legal phrasing explicitly required by the **Stanford Board of Trustees** (`BSD-2-Clause-Views`). This text is now securely packaged into all desktop application binaries natively.

---

## [1.0.0-beta.3] - 2026-04-09

### Changed
* **License Baseline:** Dropped the restrictive non-endorsement clause from the initial launch, transitioning the software structurally from BSD 3-Clause down to a standard BSD 2-Clause baseline.
* **CI/CD Guardrails:** Enforced specific OSI formatting headers on the primary `LICENSE` file to ensure GitHub's `Licensee` crawler algorithm mathematically recognizes the correct legal badge in the user interface.

---

## [1.0.0-beta.2] - 2026-04-08

### Added
* **Automated CI/CD Workflows:** Successfully implemented dynamic GitHub Actions workflows (`pr-checks.yml`, `release.yml`) enforcing automated Angular test coverage and TypeScript assertions. 
* **Core Logic Testing:** Established massive isolated `Karma` testing suites rigorously stress-testing `MappingService`, `DatasetService`, `ThemeService`, `ProjectService`, and `HistoryService`.
* **Open Source Documentation:** Published comprehensive [README.md](https://github.com/bmir-radx/harmonization-ui-angular/blob/main/README.md) covering deployment loops, cross-platform architecture mechanisms, and macOS un-quarantining requirements.
* **Community Guidelines:** Published strict [CONTRIBUTING.md](https://github.com/bmir-radx/harmonization-ui-angular/blob/main/CONTRIBUTING.md) enforcing git-flow procedures and CI test gates for external developers.
* **Licensing:** Bound repository and binaries to an initial 3-Clause BSD distribution protocol.

### Changed
* **Branding Execution:** Globally scrubbed older prototype names and properly rebound Electron binaries, `.dmg`, window titles, and logging tags natively to the **Harmonizer** title structure!
* **UX/UI Polish:** Ripped out experimental dev-mode visual elements (hardcoded `Load Test Data` payload injections, header UI toggles) ensuring users boot into a truly clean slate zero-trust data environment.
* **Framework Hardening:** Upgraded the underlying GitHub Actions backend runners securely to the Node.js 24 execution paradigm to gracefully sidestep deprecation limits.

### Fixed
* Addressed `NG8107` and optional chaining compiler warnings strictly inside Angular templates. 
* Squashed visual layout anomalies impacting split-pane stretching and conditional component width resets.

---

## [1.0.0-beta.1] - 2026-04-07

### Added
* Initial `alpha` deployment matrix shifted to `beta` lifecycle.
* Established successful Electron binary packaging scripts mapping strictly to Mac, Windows, and Linux pipelines.
* Python FastAPI backend successfully bundled dynamically inside Electron binaries to resolve CORS bounds.
* Finalized initial UI bounds for data-dictionary injection and variable matching logic mappings.

*For community contributors referencing backend sidecar logic updates regarding this release, see the paired Python framework at `bmir-radx/harmonization-framework`.*
