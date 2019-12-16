# PersistStateNgZoneRunWarning
Repo to demonstrate `Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?` warning, which interferes with Angular change detection.

## Steps to reproduce

Created on macOS Mojave and node v12.13.1

1. `npm i`
2. `npm run start`
3. open http://localhost:4200
4. Click all three tabs
5. Refresh a few times, warning should appear, if not increasing `storeSize` seems to make the issue happen more quickly
6. Removing `persistState` resolves issues with navigation and change detection
7. Persisting entities manually with ngforage seems to work without issue
