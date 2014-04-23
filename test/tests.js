QUnit.test('test without module', function () {
  QUnit.ok(true, 'test runs');
});

QUnit.module('inject two variable', {
  a: 10,
  b: 32
});

QUnit.test('no injection', function () {
  QUnit.ok(true, 'test runs');
});

QUnit.test('injected values', function (a, b) {
  QUnit.equal(a, 10, 'valua a injected');
  QUnit.equal(b, 32, 'valua b injected');
});
