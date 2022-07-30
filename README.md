<h1 align="center">Welcome to ng-guitar 👋</h1>

Guitar Related Components for Angular

**Note:** This is a new project that is actively under development.

<div>
<p>
<a href="https://timdmorris.github.io/ng-guitar/"><img src="https://img.shields.io/badge/View_demo-GH_Pages-2ea44f?style=for-the-badge" alt="View demo - GH Pages"></a>
</p>
</div>
<p>
  <a href="https://github.com/tophat/getting-started/blob/master/scorecard.md" target="_blank">
    <img alt="Project Maturity" src="https://img.shields.io/badge/Maturity-Level%201%20--%20New%20Project-yellow.svg" />
  </a>
  <img alt="Version" src="https://img.shields.io/badge/version-0.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="http://localhost:4200" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="http://localhost:4200" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  <a href="https://twitter.com/TimDMorris" target="_blank">
    <img alt="Twitter: TimDMorris" src="https://img.shields.io/twitter/follow/TimDMorris.svg?style=social" />
  </a>
</p>

<p>

![GitHub commit activity](https://img.shields.io/github/commit-activity/m/timdmorris/ng-guitar)
[![CI Status](https://github.com/TimDMorris/ng-guitar/workflows/build-and-deploy/badge.svg)](https://github.com/TimDMorris/ng-guitar/actions)
[![CodeQL](https://github.com/TimDMorris/ng-guitar/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/TimDMorris/ng-guitar/actions/workflows/codeql-analysis.yml)

</p>

<p>
  <a href="https://angular.io/" target="_blank">
    <img alt="Angular" src="https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white" />
  </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
    <img alt="TypeScript" src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" />
  </a>

</p>

## Install

```sh
npm install --legacy-peer-deps
```

## Usage

```sh
npm run start
```

## Run tests

```sh
npm run test
```

## Committing

See [Commit Rules](docs dev-docs/commit-rules.md)

## 🤝 Contributing

Contributions, issues and feat requests are welcome!

Feel free to check [issues page](https://github.com/TimDMorris/ng-guitar/issues).

## Vision

I find it difficult to keep focus when practicing the guitar scales and patterns that make up the foundations of improvisation. I seem to be switching between tinkering with the metronome, referring to reference materials for whatever I'm learning to practice. trying to track how long I've been practicing any one thing and my overall progress, so I know what weak spots to focus on.
This seems like a good candidate for an app, in fact I can think of a few different guitar-based apps that don't seem to currently exist, so the plan here is to build the elements of this as re-usable components and then later make those components available as packages.

The aim is that the initial app will provide a metronome that can be configured to accelerate to help speed training. This will have a scrolling tab display linked to it which will suggest patterns to practice. These patterns will evolve in complexity over time. The app should track how long you have been practicing and suggest regular breaks to avoid repetitive strain injuries.
The app should take advantage of what psychological research about learning shows us and feature on one pattern to learn, switch to another then switch back to re-enforce the learning of the patterns.

It would great as a future enhancement if note recognition could be integrated so the application can give feedback and give better automatic control of progression through increasingly complex exercises.

## Roadmap

- [x] feat: ~~Accurate Typescript Metronome Component~~
- [x] chore: ~~setup dependabot~~
- [x] ci: ~~add commitlint to enforce conventioanl commits~~
- [ ] ci: add <https://github.com/DavidWells/markdown-magic/>
- [ ] feat: SVG based metronome visulisation component
- [ ] ci: refactor ci pipeline to only build affected
- [ ] chore: add semver and changelog generation
- [ ] feat: demo theming and theme switching
- [ ] feat: getting started page for consumers
- [ ] feat: demo about, version and dependency display
- [ ] feat: fretboard / chord pattern visaulization component
- [ ] feat: metronome speed trainer i.e. define min max range, incrementally accellerate
- [ ] feat: experimental in browser ML note recognition
- [ ] feat: simple animated tab scroller
- [ ] feat: practice pattern generator

## Bugs / Refactor

- [x] fix: ~~bind tempo to tempo not tickcount~~
- [ ] fix: ~~svg header/footer background path when publishing to subdirectory~~

---

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2022 [T.D.Morris](https://github.com/TimDMorris).<br />
This project is [MIT](https://github.com/TimDMorris/ng-guitar/blob/main/LICENSE.md) licensed.

---

## Author

👤 **TimDMorris**

- Website: <https://timdmorris.github.io/ng-guitar/>
- Twitter: [@TimDMorris](https://twitter.com/TimDMorris)
- Github: [@TimDMorris](https://github.com/TimDMorris)
- LinkedIn: [@timdmorris](https://linkedin.com/in/timdmorris)

## Inspired By

- [fretboard](https://github.com/pirtleshell/fretboard) - By [Robert Pirtle](https://github.com/pirtleshell)
- [tonaljs / tonal](https://github.com/tonaljs/tonal)

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
