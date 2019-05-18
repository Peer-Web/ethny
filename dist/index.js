"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.dollarToWei = exports.boostGas = exports.getContractAddress = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _web3Utils = require("web3-utils");

var Base =
/*#__PURE__*/
function () {
  function Base() {
    (0, _classCallCheck2["default"])(this, Base);
  }

  (0, _createClass2["default"])(Base, [{
    key: "init",
    value: function () {
      var _init = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(config) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.web3 = config.web3;
                _context.next = 3;
                return config.getNetwork();

              case 3:
                this.networkId = _context.sent;

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function init(_x) {
        return _init.apply(this, arguments);
      }

      return init;
    }()
  }]);
  return Base;
}();

var getContractAddress = function getContractAddress(contractInterface, networkId) {
  var network = networkId.toString();
  return contractInterface.networks[network].address;
};
/**
 * Adds a 5% boost to the gas for web3 calls as to ensure tx's go through
 *
 * @param {string} gasRequired amount of gas required from `estimateGas`
 */


exports.getContractAddress = getContractAddress;

var boostGas = function boostGas(gasRequired) {
  var gasBoost = new _web3Utils.BN(gasRequired, 10).divRound(new _web3Utils.BN('20'));
  return new _web3Utils.BN(gasRequired, 10).add(gasBoost);
};

exports.boostGas = boostGas;

var dollarToWei = function dollarToWei(dollarAmount, exchangeRate) {
  return new _web3Utils.BN('1000000000000000000', 10).divRound(new _web3Utils.BN(exchangeRate, 10)).mul(new _web3Utils.BN(dollarAmount, 10));
};

exports.dollarToWei = dollarToWei;
var _default = Base;
exports["default"] = _default;
//# sourceMappingURL=index.js.map