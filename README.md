# qunit-inject

QUnit plugin to add dependency injection from module to unit tests.

[Test page](http://glebbahmutov.com/qunit-inject/)

[![NPM][qunit-inject-icon]][qunit-inject-url]

[![Build status][qunit-inject-ci-image]][qunit-inject-ci-url]
[![dependencies][qunit-inject-dependencies-image]][qunit-inject-dependencies-url]
[![devdependencies][qunit-inject-devdependencies-image]][qunit-inject-devdependencies-url]

[![endorse][endorse-image]][endorse-url]

## Example:

```js
QUnit.module('inject two variable', {
  a: 10,
  b: 32
});

QUnit.test('injected values', function (a, b) {
  QUnit.equal(a, 10, 'valua a injected');
  QUnit.equal(b, 32, 'valua b injected');
});
```

## Related

[qunit-once](https://github.com/bahmutov/qunit-once),
[qunit-promises](https://github.com/bahmutov/qunit-promises)

## Small print

Author: Gleb Bahmutov &copy; 2014 @bahmutov

License: MIT - do anything with the code, but don't blame me if it does not work.

Support: if you find any problems with this module, email / tweet / open issue on Github

[qunit-inject-icon]: https://nodei.co/npm/qunit-inject.png?downloads=true
[qunit-inject-url]: https://npmjs.org/package/qunit-inject
[qunit-inject-ci-image]: https://travis-ci.org/bahmutov/qunit-inject.png?branch=master
[qunit-inject-ci-url]: https://travis-ci.org/bahmutov/qunit-inject
[qunit-inject-dependencies-image]: https://david-dm.org/bahmutov/qunit-inject.png
[qunit-inject-dependencies-url]: https://david-dm.org/bahmutov/qunit-inject
[qunit-inject-devdependencies-image]: https://david-dm.org/bahmutov/qunit-inject/dev-status.png
[qunit-inject-devdependencies-url]: https://david-dm.org/bahmutov/qunit-inject#info=devDependencies
[endorse-image]: https://api.coderwall.com/bahmutov/endorsecount.png
[endorse-url]: https://coderwall.com/bahmutov
