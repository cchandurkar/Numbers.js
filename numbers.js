(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.numbers = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _divisors = require('./divisors');

var _divisors2 = _interopRequireDefault(_divisors);

var _series = require('./series');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (number) {
  return (0, _series.sum)((0, _divisors2.default)(number)) > 2 * number;
};

},{"./divisors":3,"./series":10}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _divisors = require('./divisors');

var _divisors2 = _interopRequireDefault(_divisors);

var _series = require('./series');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (number) {
  return (0, _series.sum)((0, _divisors2.default)(number)) < 2 * number;
};

},{"./divisors":3,"./series":10}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (number) {
  var divsr = [number];
  for (var i = 1; i <= number / 2; i++) {
    if (number % i === 0) divsr.push(i);
  }return divsr;
};

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.series = exports.divisors = exports.isPerfectSquare = exports.isDeficient = exports.isPerfect = exports.isAbundant = exports.isPrime = undefined;

var _prime = require('./prime');

Object.defineProperty(exports, 'isPrime', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_prime).default;
  }
});

var _abundant = require('./abundant');

Object.defineProperty(exports, 'isAbundant', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_abundant).default;
  }
});

var _perfect = require('./perfect');

Object.defineProperty(exports, 'isPerfect', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_perfect).default;
  }
});

var _deficient = require('./deficient');

Object.defineProperty(exports, 'isDeficient', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_deficient).default;
  }
});

var _perfectSquare = require('./perfectSquare');

Object.defineProperty(exports, 'isPerfectSquare', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_perfectSquare).default;
  }
});

var _divisors = require('./divisors');

Object.defineProperty(exports, 'divisors', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_divisors).default;
  }
});

var _series = require('./series');

var series = _interopRequireWildcard(_series);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Import Series


exports.series = series;

},{"./abundant":1,"./deficient":2,"./divisors":3,"./perfect":5,"./perfectSquare":6,"./prime":7,"./series":10}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _divisors = require('./divisors');

var _divisors2 = _interopRequireDefault(_divisors);

var _series = require('./series');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (number) {
  return (0, _series.sum)((0, _divisors2.default)(number)) === 2 * number;
};

},{"./divisors":3,"./series":10}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _divisors = require('./divisors');

var _divisors2 = _interopRequireDefault(_divisors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (number) {
  var sqrt = Math.sqrt(number);
  return sqrt % 1.0 === 0 && (0, _divisors2.default)(number).indexOf(sqrt) > -1;
};

},{"./divisors":3}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (number) {
  if (number <= 1) return false;else if (number <= 3) return true;else if (number % 2 === 0 || number % 3 === 0) return false;
  var i = 5;
  while (i * i <= number) {
    if (number % i === 0 || number % (i + 2) === 0) return false;
  }return true;
};

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _nthArithmetic = require('./nthArithmetic');

var _nthArithmetic2 = _interopRequireDefault(_nthArithmetic);

var _sort = require('./sort');

var _sort2 = _interopRequireDefault(_sort);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (series) {
  return (0, _nthArithmetic2.default)((0, _sort2.default)(series), series.length) === series[series.length - 1];
};

},{"./nthArithmetic":14,"./sort":17}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _nthGeometric = require('./nthGeometric');

var _nthGeometric2 = _interopRequireDefault(_nthGeometric);

var _sort = require('./sort');

var _sort2 = _interopRequireDefault(_sort);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (series) {
  return (0, _nthGeometric2.default)((0, _sort2.default)(series), series.length) === series[series.length - 1];
};

},{"./nthGeometric":15,"./sort":17}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sum = require('./sum');

Object.defineProperty(exports, 'sum', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_sum).default;
  }
});

var _mean = require('./mean');

Object.defineProperty(exports, 'mean', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_mean).default;
  }
});

var _median = require('./median');

Object.defineProperty(exports, 'median', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_median).default;
  }
});

var _mode = require('./mode');

Object.defineProperty(exports, 'mode', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_mode).default;
  }
});

var _range = require('./range');

Object.defineProperty(exports, 'range', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_range).default;
  }
});

var _sort = require('./sort');

Object.defineProperty(exports, 'sort', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_sort).default;
  }
});

var _arithmetic = require('./arithmetic');

Object.defineProperty(exports, 'isArithmetic', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_arithmetic).default;
  }
});

var _geometric = require('./geometric');

Object.defineProperty(exports, 'isGeometric', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_geometric).default;
  }
});

var _nthArithmetic = require('./nthArithmetic');

Object.defineProperty(exports, 'nthArithmetic', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_nthArithmetic).default;
  }
});

var _nthGeometric = require('./nthGeometric');

Object.defineProperty(exports, 'nthGeometric', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_nthGeometric).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"./arithmetic":8,"./geometric":9,"./mean":11,"./median":12,"./mode":13,"./nthArithmetic":14,"./nthGeometric":15,"./range":16,"./sort":17,"./sum":18}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sum = require('./sum');

var _sum2 = _interopRequireDefault(_sum);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (series) {
  return (0, _sum2.default)(series) / series.length;
};

},{"./sum":18}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sort = require('./sort');

var _sort2 = _interopRequireDefault(_sort);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (series) {
  var sorted = (0, _sort2.default)(series);
  return sorted.length % 2 === 0 ? (sorted[sorted.length / 2] + sorted[sorted.length / 2 - 1]) / 2 : sorted[(sorted.length - 1) / 2];
};

},{"./sort":17}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (series) {

  // keep the occurance count
  var countMap = {},
      maxValue = 0,
      maxKey = null;

  // Loop over and increament occurance
  series.forEach(function (n) {
    if (countMap.hasOwnProperty(n.toString())) countMap[n.toString()]++;else countMap[n.toString()] = 0;
  });

  // Sort according to value
  for (var key in countMap) {
    if (countMap[key] > maxValue) {
      maxKey = key;
      maxValue = countMap[key];
    }
  }

  // Return MaxKey as mode
  return +maxKey;
};

},{}],14:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (series, n) {
  return series[0] + (n - 1) * (series[1] - series[0]);
};

},{}],15:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (series, n) {
  return series[0] * Math.pow(series[1] / series[0], n - 1);
};

},{}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

exports.default = function (series) {
  return series.length > 0 ? Math.max.apply(Math, _toConsumableArray(series)) - Math.min.apply(Math, _toConsumableArray(series)) : undefined;
};

},{}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (series, descending) {
  return series.slice().sort(function (a, b) {
    return descending ? b - a : a - b;
  });
};

},{}],18:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (series) {
  return series.reduce(function (a, b) {
    return a + b;
  }, 0);
};

},{}]},{},[4])(4)
});