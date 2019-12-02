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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _boodschappenlijst__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boodschappenlijst */ \"./boodschappenlijst.js\");\n/* harmony import */ var _boodschappenlijst__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_boodschappenlijst__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "./boodschappenlijst.js":
/*!******************************!*\
  !*** ./boodschappenlijst.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var app = new Vue({\n\tel: '#boodschappen',\n\tdata: {\n\t\tsearch: '',\n\t\titems: [],\n\t\tgroups: [],\n\t\tadd: '',\n\t\tdata: [],\n\t\ttest: 'bla'\n\t},\n\tcomputed: {\n\t\tsortedItems: function (){\n\t\t\tself = this;\n\t\t\titems = this.getItems();\n\t\t\tself.items = this.sortItems();\n\t\t\treturn self.items\n\t\t}\n\t},\n\tcreated: function() {\n\t\treturn this.groupItems(this.sortedItems);\n\t},\n\twatch: {\n\t\tsearch: function() {\n\t\t\tthis.filterItems();\n\t\t}\n\t},\n\tmethods: {\n\t\tsortItems(items = this.items) {\n\t\t\tlist = items\n\t\t\tlist.sort((a, b) => (a.title > b.title) ? 1 : -1);\n\t\t\treturn list;\n\t\t},\n\t\tgetItems() {\n\t\t\t_data = '';\n\t\t\tself = this;\n\t\t\t$.ajax(\n\t\t\t\t{\n\t\t\t\t\turl: 'https://kevin.nodum.io/json/items',\n\t\t\t\t\tsuccess: function(result) {\n\t\t\t\t\t\tself.items = result\n\t\t\t\t\t},\n\t\t\t\t\tasync: false\n\t\t\t\t}\n\t\t\t);\n\t\t},\n\t\tfilterItems() {\n\t\t\tself = this;\n\n\t\t\titems = this.items;\n\t\t\tnewItems = [];\n\t\t\titems.forEach(function(item) {\n\t\t\t\tif(self.itemInItemlist(item.title)) {\n\t\t\t\t\tnewItems.push({ title : item.title })\n\t\t\t\t}\n\t\t\t})\n\t\t\tnewItems = self.sortItems(newItems);\n\t\t\tself.groupItems(newItems);\n\t\t},\n\t\titemInItemlist(item) {\n\t\t\tif(item.toLowerCase().indexOf(self.search.toLowerCase()) !== -1) {\n\t\t\t\treturn true\n\t\t\t}\n\t\t\treturn false\n\t\t},\n\t\tgroupItems(items) {\n\t\t\tself = this;\n\t\t\tself.groups = [];\n\t\t\tgroups = [];\n\n\t\t\titems.forEach(function(item) {\n\t\t\t\t$firstLetterOfItem = item.title.slice(0,1);\n\n\t\t\t\t// Check if firstLetterOfItem exists in groups\n\t\t\t\t$indexOfLetterInGroups = groups.map(function(e) { return e.letter; } ).indexOf($firstLetterOfItem);\n\t\t\t\tif( $indexOfLetterInGroups > -1 ) {\n\t\t\t\t\tvalues = groups[$indexOfLetterInGroups].values;\n\t\t\t\t\tvalues.push(item.title);\n\t\t\t\t} else {\n\t\t\t\t\tgroups.push({ letter : $firstLetterOfItem, values : [] });\n\t\t\t\t\t// Reset $indexOfLetterInGroups because now we have an index :)\n\t\t\t\t\t$indexOfLetterInGroups = groups.map(function(e) { return e.letter; } ).indexOf($firstLetterOfItem);\n\t\t\t\t\tvalues = [item.title]\n\t\t\t\t}\n\n\n\t\t\t\tgroups[$indexOfLetterInGroups].values = values\n\n\t\t\t});\n\t\t\tthis.groups = groups;\n\t\t\treturn this.groups\n\t\t},\n\t\taddItemToList() {\n\t\t\tself = this;\n\t\t\titem = self.add;\n\t\t\tself.items.push({title : item});\n\t\t\tself.sortItems(self.items);\n\t\t\tself.groupItems(self.items);\n\n\t\t\t$.post('json/additem', {item : self.add}, function(data) {});\n\n\t\t\tself.add = '';\n\t\t}\n\t}\n});\n\n\n//# sourceURL=webpack:///./boodschappenlijst.js?");

/***/ })

/******/ });