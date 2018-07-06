# Star Wars Deck

> Vue JS PWA using the SWAPI API

[Live Demo](https://star-wars-deck.now.sh/)

## Features

Simple application displaying the information about Star Wars available on the [SWAPI](https://swapi.co/) API.

PWA Features :
- ***Manifest*** : you can add the application to your Android smartphone in order to have native app feeling
- ***Cache*** : all assets (CSS, JS) are cached so the application is fastest and it will still load even without network
- ***Offline usage*** : all request to the API are cached which mean you can still use the application without network

## PWA features demo

1. Go to the [Live Demo](https://star-wars-deck.now.sh/) with your Android smartphone on Chrome
2. Click on the three dot on the right side of the address bar in order to open Chrome option
3. Click "Add to homescreen", this will add the website to your applications
4. Launch the application
5. Go to any page of the app in order to cache it (wait a few seconds for the service worker to be active)
6. Disconnect from internet and relaunch the app
7. The app is still working, the pages not cached will display a message about the network problem

## Installation

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```
