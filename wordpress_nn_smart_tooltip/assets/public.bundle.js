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
eval("\n\n__webpack_require__(/*! ./public/css/public.scss */ \"./wordpress_nn_smart_tooltip/src/public/css/public.scss\");\n\nvar _TooltipTag = __webpack_require__(/*! ./public/js/TooltipTag.js */ \"./wordpress_nn_smart_tooltip/src/public/js/TooltipTag.js\");\n\nvar _TooltipTag2 = _interopRequireDefault(_TooltipTag);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\ndocument.addEventListener('DOMContentLoaded', function () {\n    new _TooltipTag2.default();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93b3JkcHJlc3Nfbm5fc21hcnRfdG9vbHRpcC9zcmMvcHVibGljLmpzPzJiOGIiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiVG9vbHRpcFRhZyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7Ozs7O0FBRUFBLFNBQVNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFZO0FBQ3RELFFBQUlDLG9CQUFKO0FBQ0gsQ0FGRCIsImZpbGUiOiIuL3dvcmRwcmVzc19ubl9zbWFydF90b29sdGlwL3NyYy9wdWJsaWMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vcHVibGljL2Nzcy9wdWJsaWMuc2Nzcyc7XG5pbXBvcnQgVG9vbHRpcFRhZyBmcm9tICcuL3B1YmxpYy9qcy9Ub29sdGlwVGFnLmpzJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICBuZXcgVG9vbHRpcFRhZygpO1xufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./wordpress_nn_smart_tooltip/src/public.js\n");

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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar TooltipTag = function () {\n    function TooltipTag() {\n        _classCallCheck(this, TooltipTag);\n\n        this.tooltip = {\n            container: jQuery('.nnst')\n        };\n\n        this.openedTooltip = null;\n        this.startScrollTop = 0;\n        this.startTop = 0;\n\n        if (this.tooltip.container.length) {\n            this.event = jQuery('#nn_smart_tooltip-container').data('event');\n            this.event = this.event === 'hover' ? 'hover' : 'click';\n            this._addEvents();\n        }\n    }\n\n    _createClass(TooltipTag, [{\n        key: '_addEvents',\n        value: function _addEvents() {\n            var _this = this;\n\n            if (this.event === 'hover') {\n                this.tooltip.container.on('mouseover', jQuery.proxy(this._tagClickEvent, this));\n                this.tooltip.container.on('mouseout', jQuery.proxy(this._hideAllTooltips, this));\n            } else {\n                this.tooltip.container.on('click', jQuery.proxy(this._tagClickEvent, this));\n            }\n\n            jQuery('body').on('click', jQuery.proxy(this._bodyClickEvent, this));\n            jQuery(window).scroll(function () {\n                if (_this.openedTooltip) {\n                    _this.openedTooltip.css('top', _this.startTop - (jQuery(window).scrollTop() - _this.startScrollTop));\n                }\n            });\n        }\n    }, {\n        key: '_bodyClickEvent',\n        value: function _bodyClickEvent(event) {\n            if (!(event.target.closest('.nnst') || event.target.closest('.nnst-info'))) {\n                this._hideAllTooltips();\n            }\n        }\n    }, {\n        key: '_tagClickEvent',\n        value: function _tagClickEvent(event) {\n            var target = jQuery(event.target);\n            var id = target.data('id');\n            if (id) {\n                this._triggerTooltip(id, event.clientX, event.clientY);\n            }\n        }\n    }, {\n        key: '_hideAllTooltips',\n        value: function _hideAllTooltips() {\n            jQuery('.nnst-info').hide();\n            this.openedTooltip = null;\n        }\n    }, {\n        key: '_triggerTooltip',\n        value: function _triggerTooltip(id, x, y) {\n            var tooltipInfo = jQuery('.nnst-info[data-id=\"' + id + '\"]');\n\n            if (tooltipInfo.length) {\n                if (!this.openedTooltip) {\n                    this._showTooltip(tooltipInfo, x, y);\n                } else {\n                    this._hideAllTooltips();\n                    this._showTooltip(tooltipInfo, x, y);\n                }\n            }\n        }\n    }, {\n        key: '_showTooltip',\n        value: function _showTooltip(tooltip, x, y) {\n            tooltip.show();\n            y = y - tooltip.height() - 30;\n            this.startTop = y;\n            this.startScrollTop = jQuery(window).scrollTop();\n            this.openedTooltip = tooltip;\n\n            tooltip.css({\n                left: x - 18,\n                top: y\n            });\n        }\n    }]);\n\n    return TooltipTag;\n}();\n\nexports.default = TooltipTag;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93b3JkcHJlc3Nfbm5fc21hcnRfdG9vbHRpcC9zcmMvcHVibGljL2pzL1Rvb2x0aXBUYWcuanM/ZmRmYyJdLCJuYW1lcyI6WyJUb29sdGlwVGFnIiwidG9vbHRpcCIsImNvbnRhaW5lciIsImpRdWVyeSIsIm9wZW5lZFRvb2x0aXAiLCJzdGFydFNjcm9sbFRvcCIsInN0YXJ0VG9wIiwibGVuZ3RoIiwiZXZlbnQiLCJkYXRhIiwiX2FkZEV2ZW50cyIsIm9uIiwicHJveHkiLCJfdGFnQ2xpY2tFdmVudCIsIl9oaWRlQWxsVG9vbHRpcHMiLCJfYm9keUNsaWNrRXZlbnQiLCJ3aW5kb3ciLCJzY3JvbGwiLCJjc3MiLCJzY3JvbGxUb3AiLCJ0YXJnZXQiLCJjbG9zZXN0IiwiaWQiLCJfdHJpZ2dlclRvb2x0aXAiLCJjbGllbnRYIiwiY2xpZW50WSIsImhpZGUiLCJ4IiwieSIsInRvb2x0aXBJbmZvIiwiX3Nob3dUb29sdGlwIiwic2hvdyIsImhlaWdodCIsImxlZnQiLCJ0b3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBcUJBLFU7QUFDakIsMEJBQWM7QUFBQTs7QUFDVixhQUFLQyxPQUFMLEdBQWU7QUFDWEMsdUJBQVdDLE9BQU8sT0FBUDtBQURBLFNBQWY7O0FBSUEsYUFBS0MsYUFBTCxHQUFxQixJQUFyQjtBQUNBLGFBQUtDLGNBQUwsR0FBc0IsQ0FBdEI7QUFDQSxhQUFLQyxRQUFMLEdBQWdCLENBQWhCOztBQUVBLFlBQUksS0FBS0wsT0FBTCxDQUFhQyxTQUFiLENBQXVCSyxNQUEzQixFQUFtQztBQUMvQixpQkFBS0MsS0FBTCxHQUFhTCxPQUFPLDZCQUFQLEVBQXNDTSxJQUF0QyxDQUEyQyxPQUEzQyxDQUFiO0FBQ0EsaUJBQUtELEtBQUwsR0FBYSxLQUFLQSxLQUFMLEtBQWUsT0FBZixHQUF5QixPQUF6QixHQUFtQyxPQUFoRDtBQUNBLGlCQUFLRSxVQUFMO0FBQ0g7QUFDSjs7OztxQ0FFWTtBQUFBOztBQUNULGdCQUFJLEtB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LCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBUb29sdGlwVGFnIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy50b29sdGlwID0ge1xuICAgICAgICAgICAgY29udGFpbmVyOiBqUXVlcnkoJy5ubnN0JyksXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5vcGVuZWRUb29sdGlwID0gbnVsbDtcbiAgICAgICAgdGhpcy5zdGFydFNjcm9sbFRvcCA9IDA7XG4gICAgICAgIHRoaXMuc3RhcnRUb3AgPSAwO1xuXG4gICAgICAgIGlmICh0aGlzLnRvb2x0aXAuY29udGFpbmVyLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5ldmVudCA9IGpRdWVyeSgnI25uX3NtYXJ0X3Rvb2x0aXAtY29udGFpbmVyJykuZGF0YSgnZXZlbnQnKTtcbiAgICAgICAgICAgIHRoaXMuZXZlbnQgPSB0aGlzLmV2ZW50ID09PSAnaG92ZXInID8gJ2hvdmVyJyA6ICdjbGljayc7XG4gICAgICAgICAgICB0aGlzLl9hZGRFdmVudHMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9hZGRFdmVudHMoKSB7XG4gICAgICAgIGlmICh0aGlzLmV2ZW50ID09PSAnaG92ZXInKSB7XG4gICAgICAgICAgICB0aGlzLnRvb2x0aXAuY29udGFpbmVyLm9uKCdtb3VzZW92ZXInLCBqUXVlcnkucHJveHkodGhpcy5fdGFnQ2xpY2tFdmVudCwgdGhpcykpO1xuICAgICAgICAgICAgdGhpcy50b29sdGlwLmNvbnRhaW5lci5vbignbW91c2VvdXQnLCBqUXVlcnkucHJveHkodGhpcy5faGlkZUFsbFRvb2x0aXBzLCB0aGlzKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRvb2x0aXAuY29udGFpbmVyLm9uKCdjbGljaycsIGpRdWVyeS5wcm94eSh0aGlzLl90YWdDbGlja0V2ZW50LCB0aGlzKSk7XG4gICAgICAgIH1cblxuICAgICAgICBqUXVlcnkoJ2JvZHknKS5vbignY2xpY2snLCBqUXVlcnkucHJveHkodGhpcy5fYm9keUNsaWNrRXZlbnQsIHRoaXMpKTtcbiAgICAgICAgalF1ZXJ5KHdpbmRvdykuc2Nyb2xsKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wZW5lZFRvb2x0aXApIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW5lZFRvb2x0aXAuY3NzKCd0b3AnLCB0aGlzLnN0YXJ0VG9wIC0gKGpRdWVyeSh3aW5kb3cpLnNjcm9sbFRvcCgpIC0gdGhpcy5zdGFydFNjcm9sbFRvcCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfYm9keUNsaWNrRXZlbnQoZXZlbnQpIHtcbiAgICAgICAgaWYgKCEoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5ubnN0JykgfHwgZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5ubnN0LWluZm8nKSkpIHtcbiAgICAgICAgICAgIHRoaXMuX2hpZGVBbGxUb29sdGlwcygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX3RhZ0NsaWNrRXZlbnQoZXZlbnQpIHtcbiAgICAgICAgbGV0IHRhcmdldCA9IGpRdWVyeShldmVudC50YXJnZXQpO1xuICAgICAgICBsZXQgaWQgPSB0YXJnZXQuZGF0YSgnaWQnKTtcbiAgICAgICAgaWYgKGlkKSB7XG4gICAgICAgICAgICB0aGlzLl90cmlnZ2VyVG9vbHRpcChpZCwgZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfaGlkZUFsbFRvb2x0aXBzKCkge1xuICAgICAgICBqUXVlcnkoJy5ubnN0LWluZm8nKS5oaWRlKCk7XG4gICAgICAgIHRoaXMub3BlbmVkVG9vbHRpcCA9IG51bGw7XG4gICAgfVxuXG4gICAgX3RyaWdnZXJUb29sdGlwKGlkLCB4LCB5KSB7XG4gICAgICAgIGxldCB0b29sdGlwSW5mbyA9IGpRdWVyeSgnLm5uc3QtaW5mb1tkYXRhLWlkPVwiJyArIGlkICsgJ1wiXScpO1xuXG4gICAgICAgIGlmICh0b29sdGlwSW5mby5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5vcGVuZWRUb29sdGlwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2hvd1Rvb2x0aXAodG9vbHRpcEluZm8sIHgsIHkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9oaWRlQWxsVG9vbHRpcHMoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9zaG93VG9vbHRpcCh0b29sdGlwSW5mbywgeCwgeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfc2hvd1Rvb2x0aXAodG9vbHRpcCwgeCwgeSkge1xuICAgICAgICB0b29sdGlwLnNob3coKTtcbiAgICAgICAgeSA9IHkgLSB0b29sdGlwLmhlaWdodCgpIC0gMzA7XG4gICAgICAgIHRoaXMuc3RhcnRUb3AgPSB5O1xuICAgICAgICB0aGlzLnN0YXJ0U2Nyb2xsVG9wID0galF1ZXJ5KHdpbmRvdykuc2Nyb2xsVG9wKCk7XG4gICAgICAgIHRoaXMub3BlbmVkVG9vbHRpcCA9IHRvb2x0aXA7XG5cbiAgICAgICAgdG9vbHRpcC5jc3Moe1xuICAgICAgICAgICAgbGVmdDogeCAtIDE4LFxuICAgICAgICAgICAgdG9wOiB5LFxuICAgICAgICB9KTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./wordpress_nn_smart_tooltip/src/public/js/TooltipTag.js\n");

/***/ })

/******/ });