<div id="top"></div>

# Technology Stack

I find OSS projects a great resource when I want to learn how other people have solved specific challenges, however while they often have great documentation for **_what_** technology they are using, they don't always have great documentation for **_why_** and **_how_** they are using it.

This page explains the choices and technologies I use to build [ng-guitar](https://github.com/TimDMorris/ng-guitar).

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#the-right-tool-for-the-right-job">The right tool for the right job</a>
    </li>
    <li>
      <a href="#technologies-used">Technologies Used</a>
      <ul>
    <li>
      <a href="#nrwl-nx">Nrwl Nx</a>
    </li>
    <li>
      <a href="#angular">Angular</a>
    </li>
     <li>
      <a href="#angular-material">Angular Material</a>
    </li>
     <li>
      <a href="#typescript">Typescript</a>
    </li>
     <li>
      <a href="#sass">SASS</a>
    </li>
     <li>
      <a href="#esLint">ESLint</a>
    </li>
     <li>
      <a href="#prettier">Prettier</a>
    </li>
     <li>
      <a href="#storybook">Storybook</a>
    </li>
     <li>
      <a href="#jest">Jest</a>
    </li>
     <li>
      <a href="#cypress">Cypress</a>
    </li>
     <li>
      <a href="#vs-code">VS Code</a>
    </li>
     <li>
      <a href="#gitHub-actions">GitHub Actions</a>
    </li>
     <li>
      <a href="#gitHub-pages">GitHub Pages</a>
    </li>
         <li>
      <a href="#github-copilot">GitHub Copilot</a>
    </li>
  </ul>
    </li>
  </ol>

</details>

## The right tool for the right job

tl;dr: everyone's got opinions, <a href="#the-right-tool-for-the-right-job">take me to the technology....</a>

In my [day job](https://www.linkedin.com/in/timdmorris/) I frequently get asked to recommend the **_best_** solution to problems, often before I ever get to hear any details of what the problem is that needs to be solved. When I answer **_it depends_** people are usually fairly disappointed. I don't know if this is specific to software development or not, maybe it's the fault of booleans, true or false, no in-betweens, or maybe we all spent too long in Middle Earth and we're all still searching for **_[one ring to rule them all](https://github.com/bullgit/flamewars-chrome-extension)_**.

The problem with the real world is nothing really works this way. If someone asked you to choose one, and only one, tool to perform every possible task around your home it would obviously not be a good idea. The right tool to clean windows is unlikely to be the right tool to make holes in a brick wall. This gets compounded in the world of web UI, [front end churn](https://medium.com/@jimthedev/front-end-churn-in-javascript-a-rant-fff26031ba83) and the resulting [analysis paralysis](https://xkcd.com/1801/) is enough to make some web developers want to [abandon hope](https://css-tricks.com/front-end-dissatisfaction-and-backing-off/).

Having survived multiple frontend frameworks and come out of the other side there is a simple rule I now apply in selecting the tools for my work:

- I prefer to try to use the **_best_** tool for **_this_** job.

This does not mean this is the right tool for your job, that I'm criticizing the choices you have made, or that there will not be a better front end tool arriving in a couple of years time.

The tools discussed below are all standards based, have a proven track record, provide accelerators to help me scale up and wherever appropriate are based on sound principles of software development like [SOC](https://en.wikipedia.org/wiki/Separation_of_concerns), [SOLID](https://en.wikipedia.org/wiki/SOLID) and [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself).

Hopefully by discussing the reasons I chose these tools I can help you decide if they also may be useful for you... and if you disagree with me, I'm happy to hear it, that's how we all learn and get better.

<p align="right">(<a href="#top">back to top</a>)</p>

## Technologies Used

### Nrwl Nx

<a href="https://nx.dev/" target="_blank"><img alt="Nrwl Nx" src="https://img.shields.io/badge/Nx-143055.svg?style=for-the-badge&logo=Nx&logoColor=white" /></a>

[Nx](https://nx.dev/) describes itself as:

> a smart, fast and extensible build system with first class monorepo support and powerful integrations.

This tooling allows us to group multiple distinct projects, with well-defined relationships into a single repository. If this idea sounds potentially useful to you the key question with Nx is whether they have consistent dependencies across the projects. If they do, then we can use Nx to build a single repository that can (if you choose) be deployed to multiple environments. This means for example we could have a single repo with server side, web (Nx supports Angular, [[React](https://blog.nrwl.io/the-react-cli-you-always-wanted-but-didnt-know-about-eaa2494aab9e) & more), hybrid mobile and electron applications which could all potentially share code.

Nx does a lot more than this for us. It has [template driven code generators](https://nx.dev/guides/nx-devkit-angular-devkit), can automatically configure tools like <a href="#jest">Jest</a>, <a href="#esLint">ESLint</a> and <a href="#prettier">Prettier</a> and perhaps most importantly comes with tooling to simplify migrations and upgrades. From the ground up Nx has been built with [efficient](https://nx.dev/using-nx/affected) enterprise-grade development in mind.

The [ng-guitar repo](https://github.com/TimDMorris/ng-guitar) is a Nx Monorepo.

### Angular

<a href="https://angular.io/" target="_blank"><img alt="Angular" src="https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white" /></a>

[Angular](https://angular.io/) is an opinionated front end framework. **_Framework_** being the key point to stress. This consistent tooling out of the box makes it particularly useful for Teams who lack the skills or time required for building with Tools like React where each team needs to select the most appropriate options from multiple potential approaches to solving any development challenge.

A key differentiator between Angular and React is that Angular used to have a notorious steep learning curve while React was much easier to learn and reason about. With the introduction of [Stand Alone Components](https://angular.io/guide/standalone-components) simplifying Angular and [Hooks](https://reactjs.org/docs/hooks-intro.html) adding potential complexity to React, the two tools have become very similar.

It should be noted that both tool sets still have distinct strengths, however for a SPA like this one the Angular tool set is particularly appropriate.

### Angular Material

<a href="https://material.angular.io/" target="_blank"><img alt="Angular Material" src="https://img.shields.io/badge/Angular_Material-3F51B5?style=for-the-badge&logo=angular&logoColor=white+" /></a>

[Angular Material](https://material.angular.io/)

### Typescript

<a href="https://www.typescriptlang.org/" target="_blank"><img alt="TypeScript" src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" /></a>

[TypeScript](https://www.typescriptlang.org/)

### SASS

[SASS](https://sass-lang.com/)

<a href="https://sass-lang.com/" target="_blank"><img alt="Sass" src="https://img.shields.io/badge/Sass-CC6699.svg?style=for-the-badge&logo=Sass&logoColor=white" /></a>

### ESLint

[ESLint](https://eslint.org/)

<a href="https://eslint.org/" target="_blank"><img alt="ESLint" src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white" /></a>

### Prettier

[Prettier](https://prettier.io/)

<a href="https://prettier.io/" target="_blank"><img alt="Prettier" src="https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E" /></a>

### Storybook

[Storybook](https://storybook.js.org/)

<a href="https://storybook.js.org/" target="_blank"><img alt="Storybook" src="https://img.shields.io/badge/storybook-F74480?style=for-the-badge&logo=storybook&logoColor=white+" /></a>

### Jest

[Jest](https://jestjs.io/)

<a href="https://jestjs.io/" target="_blank"><img alt="Jest" src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white" /></a>

### Cypress

[Cypress](https://www.cypress.io/)

<a href="https://www.cypress.io/" target="_blank"><img alt="Cypress" src="https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white" /></a>

### VS Code

[VS Code](https://code.visualstudio.com/)

<a href="https://code.visualstudio.com/" target="_blank"><img alt="VS Code" src="https://img.shields.io/badge/Visual%20Studio%20Code-007ACC.svg?style=for-the-badge&logo=Visual-Studio-Code&logoColor=white" /></a>

### GitHub Actions

[GitHub Actions](https://github.com/features/actions)

<a href="https://docs.github.com/en/actions/" target="_blank"><img alt="GitHub Actions" src="https://img.shields.io/badge/GitHub%20Actions-2088FF.svg?style=for-the-badge&logo=GitHub-Actions&logoColor=white" /></a>

### GitHub Pages

[GitHub Pages](https://pages.github.com/)

<a href="https://docs.github.com/en/pages" target="_blank"><img alt="GitHub Pages" src="https://img.shields.io/badge/GitHub%20Pages-222222.svg?style=for-the-badge&logo=GitHub-Pages&logoColor=white" /></a>

### GitHub Copilot

[GitHub Copilot](https://github.com/features/copilot)

<a href="https://github.com/features/copilot" target="_blank"><img alt="GitHub Copilot" src="https://img.shields.io/badge/GitHub%20Copilot-2C2546.svg?style=for-the-badge&logo=GitHub&logoColor=white" ></a>
