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
eval("// import './public/css/public/public.css';\n// import './public/css/gsma/public_gsma.css';\n// import './common/css/common.css';\n// import ArticleWrapper from './public/js/version/ArticleWrapperUI.js';\n// import OnlineEditForm from './public/js/version/OnlineEditFormUI.js';\n// import OnlineEditPopup from './public/js/version/OnlineEditPopupUI.js';\n// import CommentForm from './public/js/version/CommentFormUI.js';\n// import CommentTooltip from './public/js/version/CommentTooltipUI.js';\n// import OfflineForm from './public/js/version/OfflineFormUI.js';\n// import OfflineEditPopup from './public/js/version/OfflineEditPopupUI.js';\n// import AuthPopup from './public/js/version/AuthPopupUI.js';\n// import Subheader from './public/js/version/SubheaderUI.js';\n// import TinymceHighlightButton from './public/js/version/TinymceHighlightButtonUI.js';\n// import EditMenu from './public/js/version/EditMenuUI.js';\n// import PostPage from './public/js/version/PostPageUI.js';\n// import TocSidebarUI from './public/js/version/TocSidebarUI.js';\n// import TableOfContents from './public/js/gsma_wiki-table-of-contents.js';\n//\n// document.addEventListener('DOMContentLoaded', function () {\n//     let articleWrapper = new ArticleWrapper();\n//\n//     let onlineEditForm = new OnlineEditForm(articleWrapper);\n//     let onlineEditPopup = new OnlineEditPopup(onlineEditForm);\n//     onlineEditForm.setPopup(onlineEditPopup);\n//\n//     let commentForm = new CommentForm(articleWrapper);\n//     new CommentTooltip(articleWrapper, commentForm);\n//\n//     let offlineForm = new OfflineForm(articleWrapper);\n//     let offlinePopup = new OfflineEditPopup();\n//     offlineForm.setPopup(offlinePopup);\n//\n//     let authPopup = new AuthPopup();\n//     let tocSidebar = new TocSidebarUI();\n//     new Subheader(authPopup, tocSidebar);\n//     new TinymceHighlightButton();\n//\n//     new PostPage(commentForm, onlineEditPopup, onlineEditForm);\n//\n//     new EditMenu(articleWrapper, onlineEditPopup, commentForm, offlinePopup);\n// });\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93b3JkcHJlc3Nfbm5fc21hcnRfdG9vbHRpcC9zcmMvcHVibGljLmpzPzJiOGIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3dvcmRwcmVzc19ubl9zbWFydF90b29sdGlwL3NyYy9wdWJsaWMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgJy4vcHVibGljL2Nzcy9wdWJsaWMvcHVibGljLmNzcyc7XG4vLyBpbXBvcnQgJy4vcHVibGljL2Nzcy9nc21hL3B1YmxpY19nc21hLmNzcyc7XG4vLyBpbXBvcnQgJy4vY29tbW9uL2Nzcy9jb21tb24uY3NzJztcbi8vIGltcG9ydCBBcnRpY2xlV3JhcHBlciBmcm9tICcuL3B1YmxpYy9qcy92ZXJzaW9uL0FydGljbGVXcmFwcGVyVUkuanMnO1xuLy8gaW1wb3J0IE9ubGluZUVkaXRGb3JtIGZyb20gJy4vcHVibGljL2pzL3ZlcnNpb24vT25saW5lRWRpdEZvcm1VSS5qcyc7XG4vLyBpbXBvcnQgT25saW5lRWRpdFBvcHVwIGZyb20gJy4vcHVibGljL2pzL3ZlcnNpb24vT25saW5lRWRpdFBvcHVwVUkuanMnO1xuLy8gaW1wb3J0IENvbW1lbnRGb3JtIGZyb20gJy4vcHVibGljL2pzL3ZlcnNpb24vQ29tbWVudEZvcm1VSS5qcyc7XG4vLyBpbXBvcnQgQ29tbWVudFRvb2x0aXAgZnJvbSAnLi9wdWJsaWMvanMvdmVyc2lvbi9Db21tZW50VG9vbHRpcFVJLmpzJztcbi8vIGltcG9ydCBPZmZsaW5lRm9ybSBmcm9tICcuL3B1YmxpYy9qcy92ZXJzaW9uL09mZmxpbmVGb3JtVUkuanMnO1xuLy8gaW1wb3J0IE9mZmxpbmVFZGl0UG9wdXAgZnJvbSAnLi9wdWJsaWMvanMvdmVyc2lvbi9PZmZsaW5lRWRpdFBvcHVwVUkuanMnO1xuLy8gaW1wb3J0IEF1dGhQb3B1cCBmcm9tICcuL3B1YmxpYy9qcy92ZXJzaW9uL0F1dGhQb3B1cFVJLmpzJztcbi8vIGltcG9ydCBTdWJoZWFkZXIgZnJvbSAnLi9wdWJsaWMvanMvdmVyc2lvbi9TdWJoZWFkZXJVSS5qcyc7XG4vLyBpbXBvcnQgVGlueW1jZUhpZ2hsaWdodEJ1dHRvbiBmcm9tICcuL3B1YmxpYy9qcy92ZXJzaW9uL1RpbnltY2VIaWdobGlnaHRCdXR0b25VSS5qcyc7XG4vLyBpbXBvcnQgRWRpdE1lbnUgZnJvbSAnLi9wdWJsaWMvanMvdmVyc2lvbi9FZGl0TWVudVVJLmpzJztcbi8vIGltcG9ydCBQb3N0UGFnZSBmcm9tICcuL3B1YmxpYy9qcy92ZXJzaW9uL1Bvc3RQYWdlVUkuanMnO1xuLy8gaW1wb3J0IFRvY1NpZGViYXJVSSBmcm9tICcuL3B1YmxpYy9qcy92ZXJzaW9uL1RvY1NpZGViYXJVSS5qcyc7XG4vLyBpbXBvcnQgVGFibGVPZkNvbnRlbnRzIGZyb20gJy4vcHVibGljL2pzL2dzbWFfd2lraS10YWJsZS1vZi1jb250ZW50cy5qcyc7XG4vL1xuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbi8vICAgICBsZXQgYXJ0aWNsZVdyYXBwZXIgPSBuZXcgQXJ0aWNsZVdyYXBwZXIoKTtcbi8vXG4vLyAgICAgbGV0IG9ubGluZUVkaXRGb3JtID0gbmV3IE9ubGluZUVkaXRGb3JtKGFydGljbGVXcmFwcGVyKTtcbi8vICAgICBsZXQgb25saW5lRWRpdFBvcHVwID0gbmV3IE9ubGluZUVkaXRQb3B1cChvbmxpbmVFZGl0Rm9ybSk7XG4vLyAgICAgb25saW5lRWRpdEZvcm0uc2V0UG9wdXAob25saW5lRWRpdFBvcHVwKTtcbi8vXG4vLyAgICAgbGV0IGNvbW1lbnRGb3JtID0gbmV3IENvbW1lbnRGb3JtKGFydGljbGVXcmFwcGVyKTtcbi8vICAgICBuZXcgQ29tbWVudFRvb2x0aXAoYXJ0aWNsZVdyYXBwZXIsIGNvbW1lbnRGb3JtKTtcbi8vXG4vLyAgICAgbGV0IG9mZmxpbmVGb3JtID0gbmV3IE9mZmxpbmVGb3JtKGFydGljbGVXcmFwcGVyKTtcbi8vICAgICBsZXQgb2ZmbGluZVBvcHVwID0gbmV3IE9mZmxpbmVFZGl0UG9wdXAoKTtcbi8vICAgICBvZmZsaW5lRm9ybS5zZXRQb3B1cChvZmZsaW5lUG9wdXApO1xuLy9cbi8vICAgICBsZXQgYXV0aFBvcHVwID0gbmV3IEF1dGhQb3B1cCgpO1xuLy8gICAgIGxldCB0b2NTaWRlYmFyID0gbmV3IFRvY1NpZGViYXJVSSgpO1xuLy8gICAgIG5ldyBTdWJoZWFkZXIoYXV0aFBvcHVwLCB0b2NTaWRlYmFyKTtcbi8vICAgICBuZXcgVGlueW1jZUhpZ2hsaWdodEJ1dHRvbigpO1xuLy9cbi8vICAgICBuZXcgUG9zdFBhZ2UoY29tbWVudEZvcm0sIG9ubGluZUVkaXRQb3B1cCwgb25saW5lRWRpdEZvcm0pO1xuLy9cbi8vICAgICBuZXcgRWRpdE1lbnUoYXJ0aWNsZVdyYXBwZXIsIG9ubGluZUVkaXRQb3B1cCwgY29tbWVudEZvcm0sIG9mZmxpbmVQb3B1cCk7XG4vLyB9KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./wordpress_nn_smart_tooltip/src/public.js\n");

/***/ })

/******/ });