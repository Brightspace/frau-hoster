## Usage

Install `fra-ster` as a dev dependency:

```shell
npm install --save-dev frau-hoster
```

Require the package:

```javascript
var fraster = require('frau-hoster');
```

Create a hoster.

```javascript
var hoster = fraster.getHoster( opts );
// Host the free-range application.
hoster.host();
```