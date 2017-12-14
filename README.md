# Wireline Service Template.

## NOTE: PRIVATE

This package is currently internal to the Wireline team; it requires private access to the @wirelineio org.

https://www.npmjs.com/org/wirelineio

~~~~
yarn login
~~~~

Check your auth token `~/.npmrc`.


## Quick Start

~~~~
sls create --template-url https://github.com/wirelineio/sls-template --name test-wireline

cd test-wireline

yarn install

sls deploy
sls wireline register
~~~~

