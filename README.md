# Recherche Entreprises TS

![npm](https://img.shields.io/npm/v/recherche-entreprises)
![license](https://img.shields.io/github/license/y4aniv/recherche-entreprises)

Node.js library for the public enterprise search API (written in typescript)

## Installation

```bash
npm install recherche-entreprises
```

## Usage

```typescript
const RechercheEntreprises = require("recherche-entreprises");

// Search for a company textually
await RechercheEntreprises.search({
  q: "La Poste",
});

// Search for a company geographically
await RechercheEntreprises.geo({
  lat: 48.8566,
  lon: 2.3522,
});
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Authors

- [Yaniv DOUIEB (y4aniv)](https://github.com/y4aniv/)
