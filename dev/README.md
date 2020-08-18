# Dev Environment - Behind the Hood

Start with `npm run dev`

### What it does

1. Uses webpack to bundle and compile assets into the build folder.
2. It issues hot updates when a file in the development scope is saved with changes.
   A. Background Scripts: The background scripts can receive and inject content scripts without much problem directly from the Webpack Development Server.
   B. Content Scripts: Content scripts, however, are protected by Chrome's security policy. Instead of disabling the whitelist for insecure sources, we issue a second set of hot update commands to the content script and whitelist the contentScript webpack development 'server'
