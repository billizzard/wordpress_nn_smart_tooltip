/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "wordpress_nn_smart_tooltip/assets/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./wordpress_nn_smart_tooltip/src/public.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./wordpress_nn_smart_tooltip/src/public.js":
/*!**************************************************!*\
  !*** ./wordpress_nn_smart_tooltip/src/public.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./public/css/public.scss */ \"./wordpress_nn_smart_tooltip/src/public/css/public.scss\");\n\nvar _TooltipTag = __webpack_require__(/*! ./public/js/TooltipTag.js */ \"./wordpress_nn_smart_tooltip/src/public/js/TooltipTag.js\");\n\nvar _TooltipTag2 = _interopRequireDefault(_TooltipTag);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nwindow.$ = jQuery;\ndocument.addEventListener('DOMContentLoaded', function () {\n    var tooltipTag = new _TooltipTag2.default();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93b3JkcHJlc3Nfbm5fc21hcnRfdG9vbHRpcC9zcmMvcHVibGljLmpzPzJiOGIiXSwibmFtZXMiOlsid2luZG93IiwiJCIsImpRdWVyeSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInRvb2x0aXBUYWciLCJUb29sdGlwVGFnIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOzs7Ozs7QUFFQUEsT0FBT0MsQ0FBUCxHQUFXQyxNQUFYO0FBQ0FDLFNBQVNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFZO0FBQ3RELFFBQUlDLGFBQWEsSUFBSUMsb0JBQUosRUFBakI7QUFDSCxDQUZEIiwiZmlsZSI6Ii4vd29yZHByZXNzX25uX3NtYXJ0X3Rvb2x0aXAvc3JjL3B1YmxpYy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9wdWJsaWMvY3NzL3B1YmxpYy5zY3NzJztcbmltcG9ydCBUb29sdGlwVGFnIGZyb20gJy4vcHVibGljL2pzL1Rvb2x0aXBUYWcuanMnO1xuXG53aW5kb3cuJCA9IGpRdWVyeTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IHRvb2x0aXBUYWcgPSBuZXcgVG9vbHRpcFRhZygpO1xufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./wordpress_nn_smart_tooltip/src/public.js\n");

/***/ }),

/***/ "./wordpress_nn_smart_tooltip/src/public/css/public.scss":
/*!***************************************************************!*\
  !*** ./wordpress_nn_smart_tooltip/src/public/css/public.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93b3JkcHJlc3Nfbm5fc21hcnRfdG9vbHRpcC9zcmMvcHVibGljL2Nzcy9wdWJsaWMuc2Nzcz85NTdlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Ii4vd29yZHByZXNzX25uX3NtYXJ0X3Rvb2x0aXAvc3JjL3B1YmxpYy9jc3MvcHVibGljLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./wordpress_nn_smart_tooltip/src/public/css/public.scss\n");

/***/ }),

/***/ "./wordpress_nn_smart_tooltip/src/public/js/TooltipTag.js":
/*!****************************************************************!*\
  !*** ./wordpress_nn_smart_tooltip/src/public/js/TooltipTag.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar TooltipTag = function () {\n    function TooltipTag() {\n        _classCallCheck(this, TooltipTag);\n\n        this.tooltip = {\n            container: $('.nnst')\n        };\n\n        this.mode = 'click';\n\n        this.openedTooltip = null;\n        this.startScrollTop = 0;\n        this.startTop = 0;\n        if (this.tooltip.container.length) {\n            this._addEvents();\n        }\n    }\n\n    _createClass(TooltipTag, [{\n        key: '_addEvents',\n        value: function _addEvents() {\n            var _this = this;\n\n            if (this.mode === 'click') {\n                this.tooltip.container.on('click', $.proxy(this._tagClickEvent, this));\n            } else {\n                this.tooltip.container.on('mouseover', $.proxy(this._tagClickEvent, this));\n                this.tooltip.container.on('mouseout', $.proxy(this._hideAllTooltips, this));\n            }\n\n            $('body').on('click', $.proxy(this._bodyClickEvent, this));\n            $(window).scroll(function () {\n                if (_this.openedTooltip) {\n                    _this.openedTooltip.css('top', _this.startTop - ($(window).scrollTop() - _this.startScrollTop));\n                }\n            });\n        }\n    }, {\n        key: '_bodyClickEvent',\n        value: function _bodyClickEvent(event) {\n            if (!(event.target.closest('.nnst') || event.target.closest('.nnst-info'))) {\n                this._hideAllTooltips();\n            }\n        }\n    }, {\n        key: '_tagClickEvent',\n        value: function _tagClickEvent(event) {\n            var target = $(event.target);\n            var id = target.data('id');\n            if (id) {\n                this._triggerTooltip(id, event.clientX, event.clientY);\n            }\n        }\n    }, {\n        key: '_hideAllTooltips',\n        value: function _hideAllTooltips() {\n            $('.nnst-info').hide();\n            this.openedTooltip = null;\n        }\n    }, {\n        key: '_triggerTooltip',\n        value: function _triggerTooltip(id, x, y) {\n            var tooltipInfo = $('.nnst-info[data-id=\"' + id + '\"]');\n\n            if (tooltipInfo.length) {\n                if (!this.openedTooltip) {\n                    this._showTooltip(tooltipInfo, x, y);\n                } else {\n                    this._hideAllTooltips();\n                    this._showTooltip(tooltipInfo, x, y);\n                }\n            }\n        }\n    }, {\n        key: '_showTooltip',\n        value: function _showTooltip(tooltip, x, y) {\n            tooltip.show();\n            y = y - tooltip.height() - 30;\n            this.startTop = y;\n            this.startScrollTop = $(window).scrollTop();\n            this.openedTooltip = tooltip;\n\n            tooltip.css({\n                left: x - 18,\n                top: y\n            });\n        }\n    }]);\n\n    return TooltipTag;\n}();\n\nexports.default = TooltipTag;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93b3JkcHJlc3Nfbm5fc21hcnRfdG9vbHRpcC9zcmMvcHVibGljL2pzL1Rvb2x0aXBUYWcuanM/ZmRmYyJdLCJuYW1lcyI6WyJUb29sdGlwVGFnIiwidG9vbHRpcCIsImNvbnRhaW5lciIsIiQiLCJtb2RlIiwib3BlbmVkVG9vbHRpcCIsInN0YXJ0U2Nyb2xsVG9wIiwic3RhcnRUb3AiLCJsZW5ndGgiLCJfYWRkRXZlbnRzIiwib24iLCJwcm94eSIsIl90YWdDbGlja0V2ZW50IiwiX2hpZGVBbGxUb29sdGlwcyIsIl9ib2R5Q2xpY2tFdmVudCIsIndpbmRvdyIsInNjcm9sbCIsImNzcyIsInNjcm9sbFRvcCIsImV2ZW50IiwidGFyZ2V0IiwiY2xvc2VzdCIsImlkIiwiZGF0YSIsIl90cmlnZ2VyVG9vbHRpcCIsImNsaWVudFgiLCJjbGllbnRZIiwiaGlkZSIsIngiLCJ5IiwidG9vbHRpcEluZm8iLCJfc2hvd1Rvb2x0aXAiLCJzaG93IiwiaGVpZ2h0IiwibGVmdCIsInRvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFxQkEsVTtBQUNqQiwwQkFBYztBQUFBOztBQUNWLGFBQUtDLE9BQUwsR0FBZTtBQUNYQyx1QkFBV0MsRUFBRSxPQUFGO0FBREEsU0FBZjs7QUFJQSxhQUFLQyxJQUFMLEdBQVksT0FBWjs7QUFFQSxhQUFLQyxhQUFMLEdBQXFCLElBQXJCO0FBQ0EsYUFBS0MsY0FBTCxHQUFzQixDQUF0QjtBQUNBLGFBQUtDLFFBQUwsR0FBZ0IsQ0FBaEI7QUFDQSxZQUFJLEtBQUtOLE9BQUwsQ0FBYUMsU0FBYixDQUF1Qk0sTUFBM0IsRUFBbUM7QUFDL0IsaUJBQUtDLFVBQUw7QUFDSDtBQUNKOzs7O3FDQUVZO0FBQUE7O0FBQ1QsZ0JBQUksS0FBS0wsSUFBTCxLQUFjLE9BQWxCLEVBQTJCO0FBQ3ZCLHFCQUFLSCxPQUFMLENBQWFDLFNBQWIsQ0FBdUJRLEVBQXZCLENBQTBCLE9BQTFCLEVBQW1DUCxFQUFFUSxLQUFGLENBQVEsS0FBS0MsY0FBYixFQUE2QixJQUE3QixDQUFuQztBQUNILGFBRkQsTUFFTztBQUNILHFCQUFLWCxPQUFMLENBQWFDLFNBQWIsQ0FBdUJRLEVBQXZCLENBQTBCLFdBQTFCLEVBQXVDUCxFQUFFUSxLQUFGLENBQVEsS0FBS0MsY0FBYixFQUE2QixJQUE3QixDQUF2QztBQUNBLHFCQUFLWCxPQUFMLENBQWFDLFNBQWIsQ0FBdUJRLEVBQXZCLENBQTBCLFVBQTFCLEVBQXNDUCxFQUFFUSxLQUFGLENBQVEsS0FBS0UsZ0JBQWIsRUFBK0IsSUFBL0IsQ0FBdEM7QUFDSDs7QUFFRFYsY0FBRSxNQUFGLEVBQVVPLEVBQVYsQ0FBYSxPQUFiLEVBQXNCUCxFQUFFUSxLQUFGLENBQVEsS0FBS0csZUFBYixFQUE4QixJQUE5QixDQUF0QjtBQUNBWCxjQUFFWSxNQUFGLEVBQVVDLE1BQVYsQ0FBaUIsWUFBTTtBQUNuQixvQkFBSSxNQUFLWCxhQUFULEVBQXdCO0FBQ3BCLDBCQUFLQSxhQUFMLENBQW1CWSxHQUFuQixDQUF1QixLQUF2QixFQUE4QixNQUFLVixRQUFMLElBQWlCSixFQUFFWSxNQUFGLEVBQVVHLFNBQVYsS0FBd0IsTUFBS1osY0FBOUMsQ0FBOUI7QUFDSDtBQUNKLGFBSkQ7QUFLSDs7O3dDQUVlYSxLLEVBQU87QUFDbkIsZ0JBQUksRUFBRUEsTUFBTUMsTUFBTixDQUFhQyxPQUFiLENBQXFCLE9BQXJCLEtBQWlDRixNQUFNQyxNQUFOLENBQWFDLE9BQWIsQ0FBcUIsWUFBckIsQ0FBbkMsQ0FBSixFQUE0RTtBQUN4RSxxQkFBS1IsZ0JBQUw7QUFDSDtBQUNKOzs7dUNBRWNNLEssRUFBTztBQUNsQixnQkFBSUMsU0FBU2pCLEVBQUVnQixNQUFNQyxNQUFSLENBQWI7QUFDQSxnQkFBSUUsS0FBS0YsT0FBT0csSUFBUCxDQUFZLElBQVosQ0FBVDtBQUNBLGdCQUFJRCxFQUFKLEVBQVE7QUFDSixxQkFBS0UsZUFBTCxDQUFxQkYsRUFBckIsRUFBeUJILE1BQU1NLE9BQS9CLEVBQXdDTixNQUFNTyxPQUE5QztBQUNIO0FBQ0o7OzsyQ0FFa0I7QUFDZnZCLGNBQUUsWUFBRixFQUFnQndCLElBQWhCO0FBQ0EsaUJBQUt0QixhQUFMLEdBQXFCLElBQXJCO0FBQ0g7Ozt3Q0FFZWlCLEUsRUFBSU0sQyxFQUFHQyxDLEVBQUc7QUFDdEIsZ0JBQUlDLGNBQWMzQixFQUFFLHlCQUF5Qm1CLEVBQXpCLEdBQThCLElBQWhDLENBQWxCOztBQUVBLGdCQUFJUSxZQUFZdEIsTUFBaEIsRUFBd0I7QUFDcEIsb0JBQUksQ0FBQyxLQUFLSCxhQUFWLEVBQXlCO0FBQ3JCLHlCQUFLMEIsWUFBTCxDQUFrQkQsV0FBbEIsRUFBK0JGLENBQS9CLEVBQWtDQyxDQUFsQztBQUNILGlCQUZELE1BRU87QUFDSCx5QkFBS2hCLGdCQUFMO0FBQ0EseUJBQUtrQixZQUFMLENBQWtCRCxXQUFsQixFQUErQkYsQ0FBL0IsRUFBa0NDLENBQWxDO0FBQ0g7QUFDSjtBQUNKOzs7cUNBRVk1QixPLEVBQVMyQixDLEVBQUdDLEMsRUFBRztBQUN4QjVCLG9CQUFRK0IsSUFBUjtBQUNBSCxnQkFBSUEsSUFBSTVCLFFBQVFnQyxNQUFSLEVBQUosR0FBdUIsRUFBM0I7QUFDQSxpQkFBSzFCLFFBQUwsR0FBZ0JzQixDQUFoQjtBQUNBLGlCQUFLdkIsY0FBTCxHQUFzQkgsRUFBRVksTUFBRixFQUFVRyxTQUFWLEVBQXRCO0FBQ0EsaUJBQUtiLGFBQUwsR0FBcUJKLE9BQXJCOztBQUVBQSxvQkFBUWdCLEdBQVIsQ0FBWTtBQUNSaUIsc0JBQU1OLElBQUksRUFERjtBQUVSTyxxQkFBS047QUFGRyxhQUFaO0FBSUg7Ozs7OztrQkEzRWdCN0IsVSIsImZpbGUiOiIuL3dvcmRwcmVzc19ubl9zbWFydF90b29sdGlwL3NyYy9wdWJsaWMvanMvVG9vbHRpcFRhZy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvb2x0aXBUYWcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnRvb2x0aXAgPSB7XG4gICAgICAgICAgICBjb250YWluZXI6ICQoJy5ubnN0JyksXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5tb2RlID0gJ2NsaWNrJztcblxuICAgICAgICB0aGlzLm9wZW5lZFRvb2x0aXAgPSBudWxsO1xuICAgICAgICB0aGlzLnN0YXJ0U2Nyb2xsVG9wID0gMDtcbiAgICAgICAgdGhpcy5zdGFydFRvcCA9IDA7XG4gICAgICAgIGlmICh0aGlzLnRvb2x0aXAuY29udGFpbmVyLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5fYWRkRXZlbnRzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfYWRkRXZlbnRzKCkge1xuICAgICAgICBpZiAodGhpcy5tb2RlID09PSAnY2xpY2snKSB7XG4gICAgICAgICAgICB0aGlzLnRvb2x0aXAuY29udGFpbmVyLm9uKCdjbGljaycsICQucHJveHkodGhpcy5fdGFnQ2xpY2tFdmVudCwgdGhpcykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50b29sdGlwLmNvbnRhaW5lci5vbignbW91c2VvdmVyJywgJC5wcm94eSh0aGlzLl90YWdDbGlja0V2ZW50LCB0aGlzKSk7XG4gICAgICAgICAgICB0aGlzLnRvb2x0aXAuY29udGFpbmVyLm9uKCdtb3VzZW91dCcsICQucHJveHkodGhpcy5faGlkZUFsbFRvb2x0aXBzLCB0aGlzKSk7XG4gICAgICAgIH1cblxuICAgICAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJC5wcm94eSh0aGlzLl9ib2R5Q2xpY2tFdmVudCwgdGhpcykpO1xuICAgICAgICAkKHdpbmRvdykuc2Nyb2xsKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wZW5lZFRvb2x0aXApIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW5lZFRvb2x0aXAuY3NzKCd0b3AnLCB0aGlzLnN0YXJ0VG9wIC0gKCQod2luZG93KS5zY3JvbGxUb3AoKSAtIHRoaXMuc3RhcnRTY3JvbGxUb3ApKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX2JvZHlDbGlja0V2ZW50KGV2ZW50KSB7XG4gICAgICAgIGlmICghKGV2ZW50LnRhcmdldC5jbG9zZXN0KCcubm5zdCcpIHx8IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcubm5zdC1pbmZvJykpKSB7XG4gICAgICAgICAgICB0aGlzLl9oaWRlQWxsVG9vbHRpcHMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF90YWdDbGlja0V2ZW50KGV2ZW50KSB7XG4gICAgICAgIGxldCB0YXJnZXQgPSAkKGV2ZW50LnRhcmdldCk7XG4gICAgICAgIGxldCBpZCA9IHRhcmdldC5kYXRhKCdpZCcpO1xuICAgICAgICBpZiAoaWQpIHtcbiAgICAgICAgICAgIHRoaXMuX3RyaWdnZXJUb29sdGlwKGlkLCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9oaWRlQWxsVG9vbHRpcHMoKSB7XG4gICAgICAgICQoJy5ubnN0LWluZm8nKS5oaWRlKCk7XG4gICAgICAgIHRoaXMub3BlbmVkVG9vbHRpcCA9IG51bGw7XG4gICAgfVxuXG4gICAgX3RyaWdnZXJUb29sdGlwKGlkLCB4LCB5KSB7XG4gICAgICAgIGxldCB0b29sdGlwSW5mbyA9ICQoJy5ubnN0LWluZm9bZGF0YS1pZD1cIicgKyBpZCArICdcIl0nKTtcblxuICAgICAgICBpZiAodG9vbHRpcEluZm8ubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMub3BlbmVkVG9vbHRpcCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3Nob3dUb29sdGlwKHRvb2x0aXBJbmZvLCB4LCB5KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5faGlkZUFsbFRvb2x0aXBzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2hvd1Rvb2x0aXAodG9vbHRpcEluZm8sIHgsIHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgX3Nob3dUb29sdGlwKHRvb2x0aXAsIHgsIHkpIHtcbiAgICAgICAgdG9vbHRpcC5zaG93KCk7XG4gICAgICAgIHkgPSB5IC0gdG9vbHRpcC5oZWlnaHQoKSAtIDMwO1xuICAgICAgICB0aGlzLnN0YXJ0VG9wID0geTtcbiAgICAgICAgdGhpcy5zdGFydFNjcm9sbFRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcbiAgICAgICAgdGhpcy5vcGVuZWRUb29sdGlwID0gdG9vbHRpcDtcblxuICAgICAgICB0b29sdGlwLmNzcyh7XG4gICAgICAgICAgICBsZWZ0OiB4IC0gMTgsXG4gICAgICAgICAgICB0b3A6IHksXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./wordpress_nn_smart_tooltip/src/public/js/TooltipTag.js\n");

/***/ })

/******/ });