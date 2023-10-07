## Serve as Android

ionic serve --platform android

## Prepare Android

ionic cordova prepare android --prod

## For HTTP

android:usesCleartextTraffic="true"

## For Keyboard

android:windowSoftInputMode="adjustNothing"

## For Storage

ionic cordova plugin add cordova-sqlite-storage
npm install --save @ionic/storage
ionic cap sync

## Build

ionic build --prod

## Add Platform

ionic cordova platform add android

## Add Capacitor

ionic cap add android

## Copy www

ionic cap copy

## Copy Plug-ins

ionic cap sync

## Open with Android Studio

ionic cap open android
