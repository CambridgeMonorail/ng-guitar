# Commit Rules

## Branch Workflow

This repository uses a main branch and tries to follow the GitHub flow model:

<https://docs.github.com/en/get-started/quickstart/github-flow>

## Issues

Please create a new branch for each issue. Also it would be a good idea
to call the branch with the number of the issue and a short text, ie:

    git checkout -b 72_metronomehangs

## Commit Message

We use conventional commits guideline, specifically the Angular Commit Message Format as specified in <https://github.com/angular/angular/blob/main/CONTRIBUTING.md#commit>
The footer can contain information about breaking changes and deprecations and is also the place to reference GitHub issues, Jira tickets, and other PRs that this commit closes or is related to. For example:

Definition:

::

    <type>[optional scope]: <description>

    [optional body]

    footer #issue

Example:

::

    BREAKING CHANGE: <breaking change summary>
    <BLANK LINE>
    <breaking change description + migration instructions>
    <BLANK LINE>
    <BLANK LINE>
    Fixes #<issue number>

## Testing

Before committing, make sure it passes all the tests.

    npm run test

## Contribution Guide

Check our contribution guide for more information about this topic.

To Be Completed
