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

cd darkstar/sub/sdk
yarn link

cd test-wireline
yarn link "@wirelineio/serverless-wireline"
yarn link "@wirelineio/sdk"
~~~~


### Troubleshooting

- `An unexpected error occurred: "https://registry.yarnpkg.com/@wirelineio%2fsdk: Not found"` while doing `yarn install`

This error comes when you are not logged to npm account. Your npm account also needs to be added to Wireline's private npm repo. Then run `npm login` and enter necessary credentials. Then try `yarn install` again.
