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

QUnit.module('inject with setup', {
  a: 10,
  setup: function () {
    this.a = 42;
  }
});

/*
QUnit.test('injected from setup', function (a) {
  QUnit.equal(a, 42, 'value was changed by module setup');
});*/
