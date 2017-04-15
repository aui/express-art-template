# express-art-template

art-template for express

## Install

```
npm install --save express-art-template
```

## Example

```js
var express = require('express');
var app = express();
app.engine('art', require('express-art-template'));

app.get('/', function (req, res) {
    res.render('index.art', {
        user: {
            name: 'aui',
            tags: ['art', 'template', 'nodejs']
        }
    });
});
```


## Options

You can pass [art-template options](https://github.com/aui/art-template)