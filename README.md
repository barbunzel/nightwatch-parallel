# Nightwatch Tests Running in Parallel POC

[Nightwatch](http://nightwatchjs.org/) can run tests sequentially or in parallel. Running tests sequentially works fine, but when running them in parallel there seems to be something affecting the process.

There seem to be two main issues when running tests in parallel:

- Tests sometimes fail when they pass when run sequentially
- Sometimes tests are skipped

This POC was created to try to replicate, identify the problem and possibly come up with a solution to these issues.

## What are the tests?

The tests are basically the same test shown on Nightwatch's homepage, with a small twist.

And they are pretty simple:
- Open www.google.com
- When it has loaded, search for "rembrandt van rijn"
- Assert that the first result is the Wikipedia page for Rembrandt
- Click on Google's logo and repeat all these steps N times

These tests run 8 times (exactly the same tests), in parallel.

## How to run

The test suite can be executed by running `npm run e2e` in the terminal.

Optionally, an environment variable `TIMES_TO_LOOP` can be set to define how many times to repeat the test steps. This can be run, for example, by running `export TIMES_TO_LOOP=1 && npm run e2e` in the terminal. If `TIMES_TO_LOOP` is not set, it will run 50 times by default (this is to try to make the tests as heavy as possible).
