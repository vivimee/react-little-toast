## Introduction

A simplest Toast react component.

## Install

```js
npm install react-little-toast
```

## Usage

[DEMO](https://vivimee.github.io/react-little-toast/)
```js
import Toast from 'react-little-toast';

Toast.info({ message: 'Hello world' });
Toast.success({ message: 'Success' });
Toast.error({ message: 'Error' });

// timeout is passed to customize toast duration, default to 3000ms
Toast.info({ message: 'Custom timeout', timeout: 3000 });

```


## Licenes

```
MIT License
```
