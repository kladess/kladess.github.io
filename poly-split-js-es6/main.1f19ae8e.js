// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../src/Vector.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Created by jyp on 2016-05-16.
 */

/**
 *
 * @param x
 * @param y
 * @param z
 * @constructor
 */
var Vector = function Vector(x, y, z) {
  var _this = this;

  _classCallCheck(this, Vector);

  _defineProperty(this, "addition", function (vector) {
    if (!vector instanceof Vector) throw new Error('param vector was not Vector');
    return new Vector(_this.x + vector.x, _this.y + vector.y, _this.z + vector.z);
  });

  _defineProperty(this, "subtraction", function (vector) {
    if (!vector instanceof Vector) throw new Error('param vector was not Vector');
    return new Vector(_this.x - vector.x, _this.y - vector.y, _this.z - vector.z);
  });

  _defineProperty(this, "multiplication", function (num) {
    if (typeof num !== 'number') throw new Error('param num was not numeric');
    return new Vector(_this.x * num, _this.y * num, _this.z * num);
  });

  _defineProperty(this, "division", function (num) {
    if (typeof num !== 'number') throw new Error("param num was not numeric");
    return new Vector(_this.x / num, _this.y / num, _this.z / num);
  });

  _defineProperty(this, "dot", function (vector) {
    if (!vector instanceof Vector) throw new Error('param v was not Vector');
    return _this.x * vector.x + _this.y * vector.y + _this.z + vector.z;
  });

  _defineProperty(this, "length", function () {
    return Math.sqrt(_this.squareLength());
  });

  _defineProperty(this, "squareLength", function () {
    return _this.x * _this.x + _this.y * _this.y + (_this.z + _this.z);
  });

  _defineProperty(this, "norm", function () {
    var l = _this.length();

    if (l == 0) {
      return new Vector();
    } else {
      return new Vector(_this.x / l, _this.y / l, _this.z / l);
    }
  });

  _defineProperty(this, "equals", function (vector) {
    if (!vector instanceof Vector) throw new Error('param v was not Vector');

    if (_this.x == vector.x && _this.y == vector.y && _this.z == vector.z) {
      return true;
    } else {
      return false;
    }
  });

  _defineProperty(this, "toString", function () {
    return "vector(".concat(_this.x, ", ").concat(_this.y, ", ").concat(_this.z, ")");
  });

  this.x = x, this.y = y, this.z = z;
};

exports.default = Vector;
},{}],"../src/Vectors.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Vector = _interopRequireDefault(require("./Vector.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Vectors = function Vectors() {
  var _this = this;

  _classCallCheck(this, Vectors);

  _defineProperty(this, "clear", function () {
    _this.arrVector.clear();
  });

  _defineProperty(this, "push_back", function (v) {
    if (!v instanceof _Vector.default) throw new Error("param v was not Vector type");

    _this.arrVector.push(v);
  });

  _defineProperty(this, "get", function (idx) {
    if (typeof idx === 'number' && _this.arrVector.length > idx) return _this.arrVector[idx];
  });

  _defineProperty(this, "size", function () {
    return _this.arrVector.length;
  });

  _defineProperty(this, "reverse", function () {
    _this.arrVector.reverse();
  });

  _defineProperty(this, "empty", function () {
    return _this.arrVector.length === 0 ? true : false;
  });

  _defineProperty(this, "insert", function (index, vector) {
    if (!vector instanceof _Vector.default) throw new Error("param vector was not Vector type");

    _this.arrVector.splice(index, 0, vector);
  });

  this.arrVector = [];
};

exports.default = Vectors;
},{"./Vector.js":"../src/Vector.js"}],"../src/Line.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Vector = _interopRequireDefault(require("./Vector.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Line = function Line(a, b, c) {
  var _this = this;

  _classCallCheck(this, Line);

  _defineProperty(this, "initFromVector", function (start, end) {
    if (!start instanceof _Vector.default) throw new Error("param start was not Vector Type");
    if (!end instanceof _Vector.default) throw new Error("param end was not Vector Type");
    _this.A = start.y - end.y;
    _this.B = end.x - start.x;
    _this.C = start.x * end.y - end.x * start.y;
    _this.start = start;
    _this.end = end;
  });

  _defineProperty(this, "initFromNumbers", function (A, B, C) {
    if (typeof A === "number" && typeof B === "number" && typeof C === "number") {
      _this.start = new _Vector.default();
      _this.end = new _Vector.default();

      if (Math.abs(A) <= Line.POLY_SPLIT_EPS && Math.abs(B) >= Line.POLY_SPLIT_EPS) {
        _this.start.x = -1000;
        _this.start.y = -(C / B);
        _this.end.x = 1000;
        _this.end.y = _this.start.y;
      } else if (Math.abs(B) <= Line.POLY_SPLIT_EPS && Math.abs(A) >= Line.POLY_SPLIT_EPS) {
        _this.start.x = -(C / A);
        _this.start.y = -1000;
        _this.end.x = _this.start.x;
        _this.end.y = 1000;
      } else {
        _this.start.x = -1000;
        _this.start.y = -((A * _this.start.x + C) / B);
        _this.end.x = 1000;
        _this.end.y = -((A * _this.end.x + C) / B);
      }
    }

    _this.A = A;
    _this.B = B;
    _this.C = C;
  });

  _defineProperty(this, "getStart", function () {
    return _this.start;
  });

  _defineProperty(this, "getEnd", function () {
    return _this.end;
  });

  _defineProperty(this, "length", function () {
    var x = _this.end.x - _this.start.x;
    var y = _this.end.y - _this.start.y;
    return Math.sqrt(x * x + y * y);
  });

  _defineProperty(this, "squareLength", function () {
    var x = _this.end.x - _this.start.x;
    var y = _this.end.y - _this.start.y;
    return x * x + y * y;
  });

  _defineProperty(this, "reverse", function () {
    return new Line(_this.end, _this.start);
  });

  _defineProperty(this, "getPointAlong", function (t) {
    var tempVec = _this.end.subtraction(_this.start).norm().multiplication(t);

    var result = _this.start.addition(tempVec);

    return result;
  });

  _defineProperty(this, "getDistance", function (point) {
    if (typeof point !== 'undefined' && point instanceof _Vector.default) {
      var n = _this.A * point.x + _this.B * point.y + _this.C;
      var m = Math.sqrt(_this.A * _this.A + _this.B * _this.B);
      return Math.abs(n / m);
    }
  });

  _defineProperty(this, "getLineNearestPoint", function (point) {
    if (typeof point !== 'undefined' && point instanceof _Vector.default) {
      var dir = new _Vector.default(_this.B, -_this.A);
      var u = point.subtraction(_this.start).dot(dir) / dir.squareLength();
      return _this.start.addition(dir.multiplication(u));
    }
  });

  _defineProperty(this, "getSegmentNearestPoint", function (point) {
    if (typeof point === 'undefined') {
      throw new Error("param point was undefined");
    }

    if (!point instanceof _Vector.default) {
      throw new Error("param point was not Vector Type");
    }

    var dir = new _Vector.default(_this.B, -_this.A, 0);
    var u = point.subtraction(_this.start).dot(dir) / dir.squareLength();
    if (u < 0) return _this.start;else if (u > 1) return _this.end;else return _this.start.addition(dir.multiplication(u));
  });

  _defineProperty(this, "pointSide", function (point) {
    var s = _this.A.multiplication(point.x - _this.start.x).addition(B.multiplication(point.x - _this.start.y));

    return s > 0 ? 1 : s < 0 ? -1 : 0;
  });

  _defineProperty(this, "crossLineSegment", function (line) {
    var d = Line.det(_this.A, _this.B, line.A, line.B);
    var result = new _Vector.default();
    if (d == 0) return 0;
    result.x = -(Line.det(_this.C, _this.B, line.C, line.B) / d);
    result.y = -(Line.det(_this.A, _this.C, line.A, line.C) / d);
    return {
      "result": result,
      "value": Line.inside(result.x, Line.minimum(line.start.x, line.end.x), Line.maximum(line.start.x, line.end.x)) && Line.inside(result.y, Line.minimum(line.start.y, line.end.y), Line.maximum(line.start.y, line.end.y))
    };
  });

  _defineProperty(this, "crossSegmentSegment", function (line) {
    var d = Line.det(_this.A, _this.B, line.A, line.B);
    var result = new _Vector.default();
    if (d == 0) return 0;
    result.x = -Line.det(_this.C, _this.B, line.C, line.B) / d;
    result.y = -Line.det(_this.A, _this.C, line.A, line.C) / d;
    return {
      "result": result,
      "value": Line.inside(result.x, Line.minimum(_this.start.x, _this.end.x), Line.maximum(_this.start.x, _this.end.x)) && Line.inside(result.y, Line.minimum(_this.start.y, _this.end.y), Line.maximum(_this.start.y, _this.end.y)) && Line.inside(result.x, Line.minimum(line.start.x, line.end.x), Line.maximum(line.start.x, line.end.x)) && Line.inside(result.y, Line.minimum(line.start.y, line.end.y), Line.maximum(line.start.y, line.end.y))
    };
  });

  _defineProperty(this, "crossLineLine", function (line) {
    var d = Line.det(_this.A, _this.B, line.A, line.B);
    var result = new _Vector.default();
    if (d == 0) return 0;
    result.x = -Line.det(_this.C, _this.B, line.C, line.B) / d;
    result.y = -Line.det(_this.A, _this.C, line.A, line.C) / d;
    return {
      "result": result,
      "value": 1
    };
  });

  _defineProperty(this, "toString", function () {
    return "[" + _this.A + ", " + _this.B + ", " + _this.C + "]-{" + _this.getStart() + ", " + _this.getEnd() + "}";
  });

  this.A = null;
  this.B = null;
  this.C = null;
  this.start = null;
  this.end = null;

  if (typeof a === 'number' && typeof b === 'number' && typeof c === 'number') {
    this.initFromNumbers(a, b, c);
  } else if (a instanceof _Vector.default && b instanceof _Vector.default) {
    this.initFromVector(a, b);
  }
};

exports.default = Line;

_defineProperty(Line, "POLY_SPLIT_EPS", 1E-6);

_defineProperty(Line, "getBisector", function (l1, l2) {
  var q1 = Math.sqrt(l1.A * l1.A + l1.B * l1.B);
  var q2 = Math.sqrt(l2.A * l2.A + l2.B * l2.B);
  var A = l1.A / q1 - l2.A / q2;
  var B = l1.B / q1 - l2.B / q2;
  var C = l1.C / q1 - l2.C / q2;
  return {
    "result": new Line(A, B, C),
    "l1": l1,
    "l2": l2
  };
});

_defineProperty(Line, "getTanAngle", function (l1, l2) {
  return (l1.A * l2.B - l2.A * l1.B) / (l1.A * l2.A + l1.B * l2.B);
});

_defineProperty(Line, "directedLine", function (p, d) {
  if (!p instanceof _Vector.default) throw new Error("param p was not Vector Type");
  if (!d instanceof _Vector.default) throw new Error("param d was not Vector Type");
  var l = new Line(p, p.addition(d));
  return l;
});

_defineProperty(Line, "inside", function (v, min, max) {
  return min <= v + Line.POLY_SPLIT_EPS && v <= max + Line.POLY_SPLIT_EPS;
});

_defineProperty(Line, "det", function (a, b, c, d) {
  return a * d - b * c;
});

_defineProperty(Line, "maximum", function (a, b) {
  return a < b ? b : a;
});

_defineProperty(Line, "minimum", function (a, b) {
  return a > b ? b : a;
});
},{"./Vector.js":"../src/Vector.js"}],"../src/Polygons.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Polygon = _interopRequireDefault(require("./Polygon.js"));

var _Line = _interopRequireDefault(require("./Line.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Polygons = function Polygons() {
  _classCallCheck(this, Polygons);

  this.bisector = new _Line.default();
  this.leftTriangle = new _Polygon.default();
  this.trapezoid = new _Polygon.default();
  this.rightTriangle = new _Polygon.default();
  this.p1_exist = false;
  this.p2_exist = false;
  this.p3_exist = false;
  this.p4_exist = false;
  this.leftTriangleSquare = 0;
  this.trapezoidSquare = 0;
  this.rightTriangleSquare = 0;
  this.totalSquare = 0;
};

exports.default = Polygons;
;
},{"./Polygon.js":"../src/Polygon.js","./Line.js":"../src/Line.js"}],"../src/Polygon.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Vector = _interopRequireDefault(require("./Vector.js"));

var _Vectors = _interopRequireDefault(require("./Vectors.js"));

var _Line = _interopRequireDefault(require("./Line.js"));

var _Polygons = _interopRequireDefault(require("./Polygons.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// const Vector = require('./Vector.js');
// const Vectors = require('./Vectors');
// const Line = require('./Line.js');
var Polygon = function Polygon(_v) {
  var _this = this;

  _classCallCheck(this, Polygon);

  _defineProperty(this, "countSquare", function () {
    var t = _this.countSquare_signed();

    if (typeof t === 'number') return t < 0 ? t * -1 : t; // absolute
  });

  _defineProperty(this, "countSquare_signed", function () {
    var pointsCount = _this.poly.size();

    if (pointsCount < 3) {
      return 0;
    }

    var result = 0.0;

    for (var i = 0; i < pointsCount; i++) {
      if (i == 0) result += _this.poly.get(i).x * (_this.poly.get(pointsCount - 1).y - _this.poly.get(i + 1).y);else if (i == pointsCount - 1) result += _this.poly.get(i).x * (_this.poly.get(i - 1).y - _this.poly.get(0).y);else result += _this.poly.get(i).x * (_this.poly.get(i - 1).y - _this.poly.get(i + 1).y);
    }

    return result / 2.0;
  });

  _defineProperty(this, "split", function (square, cutLine) {
    if (typeof square !== 'number') {
      throw new Error("param square was not defined");
    }

    var polygonSize = Math.round(_this.poly.size());
    var polygon = _this.poly;

    if (!_this.isClockwise()) {
      polygon.arrVector.reverse();
    }

    var poly1 = new Polygon();
    var poly2 = new Polygon();

    if (_this.countSquare() - square <= Polygon.POLY_SPLIT_EPS) {
      poly1 = _this;
      return {
        "value": 0,
        "poly1": poly1,
        "poly2": poly2,
        "cutLine": cutLine
      };
    }

    var minCutLine_exists = 0;
    var minSqLength = Number.MAX_VALUE;

    for (var i = 0; i < polygonSize - 1; i++) {
      for (var j = i + 1; j < polygonSize; j++) {
        var p1 = new Polygon();
        var p2 = new Polygon();
        var subPoly = Polygon.createSubPoly(polygon, i, j, p1, p2);
        p1 = subPoly.poly1;
        p2 = subPoly.poly2;
        var l1 = new _Line.default(polygon.get(i), polygon.get(i + 1));
        var l2 = new _Line.default(polygon.get(j), polygon.get(j + 1 < polygonSize ? j + 1 : 0));
        var cut = new _Line.default();
        var tempCut = Polygon.getCut(l1, l2, square, p1, p2, cut);
        cut = tempCut.cut;

        if (tempCut.value) {
          var sqLength = cut.squareLength();

          if (sqLength < minSqLength && Polygon.isSegmentInsidePoly(polygon, cut, i, j)) {
            minSqLength = sqLength;
            poly1 = p1;
            poly2 = p2;
            cutLine = cut;
            minCutLine_exists = 1;
          }
        }
      }
    }

    if (minCutLine_exists) {
      poly1.push_back(cutLine.getStart());
      poly1.push_back(cutLine.getEnd());
      poly2.push_back(cutLine.getEnd());
      poly2.push_back(cutLine.getStart());
      return {
        "value": 1,
        "poly1": poly1,
        "poly2": poly2,
        "cutLine": cutLine
      };
    } else {
      poly1 = new Polygon(polygon);
      return {
        "value": 0,
        "poly1": poly1,
        "poly2": poly2,
        "cutLine": cutLine
      };
    }
  });

  _defineProperty(this, "indDistance", function (point) {
    if (typeof point === 'undefined') {
      throw new Error("param point was undefined");
    }

    if (!point instanceof _Vector.default) {
      throw new Error("param point was not Vector Type");
    }

    var distance = Number.MAX_VALUE;

    for (var i = 0, cnt = Math.round(_this.poly.size() - 1); i < cnt; i++) {
      var line = new _Line.default();
      line.initFromVector(_this.poly.get(i), _this.poly.get(i + 1));
      var p = line.getSegmentNearestPoint(point);
      var l = p.subtraction(point).length();
      if (l < distance) distance = l;
    }

    var line = new _Line.default();
    line.initFromVector(_this.poly.get(_this.poly.size() - 1), _this.poly.get(0));
    var p = line.getSegmentNearestPoint(point);
    var l = p.subtraction(point).length();
    if (l < distance) distance = l;
    return distance;
  });

  _defineProperty(this, "findDistance", function (point) {
    if (typeof point === 'undefined') {
      throw new Error("param point was undefined");
    }

    if (!point instanceof _Vector.default) {
      throw new Error("param point was not Vector Type");
    }

    var distance = Number.MAX_VALUE;

    for (var i = 0, cnt = Math.round(_this.poly.size() - 1); i < cnt; i++) {
      var line = new _Line.default();
      line.initFromVector(_this.poly.get(i), _this.poly.get(i + 1));
      var p = line.getSegmentNearestPoint(point);
      var l = p.subtraction(point).length();
      if (l < distance) distance = l;
    }

    var line = new _Line.default();
    line.initFromVector(_this.poly.get(_this.poly.size() - 1), _this.poly.get(0));
    var p = line.getSegmentNearestPoint(point);
    var l = p.subtraction(point).length();
    if (l < distance) distance = l;
    return distance;
  });

  _defineProperty(this, "findDistance", function (point) {
    if (typeof point === 'undefined') {
      throw new Error("param point was undefined");
    }

    if (!point instanceof _Vector.default) {
      throw new Error("param point was not Vector Type");
    }

    var distance = Number.MAX_VALUE;

    for (var i = 0, cnt = Math.round(_this.poly.size() - 1); i < cnt; i++) {
      var line = new _Line.default();
      line.initFromVector(_this.poly.get(i), _this.poly.get(i + 1));
      var p = line.getSegmentNearestPoint(point);
      var l = p.subtraction(point).length();
      if (l < distance) distance = l;
    }

    var line = new _Line.default();
    line.initFromVector(_this.poly.get(_this.poly.size() - 1), _this.poly.get(0));
    var p = line.getSegmentNearestPoint(point);
    var l = p.subtraction(point).length();
    if (l < distance) distance = l;
    return distance;
  });

  _defineProperty(this, "findNearestPoint", function (point) {
    if (typeof point === 'undefined') {
      throw new Error("param point was undefined");
    }

    if (!point instanceof _Vector.default) {
      throw new Error("param point was not Vector Type");
    }

    var result = null; //Vector type

    var distance = Number.MAX_VALUE;

    for (var i = 0, cnt = Math.round(_this.poly.size() - 1); i < cnt; i++) {
      var line = new _Line.default();
      line.initFromVector(_this.poly.get(i), _this.poly.get(i + 1));
      var p = line.getSegmentNearestPoint(point);
      var l = p.subtraction(point).length();

      if (l < distance) {
        distance = l;
        result = p;
      }
    }

    var line = new _Line.default();
    line.initFromVector(_this.poly.get(_this.poly.size() - 1), _this.poly.get(0));
    var p = line.getSegmentNearestPoint(point);
    var l = p.subtraction(point).length();

    if (l < distance) {
      distance = l;
      result = p;
    }

    distance; //just remove warning

    return result;
  });

  _defineProperty(this, "countCenter", function () {
    return Polygon.polygonCentroid(_this.poly);
  });

  _defineProperty(this, "splitNearestEdge", function (point) {
    if (typeof point === 'undefined') throw new Error("param point was undefined");
    if (!point instanceof _Vector.default) throw new Error("param point was not Vector Type");
    var result;
    var ri = -1;
    var distance = Number.MAX_VALUE;

    for (var i = 0, cnt = _this.poly.size() - 1; i < cnt; i++) {
      var line = new _Line.default(_this.poly.get(i), _this.poly.get(i + 1));
      var p = line.getSegmentNearestPoint(point);
      var l = p.subtraction(point).length();

      if (l < distance) {
        distance = l;
        ri = i;
        result = p;
      }
    }

    var line = new _Line.default(_this.poly.get(_this.poly.size() - 1), _this.poly.get(0));
    var p = line.getSegmentNearestPoint(point);
    var l = p.subtraction(point).length();

    if (l < distance) {
      distance = l;
      ri = _this.poly.size() - 1;
      result = p;
    }

    if (ri != -1) {
      _this.poly.insert(ri + 1, result);
    }
  });

  _defineProperty(this, "isPointInside", function (point) {
    if (typeof point === 'undefined') throw new Error("param point was undefined");
    if (!point instanceof _Vector.default) throw new Error("param point was not Vector Type");
    return Polygon.isPointInsidePoly(_this.poly, point);
  });

  _defineProperty(this, "isClockwise", function () {
    var sum = 0;
    var t = Math.round(_this.poly.size() - 1);

    for (var i = 0; i < t; i++) {
      sum += (_this.poly.get(i + 1).x - _this.poly.get(i).x) * (_this.poly.get(i + 1).y + _this.poly.get(i).y);
    }

    sum += (_this.poly.get(0).x - _this.poly.get(t).x) * (_this.poly.get(0).y + _this.poly.get(t).y);
    return sum <= 0;
  });

  _defineProperty(this, "getVectors", function () {
    return _this.poly;
  });

  _defineProperty(this, "push_back", function (v) {
    if (typeof v !== 'undefined' && v instanceof _Vector.default) _this.poly.push_back(v);
  });

  _defineProperty(this, "empty", function () {
    return _this.poly.empty();
  });

  _defineProperty(this, "get", function (idx) {
    if (typeof idx !== 'number') throw new Error("param idx was not number type");
    if (_this.poly.size() < idx) throw new Error("param idx was bigger then Vectors size");
    return _this.poly.get(idx);
  });

  _defineProperty(this, "setPolygon", function (p) {
    if (p instanceof Polygon) {
      _this.poly = p.poly;
      return _this;
    }
  });

  _defineProperty(this, "clear", function () {
    _this.poly.clear();
  });

  _defineProperty(this, "size", function () {
    return _this.poly.size();
  });

  if (typeof _v === 'undefined') {
    _v = new _Vectors.default();
  } else if (!_v instanceof _Vectors.default) {
    throw new Error("param v was not Vector Type");
  }

  this.poly = _v;
};

exports.default = Polygon;

_defineProperty(Polygon, "POLY_SPLIT_EPS", 1E-6);

_defineProperty(Polygon, "createPolygons", function (l1, l2, res) {
  if (!l1 instanceof _Line.default) throw new Error("param l1 was not Line type");
  if (!l2 instanceof _Line.default) throw new Error("param l2 was not Line type");
  if (!res instanceof _Polygons.default) throw new Error("param res was not Polygons type");
  res.bisector = _Line.default.getBisector(l1, l2).result;
  var v1 = l1.getStart(),
      v2 = l1.getEnd(),
      v3 = l2.getStart(),
      v4 = l2.getEnd();
  res.p1_exist = false;
  res.p4_exist = false;

  if (v1 != v4) {
    var l1s = new _Line.default(v1, res.bisector.getLineNearestPoint(v1)),
        p1 = new _Vector.default(),
        cls_l1sl2 = l1s.crossLineSegment(l2, p1);
    p1 = cls_l1sl2.result;
    res.p1_exist = cls_l1sl2.value && p1 != v4;

    if (res.p1_exist) {
      res.leftTriangle.push_back(v1);
      res.leftTriangle.push_back(v4);
      res.leftTriangle.push_back(p1);
      res.trapezoid.push_back(p1);
    } else {
      res.trapezoid.push_back(v4);
    }

    var l2e = new _Line.default(v4, res.bisector.getLineNearestPoint(v4)),
        p4 = new _Vector.default(),
        cls_l2el1 = l2e.crossLineSegment(l1, p4);
    p4 = cls_l2el1.result;
    res.p4_exist = cls_l2el1.value && p4 != v1;

    if (res.p4_exist) {
      res.leftTriangle.push_back(v4);
      res.leftTriangle.push_back(v1);
      res.leftTriangle.push_back(p4);
      res.trapezoid.push_back(p4);
    } else {
      res.trapezoid.push_back(v1);
    }
  } else {
    res.trapezoid.push_back(v4);
    res.trapezoid.push_back(v1);
  }

  res.p2_exist = false;
  res.p3_exist = false;

  if (v2 != v3) {
    var l2s = new _Line.default(v3, res.bisector.getLineNearestPoint(v3)),
        p3 = new _Vector.default(),
        cls_l2sl1 = l2s.crossLineSegment(l1, p3);
    p3 = cls_l2sl1.result;
    res.p3_exist = cls_l2sl1.value && p3 != v2;

    if (res.p3_exist) {
      res.rightTriangle.push_back(v3);
      res.rightTriangle.push_back(v2);
      res.rightTriangle.push_back(p3);
      res.trapezoid.push_back(p3);
    } else {
      res.trapezoid.push_back(v2);
    }

    var l1e = new _Line.default(v2, res.bisector.getLineNearestPoint(v2)),
        p2 = new _Vector.default(),
        cls_l1el2 = l1e.crossLineSegment(l2, p2);
    p2 = cls_l1el2.result;
    res.p2_exist = cls_l1el2.value && p2 != v3;

    if (res.p2_exist) {
      res.rightTriangle.push_back(v2);
      res.rightTriangle.push_back(v3);
      res.rightTriangle.push_back(p2);
      res.trapezoid.push_back(p2);
    } else {
      res.trapezoid.push_back(v3);
    }
  } else {
    res.trapezoid.push_back(v2);
    res.trapezoid.push_back(v3);
  }

  res.leftTriangleSquare = res.leftTriangle.countSquare();
  res.trapezoidSquare = res.trapezoid.countSquare();
  res.rightTriangleSquare = res.rightTriangle.countSquare();
  res.totalSquare = res.leftTriangleSquare + res.trapezoidSquare + res.rightTriangleSquare;
  return res;
});

_defineProperty(Polygon, "findCutLine", function (square, res, cutLine) {
  if (square > res.totalSquare) {
    return {
      "value": false
    };
  }

  if (!res.leftTriangle.empty() && square < res.leftTriangleSquare) {
    var m = square / res.leftTriangleSquare;
    var p = res.leftTriangle.get(1).addition(res.leftTriangle.get(2).subtraction(res.leftTriangle.get(1)).multiplication(m));

    if (res.p1_exist) {
      cutLine = new _Line.default(p, res.leftTriangle.get(0));
      return {
        "value": true,
        "res": res,
        "cutLine": cutLine
      };
    } else if (res.p4_exist) {
      cutLine = new _Line.default(res.leftTriangle.get(0), p);
      return {
        "value": true,
        "res": res,
        "cutLine": cutLine
      };
    }
  } else if (res.leftTriangleSquare < square && square < res.leftTriangleSquare + res.trapezoidSquare) {
    var t = new _Line.default(res.trapezoid.get(0), res.trapezoid.get(3));

    var tgA = _Line.default.getTanAngle(t, res.bisector);

    var S = square - res.leftTriangleSquare;
    var m;

    if (Math.abs(tgA) > Polygon.POLY_SPLIT_EPS) {
      var a = new _Line.default(res.trapezoid.get(0), res.trapezoid.get(1)).length();
      var b = new _Line.default(res.trapezoid.get(2), res.trapezoid.get(3)).length();
      var hh = 2.0 * res.trapezoidSquare / (a + b);
      var d = a * a - 4.0 * tgA * S;
      var h = -(-a + Math.sqrt(d)) / (2.0 * tgA);
      m = h / hh;
    } else {
      m = S / res.trapezoidSquare;
    }

    var p = res.trapezoid.get(0).addition(res.trapezoid.get(3).subtraction(res.trapezoid.get(0)).multiplication(m));
    var pp = res.trapezoid.get(1).addition(res.trapezoid.get(2).subtraction(res.trapezoid.get(1)).multiplication(m));
    cutLine = new _Line.default(p, pp);
    return {
      "value": true,
      "res": res,
      "cutLine": cutLine
    };
  } else if (!res.rightTriangle.empty() && square > res.leftTriangleSquare + res.trapezoidSquare) {
    var S = square - res.leftTriangleSquare - res.trapezoidSquare;
    var m = S / res.rightTriangleSquare;
    var p = res.rightTriangle.get(2).addition(res.rightTriangle.get(1).subtraction(res.rightTriangle.get(2)).multiplication(m));

    if (res.p3_exist) {
      cutLine = new _Line.default(res.rightTriangle.get(0), p);
      return {
        "value": true,
        "res": res,
        "cutLine": cutLine
      };
    } else if (res.p2_exist) {
      cutLine = new _Line.default(p, res.rightTriangle.get(0));
      return {
        "value": true,
        "res": res,
        "cutLine": cutLine
      };
    }
  }

  return {
    "value": false,
    "res": res,
    "cutLine": cutLine
  };
});

_defineProperty(Polygon, "getCut", function (l1, l2, s, poly1, poly2, cut) {
  if (!l1 instanceof _Line.default) throw new Error("param l1 was not Line type");
  if (!l2 instanceof _Line.default) throw new Error("param l2 was not Line type");
  if (!poly1 instanceof Polygon) throw new Error("param poly1 was not Polygon type");
  if (!poly2 instanceof Polygon) throw new Error("param poly2 was not Polygon type");
  if (typeof s !== "number") throw new Error("param s was not number type");
  var sn1 = s + poly2.countSquare_signed();
  var sn2 = s + poly1.countSquare_signed();

  if (sn1 > 0) {
    var res = new _Polygons.default();
    res = Polygon.createPolygons(l1, l2, res);
    var findCutLineRes = Polygon.findCutLine(sn1, res, cut),
        cut = findCutLineRes.cutLine;

    if (findCutLineRes.value) {
      return {
        "value": true,
        "cut": cut
      };
    }
  } else if (sn2 > 0) {
    var res = new _Polygons.default();
    res = Polygon.createPolygons(l2, l1, res);
    var findCutLineRes = Polygon.findCutLine(sn2, res, cut),
        cut = findCutLineRes.cutLine;

    if (findCutLineRes.value) {
      cut = cut.reverse();
      return {
        "value": true,
        "cut": cut
      };
    }
  }

  return {
    "value": false,
    "cut": cut
  };
});

_defineProperty(Polygon, "createSubPoly", function (poly, line1, line2, poly1, poly2) {
  if (!poly instanceof _Vectors.default) {
    throw new Error("param poly was not Vectors Type");
  }

  poly1 = new Polygon(), poly2 = new Polygon();
  var pc1 = line2 - line1;

  for (var i = 1; i <= pc1; i++) {
    poly1.push_back(poly.get(i + line1));
  }

  var polySize = poly.size();
  var pc2 = polySize - pc1;

  for (var i = 1; i <= pc2; i++) {
    poly2.push_back(poly.get((i + line2) % polySize));
  }

  return {
    "poly1": poly1,
    "poly2": poly2
  };
});

_defineProperty(Polygon, "isPointInsidePoly", function (poly, point) {
  var pointsCount = Math.round(poly.size() - 1);

  var l = _Line.default.directedLine(point, new _Vector.default(0.0, 1e100));

  var result = 0;
  var res;
  var v;

  for (var i = 0; i < pointsCount; i++) {
    var line = new _Line.default(poly.get(i), poly.get(i + 1));
    res = l.crossSegmentSegment(line);
    result += res.value;
  }

  var line = new _Line.default(poly.get(pointsCount), poly.get(0));
  res = l.crossSegmentSegment(line);
  result += res.value;
  return result % 2 != 0;
});

_defineProperty(Polygon, "isSegmentInsidePoly", function (poly, l, excludeLine1, excludeLine2) {
  var pointsCount = poly.size();

  for (var i = 0; i < pointsCount; i++) {
    if (i != excludeLine1 && i != excludeLine2) {
      var p1 = poly.get(i);
      var p2 = poly.get(i + 1 < pointsCount ? i + 1 : 0);
      var p = new _Vector.default(),
          css = new _Line.default(p1, p2).crossSegmentSegment(l, p);
      p = css.result;

      if (css.value) {
        if (p1.subtraction(p).squareLength() > Polygon.POLY_SPLIT_EPS) {
          if (p2.subtraction(p).squareLength() > Polygon.POLY_SPLIT_EPS) {
            return 0;
          }
        }
      }
    }
  }

  return Polygon.isPointInsidePoly(poly, l.getPointAlong(0.5));
});

_defineProperty(Polygon, "polygonCentroid", function (points) {
  var n = points.size();
  var result = new _Vector.default(0, 0, 0);

  for (var i = 0; i < n; i++) {
    result = result.addition(points.get(i));
  }

  result = result.division(n);
  return result;
});
},{"./Vector.js":"../src/Vector.js","./Vectors.js":"../src/Vectors.js","./Line.js":"../src/Line.js","./Polygons.js":"../src/Polygons.js"}],"../src/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Vector", {
  enumerable: true,
  get: function () {
    return _Vector.default;
  }
});
Object.defineProperty(exports, "Vectors", {
  enumerable: true,
  get: function () {
    return _Vectors.default;
  }
});
Object.defineProperty(exports, "Line", {
  enumerable: true,
  get: function () {
    return _Line.default;
  }
});
Object.defineProperty(exports, "Polygon", {
  enumerable: true,
  get: function () {
    return _Polygon.default;
  }
});
Object.defineProperty(exports, "Polygons", {
  enumerable: true,
  get: function () {
    return _Polygons.default;
  }
});

var _Vector = _interopRequireDefault(require("./Vector.js"));

var _Vectors = _interopRequireDefault(require("./Vectors.js"));

var _Line = _interopRequireDefault(require("./Line.js"));

var _Polygon = _interopRequireDefault(require("./Polygon.js"));

var _Polygons = _interopRequireDefault(require("./Polygons.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./Vector.js":"../src/Vector.js","./Vectors.js":"../src/Vectors.js","./Line.js":"../src/Line.js","./Polygon.js":"../src/Polygon.js","./Polygons.js":"../src/Polygons.js"}],"renderArea.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = require("../src/index.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import Vector from './modules/Vector.js';
// import Polygon from './modules/Polygon.js';
// import Polygons from './modules/Polygons.js';
// import Line from './modules/Line.js';

/**
 * Created by jyp on 2016-05-19.
 */
var RenderArea = function RenderArea(options) {
  var _this = this;

  _classCallCheck(this, RenderArea);

  _defineProperty(this, "drawPoly", function (poly) {
    _this.ctx.beginPath();

    var point = poly.get(0);

    _this.ctx.moveTo(point.x, point.y);

    for (var i = 1, cnt = poly.size(); i < cnt; i++) {
      point = poly.get(i);

      _this.ctx.lineTo(point.x, point.y);
    }

    _this.ctx.closePath(); //this.ctx.strokeStyle = "#000000";
    //this.ctx.lineWidth = 1;
    //this.ctx.fillStyle = "rgba(0,200,0,.4)";


    _this.ctx.globalAlpha = 0.1;

    _this.ctx.fill();

    _this.ctx.globalAlpha = 1;

    _this.ctx.stroke();
  });

  _defineProperty(this, "paintEvent", function () {
    _this.ctx.clearRect(_this.canvasSize.top, _this.canvasSize.left, _this.canvasSize.width, _this.canvasSize.height);

    if (_this.showHelp) {
      _this.ctx.font = "13px '맑은 고딕'";
      _this.ctx.fillStyle = "#000";
      var y = 0,
          dy = 13 + 1.0;

      _this.ctx.fillText("Cut Area Square: " + Number(_this.squareToCut), 10, y += dy);

      _this.ctx.fillText("Current this.scale: " + Number(_this.scale), 10, y += dy);

      _this.ctx.fillText("Selected Polygon: " + _this.selectedPolygon + " / " + _this.polygons.length, 10, y += dy);

      _this.ctx.fillText("Selected Vertex: " + _this.selectedPoint, 10, y += dy);

      _this.ctx.fillText("Q/W - increase/decrease cut area square to 100", 10, y += dy);

      _this.ctx.fillText("q/w - increase/decrease cut area square to 10", 10, y += dy);

      _this.ctx.fillText("a/s - switch between areas", 10, y += dy);

      _this.ctx.fillText("r - to restore initial polygon", 10, y += dy);

      _this.ctx.fillText("i - show/hide polygons square value", 10, y += dy);

      _this.ctx.fillText("c - to cut area as black cut line shows", 10, y += dy);

      _this.ctx.fillText("h - show/hide this text", 10, y += dy);

      _this.ctx.fillText("Mouse wheel to adjust this.scale", 10, y += dy);

      _this.ctx.fillText("Left mouse click and drag'n'drop on background to move all scene", 10, y += dy);

      _this.ctx.fillText("Left mouse click and drag'n'drop on vertex to move vertices", 10, y += dy);

      _this.ctx.fillText("Right mouse click to select nearest polygon", 10, y += dy);

      _this.ctx.fillText("Middle mouse click to split edge of selected polygon", 10, y + dy);
    }

    _this.ctx.save();

    _this.ctx.translate(_this.offset_x, _this.offset_y);

    _this.ctx.scale(_this.scale, _this.scale);

    for (var i = 0; i < _this.polygons.length; i++) {
      var color = _this.polygons_color[i % _this.polygons_color.length]; //if(i==this.selectedPolygon)color="red";

      _this.ctx.strokeStyle = color;
      _this.ctx.fillStyle = color; //this.ctx.fillStyle.opacity= 1;

      _this.ctx.lineWidth = 1;

      _this.drawPoly(_this.polygons[i]);

      if (_this.showInfo) {
        var p = _this.polygons[i].countCenter();

        _this.ctx.font = "normal 12px 'malgun gothic'";

        _this.ctx.fillText(_this.polygons[i].countSquare(), p.x, p.y);
      }
    } //debugger;


    var cut = new _index.Line();

    var splitReturn = _this.polygons[_this.selectedPolygon].split(_this.squareToCut, cut);

    var poly1 = splitReturn.poly1;
    var poly2 = splitReturn.poly2;
    cut = splitReturn.cutLine;

    if (splitReturn.value) {
      _this.ctx.strokeStyle = "black";
      _this.ctx.lineWidth = 1.5;

      _this.ctx.beginPath();

      _this.ctx.moveTo(cut.getStart().x, cut.getStart().y);

      _this.ctx.lineTo(cut.getEnd().x, cut.getEnd().y);

      _this.ctx.closePath();

      _this.ctx.stroke();
    }

    if (_this.showInfo) {
      var np = _this.polygons[_this.selectedPolygon].findNearestPoint(_this.mouse);

      if (typeof np !== 'undefined' && np !== null && typeof np.x === "number") {
        _this.ctx.strokeStyle = "rgba(0,0,0,0.5)";
        _this.ctx.lineWidth = 1;

        _this.ctx.beginPath();

        _this.ctx.moveTo(_this.mouse.x, _this.mouse.y);

        _this.ctx.lineTo(np.x, np.y);

        _this.ctx.closePath();

        _this.ctx.stroke();
      }
    }

    _this.ctx.strokeStyle = "rgba(250,0,0,0.5)";
    _this.ctx.lineWidth = _this.pointOutlineSize;

    _this.drawPoly(_this.polygons[_this.selectedPolygon]);

    for (var i = 0, cnt = _this.polygons[_this.selectedPolygon].size(); i < cnt; i++) {
      var p = _this.polygons[_this.selectedPolygon].get(i);

      _this.drawCircle(_this.ctx, p.x, p.y, _this.pointSize);

      if (_this.selectedPoint === i) {
        _this.ctx.fillStyle = "rgba(255,255,0,0.9)";

        _this.ctx.fill();
      } else {
        _this.ctx.fillStyle = "rgba(255,255,255,1)";

        _this.ctx.fill();
      }

      _this.ctx.stroke();
    }

    _this.ctx.restore();
  });

  _defineProperty(this, "paint", this.paintEvent);

  _defineProperty(this, "mouseMoveEvent", function (e) {
    if (_this.mouseLeftPress && _this.selectedPolygon != -1 && _this.selectedPoint != -1) {
      _this.polygons[_this.selectedPolygon].get(_this.selectedPoint).x = _this.polygons[_this.selectedPolygon].get(_this.selectedPoint).x + (e.clientX - _this.mouse_x) / _this.scale;
      _this.polygons[_this.selectedPolygon].get(_this.selectedPoint).y = _this.polygons[_this.selectedPolygon].get(_this.selectedPoint).y + (e.clientY - _this.mouse_y) / _this.scale;
    } else if (_this.mouseLeftPress) {
      _this.offset_x = _this.offset_x + (e.clientX - _this.mouse_x);
      _this.offset_y = _this.offset_y + (e.clientY - _this.mouse_y);
    }

    _this.mouse_x = e.clientX;
    _this.mouse_y = e.clientY;
    _this.mouse = new _index.Vector((e.clientX - _this.offset_x) / _this.scale, (e.clientY - _this.offset_y) / _this.scale, 0);

    if (_this.selectedPolygon != -1) {
      for (var i = 0, cnt = _this.polygons[_this.selectedPolygon].size(); i < cnt; i++) {
        var p = _this.polygons[_this.selectedPolygon].get(i);

        var ptocLength = _this.mouse.subtraction(p).length();

        if (ptocLength < _this.pointSize + _this.pointOutlineSize) {
          _this.selectedPoint = i;

          _this.paint();

          return;
        }
      }

      _this.selectedPoint = -1;
    }

    _this.paint();
  });

  _defineProperty(this, "mouseReleaseEvent", function (e) {
    if (e.button == 0) {
      console.log("lmouseup");
      _this.mouseLeftPress = 0;
      _this.selectedPoint = -1;
    }

    if (e.button == 1) {
      console.log("mmouseup");
    }

    if (e.button == 2) {
      console.log("rmouseup");
    }

    return false;
  });

  _defineProperty(this, "wheelEvent", function (e) {
    var delta = e.deltaY > 0 ? 1 : e.deltaY < 0 ? -1 : 0;

    if (typeof delta === 'number' && delta != 0) {
      _this.scale += 5 * _this.scale / (delta * 100);

      _this.paint();
    }

    return false;
  });

  _defineProperty(this, "mousePressEvent", function (e) {
    // console.log(e);
    _this.mouse_x = e.clientX;
    _this.mouse_y = e.clientY;
    _this.mouse = new _index.Vector((e.clientX - _this.offset_x) / _this.scale, (e.clientY - _this.offset_y) / _this.scale, 0);

    if (e.button == 0
    /*lbtn*/
    ) {
        console.log("lbtn down");
        _this.mouseLeftPress = 1;

        for (var i = 0, cnt = _this.polygons[_this.selectedPolygon].size(); i < cnt; i++) {
          var p = _this.polygons[_this.selectedPolygon].get(i);

          if (_this.mouse.subtraction(p).length() < _this.pointSize + _this.pointOutlineSize) {
            _this.selectedPoint = i;

            _this.paint();

            return;
          }
        }
      }

    if (e.button == 1
    /*mbtn*/
    ) {
        console.log("mbtn down");

        if (_this.selectedPolygon != -1 && _this.mouse instanceof _index.Vector) {
          _this.polygons[_this.selectedPolygon].splitNearestEdge(_this.mouse);

          _this.paint();
        }
      }

    if (e.button == 2
    /*rbtn*/
    ) {
        console.log("rbtn down");
        var minDist = Number.MAX_VALUE;

        for (var i = 0, cnt = _this.polygons.length; i < cnt; i++) {
          var dist = _this.polygons[i].findDistance(_this.mouse);

          if (dist < minDist) {
            minDist = dist;
            _this.selectedPolygon = i;
          }
        }

        _this.squareToCut = _this.polygons[_this.selectedPolygon].countSquare() / 2.0;

        _this.paint();
      }

    return false;
  });

  _defineProperty(this, "keyPressEvent", function (e) {
    console.log("keyevent: ", e);

    if (e.keyCode == 81
    /*Q*/
    ) {
        _this.squareToCut += e.shiftKey ? 1000 : 100;

        _this.paint();
      }

    if (e.keyCode == 87
    /*W*/
    ) {
        var t = _this.squareToCut - (e.shiftKey ? 1000 : 100);
        _this.squareToCut = t < 10 ? 10 : t;

        _this.paint();
      }

    if (e.keyCode == 67
    /*C*/
    ) {
        var splitReuslt = _this.polygons[_this.selectedPolygon].split(_this.squareToCut);

        var poly1 = splitReuslt.poly1,
            poly2 = splitReuslt.poly2;
        var cut = splitReuslt.cutLine;

        if (splitReuslt.value) {
          _this.polygons[_this.selectedPolygon] = poly1;

          _this.polygons.push(poly2);

          if (poly1.countSquare() < poly2.countSquare()) {
            _this.selectedPolygon = _this.polygons.length - 1;
          }

          _this.paint();
        }
      }

    if (e.keyCode == 80
    /*P*/
    ) {
        for (var i = 0, cnt = _this.polygons[_this.selectedPolygon].length; i < cnt; i++) {
          var p = _this.polygons[_this.selectedPolygon].get(i); //vector

        }

        _this.paint();
      }

    if (e.keyCode == 65
    /*A*/
    ) {
        if (_this.selectedPolygon > 0) _this.selectedPolygon--;

        _this.paint();
      }

    if (e.keyCode == 83
    /*S*/
    ) {
        if (_this.selectedPolygon < Math.round(_this.polygons.length - 1)) _this.selectedPolygon++;

        _this.paint();
      }

    if (e.keyCode == 82
    /*R*/
    ) {
        _this.initPolygons();

        _this.paint();
      }

    if (e.keyCode == 73
    /*I*/
    ) {
        _this.showInfo = !_this.showInfo;

        _this.paint();
      }

    if (e.keyCode == 72
    /*H*/
    ) {
        _this.showHelp = !_this.showHelp;

        _this.paint();
      }
  });

  _defineProperty(this, "initPolygons", function () {
    _this.polygons = new Array();

    _this.polygons.push(new _index.Polygon());

    _this.polygons[0].push_back(new _index.Vector(450.0, 100.0, 0));

    _this.polygons[0].push_back(new _index.Vector(900.0, 100.0, 0));

    _this.polygons[0].push_back(new _index.Vector(900.0, 400.0, 0));

    _this.polygons[0].push_back(new _index.Vector(450.0, 400.0, 0));

    _this.polygons.push(new _index.Polygon());

    _this.polygons[1].push_back(new _index.Vector(900.0, 420.0, 0));

    _this.polygons[1].push_back(new _index.Vector(900.0, 600.0, 0));

    _this.polygons[1].push_back(new _index.Vector(450.0, 600.0, 0));

    _this.polygons[1].push_back(new _index.Vector(450.0, 420.0, 0));

    _this.squareToCut = _this.polygons[0].countSquare() / 47.0;
    _this.selectedPolygon = 0;
  });

  _defineProperty(this, "drawCircle", function (context, centerX, centerY, r) {
    // draw the colored region
    context.beginPath();
    context.arc(centerX, centerY, r, 0, 2 * Math.PI, true);
    context.closePath();
  });

  this.polygons = [];
  this.polygons_color = [];
  this.squareToCut;
  this.selectedPolygon = -1;
  this.showInfo = 0;
  this.showHelp = 1;
  this.scale = 1;
  this.offset_x = 0;
  this.offset_y = 0;
  this.ctx = options.ctx;
  this.mouseLeftPress = 0;
  this.mouse_x;
  this.mouse_y;
  this.mouse = new _index.Vector(0, 0, 0);
  this.pointSize = 10;
  this.pointOutlineSize = 3;
  this.selectedPoint = -1;
  this.ke = null;
  this.polygons_color.push("darkRed");
  this.polygons_color.push("green");
  this.polygons_color.push("darkGreen");
  this.polygons_color.push("blue");
  this.polygons_color.push("darkBlue");
  this.polygons_color.push("cyan");
  this.polygons_color.push("darkCyan");
  this.polygons_color.push("magenta");
  this.polygons_color.push("darkMagenta");
  this.polygons_color.push("darkYellow");
  this.polygons_color.push("gray");
  this.polygons_color.push("darkGray");
  this.canvasSize = {
    top: this.ctx.canvas.offsetTop,
    left: this.ctx.canvas.offsetLeft,
    width: this.ctx.canvas.width,
    height: this.ctx.canvas.height
  };
};

exports.default = RenderArea;
;
},{"../src/index.js":"../src/index.js"}],"main.js":[function(require,module,exports) {
"use strict";

var _renderArea = _interopRequireDefault(require("../app/renderArea.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderArea;
var ctx = document.getElementById("cvs").getContext("2d");
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

window.onresize = function () {
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
  canvasSize = {
    top: 0,
    left: 0,
    width: window.innerWidth,
    height: window.innerHeight
  };
  console.log("onresize");
};

window.onload = function () {
  renderArea = new _renderArea.default({
    ctx: ctx
  });
  renderArea.initPolygons();
  renderArea.paint();
  document.onkeyup = renderArea.keyPressEvent;
  document.getElementById("cvs").onwheel = renderArea.wheelEvent;
  document.getElementById("cvs").onmousemove = renderArea.mouseMoveEvent;
  document.getElementById("cvs").onmouseup = renderArea.mouseReleaseEvent;
  document.getElementById("cvs").onmousedown = renderArea.mousePressEvent;

  document.getElementById("cvs").oncontextmenu = function () {
    return false;
  };
};
},{"../app/renderArea.js":"renderArea.js"}],"../node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "3189" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map