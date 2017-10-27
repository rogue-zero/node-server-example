# node-server-example

Example node server project to run inside docker machine.

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

## Building docker image

```
docker build -t node-server-example .
```

## Running docker image

```
docker run -p 8080:8080 node-server-example
```