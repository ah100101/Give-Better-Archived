# Give Better - Client

## Description

Give better is a server side rendered Nuxt Progressive Web application for providing users a location to post and share wishlists and view what their friends and family have listed as possible gifts

## Stack

This project is only for the client implementation of the progressive web app. This app utilizes:
- Nuxt.js
- Bulma (css)
- Service workers for progressive web app specific functionality

Give Better is hosted on Heroku

## Integrations

Give Better has 2 key integrations

1) GraphCMS
2) Firebase

GraphCMS is utilized for providing a CMS for static labels and non-user provided content for the application

Firebase it utilized for a realtime NoSQL database, asset storage, authentication as a service, and analytics


## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
# note: deletes sw.js from root
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate

# generate service worker (sw.js) file
$ npm run generate:sw

# build SSR app and generate sw.js
$ npm run generate:pwa

# build SSR app, generate sw.js, and run app
$ npm run start:pwa
```
