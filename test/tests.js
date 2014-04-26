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

QUnit.test('injected from setup', function (a) {
  QUnit.equal(a, 42, 'value was changed by module setup');
});

QUnit.module('create in setup', {
  setup: function () {
    this.a = 42;
  }
});

QUnit.test('injected from setup', function (a) {
  QUnit.equal(a, 42, 'a was created by setup');
});

QUnit.module('teardown', {
  setup: function () {
    if (typeof this.a !== 'undefined') {
      if (this.a !== 1) {
        throw new Error('value a should have been changed by teardown ' + this.a);
      }
    }
    this.a = 42;
  },
  teardown: function () {
    if (this.a !== 42) {
      throw new Error('Expected a to be 42, have ' + this.a);
    }
    this.a = 1;
  }
});

QUnit.test('test 1', function (a) {
  QUnit.equal(a, 42);
});
