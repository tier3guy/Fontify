# Change Log

All notable changes to the "Fontify" extension will be documented in this file.

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

## [Unreleased]
### Added
- Improved enable/disable logic for Fontify commands.
- Now enables/disables the required Custom CSS Loader extension automatically.
- User is prompted to reload after enabling/disabling Fontify.
- Improved messaging and error handling if dependencies are missing.

### Changed
- Updated for compatibility with VS Code 1.104.0.
- Updated dependencies and devDependencies.

## [0.1.0] - 2025-09-25
### Added
- Initial release: Injects the Inter font into the entire VS Code interface using custom CSS.
- Added `icon.png` for extension branding.
- Command palette commands to enable/disable Fontify.
- Extension activation and command registration.
- Stricter TypeScript and ESLint configuration.
- Dependency on Custom CSS and JS Loader extension.