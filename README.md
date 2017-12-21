# Wireline Service Template.


## Quick Start

~~~~
sls create --template-url https://github.com/wirelineio/sls-template --name test-wireline

cd test-wireline

yarn install

sls deploy
sls wireline register
~~~~


## INTERNAL ONLY

This package is currently internal to the Wireline team; it requires private access to the @wirelineio org.


### Private Repos

https://www.npmjs.com/org/wirelineio

~~~~
npm login                       # NOTE: Must preceed yarn login.
yarn login
~~~~

Check auth tokens: `~/.npmrc`


### Local Repos

To use local repositories:

~~~~
cd darkstar/sub/sls-plugin
yarn link
webpack --watch

cd darkstar/sub/sls-sdk
yarn link

cd test-wireline
yarn link "@wirelineio/serverless-wireline"
yarn link "@wirelineio/sdk"
~~~~
