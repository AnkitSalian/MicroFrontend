# MicroFrontend
This repo is advanced configuration for the project build which we did for Webpack-MicroFrontend

## Installation
```npm i```
Run this command in all four modules under packages directory to install the node modules

## Run
```npm start```
Run this command in all four modules under packages directory
*Note: Container module is the one to run last after other modules are running*

## Summary
Here there are three independent modules viz: auth, dashboard and marketing and one parent viz: container which is using the services of the mentioned three modules.

## Tech Stack
For this project, React and Vue is used but micro frontend can be implemented in any framework or technology. To implement microfrontend we have use Webpack ModuleFeration plugin 
to host the independent application and also consume the services of it in parent application.

## Advantage of using Micro-Frontend:
Whenever we need to add any feature in any module, only that particular service needs to be deployed which will not affect other modules since here we are working at Run Time.
