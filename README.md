# node-server-example

[![Build Status](https://travis-ci.org/rogue-zero/node-server-example.svg?branch=travis)](https://travis-ci.org/rogue-zero/node-server-example)
[![Coverage Status](https://coveralls.io/repos/github/rogue-zero/node-server-example/badge.svg?branch=coveralls)](https://coveralls.io/github/rogue-zero/node-server-example?branch=coveralls)

Example node server project to run inside docker machine or as a fat binary in less dockery infrastructure.

## Infrastructure

This node program is built using [pkg](https://github.com/zeit/pkg). After build an executable is generated 
inside `target` folder and is ready to be runned in production.

## Installing dependencies

```
yarn
```

## Development run

``` 
yarn start
```

## Development test run

```
yarn test -- --watch
```

## Test run

```
yarn test
```

## Building program

```
yarn build
```

## Running program

```
target/node-server-example
```

## Building docker image

```
docker build -t node-server-example .
```

## Running docker image

```
docker run -p 8080:8080 node-server-example
```
