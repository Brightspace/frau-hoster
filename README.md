Utilities for building free-range apps.

## Usage

Install `fra-ster` as a dev dependency:

```shell
npm install --save-dev fra-ster
```

Require the package:

```javascript
var fra-ster = require('fra-ster');
```

Create a hoster.

```javascript
var hoster = fra-ster.getHoster( url );
// Host the free-range application.
hoster.host();
```