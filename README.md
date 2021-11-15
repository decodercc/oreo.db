# Oreo.db
### Simple and fast local database
<img src="/img/lg.png" width="94px" alt="Logo">

## Install
```
npm install @nersantucci/oreo.db
```

## Examples
```js
const Oreo = require('@nersantucci/oreo.db');
const db = new Oreo();

// Set key
db.set('apples', 1);

// Get key

db.get('apples'); // 1

// Increase number value
db.add('apples', 1); // { "apples": 2 }

// Decrease number value
db.sub('apples', 1); // { "apples": 0 }

// Check if value exists
db.has('apples'); // true

// Push object
db.set('users', {});
db.push('users', { name: 'Jane', age: 16 }); // And when we use db.get('users') we get { name: 'Jane', age: 16 }

// Get db
db.all(); // { "apples": 1 }

// Clear db
db.clear(); // And when we use db.all() we get { }

// Save db
db.save();
```