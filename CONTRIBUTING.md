# Contributing to BetterGov LGU Template

Thank you for your interest in contributing! This civic-tech project thrives on community participation. Whether you're a developer, designer, translator, or a concerned citizen, your contributions are welcome.

> **This is a template!** Feel free to fork, modify, and adapt this project for your own LGU. You can customize the design, add features, remove sections, or completely rebrand it to fit your community's needs. See the [LICENSE](LICENSE) for details.

## Table of Contents

- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [First-Time Contributors](#first-time-contributors)
- [How to Contribute](#how-to-contribute)
- [Development Workflow](#development-workflow)
- [Code Guidelines](#code-guidelines)
- [Pull Request Process](#pull-request-process)
- [Community](#community)

## Tech Stack

- **Next.js 14** • **React 18** • **TypeScript**

## Getting Started

### Prerequisites

| Requirement | Version |
|-------------|---------|
| Node.js | v18+ |
| npm | v9+ |
| Git | Latest |

### Setup

```bash
# Clone the repository
git clone https://github.com/BetterGov/bettergov-lgu-template.git
cd bettergov-lgu-template

# Install dependencies
npm install

# Run setup wizard (optional - for new LGU configuration)
npm run setup-lgu

# Start development server
npm run dev
```

Open http://localhost:3000 in your browser.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Fix linting errors |
| `npm run setup-lgu` | Run LGU setup wizard |

## First-Time Contributors

New to open source? Welcome! Here's how to get started:

1. **Look for beginner-friendly issues** labeled `good first issue`
2. **Ask questions** — open an issue or reach out on Discord
3. **Start small** — documentation fixes and typos are valuable contributions

> 💡 **Tip:** Read through the README and explore the codebase before diving in.

## How to Contribute

### 🐛 Reporting Bugs

1. Check [existing issues](https://github.com/BetterGov/bettergov-lgu-template/issues) to avoid duplicates
2. Create a new issue with:
   - Clear, descriptive title
   - Steps to reproduce
   - Expected vs actual behavior
   - Browser and device information
   - Screenshots if applicable

### 💡 Suggesting Features

1. Open an issue with the `enhancement` label
2. Describe the feature and its benefit to users
3. Include mockups or examples if possible

### 📝 Contribution Areas

| Area | Description | Labels |
|------|-------------|--------|
| Bug Fixes | Fix reported issues | `bug` |
| Features | Implement new functionality | `enhancement` |
| Translations | Add/improve Filipino, Ilocano, or other languages | `translations` |
| Design | Improve UI/UX and accessibility | `design` |
| Documentation | Improve guides and comments | `documentation` |
| Template Config | Enhance configuration options | `config` |

## Development Workflow

### 1. Fork & Clone

```bash
# Fork via GitHub, then clone your fork
git clone https://github.com/YOUR_USERNAME/bettergov-lgu-template.git
cd bettergov-lgu-template
```

### 2. Create a Branch

```bash
# Create a feature branch
git checkout -b feature/your-feature-name

# Or for bug fixes
git checkout -b fix/issue-description
```

**Branch naming conventions:**
- `feature/` — New features
- `fix/` — Bug fixes
- `docs/` — Documentation updates
- `refactor/` — Code refactoring

### 3. Make Changes

- Write clean, readable code
- Follow existing patterns
- Test your changes locally

### 4. Commit Your Changes

```bash
git add .
git commit -m "feat: add new feature description"
```

**Commit message format:**

```
type: brief description

Types:
- feat:     New feature
- fix:      Bug fix
- docs:     Documentation changes
- style:    Formatting (no logic change)
- refactor: Code restructuring
- test:     Adding tests
- chore:    Maintenance tasks
```

**Examples:**
```
feat: add dark mode toggle to header
fix: resolve mobile navigation overflow
docs: update setup instructions in README
refactor: simplify translation hook logic
```

### 5. Push & Create PR

```bash
git push origin feature/your-feature-name
```

Then open a Pull Request on GitHub.

## Code Guidelines

### TypeScript / React

- Use TypeScript types properly — avoid `any`
- Keep components modular and reusable
- Use meaningful variable and function names
- Follow existing code patterns

### CSS

- Use CSS custom properties (variables)
- Follow mobile-first responsive design
- Test on multiple screen sizes

### Configuration

- Keep config files in `config/` directory
- Document any new configuration options
- Ensure backward compatibility

### Accessibility

- Maintain WCAG 2.1 compliance
- Include alt text for images
- Ensure keyboard navigation works
- Use semantic HTML elements

## Pull Request Process

### Before Submitting

- [ ] Code follows style guidelines
- [ ] Changes tested locally
- [ ] No linting errors (`npm run lint`)
- [ ] Documentation updated if needed

### PR Requirements

1. Fill out the PR template completely
2. Link related issues (e.g., "Closes #123")
3. Provide screenshots for UI changes
4. Keep PRs focused — one feature/fix per PR

### Review Criteria

PRs are reviewed for:

- ✅ Code quality and consistency
- ✅ Functionality and bug-free operation
- ✅ Accessibility compliance
- ✅ Mobile responsiveness
- ✅ Security considerations

## Community

| Platform | Link |
|----------|------|
| Discord | [Join our community](https://discord.com/invite/qeSu7RJkjQ) |
| Website | [BetterGov.ph](https://bettergov.ph) |

### Recognition

All contributors are recognized in our repository. Significant contributions may be highlighted on the website.

### Questions?

Feel free to open an issue or reach out on Discord. We're happy to help!

---

**Thank you for helping make government information accessible to Filipino communities.** 🇵🇭
