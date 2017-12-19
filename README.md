# Wireline Service Template.


## NOTE: PRIVATE

This package is currently internal to the Wireline team; it requires private access to the @wirelineio org.

https://www.npmjs.com/org/wirelineio

~~~~
yarn login
~~~~

Check your auth token `~/.npmrc`. If not set or if there are issues downloading private packages

~~~~
npm login
~~~~

## Developing

Dev only: use yarn link to use packages locally to test unpublished @@wirelineio/serverless-wireline package, since they are not published.

~~~~
cd darkstar/sub/sls-plugin
yarn link


# Go to the new app created from template.
cd ../wireline-testing
yarn link "@wirelineio/serverless-wireline"

# now to install packages
yarn install
~~~~

### Active development of sls-plugin
If developing on ../darkstar/sub/sls-plugin make sure webpack is rebuilding the plugin.
~~~~
cd darkstar/sub/sls-plugin
webpack --watch
~~~~



## Quick Start

~~~~
sls create --template-url https://github.com/wirelineio/sls-template --name test-wireline

cd test-wireline

yarn install

sls deploy
sls wireline register
~~~~

