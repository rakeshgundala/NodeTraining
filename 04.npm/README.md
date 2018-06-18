## Node Package Manager (npm)
Node.js eases support to third-party open source developed modules by providing the Node Package Manager(npm). It allows developers, to easily install, manage, and even provide your own modules for a rapidly grown repository

package.json file:


Alternatives:
- bower
- PIP
- Yarn
- chocolatey

### package.json
The best way to manage locally installed npm packages is to create a package.json file
- lists the packages dependencies.
- allows versions of a package using semantic versioning rules.
- makes your build reproducible, easy sharing.

> Note: Every dependent package would have a package.json, inside, as your project depndencies can have their own dependencies.

> Note: npm install might not installed nested dependencies.

### commenly used npm commands

> npm init

> npm i < package name> -g

> npm i < package name > [--save|--save-dev]

> npm update -g

> npm update

### Packages to be installed

> npm install express / npm install express@latest

