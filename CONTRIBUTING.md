# Contributing to FADA'

Thank you for your interest in contributing to FADA'! We welcome all contributions, whether it's code, documentation, bug reports, or feature requests. This guide will help you get started with contributing to the project.

## Table of Contents

1. [Code of Conduct](#code-of-conduct)
2. [Getting Started](#getting-started)
3. [Development Workflow](#development-workflow)
4. [Pull Request Process](#pull-request-process)
5. [Code Style](#code-style)
6. [Testing](#testing)
7. [Documentation](#documentation)
8. [Reporting Issues](#reporting-issues)
9. [Feature Requests](#feature-requests)
10. [Community](#community)

## Code of Conduct

Please read our [Code of Conduct](CODE_OF_CONDUCT.md) before contributing. We are committed to fostering a welcoming and inclusive community.

## Getting Started

### Prerequisites

- Node.js 16.x or later
- npm 8.x or later
- Git
- Angular CLI (for frontend development)

### Setting Up the Project

1. **Fork the Repository**
   - Click the "Fork" button on the top right of the [Fadaa Repo](https://github.com/unshreif/fadaa)

2. **Clone Your Fork**
   ```bash
   git clone https://github.com/unshreif/fadaa.git
   cd fadaa
   ```

3. **Install Dependencies**
   ```bash
   npm install
   ```

4. **Set Up Environment Variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

5. **Start the Development Server**
   ```bash
   ng serve
   ```
   The application will be available at `http://localhost:4200`

## Development Workflow

1. **Create a Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b bugfix/description-of-fix
   ```

2. **Make Your Changes**
   - Follow our [Coding Standards](wiki/Coding-Standards.md)
   - Write tests for new features
   - Update documentation as needed

3. **Run Tests**
   ```bash
   npm test
   ```

4. **Commit Your Changes**
   ```bash
   git add .
   git commit -m "feat(scope): short description of changes"
   ```
   
   Follow our [Commit Message Guidelines](wiki/Development-Setup.md#commit-message-format).

5. **Push to Your Fork**
   ```bash
   git push origin your-branch-name
   ```

## Pull Request Process

1. Open a Pull Request (PR) from your fork to the main repository's `develop` branch
2. Ensure all CI checks pass
3. Request review from at least one maintainer
4. Address any review feedback
5. Once approved, your PR will be squashed and merged

For more details, see our [Pull Request Process](wiki/Pull-Request-Process.md) and [Code Review Guidelines](wiki/Code-Review-Guidelines.md).

## Code Style

We follow strict coding standards to maintain code quality and consistency:

- TypeScript/JavaScript: [Coding Standards](wiki/Coding-Standards.md)
- Angular: [Angular Style Guide](https://angular.io/guide/styleguide)
- SCSS: [Style Guide](wiki/Style-Guide.md)

Before committing, run:
```bash
npm run lint
npm run format
```

## Testing

We require tests for all new features and bug fixes:

- **Unit Tests**: Test individual components and services
- **Integration Tests**: Test component interactions
- **E2E Tests**: Test critical user journeys

Run tests with:
```bash
# Unit tests
npm test

# Watch mode
ng test

# E2E tests
npm run e2e
```

See our [Testing Guidelines](wiki/Testing-Guidelines.md) for more details.

## Documentation

Good documentation is crucial for the project's success:

- Update inline code documentation
- Add or update relevant wiki pages
- Include examples for new features
- Document any breaking changes

## Reporting Issues

Found a bug? Please follow these steps:

1. Check if the issue already exists in the [issue tracker](https://github.com/unshreif/fadaa/issues)
2. If not, create a new issue with:
   - A clear, descriptive title
   - Steps to reproduce the issue
   - Expected vs. actual behavior
   - Screenshots if applicable
   - Browser/OS version
   - Any relevant console errors

## Feature Requests

We welcome feature requests! To suggest a new feature:

1. Check if a similar feature request already exists
2. Create a new issue with:
   - A clear description of the feature
   - The problem it solves
   - Any relevant use cases
   - Screenshots or mockups if applicable

## Community

Join our community to stay updated and connect with other contributors:

- [Discord/Slack Channel]()
- [Forum]()
- [Twitter]()

## Getting Help

If you need help or have questions:

1. Check the [Documentation](wiki/Home.md)
2. Search the [issue tracker](https://github.com/unshreif/fadaa/issues)
3. Join our [community channels](#community)
4. If you can't find an answer, open an issue

## Thank You!

Your contributions help make FADA' better for everyone. We appreciate your time and effort in improving the project!

---

*This document was inspired by the [contributing guides](https://github.com/atom/atom/blob/master/CONTRIBUTING.md) of many open source projects.*
