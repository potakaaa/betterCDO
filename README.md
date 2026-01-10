# BetterGov LGU Template

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![CC BY 4.0](https://img.shields.io/badge/Content-CC%20BY%204.0-blue.svg)](https://creativecommons.org/licenses/by/4.0/)

A modern, templated government portal for Philippine Local Government Units (LGUs). This template supports both **municipalities** and **provinces**, automatically adapting terminology and structure based on your configuration.

> **Attribution**: This project is a fork and template adaptation of [BetterSolano](https://github.com/BetterSolano/bettersolano), originally developed by [Ramon Logan Jr.](https://github.com/BetterSolano) and the BetterSolano community as part of the [BetterGov.ph](https://bettergov.ph) civic-tech initiative.

## Features

- **LGU Type Support**: Configure for either municipality or province
- **Multi-language**: English, Filipino, and Ilocano translations with template variable interpolation
- **CMS-Ready**: All configuration stored in JSON files for easy editing
- **Responsive Design**: Mobile-first, accessible design
- **Dynamic Content**: Statistics, officials, barangays/municipalities, hotlines, and history from config
- **SEO Optimized**: Dynamic metadata based on LGU configuration

## Tech Stack

- **Next.js 14** • **React 18** • **TypeScript**

## Quick Start

### 1. Clone and Install

```bash
git clone https://github.com/BetterGov/bettergov-lgu-template.git
cd bettergov-lgu-template
npm install
```

### 2. Run Setup Wizard

```bash
npm run setup-lgu
```

The wizard will guide you through configuring:
- LGU type (municipality or province)
- Basic information (name, province, region)
- Contact information
- Social media links
- Map coordinates
- Theme color

### 3. Customize Configuration

Edit the JSON files in the `config/` directory:

| File | Description |
|------|-------------|
| `site.json` | Basic site configuration (LGU type, name, contact, social) |
| `officials.json` | Executive and legislative officials |
| `subdivisions.json` | Barangays (municipality) or municipalities/cities (province) |
| `hotlines.json` | Emergency, medical, and government hotlines |
| `history.json` | Historical timeline and facts |
| `statistics.json` | Population, land area, income class, etc. |
| `translations.json` | Translation overrides (optional) |

### 4. Replace Logo

Replace the logo files in `public/assets/images/logo/`:
- `logo.svg` - Main logo (dark background)
- `logo-white.svg` - White version (for footer)
- `favicon.svg` - Browser favicon

### 5. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your site.

## Configuration

### LGU Type Support

The template automatically adapts based on `lguType` in `config/site.json`:

| Feature | Municipality | Province |
|---------|--------------|----------|
| Leader Title | Mayor | Governor |
| Vice Leader | Vice Mayor | Vice Governor |
| Legislative Body | Sangguniang Bayan (SB) | Sangguniang Panlalawigan (SP) |
| Members | SB Members | Board Members |
| Subdivisions | Barangays | Municipalities/Cities |
| Department Prefix | Municipal | Provincial |
| Main Building | Municipal Hall | Provincial Capitol |

### Site Configuration Example

**For a Municipality:**
```json
{
  "lguType": "municipality",
  "municipality": "Solano",
  "province": "Nueva Vizcaya",
  "region": "Region II",
  "siteId": "bettersolano",
  "domain": "bettersolano.org",
  "tagline": "Your digital gateway to LGU services",
  "themeColor": "#1a5f2a"
}
```

**For a Province:**
```json
{
  "lguType": "province",
  "municipality": "",
  "province": "Nueva Vizcaya",
  "region": "Region II",
  "siteId": "bettersolano",
  "domain": "bettersolano.org",
  "tagline": "Your digital gateway to Provincial Government of Nueva Vizcaya services",
  "themeColor": "#1a5f2a"
}
```

### Officials Configuration

```json
{
  "executive": [
    {
      "id": "mayor",
      "name": "Juan Dela Cruz",
      "position": "mayor",
      "title": "Municipal Mayor",
      "email": "mayor@example.gov.ph",
      "phone": "(02) 123-4567"
    }
  ],
  "legislative": [
    {
      "id": "sb-member-1",
      "name": "Maria Santos",
      "position": "sb_member",
      "title": "SB Member",
      "committees": "Finance, Health"
    }
  ],
  "departments": [
    {
      "id": "treasurer",
      "slug": "municipal-treasurer",
      "department": "Municipal Treasurer's Office",
      "abbreviation": "MTO",
      "description": "Tax payments and revenue collection",
      "icon": "bi-cash-coin"
    }
  ]
}
```

### Subdivisions Configuration

```json
{
  "type": "barangay",
  "count": 22,
  "items": [
    {
      "id": "barangay-1",
      "name": "Poblacion",
      "leader": "Kap. Juan Santos",
      "leaderTitle": "Punong Barangay",
      "phone": "0917-123-4567"
    }
  ]
}
```

## Translation Variables

The translation system supports template variables that are automatically filled in:

| Variable | Description | Example |
|----------|-------------|---------|
| `{{lguName}}` | LGU name based on type | "Real" or "Quezon" |
| `{{municipality}}` | Municipality name | "Real" |
| `{{province}}` | Province name | "Quezon" |
| `{{lguType}}` | "Municipality" or "Province" | "Municipality" |
| `{{leaderTitle}}` | "Mayor" or "Governor" | "Mayor" |
| `{{hallName}}` | "Municipal Hall" or "Provincial Capitol" | "Municipal Hall" |

Example translation:
```json
{
  "hero-welcome": "Welcome to Better{{lguName}}.org",
  "hero-subtitle": "Services for the people of {{municipality}}, {{province}}."
}
```

## Deployment

### Build for Production

```bash
npm run build
```

### Deploy

The built site can be deployed to any static hosting service:
- Vercel (recommended for Next.js)
- Netlify
- GitHub Pages
- Any web server

## Project Structure

```
├── config/               # LGU configuration files
│   ├── site.json         # Basic site configuration
│   ├── officials.json    # Government officials
│   ├── subdivisions.json # Barangays or municipalities
│   ├── hotlines.json     # Emergency numbers
│   ├── history.json      # Historical timeline
│   ├── statistics.json   # LGU statistics
│   └── translations.json # Translation overrides
├── public/
│   └── assets/
│       └── images/logo/  # Logo files (replace these)
├── scripts/
│   └── setup-lgu.js      # Setup wizard
├── src/
│   ├── app/              # Next.js pages
│   ├── components/       # React components
│   ├── contexts/         # React contexts
│   ├── lib/              # Config loader
│   └── types/            # TypeScript types
└── package.json
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

## License

This project is dual-licensed:

| License | Applies To | Details |
|---------|-----------|---------|
| **MIT License** | Source Code | Free to use, modify, and distribute |
| **CC BY 4.0** | Content | Attribution required for content reuse |

See [LICENSE](LICENSE) for full details.

## Acknowledgments

This template would not be possible without:

- **[BetterSolano](https://github.com/BetterSolano/bettersolano)** - The original project this template is based on
- **[Ramon Logan Jr.](https://github.com/BetterSolano)** - Original developer of BetterSolano
- **[BetterGov.ph](https://bettergov.ph)** - The civic-tech initiative driving government transparency in the Philippines
- **[LGU Solano](https://solano.gov.ph)** - For pioneering public data availability
- All contributors and volunteers who dedicate their time to civic technology

## Data Sources

All public information templates are designed to work with official government data:

| Source | URL | Data Type |
|--------|-----|-----------|
| Bureau of Local Government Finance | [blgf.gov.ph](https://blgf.gov.ph/) | Budget, Financial Reports |
| Philippine Statistics Authority | [psa.gov.ph](https://psa.gov.ph/) | Demographics, Census |
| DTI CMCI Portal | [cmci.dti.gov.ph](https://cmci.dti.gov.ph/) | Competitive Index |
| DPWH Transparency Seal | [dpwh.gov.ph](https://dpwh.gov.ph/) | Infrastructure Projects |

---

Made with ❤️ by the BetterGov Community

*Forked from [BetterSolano](https://bettersolano.org) • Part of the [BetterGov.ph](https://bettergov.ph) initiative*
