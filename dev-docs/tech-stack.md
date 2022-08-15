<div id="top"></div>
<div align="center">
  <a href="https://github.com/TimDMorris/ng-guitar">
    <img src="images/logo-152x152.png" alt="Logo" width="80" height="80">
  </a>
</div>

<h1 align="center">NG-GUITAR Technology Stack</h1>

<br/>

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

[Angular](https://angular.io/) is an opinionated front end framework. **_Framework_** being the key point to stress. This consistent tooling out of the box makes it particularly useful for Teams who lack the skills or time required for building with tools like React where each team needs to select the most appropriate options from multiple potential approaches to solving any development challenge.

A key differentiator between Angular and React is that Angular used to have a notorious steep learning curve while React was much easier to learn and reason about. With the introduction of [Stand Alone Components](https://angular.io/guide/standalone-components) simplifying Angular and [Hooks](https://reactjs.org/docs/hooks-intro.html) adding potential complexity to React, the two tools have become very similar.

It should be noted that both tool sets still have distinct strengths, there are specific kinds of project where React is a much better choice, but for a SPA like this one  the Angular tool set is particularly appropriate.

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

At the current time this project makes limited use of specific [SASS](https://sass-lang.com/) features, but my past experience has been the ability to use variables, mixins, nested rule, functions and all the other goodies has made it a real accelerator for my projects.

This project already has some of the foundations in place for theme switching so expect to see that and dark mode added shortly.

### ESLint

<a href="https://eslint.org/" target="_blank"><img alt="ESLint" src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white" /></a>

Everyone has seen the research, we all know the [cost of resolving bugs increases almost exponentially](https://deepsource.io/blog/exponential-cost-of-fixing-bugs/) the later in the [SDLC](https://www.synopsys.com/glossary/what-is-sdlc.html) they are discovered. [ESLint](https://eslint.org/) statically analyzes your code and helps you find potential issues before you commit them.

In this project I use ESLint to enforce a consistent style of code and to help me find potential issues before I commit them. It's also integrated into pre-commit checks using [husky](https://github.com/typicode/husky) to make sure that all of my code is clean before I commit.

Although the current [CI/CD pipeline](https://github.com/TimDMorris/ng-guitar/tree/main/.github/workflows) for this project is a relatively simple one built with <a href="#gitHub-actions">GitHub Actions</a>, it also includes lint checks to ensure low quality code is not merged to the main branch

### Prettier

<a href="https://prettier.io/" target="_blank"><img alt="Prettier" src="https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E" /></a>

Consistent formatting a styling across a code base makes it a lot easier to work with.  [Prettier](https://prettier.io/) saves a lot of time and effort because it can be configured to autoformat on save.  I typically include it in the VS Code workspace settings so all work

### Storybook

<a href="https://storybook.js.org/" target="_blank"><img alt="Storybook" src="https://img.shields.io/badge/storybook-F74480?style=for-the-badge&logo=storybook&logoColor=white+" /></a>

I'm a big fan of [Storybook](https://storybook.js.org/) as it allows the development of components in isolation.  This is a great tool to use when you are working on a new component or feature and want to test it out.  It provides interactive controls so you can manipulate the component and see the results immediately.  Additionally it can enhanced with plugins which allow the validation of accessibility and can be used to generate tests cases for e2e validation.

### Jest

<a href="https://jestjs.io/" target="_blank"><img alt="Jest" src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white" /></a>

For my production projects I use [Jest](https://jestjs.io/) for Unit testing and typically set coverage thresholds to ~80%.  I specifically like the ability Jest offers to run tests in parallel  and keep them isolated so cases don't pollute other validation.

The ng-guitar project is still immature and a high level of refactoring is planned to improve the quality of the code.  At the current time the Unit Test coverage is minimal, but I plan to combine Jest with [Storybook Snapshot Testing](https://storybook.js.org/docs/react/writing-tests/snapshot-testing/) to improve the quality of the code.

### Cypress

<a href="https://www.cypress.io/" target="_blank"><img alt="Cypress" src="https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white" /></a>

[Cypress](https://www.cypress.io/) is configured but not yet used in this project.  The reason I prefer Cypress over something like Selenium is the developer centric focus of the tooling.  I've wasted more time than I would like to think about in the past trying to debug e2e test, but the tools Cypress provides like time-travel debugging really make it a joy to work with.

The plan

### VS Code

<a href="https://code.visualstudio.com/" target="_blank"><img alt="VS Code" src="https://img.shields.io/badge/Visual%20Studio%20Code-007ACC.svg?style=for-the-badge&logo=Visual-Studio-Code&logoColor=white" /></a>

[VS Code](https://code.visualstudio.com/) is free, Open Source, platform agnostic, highly configurable and extensible with optional extensions to extend it's functionality, it's the best tool I've used to develop web applications.  Check out [Useful VS Code Extensions For Front-End Developers](https://www.smashingmagazine.com/2021/05/useful-vs-code-extensions-web-developers/).

### GitHub Actions

<a href="https://docs.github.com/en/actions/" target="_blank"><img alt="GitHub Actions" src="https://img.shields.io/badge/GitHub%20Actions-2088FF.svg?style=for-the-badge&logo=GitHub-Actions&logoColor=white" /></a>

While in my day job I currently use Jenkins for ng-guitar I'm currently using [GitHub Actions](https://github.com/features/actions) to automate the build and test process.  It give me lightweight CI/CD with minimal fuss.

Note I currently pay for a GitHub Pro account to give myself a higher level of storage and more minutes per month.  It's worth noting if you are facing challenges with the number fo minutes included with the free account you should make sure you run as many jobs as possible on Linux runners, Jobs that run on Windows and macOS runners that GitHub hosts consume minutes at a rate this is 2 and 10 times higher!

### GitHub Pages

<a href="https://docs.github.com/en/pages" target="_blank"><img alt="GitHub Pages" src="https://img.shields.io/badge/GitHub%20Pages-222222.svg?style=for-the-badge&logo=GitHub-Pages&logoColor=white" /></a>

It's easy, it's included with each project repo, I intend to continue to use [GitHub Pages](https://pages.github.com/) for ng-guitar for the forseeable future.

### GitHub CodeQL

<a href="https://codeql.github.com/" target="_blank"><img alt="GitHub Copilot" src="https://img.shields.io/badge/GitHub%20CodeQL-0F305F.svg?style=for-the-badge&logo=GitHub&logoColor=white" ></a>

I work in FinTech during the day time and I'm pretty twitchy about the idea of accidentally shipping code with vulnerabilities in. [GitHub CodeQL](https://codeql.github.com/) is a great choice for this purpose provided the project you are building is Open Source.

### GitHub Copilot

<a href="https://github.com/features/copilot" target="_blank"><img alt="GitHub Copilot" src="https://img.shields.io/badge/GitHub%20Copilot-2C2546.svg?style=for-the-badge&logo=GitHub&logoColor=white" ></a>

I know [a lot of people dislike](https://sfconservancy.org/blog/2022/jun/30/give-up-github-launch/) [GitHub Copilot](https://github.com/features/copilot) because of how it was built and other worry it is deskilling developers but given the amount of code I see that appears to have been written by***[Full Stack Overflow Developers](https://www.sitepoint.com/full-stack-overflow-developer/)*** I'm not sure it's actively making things worse for a lot odf people.

I've been trying it out for this project and as someone who can already write code I'm pretty happy with the results.  Where it really excels though is where you are trying to do something you have never done before (like the yml config for GitHub actions in this project).

For me personally half the battle when working with Open Source software, with documentation of variable quality, is finding what terms I need to search for in their docs to actually get anything done.  I think if you use copilot to scaffold out code and follow up and learn how to actually do something properly it's a great tool to use.  Especially for this kind of project where you have limited time and you are looking to build an initial MVP as quickly as possible.
