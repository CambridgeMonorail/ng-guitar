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
      <a href="#why-is-building-a-metronome-interesting">Why is building a metronome interesting</a>
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
      <a href="#github-codeql">GitHub CodeQL</a>
    </li>
    <li>
      <a href="#github-copilot">GitHub Copilot</a>
    </li>
  </ul>
    </li>
  </ol>

</details>

## The right tool for the right job

tl;dr: everyone's got opinions, <a href="#technologies-used">take me to the technology....</a>

In my [day job](https://www.linkedin.com/in/timdmorris/) I frequently get asked to recommend the **_best_** solution to problems, often before I even get to hear any details of what the problem is that needs to be solved. When I answer **_it depends_** people are usually fairly disappointed. I don't know if this is specific to software development or not, maybe it's the fault of booleans, true or false, no in-betweens, or maybe we all spent too long in Middle Earth and we're all still searching for **_[one ring to rule them all](https://github.com/bullgit/flamewars-chrome-extension)_**.

The problem with the real world is nothing really works this way. If someone asked you to choose one, and only one, tool to perform every possible task around your home it would obviously not be a good idea. The right tool to clean windows is unlikely to be the right tool to make holes in a brick wall. This gets compounded in the world of web UI, [front end churn](https://medium.com/@jimthedev/front-end-churn-in-javascript-a-rant-fff26031ba83) and the resulting [analysis paralysis](https://xkcd.com/1801/) is enough to make some web developers want to [abandon hope](https://css-tricks.com/front-end-dissatisfaction-and-backing-off/).

Having survived multiple frontend frameworks and come out of the other side there is a simple rule I now apply in selecting the tools for my work:

- I prefer to try to use the **_best_** tool for **_this_** job.

This does not mean this is the right tool for your job, that I'm criticizing the choices you have made, or that there will not be a better front end tool arriving in a couple of years time.

The tools discussed below are all standards based, have a proven track record, provide accelerators to help me scale up and wherever appropriate are based on sound principles of software development like [SOC](https://en.wikipedia.org/wiki/Separation_of_concerns), [SOLID](https://en.wikipedia.org/wiki/SOLID) and [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself).

Hopefully by discussing the reasons I chose these tools I can help you decide if they also may be useful for you... and if you disagree with me, I'm happy to hear it, that's how we all learn and get better.

<p align="right">(<a href="#top">back to top</a>)</p>

## Why is building a metronome interesting

As I'm sure you already know Javascript is single threaded, which means if you want something to happen at a specific time you better hope that nothing else happens that causes your timer to be interrupted. Now in most scenarios a small amount of drift is acceptable, but if you're doing something that needs to happen at a specific time you need to be careful. For musicians who are trying to specifically practice a certain rhythm, this is a problem. Research shows that musicians start to notice (and complain about) timing discrepancies at around 40ms of drift. So how do you get around this? Well if this sounds interesting to you the following are some great resources to get you started:

- [Metronomes in JavaScript](https://meowni.ca/posts/metronomes/)
- [Why Javascript timer is unreliable, and how can you fix it](https://abhi9bakshi.medium.com/why-javascript-timer-is-unreliable-and-how-can-you-fix-it-9ff5e6d34ee0)
- [More Accurate JavaScript Timers with Web Workers](https://hackwild.com/article/web-worker-timers/)
- [On High-Precision JavaScript Timers](https://incolumitas.com/2021/12/18/on-high-precision-javascript-timers/)

At the current time this project uses the [WebAudio API](https://www.w3.org/TR/webaudio/) with a [WebWorker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers) to create a metronome. The WebWorker is a process that runs in the background and wraps the accurate timings from the WebAudio API. [Angular EventEmitters](https://angular.io/api/core/EventEmitter) are then used to send the timings to the main thread. The main thread then uses these asynchronous events to drive the rest of the features.

This gives us a mechanism to generate accurate timings for the first iteration of this code, but the current code is ugly and doesn't play nicely with a library based monorepo structure. Expect to see refactoring in this area soon.

## Technologies Used

### Nrwl Nx

<a href="https://nx.dev/" target="_blank"><img alt="Nrwl Nx" src="https://img.shields.io/badge/Nx-143055.svg?style=for-the-badge&logo=Nx&logoColor=white" /></a>

[Nx](https://nx.dev/) describes itself as:

> a smart, fast and extensible build system with first class monorepo support and powerful integrations.

This tooling allows us to group multiple distinct projects, with well-defined relationships into a single repository. If this idea sounds potentially useful to you the key question with Nx is whether you have consistent dependencies across your projects. If you do, then we can use Nx to build a single repository that can (if you choose) be deployed to multiple environments. This means for example we could have a single repo with server side ([Express, Nest and more](https://nx.dev/community#create-nx-plugin)), web (Angular, [React](https://blog.nrwl.io/the-react-cli-you-always-wanted-but-didnt-know-about-eaa2494aab9e) & more), hybrid mobile and electron applications which could all potentially share code.

Nx does a lot more than this for us. It has [template driven code generators](https://nx.dev/guides/nx-devkit-angular-devkit), can automatically configure tools like <a href="#jest">Jest</a>, <a href="#esLint">ESLint</a> and <a href="#prettier">Prettier</a> and perhaps most importantly comes with tooling to simplify migrations and upgrades. From the ground up Nx has been built with [efficient](https://nx.dev/using-nx/affected) enterprise-grade development in mind.

The [ng-guitar repo](https://github.com/TimDMorris/ng-guitar) is a Nx Monorepo.

### Angular

<a href="https://angular.io/" target="_blank"><img alt="Angular" src="https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white" /></a>

[Angular](https://angular.io/) is an opinionated front end framework. **_Framework_** being the key point to stress. This consistent tooling out of the box makes it particularly useful for Teams who lack the skills or time required for building with Tools like React where each team needs to select the most appropriate options from multiple potential approaches to solving any development challenge.

A key differentiator between Angular and React is that Angular used to have a notorious steep learning curve while React was much easier to learn and reason about. With the introduction of [Stand Alone Components](https://angular.io/guide/standalone-components) simplifying Angular and [Hooks](https://reactjs.org/docs/hooks-intro.html) adding potential complexity to React, the two tools have become very similar.

It should be noted that both tool sets still have distinct strengths, however for a SPA like this one the Angular tool set is particularly appropriate.

### Angular Material

<a href="https://material.angular.io/" target="_blank"><img alt="Angular Material" src="https://img.shields.io/badge/Angular_Material-3F51B5?style=for-the-badge&logo=angular&logoColor=white+" /></a>

[Angular Material](https://material.angular.io/) is a UI component Library for Angular. It is a set of reusable components that can be used across multiple Angular applications. One of the key reasons it tends to be my go to UI component Library when working with Angular is that it is a well-known library that is extremely well-documented and has a large community of contributors.

A secondary factor is that Google's underlying [Material design system](https://material.io/design) is heavily user research based. For example when Material decided to update their implementation of Input fields they went out and User Tested the new implementation with approx 400 users. Although it's possible to achieve a lot with [Guerrilla Usability Testing](https://sensible.com/rocket-surgery-made-easy/) of your own components it is fairly time consuming to attempt to do so for every possible component you would need to implement a modern web application.

If you do find yourself in a scenario where you don't have support of an experienced UX professionalto support your projects then a couple of really good resources are:

- [The user experience team of one](https://bootcamp.uxdesign.cc/book-review-the-user-experience-team-of-one-6fcb77ecf05a) - a really practical book with a lot of examples you can start to apply today.
- [How To Make Sense of Any Mess](http://www.howtomakesenseofanymess.com/) - Abby Covert is a great author and this is a brilliant resource to start getting to grips with Information Architecture.

### Typescript

<a href="https://www.typescriptlang.org/" target="_blank"><img alt="TypeScript" src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" /></a>

[I see a lot of hate](https://dev.to/jfbrennan/the-reasons-i-don-t-use-typescript-2fhb) from some people for [TypeScript](https://www.typescriptlang.org/), but if you want to build reliable, robust and maintainable code then TypeScript is a game changer. Each to their own, but compile time type checking and the superior overall developer experience makes it a great tool to have at your disposal.

This project is built with [Angular's Strict mode](https://javascript.plainenglish.io/why-angular-strict-mode-is-a-game-changer-11a0ce62f3aa) enabled and while I've found this annoying at times overall I've found it raising the standard of the code I write and reducing the number of errors I have to deal with.

### SASS

<a href="https://sass-lang.com/" target="_blank"><img alt="Sass" src="https://img.shields.io/badge/Sass-CC6699.svg?style=for-the-badge&logo=Sass&logoColor=white" /></a>

At the current time this project makes limited use of [SASS](https://sass-lang.com/), but my past experience has been the ability to use variables, mixins, nested rule, functions and all the other goodies has made it a real accelerator for my projects.

This project already has some of the foundations in place for theme switching so expect to see that and dark mode added shortly.

### ESLint

<a href="https://eslint.org/" target="_blank"><img alt="ESLint" src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white" /></a>

Everyone has seen the research, we all know the [cost of resolving bugs increases almost exponentially](https://deepsource.io/blog/exponential-cost-of-fixing-bugs/) the later in the [SDLC](https://www.synopsys.com/glossary/what-is-sdlc.html) they are discovered. [ESLint](https://eslint.org/) statically analyzes your code and helps you find potential issues before you commit them.

In this project I use ESLint to enforce a consistent style of code and to help me find potential issues before I commit them. It's also integrated into pre-commit checks using [husky](https://github.com/typicode/husky) to make sure that all of my code is clean before I commit.

Although the current [CI/CD pipeline](https://github.com/TimDMorris/ng-guitar/tree/main/.github/workflows) for this project is a relatively simple one built with <a href="#gitHub-actions">GitHub Actions</a>, it also includes lint checks to ensure low quality code is not merged to the main branch

### Prettier

<a href="https://prettier.io/" target="_blank"><img alt="Prettier" src="https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E" /></a>

[Prettier](https://prettier.io/)

### Storybook

<a href="https://storybook.js.org/" target="_blank"><img alt="Storybook" src="https://img.shields.io/badge/storybook-F74480?style=for-the-badge&logo=storybook&logoColor=white+" /></a>

[Storybook](https://storybook.js.org/)

### Jest

<a href="https://jestjs.io/" target="_blank"><img alt="Jest" src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white" /></a>

[Jest](https://jestjs.io/)

### Cypress

<a href="https://www.cypress.io/" target="_blank"><img alt="Cypress" src="https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white" /></a>

[Cypress](https://www.cypress.io/)

### VS Code

<a href="https://code.visualstudio.com/" target="_blank"><img alt="VS Code" src="https://img.shields.io/badge/Visual%20Studio%20Code-007ACC.svg?style=for-the-badge&logo=Visual-Studio-Code&logoColor=white" /></a>

[VS Code](https://code.visualstudio.com/)

### GitHub Actions

<a href="https://docs.github.com/en/actions/" target="_blank"><img alt="GitHub Actions" src="https://img.shields.io/badge/GitHub%20Actions-2088FF.svg?style=for-the-badge&logo=GitHub-Actions&logoColor=white" /></a>

[GitHub Actions](https://github.com/features/actions)

### GitHub Pages

<a href="https://docs.github.com/en/pages" target="_blank"><img alt="GitHub Pages" src="https://img.shields.io/badge/GitHub%20Pages-222222.svg?style=for-the-badge&logo=GitHub-Pages&logoColor=white" /></a>

[GitHub Pages](https://pages.github.com/)

### GitHub CodeQL

<a href="https://codeql.github.com/" target="_blank"><img alt="GitHub Copilot" src="https://img.shields.io/badge/GitHub%20CodeQL-0F305F.svg?style=for-the-badge&logo=GitHub&logoColor=white" ></a>

[GitHub CodeQL](https://codeql.github.com/)

### GitHub Copilot

<a href="https://github.com/features/copilot" target="_blank"><img alt="GitHub Copilot" src="https://img.shields.io/badge/GitHub%20Copilot-2C2546.svg?style=for-the-badge&logo=GitHub&logoColor=white" ></a>

[GitHub Copilot](https://github.com/features/copilot)
