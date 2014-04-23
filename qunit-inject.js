/* jshint -W117:false */
(function (QUnit, env) {
  if (env.__qunit_inject_initialized) {
    return;
  }
  env.__qunit_inject_initialized = true;

  if (typeof QUnit !== 'object') {
    throw new Error('undefined QUnit object');
  }
  var heroin = env.heroin;
  if (typeof require === 'function') {
    heroin = require('heroin');
  }
  if (typeof heroin !== 'function') {
    throw new Error('No heroin to inject');
  }

  var _module = QUnit.module;
  if (typeof _module !== 'function') {
    throw new Error('QUnit.module should be a function');
  }
  var _test = QUnit.test;
  if (typeof _test !== 'function') {
    throw new Error('QUnit.test should be a function');
  }

  var configs = {};
  var lastModuleName;

  QUnit.module = function (name, config) {
    if (typeof config !== 'object') {
      return _module.call(QUnit, name, config);
    }
    configs[name] = config;
    _module.call(QUnit, name, config);
    lastModuleName = name;
  };

  QUnit.test = function (name, fn) {
    if (typeof name === 'function') {
      fn = name;
      name = fn.name;
    }

    if (lastModuleName && configs[lastModuleName]) {
      var dependencies = configs[lastModuleName];
      var injected = heroin(fn, dependencies);
      _test.call(QUnit, name, injected);
    } else {
      _test.call(QUnit, name, fn);
    }
  };
}(QUnit, typeof global === 'object' ? global : window));

