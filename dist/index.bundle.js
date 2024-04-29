/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" /></svg> */ "data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"w-6 h-6\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5\" /></svg>"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" fill="%23007BFF" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" /></svg> */ "data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"%23007BFF\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"w-6 h-6\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5\" /></svg>"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body{
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: minmax(300px, 1fr) 4fr;
  grid-template-rows: 15fr 1fr;
}

aside {
  background-color: #bbb;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 3rem 0 0 3rem;
  overflow: auto;
}

.cat-group {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.category {
  font-size: 1.5rem;
  text-align: left;
  border-radius: 15px;
  padding: .1rem .75rem;
  font-family: sans-serif;
  position: relative;
}

.category:hover .delete-button {
  display: inline;
  font-size: 1.5rem;
  position: absolute;
  right: 1rem;
}

aside button {
  border: none;
  background: none;
  font-size: 1.5rem;
  text-align: left;
  border-radius: 15px;
  padding: .1rem .75rem;
}

aside button:hover {
  cursor: pointer;
  background-color: #999;
}

.sub-cat {
  margin-left: .5rem;
  position: relative;
}

.sub-cat:hover .delete-button {
  display: inline;
  font-size: 1.5rem;
  position: absolute;
  right: 1rem;
}

.hidden {
  display: none;
}

#aside-footer {
  background-color: #bbb;
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  border-top: solid 1px #999;
  display: grid;
  place-content: center;
}

#aside-footer button {
  padding: 1rem;
  font-size: 1rem;
}

/* ----------------------- */

main {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  display: grid;
  grid-template-rows: 6rem 1fr;
  margin: 4rem 2rem 0 2rem;
  overflow: auto;
  font-family: sans-serif;
}

#listDescription {
  margin: 1rem 0 0 .5rem
}

.topics {
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  margin: 1rem 0;
}

.topic-wrapper {
  margin-top: 1rem;
}

.topic-wrapper,
.task-wrapper {
  display: flex;
  justify-content: space-between;
  position: relative;
  padding-left: 2rem;
}

.topic-wrapper:hover .delete-button,
.task-wrapper:hover .delete-button {
  display: inline;
  font-size: 1rem;
  position: absolute;
  left: 0rem;
  top: 3px;
  border: none;
  background: none;
  font-size: 1rem;
  text-align: left;
  border-radius: 15px;
  padding: .1rem .5rem;
}

.topic .delete-button:hover {
  background: #ccc;
  cursor: pointer;
}

.tasks {
  display: flex;
  flex-direction: column;
  font-size: 1.4rem;
  margin: .5rem 0 0 1rem;
}

.check-wrapper:hover,
.check-wrapper label:hover,
.check-wrapper input:hover {
  cursor: pointer;
}

.task-wrapper:hover .priority {
  display: inline;
}

.priority {
  border: none;
  background: none;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  height: 1.1rem;
  width: 1.1rem;
  margin-left: 1rem;
  margin-top: 4px;
  position: absolute;
}

.priority:hover {
  cursor: pointer;
}

.priority:hover::before {
  content: "";
  position: absolute;
  top: -5px; /* adjust as needed */
  left: -5px; /* adjust as needed */
  width: calc(100% + 10px); /* adjust as needed */
  height: calc(100% + 10px); /* adjust as needed */
  border-radius: 50%;
  background-color: #ccc;
  z-index: -1;
}

.important {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

.completed {
  text-decoration: line-through;
}

.task-name {
  text-align: left;
  margin-left: 1rem;
}

/* ----------------------- */

footer {
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  border-top: solid 1px #999;
  display: grid;
  place-content: center;
}

footer button {
  padding: 1rem;
  font-size: 1rem;
}

/* ----------------------- */

dialog {
  width: 80%;
  max-width: 500px;
  height: 80%;
  max-height: 400px;
  border: none;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.dialog-form {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.dialog-form label {
  font-size: 1.7rem;
}

.dialog-form input{
  padding: 5px;
  margin-top: 5px;
  font-size: 1.7rem;
  border-radius: 10px;
}

dialog .input-wrapper {
  margin: 2rem auto;
  width: 75%;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

dialog .button-wrapper {
  margin: auto 0 2rem 0;
  align-self: center;
}

dialog::backdrop {
  background-color: rgba(0, 0, 0, 0.5);
}

dialog button {
  border: none;
  padding: 10px 20px;
  background-color: #007BFF;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
}

dialog button:hover {
  background-color: #0056b3;
}

`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody{\n  height: 100vh;\n  width: 100vw;\n  display: grid;\n  grid-template-columns: minmax(300px, 1fr) 4fr;\n  grid-template-rows: 15fr 1fr;\n}\n\naside {\n  background-color: #bbb;\n  grid-column: 1 / 2;\n  grid-row: 1 / 2;\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  padding: 3rem 0 0 3rem;\n  overflow: auto;\n}\n\n.cat-group {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n\n.category {\n  font-size: 1.5rem;\n  text-align: left;\n  border-radius: 15px;\n  padding: .1rem .75rem;\n  font-family: sans-serif;\n  position: relative;\n}\n\n.category:hover .delete-button {\n  display: inline;\n  font-size: 1.5rem;\n  position: absolute;\n  right: 1rem;\n}\n\naside button {\n  border: none;\n  background: none;\n  font-size: 1.5rem;\n  text-align: left;\n  border-radius: 15px;\n  padding: .1rem .75rem;\n}\n\naside button:hover {\n  cursor: pointer;\n  background-color: #999;\n}\n\n.sub-cat {\n  margin-left: .5rem;\n  position: relative;\n}\n\n.sub-cat:hover .delete-button {\n  display: inline;\n  font-size: 1.5rem;\n  position: absolute;\n  right: 1rem;\n}\n\n.hidden {\n  display: none;\n}\n\n#aside-footer {\n  background-color: #bbb;\n  grid-column: 1 / 2;\n  grid-row: 2 / 3;\n  border-top: solid 1px #999;\n  display: grid;\n  place-content: center;\n}\n\n#aside-footer button {\n  padding: 1rem;\n  font-size: 1rem;\n}\n\n/* ----------------------- */\n\nmain {\n  grid-column: 2 / 3;\n  grid-row: 1 / 2;\n  display: grid;\n  grid-template-rows: 6rem 1fr;\n  margin: 4rem 2rem 0 2rem;\n  overflow: auto;\n  font-family: sans-serif;\n}\n\n#listDescription {\n  margin: 1rem 0 0 .5rem\n}\n\n.topics {\n  display: flex;\n  flex-direction: column;\n  font-size: 1rem;\n  margin: 1rem 0;\n}\n\n.topic-wrapper {\n  margin-top: 1rem;\n}\n\n.topic-wrapper,\n.task-wrapper {\n  display: flex;\n  justify-content: space-between;\n  position: relative;\n  padding-left: 2rem;\n}\n\n.topic-wrapper:hover .delete-button,\n.task-wrapper:hover .delete-button {\n  display: inline;\n  font-size: 1rem;\n  position: absolute;\n  left: 0rem;\n  top: 3px;\n  border: none;\n  background: none;\n  font-size: 1rem;\n  text-align: left;\n  border-radius: 15px;\n  padding: .1rem .5rem;\n}\n\n.topic .delete-button:hover {\n  background: #ccc;\n  cursor: pointer;\n}\n\n.tasks {\n  display: flex;\n  flex-direction: column;\n  font-size: 1.4rem;\n  margin: .5rem 0 0 1rem;\n}\n\n.check-wrapper:hover,\n.check-wrapper label:hover,\n.check-wrapper input:hover {\n  cursor: pointer;\n}\n\n.task-wrapper:hover .priority {\n  display: inline;\n}\n\n.priority {\n  border: none;\n  background: none;\n  background-image: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"w-6 h-6\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5\" /></svg>');\n  height: 1.1rem;\n  width: 1.1rem;\n  margin-left: 1rem;\n  margin-top: 4px;\n  position: absolute;\n}\n\n.priority:hover {\n  cursor: pointer;\n}\n\n.priority:hover::before {\n  content: \"\";\n  position: absolute;\n  top: -5px; /* adjust as needed */\n  left: -5px; /* adjust as needed */\n  width: calc(100% + 10px); /* adjust as needed */\n  height: calc(100% + 10px); /* adjust as needed */\n  border-radius: 50%;\n  background-color: #ccc;\n  z-index: -1;\n}\n\n.important {\n  background-image: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"%23007BFF\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"w-6 h-6\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5\" /></svg>');\n}\n\n.completed {\n  text-decoration: line-through;\n}\n\n.task-name {\n  text-align: left;\n  margin-left: 1rem;\n}\n\n/* ----------------------- */\n\nfooter {\n  grid-column: 2 / 3;\n  grid-row: 2 / 3;\n  border-top: solid 1px #999;\n  display: grid;\n  place-content: center;\n}\n\nfooter button {\n  padding: 1rem;\n  font-size: 1rem;\n}\n\n/* ----------------------- */\n\ndialog {\n  width: 80%;\n  max-width: 500px;\n  height: 80%;\n  max-height: 400px;\n  border: none;\n  border-radius: 10px;\n  background-color: #fff;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  position: absolute;\n  top: 30%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.dialog-form {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.dialog-form label {\n  font-size: 1.7rem;\n}\n\n.dialog-form input{\n  padding: 5px;\n  margin-top: 5px;\n  font-size: 1.7rem;\n  border-radius: 10px;\n}\n\ndialog .input-wrapper {\n  margin: 2rem auto;\n  width: 75%;\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n\ndialog .button-wrapper {\n  margin: auto 0 2rem 0;\n  align-self: center;\n}\n\ndialog::backdrop {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\ndialog button {\n  border: none;\n  padding: 10px 20px;\n  background-color: #007BFF;\n  color: #fff;\n  cursor: pointer;\n  border-radius: 5px;\n}\n\ndialog button:hover {\n  background-color: #0056b3;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   printList: () => (/* binding */ printList),
/* harmony export */   printSidebar: () => (/* binding */ printSidebar)
/* harmony export */ });
/* harmony import */ var _category_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category.js */ "./src/category.js");
/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.js */ "./src/list.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
/* harmony import */ var _defaultLists_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defaultLists.js */ "./src/defaultLists.js");
/* harmony import */ var _eventHandlers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./eventHandlers.js */ "./src/eventHandlers.js");






function printList(list) {
  const main = document.querySelector('main');
  main.innerHTML = '';

  const listInformation = document.createElement('div');
  listInformation.classList.add('listInformation');
  const h1 = document.createElement('h1');
  const h2 = document.createElement('h2');
  h1.id = 'currentList';
  h2.id = 'listDescription';

  h1.textContent = list.name;
  h2.textContent = list.description;

  listInformation.appendChild(h1);
  listInformation.appendChild(h2);

  const topics = document.createElement('div');
  topics.className = 'topics';

  for (const topic of list.topics) {
    if (topic.tasks.length === 0) continue;

    const topicGroup = document.createElement('div');
    const topicWrapper = document.createElement('div');
    const h2Topic = document.createElement('h2');
    const buttonTopic = document.createElement('button');
    const tasks = document.createElement('div');


    topicGroup.className = 'topic';
    topicWrapper.className = 'topic-wrapper';
    h2Topic.className = 'topicName';
    tasks.className = 'tasks';

    buttonTopic.textContent = 'X';
    buttonTopic.classList.add('delete-button', 'hidden');
    h2Topic.textContent = topic.name;

    buttonTopic.addEventListener('click', () => {
      topic.deleteTasks();
      list.removeTopic(topic);
      printList(list);
    });

    topicWrapper.appendChild(h2Topic);
    topicWrapper.appendChild(buttonTopic);

    topicGroup.appendChild(topicWrapper);
    topicGroup.appendChild(tasks);

    for (const task of topic.tasks) {
      const taskWrapper = document.createElement('div');
      const checkWrapper = document.createElement('div');
      const label = document.createElement('label');
      const input = document.createElement('input');
      const buttonTask = document.createElement('button');
      const priorityBtn = document.createElement('button');
      const dueDate = document.createElement('p');

      taskWrapper.className = 'task-wrapper';
      checkWrapper.className = 'check-wrapper';
      label.htmlFor = topic.name + '-' + task.name;
      input.type = 'checkbox';
      input.name = 'task';
      input.id = topic.name + '-' + task.name;
      label.textContent = task.name;
      label.classList = 'task-name';
      buttonTask.textContent = 'X';
      buttonTask.classList.add('delete-button', 'hidden');
      priorityBtn.classList.add('priority');

      if (task.priority) {
        priorityBtn.classList.add('important');
      } 
      else if (!task.priority) {
        priorityBtn.classList.add('hidden');
      }

      if (task.completed){
        label.classList.add('completed');
        input.checked = true;
      }

      input.addEventListener('click', () => {
        task.toggleComplete();
        _defaultLists_js__WEBPACK_IMPORTED_MODULE_3__.completed.update();
        printList(list);
      })

      buttonTask.addEventListener('click', () => {
        task.delete();
        (0,_defaultLists_js__WEBPACK_IMPORTED_MODULE_3__.updateDefaults)();
        printList(list);
      });

      priorityBtn.addEventListener('click', () => {
        task.togglePriority();
        printList(list);
      })

      checkWrapper.appendChild(input);
      checkWrapper.appendChild(label);
      checkWrapper.appendChild(priorityBtn);
      taskWrapper.appendChild(checkWrapper);
      taskWrapper.appendChild(buttonTask);
      tasks.appendChild(taskWrapper);
    }
    topics.appendChild(topicGroup);
  }

  main.appendChild(listInformation);
  main.appendChild(topics);
}

function printDefault(aside) {
  const defaultGroup = document.createElement('div');
  const today = document.createElement('div');
  const week = document.createElement('div');
  const allTasksDiv = document.createElement('div');
  const completedDiv = document.createElement('div');

  defaultGroup.classList.add('cat-group');
  today.classList.add('default', 'listAside');
  week.classList.add('default', 'listAside');
  allTasksDiv.classList.add('default', 'listAside');
  completedDiv.classList.add('default', 'listAside');

  const todayBtn = document.createElement('button');
  const weekBtn = document.createElement('button');
  const allTasksBtn = document.createElement('button');
  const completedBtn = document.createElement('button');

  todayBtn.textContent = 'Today';
  todayBtn.id = 'today';
  weekBtn.textContent = 'This Week';
  weekBtn.id = 'this-week';
  allTasksBtn.textContent = 'All Tasks';
  allTasksBtn.id = 'all-tasks';
  completedBtn.textContent = 'Completed';
  completedBtn.id = 'completed';

  addSidebarListeners();

  today.appendChild(todayBtn);
  week.appendChild(weekBtn);
  allTasksDiv.appendChild(allTasksBtn);
  completedDiv.appendChild(completedBtn);

  defaultGroup.appendChild(today);
  defaultGroup.appendChild(week);
  defaultGroup.appendChild(allTasksDiv);

  aside.appendChild(defaultGroup);
  aside.appendChild(completedDiv);

  function addSidebarListeners() {
    todayBtn.addEventListener('click', () => {
      _defaultLists_js__WEBPACK_IMPORTED_MODULE_3__.todayList.update();
      (0,_eventHandlers_js__WEBPACK_IMPORTED_MODULE_4__.switchTasksCompleteLists)();
      printList(_defaultLists_js__WEBPACK_IMPORTED_MODULE_3__.todayList);
    });

    weekBtn.addEventListener('click', () => {
      _defaultLists_js__WEBPACK_IMPORTED_MODULE_3__.thisWeek.update();
      (0,_eventHandlers_js__WEBPACK_IMPORTED_MODULE_4__.switchTasksCompleteLists)();
      printList(_defaultLists_js__WEBPACK_IMPORTED_MODULE_3__.thisWeek);
    });

    allTasksBtn.addEventListener('click', (e) => {
      _defaultLists_js__WEBPACK_IMPORTED_MODULE_3__.allTasksList.update();
      (0,_eventHandlers_js__WEBPACK_IMPORTED_MODULE_4__.switchTasksCompleteLists)();
      printList(_defaultLists_js__WEBPACK_IMPORTED_MODULE_3__.allTasksList);
    });

    completedBtn.addEventListener('click', (e) => {
      _defaultLists_js__WEBPACK_IMPORTED_MODULE_3__.completed.update();
      (0,_eventHandlers_js__WEBPACK_IMPORTED_MODULE_4__.switchTasksCompleteLists)();
      printList(_defaultLists_js__WEBPACK_IMPORTED_MODULE_3__.completed);
    });
  }
}

// Build function to write categories (sidebar) to DOM next, then write functions for default set-up
function printSidebar() {
  const aside = document.querySelector('aside');
  aside.innerHTML = '';

  printDefault(aside);

  for (const category of _category_js__WEBPACK_IMPORTED_MODULE_0__.categories) {
    const catGroup = document.createElement('div');
    catGroup.classList.add('cat-group');

    const catDiv = document.createElement('div');
    catDiv.classList.add('category');
    catDiv.textContent = category.name;

    const catDelete = document.createElement('button');
    catDelete.textContent = 'X';
    catDelete.classList.add('hidden', 'delete-button');
    catDelete.addEventListener('click', () => {
      category.delete();
      printSidebar();
    });

    catDiv.appendChild(catDelete);

    catGroup.appendChild(catDiv);
    for (const list of category.lists) {
      const listDiv = document.createElement('div');
      listDiv.classList.add('listAside', 'sub-cat');

      const listBtn = document.createElement('button');
      listBtn.textContent = list.name;
      listBtn.addEventListener('click', (e) => {
        const list = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.findList)(e.target.textContent);
        (0,_eventHandlers_js__WEBPACK_IMPORTED_MODULE_4__.switchTasksCompleteLists)();
        printList(list);
      });

      const listDelete = document.createElement('button');
      listDelete.textContent = 'X';
      listDelete.classList.add('hidden', 'delete-button');
      listDelete.addEventListener('click', () => {
        list.delete();
        printSidebar();
        if (document.getElementById('currentList').textContent === list.name) printList(_list_js__WEBPACK_IMPORTED_MODULE_1__.lists[0]);
      });

      listDiv.appendChild(listBtn);
      listDiv.appendChild(listDelete);
      catGroup.appendChild(listDiv);
    }
    aside.appendChild(catGroup);
  }
}


/***/ }),

/***/ "./src/category.js":
/*!*************************!*\
  !*** ./src/category.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Category: () => (/* binding */ Category),
/* harmony export */   categories: () => (/* binding */ categories)
/* harmony export */ });
/* harmony import */ var _memoryManagement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./memoryManagement.js */ "./src/memoryManagement.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");



const categories = [];

class Category {
  constructor(name) {
    this.name = name;
    this.lists = [];
    this.addList = _utils_js__WEBPACK_IMPORTED_MODULE_1__.addItem.bind(this.lists);
    this.removeList = _utils_js__WEBPACK_IMPORTED_MODULE_1__.removeItem.bind(this.lists);
    this.printLists = _utils_js__WEBPACK_IMPORTED_MODULE_1__.printItems.bind(this.lists);
    this.ID = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.generateID)('CATE-');
    categories.push(this);
  }

  delete() {
    this.deleteLists();
    const index = categories.indexOf(this);
    if (index !== -1) {
      categories.splice(index, 1);
    }

    (0,_memoryManagement_js__WEBPACK_IMPORTED_MODULE_0__.saveData)();
  }

  deleteLists() {
    const listCopy = [...this.lists];
    for (const list of listCopy) {
      list.delete();
    }

    (0,_memoryManagement_js__WEBPACK_IMPORTED_MODULE_0__.saveData)();
  }
}



/***/ }),

/***/ "./src/defaultLists.js":
/*!*****************************!*\
  !*** ./src/defaultLists.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   allTasksList: () => (/* binding */ allTasksList),
/* harmony export */   completed: () => (/* binding */ completed),
/* harmony export */   thisWeek: () => (/* binding */ thisWeek),
/* harmony export */   todayList: () => (/* binding */ todayList),
/* harmony export */   updateDefaults: () => (/* binding */ updateDefaults)
/* harmony export */ });
/* harmony import */ var _category_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category.js */ "./src/category.js");
/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.js */ "./src/list.js");
/* harmony import */ var _topic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./topic.js */ "./src/topic.js");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isBefore.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isToday.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/addWeeks.mjs");







const todayList = new _list_js__WEBPACK_IMPORTED_MODULE_1__.List ('Today', 'Tasks of the day');
todayList.addTopic(new _topic_js__WEBPACK_IMPORTED_MODULE_2__.Topic('What are we getting done?', todayList));
todayList.update = function() {
  const today = new Date();
  for (const task of _task_js__WEBPACK_IMPORTED_MODULE_3__.allTasks) {
    if (((0,date_fns__WEBPACK_IMPORTED_MODULE_5__.isBefore)(task.dueDate, today) || (0,date_fns__WEBPACK_IMPORTED_MODULE_6__.isToday)(task.dueDate, today)) && !this.topics[0].tasks.includes(task)) this.topics[0].addTask(task);
    else if (!(0,date_fns__WEBPACK_IMPORTED_MODULE_5__.isBefore)(task.dueDate, today) && !(0,date_fns__WEBPACK_IMPORTED_MODULE_6__.isToday)(task.dueDate, today)) this.topics[0].removeTask(task);
  } 

  for (const task of this.topics[0].tasks) {
    if (!_task_js__WEBPACK_IMPORTED_MODULE_3__.allTasks.includes(task)) this.topics[0].removeTask(task);
  }
};

const thisWeek = new _list_js__WEBPACK_IMPORTED_MODULE_1__.List('This Week', 'Tasks for this week');
thisWeek.addTopic(new _topic_js__WEBPACK_IMPORTED_MODULE_2__.Topic("This Week's Tasks", thisWeek));
thisWeek.update = function() {
  const today = new Date();
  const nextWeek = (0,date_fns__WEBPACK_IMPORTED_MODULE_7__.addWeeks)(today, 1);
  for (const task of _task_js__WEBPACK_IMPORTED_MODULE_3__.allTasks) {
    if ((0,date_fns__WEBPACK_IMPORTED_MODULE_5__.isBefore)(task.dueDate, nextWeek) && !this.topics[0].tasks.includes(task)) this.topics[0].addTask(task);
    else if (!(0,date_fns__WEBPACK_IMPORTED_MODULE_5__.isBefore)(task.dueDate, nextWeek)) this.topics[0].removeTask(task);
  } 

  for (const task of this.topics[0].tasks) {
    if (!_task_js__WEBPACK_IMPORTED_MODULE_3__.allTasks.includes(task)) this.topics[0].removeTask(task);
  }
};

const allTasksList = new _list_js__WEBPACK_IMPORTED_MODULE_1__.List('All Tasks', 'Tasks collected from all lists');
allTasksList.addTopic(new _topic_js__WEBPACK_IMPORTED_MODULE_2__.Topic('All Tasks'));
allTasksList.update = function() {
  allTasksList.topics[0].tasks = _task_js__WEBPACK_IMPORTED_MODULE_3__.allTasks;
}

const completed = new _list_js__WEBPACK_IMPORTED_MODULE_1__.List('Completed', 'Past tasks');
completed.addTopic(new _topic_js__WEBPACK_IMPORTED_MODULE_2__.Topic('Completed Tasks', completed));
completed.update = function() {
  for (const task of _task_js__WEBPACK_IMPORTED_MODULE_3__.allTasks) {
    if (task.completed && !this.topics[0].tasks.includes(task)) this.topics[0].addTask(task);
    else if (!task.completed) this.topics[0].removeTask(task);
  } 

  for (const task of this.topics[0].tasks) {
    if (!_task_js__WEBPACK_IMPORTED_MODULE_3__.allTasks.includes(task)) this.topics[0].removeTask(task);
  }
};

function updateDefaults(){
  todayList.update();
  thisWeek.update();
  allTasksList.update();
  completed.update();
}




/***/ }),

/***/ "./src/eventHandlers.js":
/*!******************************!*\
  !*** ./src/eventHandlers.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleListForm: () => (/* binding */ handleListForm),
/* harmony export */   handleTaskForm: () => (/* binding */ handleTaskForm),
/* harmony export */   switchTasksCompleteLists: () => (/* binding */ switchTasksCompleteLists)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM.js */ "./src/DOM.js");
/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list.js */ "./src/list.js");
/* harmony import */ var _topic_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./topic.js */ "./src/topic.js");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
/* harmony import */ var _memoryManagement_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./memoryManagement.js */ "./src/memoryManagement.js");
/* harmony import */ var _defaultLists_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./defaultLists.js */ "./src/defaultLists.js");








function handleListForm() {
  const showList = document.getElementById('showListDialog');
  const listDialog = document.getElementById('listDialog');
  const listForm = document.getElementById('listForm');
  const listCancel = document.getElementById('listCancelBtn')
  
  listCancel.addEventListener("click", () => listDialog.close());
  showList.addEventListener("click", () => listDialog.showModal());
  listForm.addEventListener("submit", (e) => {
    e.preventDefault();
  
    const category = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.findCategory)(document.querySelector('#listCategoryInput').value);
    const list = new _list_js__WEBPACK_IMPORTED_MODULE_2__.List(
      document.querySelector('#listNameInput').value,
      document.querySelector('#listDescriptionInput').value,
      category);
    
    category.addList(list);
  
    (0,_DOM_js__WEBPACK_IMPORTED_MODULE_1__.printSidebar)();
    (0,_memoryManagement_js__WEBPACK_IMPORTED_MODULE_5__.saveData)();
  
    listDialog.close();
  });
}

function handleTaskForm(){
  const showTask = document.getElementById('showTaskDialog');
  const taskDialog = document.getElementById('taskDialog');
  const taskForm = document.getElementById('taskForm');
  const taskCancel = document.getElementById('taskCancelBtn');

  taskCancel.addEventListener("click", () => taskDialog.close());
  showTask.addEventListener("click", () => taskDialog.showModal());
  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const currentList = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.findList)(document.getElementById('currentList').textContent);
    const topic = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.findTopic)(document.querySelector('#taskTopicInput').value, currentList);
    const task = new _task_js__WEBPACK_IMPORTED_MODULE_4__.Task(
      document.querySelector('#taskNameInput').value,
      document.querySelector('#taskDescriptionInput').value,
      document.querySelector('#taskDueInput').value,
      document.querySelector('#taskPriorityInput').checked,
      topic,
    );
    
    topic.addTask(task);
    if (!currentList.topics.includes(topic)) currentList.addTopic(topic);

    console.log(document.querySelector('#taskPriorityInput').checked);

    (0,_DOM_js__WEBPACK_IMPORTED_MODULE_1__.printList)(currentList);
    (0,_defaultLists_js__WEBPACK_IMPORTED_MODULE_6__.updateDefaults)();
    (0,_memoryManagement_js__WEBPACK_IMPORTED_MODULE_5__.saveData)();

    taskDialog.close();
  });
}

function switchTasksCompleteLists(){
  for (const task of _task_js__WEBPACK_IMPORTED_MODULE_4__.allTasks) {
    task.modifyParent();
  }
}



/***/ }),

/***/ "./src/list.js":
/*!*********************!*\
  !*** ./src/list.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   List: () => (/* binding */ List),
/* harmony export */   lists: () => (/* binding */ lists)
/* harmony export */ });
/* harmony import */ var _memoryManagement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./memoryManagement.js */ "./src/memoryManagement.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");




const lists = [];
class List {
  constructor(name, desc = '', parentCategory = null) {
    this.name = name;
    this.description = desc,
    this.topics = [];
    this.addTopic = _utils_js__WEBPACK_IMPORTED_MODULE_1__.addItem.bind(this.topics);
    this.removeTopic = _utils_js__WEBPACK_IMPORTED_MODULE_1__.removeItem.bind(this.topics);
    this.printTopics = _utils_js__WEBPACK_IMPORTED_MODULE_1__.printItems.bind(this.topics);
    this.ID = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.generateID)('LIST-');
    this.parentCategory = parentCategory;
    lists.push(this);
  }

  delete() {
    this.deleteTopics();
    const index = lists.indexOf(this);
    if (index !== -1) {
      lists.splice(index, 1);
    }

    const catIndex = this.parentCategory.lists.indexOf(this);
    if (catIndex !== -1) {
      this.parentCategory.lists.splice(catIndex, 1);
    }
    (0,_memoryManagement_js__WEBPACK_IMPORTED_MODULE_0__.saveData)();
  }

  deleteTopics() {
    const topicCopy = [...this.topics];
    for (const topic of topicCopy) {
      topic.delete();
    }
    (0,_memoryManagement_js__WEBPACK_IMPORTED_MODULE_0__.saveData)();
  }
}



/***/ }),

/***/ "./src/memoryManagement.js":
/*!*********************************!*\
  !*** ./src/memoryManagement.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearData: () => (/* binding */ clearData),
/* harmony export */   organizeObjects: () => (/* binding */ organizeObjects),
/* harmony export */   saveData: () => (/* binding */ saveData),
/* harmony export */   writeData: () => (/* binding */ writeData)
/* harmony export */ });
/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category */ "./src/category.js");
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list */ "./src/list.js");
/* harmony import */ var _topic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./topic */ "./src/topic.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./src/utils.js");






function saveData() {
  const [categoryStorage, listStorage, topicStorage, taskStorage] = extractConstructors();

  localStorage.setItem('categories', JSON.stringify(categoryStorage));
  localStorage.setItem('lists', JSON.stringify(listStorage));
  localStorage.setItem('topics', JSON.stringify(topicStorage));
  localStorage.setItem('allTasks', JSON.stringify(taskStorage));

  // console.log(JSON.stringify(categoryStorage));
  // console.log(JSON.stringify(listStorage));
  // console.log(JSON.stringify(topicStorage));
  // console.log(JSON.parse(JSON.stringify(taskStorage)));
}

function extractConstructors() {
  const categoryStorage = [];
  for (const category of _category__WEBPACK_IMPORTED_MODULE_0__.categories){
    const categoryConstructor = {
      name: category.name
    }
    categoryStorage.push(categoryConstructor);
  }

  const listStorage = [];
  for (const list of _list__WEBPACK_IMPORTED_MODULE_1__.lists) {
    const listConstructor = {
      name: list.name,
      description: list.description,
      parent: list.parentCategory ? list.parentCategory.name : null,
    }
    listStorage.push(listConstructor);
  }

  const topicStorage = [];
  for (const topic of _topic__WEBPACK_IMPORTED_MODULE_2__.topics) {
    const topicConstructor = {
      name: topic.name,
      ID: topic.ID,
      parent: topic.parentList ? topic.parentList.name : null,
    }
    topicStorage.push(topicConstructor);
  }

  const taskStorage = [];
  for (const task of _task__WEBPACK_IMPORTED_MODULE_3__.allTasks){
    const taskConstructor = {
      name: task.name,
      description: task.description,
      dueDate: task.dueDate,
      priority: task.priority,
      parent: task.parentTopic ? task.parentTopic.name : null,
      completed: task.completed,
      notes: task.notes,
    }
    taskStorage.push(taskConstructor);
  }

  return [categoryStorage, listStorage, topicStorage, taskStorage];
}



// returns category, list, topic, and task constructor arrays as an array
function accessData() {
  const categoryStorage = JSON.parse(localStorage.getItem('categories'));
  const listStorage = JSON.parse(localStorage.getItem('lists'));
  const topicStorage = JSON.parse(localStorage.getItem('topics'));
  const taskStorage = JSON.parse(localStorage.getItem('allTasks'));
  
  return [categoryStorage, listStorage, topicStorage, taskStorage];
}

// read json and convert into objects.
function writeData() {
  const [categoryStorage, listStorage, topicStorage, taskStorage] = accessData();

  for (const category of categoryStorage) {
    if (!_category__WEBPACK_IMPORTED_MODULE_0__.categories.some(cat => cat.name === category.name)) {
      const readCategory = new _category__WEBPACK_IMPORTED_MODULE_0__.Category(category.name);
    }
  }

  for (const list of listStorage) {
    if (!_list__WEBPACK_IMPORTED_MODULE_1__.lists.some(lst => lst.name === list.name && lst.description === list.description)) {
      const readList = new _list__WEBPACK_IMPORTED_MODULE_1__.List(list.name, list.description, (0,_utils__WEBPACK_IMPORTED_MODULE_4__.findCategory)(list.parent));
    }
  }

  for (const topic of topicStorage) {
    if (!_topic__WEBPACK_IMPORTED_MODULE_2__.topics.some(tpc => tpc.name === topic.name)) {
      const readTopic = new _topic__WEBPACK_IMPORTED_MODULE_2__.Topic(topic.name, (0,_utils__WEBPACK_IMPORTED_MODULE_4__.findList)(topic.parent));
    }
  }

  for (const task of taskStorage) {
    if (!_task__WEBPACK_IMPORTED_MODULE_3__.allTasks.some(tsk => tsk.name === task.name)) {
      const readTask = new _task__WEBPACK_IMPORTED_MODULE_3__.Task(task.name, task.description, task.dueDate, task.priority, (0,_utils__WEBPACK_IMPORTED_MODULE_4__.findTopic)(task.parent), task.completed)
    }
  }

  organizeObjects();
}

// adds objects to the appropriate parent based on the listed parent inside.
function organizeObjects() {
  for (const list of _list__WEBPACK_IMPORTED_MODULE_1__.lists) {
    if (!list.parentCategory || list.parentCategory.lists.includes(list)) continue;

    list.parentCategory.addList(list);
  }

  for (const topic of _topic__WEBPACK_IMPORTED_MODULE_2__.topics) {
    if (!topic.parentList || topic.parentList.topics.includes(topic)) continue;

    topic.parentList.addTopic(topic);
  }

  for (const task of _task__WEBPACK_IMPORTED_MODULE_3__.allTasks) {
    if (!task.parentTopic || task.parentTopic.tasks.includes(task)) continue;

    task.parentTopic.addTask(task);
  }
}

function clearData() {
  // Clear localStorage
  localStorage.removeItem('categories');
  localStorage.removeItem('lists');
  localStorage.removeItem('topics');
  localStorage.removeItem('allTasks');

  // Clear arrays
  _category__WEBPACK_IMPORTED_MODULE_0__.categories.length = 0;
  _list__WEBPACK_IMPORTED_MODULE_1__.lists.length = 0;
  _topic__WEBPACK_IMPORTED_MODULE_2__.topics.length = 0;
  _task__WEBPACK_IMPORTED_MODULE_3__.allTasks.length = 0;
}



/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Task: () => (/* binding */ Task),
/* harmony export */   allTasks: () => (/* binding */ allTasks)
/* harmony export */ });
/* harmony import */ var _memoryManagement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./memoryManagement.js */ "./src/memoryManagement.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
const allTasks = [];



class Task {
  constructor(name = 'title', desc = 'description', dueDate = '11/04/2024', priority = false, parentTopic = null, completed = false, notes = '', subTasks = [], ) {
    this.name = name;
    this.desc = desc;
    this.dueDate = new Date(dueDate);
    this.priority = priority;
    this.notes = notes;
    this.subTasks = subTasks;
    this.completed = completed;
    this.ID = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.generateID)('TASK-');
    this.parentTopic = parentTopic;
    allTasks.push(this);
  }

  modifyParent() {
    if (!this.completed && !this.parentTopic.tasks.includes(this)) this.parentTopic.addTask(this);
    else if(this.completed && this.parentTopic.tasks.includes(this)) this.parentTopic.removeTask(this);
  }

  toggleComplete() {
    this.completed = this.completed ? false : true;
    (0,_memoryManagement_js__WEBPACK_IMPORTED_MODULE_0__.saveData)();
  }

  togglePriority() {
    this.priority = this.priority ? false : true;
    (0,_memoryManagement_js__WEBPACK_IMPORTED_MODULE_0__.saveData)();
  }

  addSubTask(task){
    this.subTasks.push(task);
  }
  
  delete() {
    const index = allTasks.indexOf(this);
    if (index !== -1) {
      allTasks.splice(index, 1);
    }

    const topicIndex = this.parentTopic.tasks.indexOf(this);
    if (topicIndex !== -1) {
      this.parentTopic.tasks.splice(topicIndex, 1);
    }
    
    (0,_memoryManagement_js__WEBPACK_IMPORTED_MODULE_0__.saveData)();
  }
}



/***/ }),

/***/ "./src/topic.js":
/*!**********************!*\
  !*** ./src/topic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Topic: () => (/* binding */ Topic),
/* harmony export */   topics: () => (/* binding */ topics)
/* harmony export */ });
/* harmony import */ var _memoryManagement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./memoryManagement.js */ "./src/memoryManagement.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");



const topics = []
class Topic {
  constructor(name, parentList = null) {
    this.name = name;
    this.tasks = [];
    this.addTask = _utils_js__WEBPACK_IMPORTED_MODULE_1__.addItem.bind(this.tasks);
    this.removeTask = _utils_js__WEBPACK_IMPORTED_MODULE_1__.removeItem.bind(this.tasks);
    this.printTasks = _utils_js__WEBPACK_IMPORTED_MODULE_1__.printItems.bind(this.tasks);
    this.ID = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.generateID)('TOPI-');
    this.parentList = parentList;
    topics.push(this);
  }

  removeTask(task){
    const topicIndex = this.tasks.indexOf(task);
    if (topicIndex !== -1) {
      this.tasks.splice(topicIndex, 1);
    }
    (0,_memoryManagement_js__WEBPACK_IMPORTED_MODULE_0__.saveData)();
  }

  deleteTasks() {
    const tasksCopy = [...this.tasks];
    for (const task of tasksCopy) {
      task.delete();
    }
    (0,_memoryManagement_js__WEBPACK_IMPORTED_MODULE_0__.saveData)();
  }

  delete() {
    this.deleteTasks();
    const index = topics.indexOf(this);
    if (index !== -1) {
      topics.splice(index, 1);
    }

    const listIndex = this.parentList.topics.indexOf(this);
    if (listIndex !== -1) {
      this.parentList.topics.splice(listIndex, 1);
    }
    (0,_memoryManagement_js__WEBPACK_IMPORTED_MODULE_0__.saveData)();
  }
}



/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addItem: () => (/* binding */ addItem),
/* harmony export */   findCategory: () => (/* binding */ findCategory),
/* harmony export */   findList: () => (/* binding */ findList),
/* harmony export */   findTopic: () => (/* binding */ findTopic),
/* harmony export */   generateID: () => (/* binding */ generateID),
/* harmony export */   printItems: () => (/* binding */ printItems),
/* harmony export */   removeItem: () => (/* binding */ removeItem)
/* harmony export */ });
/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category */ "./src/category.js");
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list */ "./src/list.js");
/* harmony import */ var _topic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./topic */ "./src/topic.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task */ "./src/task.js");





const addItem = function(item) {
  this.push(item);
}

const removeItem = function(item) {
  const index = this.indexOf(item);
  if (index !== -1) {
    this.splice(index, 1);
  }
  else console.log('Not found in list');
}

const printItems = function() {
  for(const item of this){
    console.log(item.name);
  }
}

const generateID = function(prefix) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let id = '';
  for (let i = 0; i < 7; i++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return prefix + id;
}



function findCategory(catName) {
  for (const category of _category__WEBPACK_IMPORTED_MODULE_0__.categories) {
    if (category.name === catName) {
      return category;
    }
  }
  const newCat = new _category__WEBPACK_IMPORTED_MODULE_0__.Category(catName);
  return newCat;
}

function findList(listName) {
  for (const list of _list__WEBPACK_IMPORTED_MODULE_1__.lists) {
    if(list.name === listName){
      return list
    }
  }
}

function findTopic(topicName, list = null) {
  for (const topic of _topic__WEBPACK_IMPORTED_MODULE_2__.topics) {
    if (topic.name === topicName) {
      return topic;
    }
  }
  const newTopic = new _topic__WEBPACK_IMPORTED_MODULE_2__.Topic(topicName, list)
  return newTopic;
}






/***/ }),

/***/ "data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"%23007BFF\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"w-6 h-6\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5\" /></svg>":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" fill="%23007BFF" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" /></svg> ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"%23007BFF\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"w-6 h-6\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5\" /></svg>";

/***/ }),

/***/ "data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"w-6 h-6\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5\" /></svg>":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" /></svg> ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"w-6 h-6\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5\" /></svg>";

/***/ }),

/***/ "./node_modules/date-fns/addDays.mjs":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/addDays.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addDays: () => (/* binding */ addDays),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param amount - The amount of days to be added.
 *
 * @returns The new date with the days added
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */
function addDays(date, amount) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  if (isNaN(amount)) return (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, NaN);
  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return _date;
  }
  _date.setDate(_date.getDate() + amount);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addDays);


/***/ }),

/***/ "./node_modules/date-fns/addWeeks.mjs":
/*!********************************************!*\
  !*** ./node_modules/date-fns/addWeeks.mjs ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addWeeks: () => (/* binding */ addWeeks),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addDays_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addDays.mjs */ "./node_modules/date-fns/addDays.mjs");


/**
 * @name addWeeks
 * @category Week Helpers
 * @summary Add the specified number of weeks to the given date.
 *
 * @description
 * Add the specified number of week to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param amount - The amount of weeks to be added.
 *
 * @returns The new date with the weeks added
 *
 * @example
 * // Add 4 weeks to 1 September 2014:
 * const result = addWeeks(new Date(2014, 8, 1), 4)
 * //=> Mon Sep 29 2014 00:00:00
 */
function addWeeks(date, amount) {
  const days = amount * 7;
  return (0,_addDays_mjs__WEBPACK_IMPORTED_MODULE_0__.addDays)(date, days);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addWeeks);


/***/ }),

/***/ "./node_modules/date-fns/constructFrom.mjs":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/constructFrom.mjs ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   constructFrom: () => (/* binding */ constructFrom),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @name constructFrom
 * @category Generic Helpers
 * @summary Constructs a date using the reference date and the value
 *
 * @description
 * The function constructs a new date using the constructor from the reference
 * date and the given value. It helps to build generic functions that accept
 * date extensions.
 *
 * It defaults to `Date` if the passed reference date is a number or a string.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The reference date to take constructor from
 * @param value - The value to create the date
 *
 * @returns Date initialized using the given date and value
 *
 * @example
 * import { constructFrom } from 'date-fns'
 *
 * // A function that clones a date preserving the original type
 * function cloneDate<DateType extends Date(date: DateType): DateType {
 *   return constructFrom(
 *     date, // Use contrustor from the given date
 *     date.getTime() // Use the date value to create a new date
 *   )
 * }
 */
function constructFrom(date, value) {
  if (date instanceof Date) {
    return new date.constructor(value);
  } else {
    return new Date(value);
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (constructFrom);


/***/ }),

/***/ "./node_modules/date-fns/constructNow.mjs":
/*!************************************************!*\
  !*** ./node_modules/date-fns/constructNow.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   constructNow: () => (/* binding */ constructNow),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");


/**
 * @name constructNow
 * @category Generic Helpers
 * @summary Constructs a new current date using the passed value constructor.
 * @pure false
 *
 * @description
 * The function constructs a new current date using the constructor from
 * the reference date. It helps to build generic functions that accept date
 * extensions and use the current date.
 *
 * It defaults to `Date` if the passed reference date is a number or a string.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The reference date to take constructor from
 *
 * @returns Current date initialized using the given date constructor
 *
 * @example
 * import { constructNow, isSameDay } from 'date-fns'
 *
 * function isToday<DateType extends Date>(
 *   date: DateType | number | string,
 * ): boolean {
 *   // If we were to use `new Date()` directly, the function would  behave
 *   // differently in different timezones and return false for the same date.
 *   return isSameDay(date, constructNow(date));
 * }
 */
function constructNow(date) {
  return (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_0__.constructFrom)(date, Date.now());
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (constructNow);


/***/ }),

/***/ "./node_modules/date-fns/isBefore.mjs":
/*!********************************************!*\
  !*** ./node_modules/date-fns/isBefore.mjs ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isBefore: () => (/* binding */ isBefore)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * @name isBefore
 * @category Common Helpers
 * @summary Is the first date before the second one?
 *
 * @description
 * Is the first date before the second one?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date that should be before the other one to return true
 * @param dateToCompare - The date to compare with
 *
 * @returns The first date is before the second date
 *
 * @example
 * // Is 10 July 1989 before 11 February 1987?
 * const result = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> false
 */
function isBefore(date, dateToCompare) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const _dateToCompare = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateToCompare);
  return +_date < +_dateToCompare;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isBefore);


/***/ }),

/***/ "./node_modules/date-fns/isSameDay.mjs":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/isSameDay.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isSameDay: () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startOfDay.mjs */ "./node_modules/date-fns/startOfDay.mjs");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The first date to check
 * @param dateRight - The second date to check

 * @returns The dates are in the same day (and year and month)
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */
function isSameDay(dateLeft, dateRight) {
  const dateLeftStartOfDay = (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateLeft);
  const dateRightStartOfDay = (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateRight);

  return +dateLeftStartOfDay === +dateRightStartOfDay;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isSameDay);


/***/ }),

/***/ "./node_modules/date-fns/isToday.mjs":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/isToday.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isToday: () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _constructNow_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructNow.mjs */ "./node_modules/date-fns/constructNow.mjs");
/* harmony import */ var _isSameDay_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isSameDay.mjs */ "./node_modules/date-fns/isSameDay.mjs");



/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is today
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * const result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */
function isToday(date) {
  return (0,_isSameDay_mjs__WEBPACK_IMPORTED_MODULE_0__.isSameDay)(date, (0,_constructNow_mjs__WEBPACK_IMPORTED_MODULE_1__.constructNow)(date));
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isToday);


/***/ }),

/***/ "./node_modules/date-fns/startOfDay.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/startOfDay.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfDay: () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of a day
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfDay);


/***/ }),

/***/ "./node_modules/date-fns/toDate.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/toDate.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   toDate: () => (/* binding */ toDate)
/* harmony export */ });
/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param argument - The value to convert
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  const argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (
    argument instanceof Date ||
    (typeof argument === "object" && argStr === "[object Date]")
  ) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new argument.constructor(+argument);
  } else if (
    typeof argument === "number" ||
    argStr === "[object Number]" ||
    typeof argument === "string" ||
    argStr === "[object String]"
  ) {
    // TODO: Can we get rid of as?
    return new Date(argument);
  } else {
    // TODO: Can we get rid of as?
    return new Date(NaN);
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDate);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _category_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category.js */ "./src/category.js");
/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list.js */ "./src/list.js");
/* harmony import */ var _topic_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./topic.js */ "./src/topic.js");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
/* harmony import */ var _eventHandlers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./eventHandlers.js */ "./src/eventHandlers.js");
/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DOM.js */ "./src/DOM.js");
/* harmony import */ var _memoryManagement_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./memoryManagement.js */ "./src/memoryManagement.js");
/* harmony import */ var _defaultLists_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./defaultLists.js */ "./src/defaultLists.js");












(0,_eventHandlers_js__WEBPACK_IMPORTED_MODULE_6__.handleListForm)();
(0,_eventHandlers_js__WEBPACK_IMPORTED_MODULE_6__.handleTaskForm)();


// const exampleCategory = new Category('General');
// const exampleList = new List('Exercise', 'Exercises to do', exampleCategory);
// const exampleList2 = new List('Exercises', 'Exercises to do', exampleCategory);
// const exampleTopic = new Topic('Legs', exampleList);
// const task1 = new Task('Squats', '', '', '', exampleTopic);
// const task2 = new Task('Deadlift', '', '', '', exampleTopic);
// const task3 = new Task('Leg Press', '', '', '', exampleTopic);

// exampleTopic.addTask(task1)
// exampleTopic.addTask(task2)
// exampleTopic.addTask(task3)
// exampleList.addTopic(exampleTopic);
// exampleCategory.addList(exampleList);
// exampleCategory.addList(exampleList2);

// saveData();
(0,_memoryManagement_js__WEBPACK_IMPORTED_MODULE_8__.writeData)();
(0,_defaultLists_js__WEBPACK_IMPORTED_MODULE_9__.updateDefaults)();
(0,_DOM_js__WEBPACK_IMPORTED_MODULE_7__.printList)(_list_js__WEBPACK_IMPORTED_MODULE_2__.lists[0]);
(0,_DOM_js__WEBPACK_IMPORTED_MODULE_7__.printSidebar)();

// clearData();
window.Category = _category_js__WEBPACK_IMPORTED_MODULE_1__.Category;
window.List = _list_js__WEBPACK_IMPORTED_MODULE_2__.List;
window.Topic = _topic_js__WEBPACK_IMPORTED_MODULE_3__.Topic;
window.Task = _task_js__WEBPACK_IMPORTED_MODULE_4__.Task;
window.categories = _category_js__WEBPACK_IMPORTED_MODULE_1__.categories;
window.allTasks = _task_js__WEBPACK_IMPORTED_MODULE_4__.allTasks;
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxhQUFhLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxPQUFPLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLHVCQUF1Qix1QkFBdUIseUJBQXlCLHlCQUF5QixhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sYUFBYSxNQUFNLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFL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cGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL0RPTS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2NhdGVnb3J5LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvZGVmYXVsdExpc3RzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvZXZlbnRIYW5kbGVycy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2xpc3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9tZW1vcnlNYW5hZ2VtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3RvcGljLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9hZGREYXlzLm1qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2FkZFdlZWtzLm1qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2NvbnN0cnVjdEZyb20ubWpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvY29uc3RydWN0Tm93Lm1qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzQmVmb3JlLm1qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzU2FtZURheS5tanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc1RvZGF5Lm1qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0T2ZEYXkubWpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvdG9EYXRlLm1qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgZmlsbD1cXFwibm9uZVxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIiBzdHJva2Utd2lkdGg9XFxcIjEuNVxcXCIgc3Ryb2tlPVxcXCJjdXJyZW50Q29sb3JcXFwiIGNsYXNzPVxcXCJ3LTYgaC02XFxcIj48cGF0aCBzdHJva2UtbGluZWNhcD1cXFwicm91bmRcXFwiIHN0cm9rZS1saW5lam9pbj1cXFwicm91bmRcXFwiIGQ9XFxcIk02IDEyIDMuMjY5IDMuMTI1QTU5Ljc2OSA1OS43NjkgMCAwIDEgMjEuNDg1IDEyIDU5Ljc2OCA1OS43NjggMCAwIDEgMy4yNyAyMC44NzVMNS45OTkgMTJabTAgMGg3LjVcXFwiIC8+PC9zdmc+XCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiBmaWxsPVxcXCIlMjMwMDdCRkZcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIxLjVcXFwiIHN0cm9rZT1cXFwiY3VycmVudENvbG9yXFxcIiBjbGFzcz1cXFwidy02IGgtNlxcXCI+PHBhdGggc3Ryb2tlLWxpbmVjYXA9XFxcInJvdW5kXFxcIiBzdHJva2UtbGluZWpvaW49XFxcInJvdW5kXFxcIiBkPVxcXCJNNiAxMiAzLjI2OSAzLjEyNUE1OS43NjkgNTkuNzY5IDAgMCAxIDIxLjQ4NSAxMiA1OS43NjggNTkuNzY4IDAgMCAxIDMuMjcgMjAuODc1TDUuOTk5IDEyWm0wIDBoNy41XFxcIiAvPjwvc3ZnPlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmJvZHl7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMzAwcHgsIDFmcikgNGZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDE1ZnIgMWZyO1xufVxuXG5hc2lkZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiYmI7XG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcbiAgZ3JpZC1yb3c6IDEgLyAyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDE1cHg7XG4gIHBhZGRpbmc6IDNyZW0gMCAwIDNyZW07XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4uY2F0LWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA1cHg7XG59XG5cbi5jYXRlZ29yeSB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBwYWRkaW5nOiAuMXJlbSAuNzVyZW07XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jYXRlZ29yeTpob3ZlciAuZGVsZXRlLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDFyZW07XG59XG5cbmFzaWRlIGJ1dHRvbiB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHBhZGRpbmc6IC4xcmVtIC43NXJlbTtcbn1cblxuYXNpZGUgYnV0dG9uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5O1xufVxuXG4uc3ViLWNhdCB7XG4gIG1hcmdpbi1sZWZ0OiAuNXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc3ViLWNhdDpob3ZlciAuZGVsZXRlLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDFyZW07XG59XG5cbi5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4jYXNpZGUtZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JiYjtcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICBncmlkLXJvdzogMiAvIDM7XG4gIGJvcmRlci10b3A6IHNvbGlkIDFweCAjOTk5O1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG59XG5cbiNhc2lkZS1mb290ZXIgYnV0dG9uIHtcbiAgcGFkZGluZzogMXJlbTtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5tYWluIHtcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xuICBncmlkLXJvdzogMSAvIDI7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogNnJlbSAxZnI7XG4gIG1hcmdpbjogNHJlbSAycmVtIDAgMnJlbTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xufVxuXG4jbGlzdERlc2NyaXB0aW9uIHtcbiAgbWFyZ2luOiAxcmVtIDAgMCAuNXJlbVxufVxuXG4udG9waWNzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBtYXJnaW46IDFyZW0gMDtcbn1cblxuLnRvcGljLXdyYXBwZXIge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG4udG9waWMtd3JhcHBlcixcbi50YXNrLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xufVxuXG4udG9waWMtd3JhcHBlcjpob3ZlciAuZGVsZXRlLWJ1dHRvbixcbi50YXNrLXdyYXBwZXI6aG92ZXIgLmRlbGV0ZS1idXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwcmVtO1xuICB0b3A6IDNweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBmb250LXNpemU6IDFyZW07XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHBhZGRpbmc6IC4xcmVtIC41cmVtO1xufVxuXG4udG9waWMgLmRlbGV0ZS1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjY2NjO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50YXNrcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBtYXJnaW46IC41cmVtIDAgMCAxcmVtO1xufVxuXG4uY2hlY2std3JhcHBlcjpob3Zlcixcbi5jaGVjay13cmFwcGVyIGxhYmVsOmhvdmVyLFxuLmNoZWNrLXdyYXBwZXIgaW5wdXQ6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50YXNrLXdyYXBwZXI6aG92ZXIgLnByaW9yaXR5IHtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuXG4ucHJpb3JpdHkge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgaGVpZ2h0OiAxLjFyZW07XG4gIHdpZHRoOiAxLjFyZW07XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLnByaW9yaXR5OmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucHJpb3JpdHk6aG92ZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNXB4OyAvKiBhZGp1c3QgYXMgbmVlZGVkICovXG4gIGxlZnQ6IC01cHg7IC8qIGFkanVzdCBhcyBuZWVkZWQgKi9cbiAgd2lkdGg6IGNhbGMoMTAwJSArIDEwcHgpOyAvKiBhZGp1c3QgYXMgbmVlZGVkICovXG4gIGhlaWdodDogY2FsYygxMDAlICsgMTBweCk7IC8qIGFkanVzdCBhcyBuZWVkZWQgKi9cbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICB6LWluZGV4OiAtMTtcbn1cblxuLmltcG9ydGFudCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbn1cblxuLmNvbXBsZXRlZCB7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xufVxuXG4udGFzay1uYW1lIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbmZvb3RlciB7XG4gIGdyaWQtY29sdW1uOiAyIC8gMztcbiAgZ3JpZC1yb3c6IDIgLyAzO1xuICBib3JkZXItdG9wOiBzb2xpZCAxcHggIzk5OTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xufVxuXG5mb290ZXIgYnV0dG9uIHtcbiAgcGFkZGluZzogMXJlbTtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5kaWFsb2cge1xuICB3aWR0aDogODAlO1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICBoZWlnaHQ6IDgwJTtcbiAgbWF4LWhlaWdodDogNDAwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzMCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi5kaWFsb2ctZm9ybSB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5kaWFsb2ctZm9ybSBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMS43cmVtO1xufVxuXG4uZGlhbG9nLWZvcm0gaW5wdXR7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBmb250LXNpemU6IDEuN3JlbTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuZGlhbG9nIC5pbnB1dC13cmFwcGVyIHtcbiAgbWFyZ2luOiAycmVtIGF1dG87XG4gIHdpZHRoOiA3NSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTVweDtcbn1cblxuZGlhbG9nIC5idXR0b24td3JhcHBlciB7XG4gIG1hcmdpbjogYXV0byAwIDJyZW0gMDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG5kaWFsb2c6OmJhY2tkcm9wIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG5kaWFsb2cgYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdCRkY7XG4gIGNvbG9yOiAjZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuZGlhbG9nIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDU2YjM7XG59XG5cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiLDZDQUE2QztFQUM3Qyw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxzQkFBc0I7RUFDdEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNq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LHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5e1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgzMDBweCwgMWZyKSA0ZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDE1ZnIgMWZyO1xcbn1cXG5cXG5hc2lkZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJiO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDE1cHg7XFxuICBwYWRkaW5nOiAzcmVtIDAgMCAzcmVtO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi5jYXQtZ3JvdXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDVweDtcXG59XFxuXFxuLmNhdGVnb3J5IHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBwYWRkaW5nOiAuMXJlbSAuNzVyZW07XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmNhdGVnb3J5OmhvdmVyIC5kZWxldGUtYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDFyZW07XFxufVxcblxcbmFzaWRlIGJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIHBhZGRpbmc6IC4xcmVtIC43NXJlbTtcXG59XFxuXFxuYXNpZGUgYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5OTk7XFxufVxcblxcbi5zdWItY2F0IHtcXG4gIG1hcmdpbi1sZWZ0OiAuNXJlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnN1Yi1jYXQ6aG92ZXIgLmRlbGV0ZS1idXR0b24ge1xcbiAgZGlzcGxheTogaW5saW5lO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMXJlbTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jYXNpZGUtZm9vdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiYmI7XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBncmlkLXJvdzogMiAvIDM7XFxuICBib3JkZXItdG9wOiBzb2xpZCAxcHggIzk5OTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNhc2lkZS1mb290ZXIgYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxubWFpbiB7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBncmlkLXJvdzogMSAvIDI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2cmVtIDFmcjtcXG4gIG1hcmdpbjogNHJlbSAycmVtIDAgMnJlbTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcblxcbiNsaXN0RGVzY3JpcHRpb24ge1xcbiAgbWFyZ2luOiAxcmVtIDAgMCAuNXJlbVxcbn1cXG5cXG4udG9waWNzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgbWFyZ2luOiAxcmVtIDA7XFxufVxcblxcbi50b3BpYy13cmFwcGVyIHtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxufVxcblxcbi50b3BpYy13cmFwcGVyLFxcbi50YXNrLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmctbGVmdDogMnJlbTtcXG59XFxuXFxuLnRvcGljLXdyYXBwZXI6aG92ZXIgLmRlbGV0ZS1idXR0b24sXFxuLnRhc2std3JhcHBlcjpob3ZlciAuZGVsZXRlLWJ1dHRvbiB7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwcmVtO1xcbiAgdG9wOiAzcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBwYWRkaW5nOiAuMXJlbSAuNXJlbTtcXG59XFxuXFxuLnRvcGljIC5kZWxldGUtYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICNjY2M7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgbWFyZ2luOiAuNXJlbSAwIDAgMXJlbTtcXG59XFxuXFxuLmNoZWNrLXdyYXBwZXI6aG92ZXIsXFxuLmNoZWNrLXdyYXBwZXIgbGFiZWw6aG92ZXIsXFxuLmNoZWNrLXdyYXBwZXIgaW5wdXQ6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay13cmFwcGVyOmhvdmVyIC5wcmlvcml0eSB7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxufVxcblxcbi5wcmlvcml0eSB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIxLjVcXFwiIHN0cm9rZT1cXFwiY3VycmVudENvbG9yXFxcIiBjbGFzcz1cXFwidy02IGgtNlxcXCI+PHBhdGggc3Ryb2tlLWxpbmVjYXA9XFxcInJvdW5kXFxcIiBzdHJva2UtbGluZWpvaW49XFxcInJvdW5kXFxcIiBkPVxcXCJNNiAxMiAzLjI2OSAzLjEyNUE1OS43NjkgNTkuNzY5IDAgMCAxIDIxLjQ4NSAxMiA1OS43NjggNTkuNzY4IDAgMCAxIDMuMjcgMjAuODc1TDUuOTk5IDEyWm0wIDBoNy41XFxcIiAvPjwvc3ZnPicpO1xcbiAgaGVpZ2h0OiAxLjFyZW07XFxuICB3aWR0aDogMS4xcmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICBtYXJnaW4tdG9wOiA0cHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5wcmlvcml0eTpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcmlvcml0eTpob3Zlcjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtNXB4OyAvKiBhZGp1c3QgYXMgbmVlZGVkICovXFxuICBsZWZ0OiAtNXB4OyAvKiBhZGp1c3QgYXMgbmVlZGVkICovXFxuICB3aWR0aDogY2FsYygxMDAlICsgMTBweCk7IC8qIGFkanVzdCBhcyBuZWVkZWQgKi9cXG4gIGhlaWdodDogY2FsYygxMDAlICsgMTBweCk7IC8qIGFkanVzdCBhcyBuZWVkZWQgKi9cXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxuICB6LWluZGV4OiAtMTtcXG59XFxuXFxuLmltcG9ydGFudCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgZmlsbD1cXFwiJTIzMDA3QkZGXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiIHN0cm9rZS13aWR0aD1cXFwiMS41XFxcIiBzdHJva2U9XFxcImN1cnJlbnRDb2xvclxcXCIgY2xhc3M9XFxcInctNiBoLTZcXFwiPjxwYXRoIHN0cm9rZS1saW5lY2FwPVxcXCJyb3VuZFxcXCIgc3Ryb2tlLWxpbmVqb2luPVxcXCJyb3VuZFxcXCIgZD1cXFwiTTYgMTIgMy4yNjkgMy4xMjVBNTkuNzY5IDU5Ljc2OSAwIDAgMSAyMS40ODUgMTIgNTkuNzY4IDU5Ljc2OCAwIDAgMSAzLjI3IDIwLjg3NUw1Ljk5OSAxMlptMCAwaDcuNVxcXCIgLz48L3N2Zz4nKTtcXG59XFxuXFxuLmNvbXBsZXRlZCB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLnRhc2stbmFtZSB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuZm9vdGVyIHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIGdyaWQtcm93OiAyIC8gMztcXG4gIGJvcmRlci10b3A6IHNvbGlkIDFweCAjOTk5O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuZm9vdGVyIGJ1dHRvbiB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbmRpYWxvZyB7XFxuICB3aWR0aDogODAlO1xcbiAgbWF4LXdpZHRoOiA1MDBweDtcXG4gIGhlaWdodDogODAlO1xcbiAgbWF4LWhlaWdodDogNDAwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAzMCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuXFxuLmRpYWxvZy1mb3JtIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5kaWFsb2ctZm9ybSBsYWJlbCB7XFxuICBmb250LXNpemU6IDEuN3JlbTtcXG59XFxuXFxuLmRpYWxvZy1mb3JtIGlucHV0e1xcbiAgcGFkZGluZzogNXB4O1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbiAgZm9udC1zaXplOiAxLjdyZW07XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG5kaWFsb2cgLmlucHV0LXdyYXBwZXIge1xcbiAgbWFyZ2luOiAycmVtIGF1dG87XFxuICB3aWR0aDogNzUlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDE1cHg7XFxufVxcblxcbmRpYWxvZyAuYnV0dG9uLXdyYXBwZXIge1xcbiAgbWFyZ2luOiBhdXRvIDAgMnJlbSAwO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG5kaWFsb2c6OmJhY2tkcm9wIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuXFxuZGlhbG9nIGJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3QkZGO1xcbiAgY29sb3I6ICNmZmY7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbmRpYWxvZyBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTZiMztcXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGNhdGVnb3JpZXMgfSBmcm9tICcuL2NhdGVnb3J5LmpzJztcbmltcG9ydCB7IGxpc3RzIH0gZnJvbSAnLi9saXN0LmpzJztcbmltcG9ydCB7IGZpbmRDYXRlZ29yeSwgZmluZExpc3QsIGZpbmRUb3BpYywgIH0gZnJvbSAnLi91dGlscy5qcyc7XG5pbXBvcnQgeyB0b2RheUxpc3QsIHRoaXNXZWVrLCBhbGxUYXNrc0xpc3QsIGNvbXBsZXRlZCwgdXBkYXRlRGVmYXVsdHMsIH0gZnJvbSAnLi9kZWZhdWx0TGlzdHMuanMnO1xuaW1wb3J0IHsgc3dpdGNoVGFza3NDb21wbGV0ZUxpc3RzIH0gZnJvbSAnLi9ldmVudEhhbmRsZXJzLmpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHByaW50TGlzdChsaXN0KSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG4gIG1haW4uaW5uZXJIVE1MID0gJyc7XG5cbiAgY29uc3QgbGlzdEluZm9ybWF0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxpc3RJbmZvcm1hdGlvbi5jbGFzc0xpc3QuYWRkKCdsaXN0SW5mb3JtYXRpb24nKTtcbiAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGgxLmlkID0gJ2N1cnJlbnRMaXN0JztcbiAgaDIuaWQgPSAnbGlzdERlc2NyaXB0aW9uJztcblxuICBoMS50ZXh0Q29udGVudCA9IGxpc3QubmFtZTtcbiAgaDIudGV4dENvbnRlbnQgPSBsaXN0LmRlc2NyaXB0aW9uO1xuXG4gIGxpc3RJbmZvcm1hdGlvbi5hcHBlbmRDaGlsZChoMSk7XG4gIGxpc3RJbmZvcm1hdGlvbi5hcHBlbmRDaGlsZChoMik7XG5cbiAgY29uc3QgdG9waWNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvcGljcy5jbGFzc05hbWUgPSAndG9waWNzJztcblxuICBmb3IgKGNvbnN0IHRvcGljIG9mIGxpc3QudG9waWNzKSB7XG4gICAgaWYgKHRvcGljLnRhc2tzLmxlbmd0aCA9PT0gMCkgY29udGludWU7XG5cbiAgICBjb25zdCB0b3BpY0dyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdG9waWNXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaDJUb3BpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgY29uc3QgYnV0dG9uVG9waWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5cbiAgICB0b3BpY0dyb3VwLmNsYXNzTmFtZSA9ICd0b3BpYyc7XG4gICAgdG9waWNXcmFwcGVyLmNsYXNzTmFtZSA9ICd0b3BpYy13cmFwcGVyJztcbiAgICBoMlRvcGljLmNsYXNzTmFtZSA9ICd0b3BpY05hbWUnO1xuICAgIHRhc2tzLmNsYXNzTmFtZSA9ICd0YXNrcyc7XG5cbiAgICBidXR0b25Ub3BpYy50ZXh0Q29udGVudCA9ICdYJztcbiAgICBidXR0b25Ub3BpYy5jbGFzc0xpc3QuYWRkKCdkZWxldGUtYnV0dG9uJywgJ2hpZGRlbicpO1xuICAgIGgyVG9waWMudGV4dENvbnRlbnQgPSB0b3BpYy5uYW1lO1xuXG4gICAgYnV0dG9uVG9waWMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0b3BpYy5kZWxldGVUYXNrcygpO1xuICAgICAgbGlzdC5yZW1vdmVUb3BpYyh0b3BpYyk7XG4gICAgICBwcmludExpc3QobGlzdCk7XG4gICAgfSk7XG5cbiAgICB0b3BpY1dyYXBwZXIuYXBwZW5kQ2hpbGQoaDJUb3BpYyk7XG4gICAgdG9waWNXcmFwcGVyLmFwcGVuZENoaWxkKGJ1dHRvblRvcGljKTtcblxuICAgIHRvcGljR3JvdXAuYXBwZW5kQ2hpbGQodG9waWNXcmFwcGVyKTtcbiAgICB0b3BpY0dyb3VwLmFwcGVuZENoaWxkKHRhc2tzKTtcblxuICAgIGZvciAoY29uc3QgdGFzayBvZiB0b3BpYy50YXNrcykge1xuICAgICAgY29uc3QgdGFza1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbnN0IGNoZWNrV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgY29uc3QgYnV0dG9uVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgY29uc3QgcHJpb3JpdHlCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICAgIHRhc2tXcmFwcGVyLmNsYXNzTmFtZSA9ICd0YXNrLXdyYXBwZXInO1xuICAgICAgY2hlY2tXcmFwcGVyLmNsYXNzTmFtZSA9ICdjaGVjay13cmFwcGVyJztcbiAgICAgIGxhYmVsLmh0bWxGb3IgPSB0b3BpYy5uYW1lICsgJy0nICsgdGFzay5uYW1lO1xuICAgICAgaW5wdXQudHlwZSA9ICdjaGVja2JveCc7XG4gICAgICBpbnB1dC5uYW1lID0gJ3Rhc2snO1xuICAgICAgaW5wdXQuaWQgPSB0b3BpYy5uYW1lICsgJy0nICsgdGFzay5uYW1lO1xuICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSB0YXNrLm5hbWU7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QgPSAndGFzay1uYW1lJztcbiAgICAgIGJ1dHRvblRhc2sudGV4dENvbnRlbnQgPSAnWCc7XG4gICAgICBidXR0b25UYXNrLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1idXR0b24nLCAnaGlkZGVuJyk7XG4gICAgICBwcmlvcml0eUJ0bi5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eScpO1xuXG4gICAgICBpZiAodGFzay5wcmlvcml0eSkge1xuICAgICAgICBwcmlvcml0eUJ0bi5jbGFzc0xpc3QuYWRkKCdpbXBvcnRhbnQnKTtcbiAgICAgIH0gXG4gICAgICBlbHNlIGlmICghdGFzay5wcmlvcml0eSkge1xuICAgICAgICBwcmlvcml0eUJ0bi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRhc2suY29tcGxldGVkKXtcbiAgICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkJyk7XG4gICAgICAgIGlucHV0LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGFzay50b2dnbGVDb21wbGV0ZSgpO1xuICAgICAgICBjb21wbGV0ZWQudXBkYXRlKCk7XG4gICAgICAgIHByaW50TGlzdChsaXN0KTtcbiAgICAgIH0pXG5cbiAgICAgIGJ1dHRvblRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRhc2suZGVsZXRlKCk7XG4gICAgICAgIHVwZGF0ZURlZmF1bHRzKCk7XG4gICAgICAgIHByaW50TGlzdChsaXN0KTtcbiAgICAgIH0pO1xuXG4gICAgICBwcmlvcml0eUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGFzay50b2dnbGVQcmlvcml0eSgpO1xuICAgICAgICBwcmludExpc3QobGlzdCk7XG4gICAgICB9KVxuXG4gICAgICBjaGVja1dyYXBwZXIuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgICAgY2hlY2tXcmFwcGVyLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgIGNoZWNrV3JhcHBlci5hcHBlbmRDaGlsZChwcmlvcml0eUJ0bik7XG4gICAgICB0YXNrV3JhcHBlci5hcHBlbmRDaGlsZChjaGVja1dyYXBwZXIpO1xuICAgICAgdGFza1dyYXBwZXIuYXBwZW5kQ2hpbGQoYnV0dG9uVGFzayk7XG4gICAgICB0YXNrcy5hcHBlbmRDaGlsZCh0YXNrV3JhcHBlcik7XG4gICAgfVxuICAgIHRvcGljcy5hcHBlbmRDaGlsZCh0b3BpY0dyb3VwKTtcbiAgfVxuXG4gIG1haW4uYXBwZW5kQ2hpbGQobGlzdEluZm9ybWF0aW9uKTtcbiAgbWFpbi5hcHBlbmRDaGlsZCh0b3BpY3MpO1xufVxuXG5mdW5jdGlvbiBwcmludERlZmF1bHQoYXNpZGUpIHtcbiAgY29uc3QgZGVmYXVsdEdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHRvZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHdlZWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgYWxsVGFza3NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgY29tcGxldGVkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgZGVmYXVsdEdyb3VwLmNsYXNzTGlzdC5hZGQoJ2NhdC1ncm91cCcpO1xuICB0b2RheS5jbGFzc0xpc3QuYWRkKCdkZWZhdWx0JywgJ2xpc3RBc2lkZScpO1xuICB3ZWVrLmNsYXNzTGlzdC5hZGQoJ2RlZmF1bHQnLCAnbGlzdEFzaWRlJyk7XG4gIGFsbFRhc2tzRGl2LmNsYXNzTGlzdC5hZGQoJ2RlZmF1bHQnLCAnbGlzdEFzaWRlJyk7XG4gIGNvbXBsZXRlZERpdi5jbGFzc0xpc3QuYWRkKCdkZWZhdWx0JywgJ2xpc3RBc2lkZScpO1xuXG4gIGNvbnN0IHRvZGF5QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbnN0IHdlZWtCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29uc3QgYWxsVGFza3NCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29uc3QgY29tcGxldGVkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgdG9kYXlCdG4udGV4dENvbnRlbnQgPSAnVG9kYXknO1xuICB0b2RheUJ0bi5pZCA9ICd0b2RheSc7XG4gIHdlZWtCdG4udGV4dENvbnRlbnQgPSAnVGhpcyBXZWVrJztcbiAgd2Vla0J0bi5pZCA9ICd0aGlzLXdlZWsnO1xuICBhbGxUYXNrc0J0bi50ZXh0Q29udGVudCA9ICdBbGwgVGFza3MnO1xuICBhbGxUYXNrc0J0bi5pZCA9ICdhbGwtdGFza3MnO1xuICBjb21wbGV0ZWRCdG4udGV4dENvbnRlbnQgPSAnQ29tcGxldGVkJztcbiAgY29tcGxldGVkQnRuLmlkID0gJ2NvbXBsZXRlZCc7XG5cbiAgYWRkU2lkZWJhckxpc3RlbmVycygpO1xuXG4gIHRvZGF5LmFwcGVuZENoaWxkKHRvZGF5QnRuKTtcbiAgd2Vlay5hcHBlbmRDaGlsZCh3ZWVrQnRuKTtcbiAgYWxsVGFza3NEaXYuYXBwZW5kQ2hpbGQoYWxsVGFza3NCdG4pO1xuICBjb21wbGV0ZWREaXYuYXBwZW5kQ2hpbGQoY29tcGxldGVkQnRuKTtcblxuICBkZWZhdWx0R3JvdXAuYXBwZW5kQ2hpbGQodG9kYXkpO1xuICBkZWZhdWx0R3JvdXAuYXBwZW5kQ2hpbGQod2Vlayk7XG4gIGRlZmF1bHRHcm91cC5hcHBlbmRDaGlsZChhbGxUYXNrc0Rpdik7XG5cbiAgYXNpZGUuYXBwZW5kQ2hpbGQoZGVmYXVsdEdyb3VwKTtcbiAgYXNpZGUuYXBwZW5kQ2hpbGQoY29tcGxldGVkRGl2KTtcblxuICBmdW5jdGlvbiBhZGRTaWRlYmFyTGlzdGVuZXJzKCkge1xuICAgIHRvZGF5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdG9kYXlMaXN0LnVwZGF0ZSgpO1xuICAgICAgc3dpdGNoVGFza3NDb21wbGV0ZUxpc3RzKCk7XG4gICAgICBwcmludExpc3QodG9kYXlMaXN0KTtcbiAgICB9KTtcblxuICAgIHdlZWtCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzV2Vlay51cGRhdGUoKTtcbiAgICAgIHN3aXRjaFRhc2tzQ29tcGxldGVMaXN0cygpO1xuICAgICAgcHJpbnRMaXN0KHRoaXNXZWVrKTtcbiAgICB9KTtcblxuICAgIGFsbFRhc2tzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGFsbFRhc2tzTGlzdC51cGRhdGUoKTtcbiAgICAgIHN3aXRjaFRhc2tzQ29tcGxldGVMaXN0cygpO1xuICAgICAgcHJpbnRMaXN0KGFsbFRhc2tzTGlzdCk7XG4gICAgfSk7XG5cbiAgICBjb21wbGV0ZWRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgY29tcGxldGVkLnVwZGF0ZSgpO1xuICAgICAgc3dpdGNoVGFza3NDb21wbGV0ZUxpc3RzKCk7XG4gICAgICBwcmludExpc3QoY29tcGxldGVkKTtcbiAgICB9KTtcbiAgfVxufVxuXG4vLyBCdWlsZCBmdW5jdGlvbiB0byB3cml0ZSBjYXRlZ29yaWVzIChzaWRlYmFyKSB0byBET00gbmV4dCwgdGhlbiB3cml0ZSBmdW5jdGlvbnMgZm9yIGRlZmF1bHQgc2V0LXVwXG5leHBvcnQgZnVuY3Rpb24gcHJpbnRTaWRlYmFyKCkge1xuICBjb25zdCBhc2lkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2FzaWRlJyk7XG4gIGFzaWRlLmlubmVySFRNTCA9ICcnO1xuXG4gIHByaW50RGVmYXVsdChhc2lkZSk7XG5cbiAgZm9yIChjb25zdCBjYXRlZ29yeSBvZiBjYXRlZ29yaWVzKSB7XG4gICAgY29uc3QgY2F0R3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXRHcm91cC5jbGFzc0xpc3QuYWRkKCdjYXQtZ3JvdXAnKTtcblxuICAgIGNvbnN0IGNhdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhdERpdi5jbGFzc0xpc3QuYWRkKCdjYXRlZ29yeScpO1xuICAgIGNhdERpdi50ZXh0Q29udGVudCA9IGNhdGVnb3J5Lm5hbWU7XG5cbiAgICBjb25zdCBjYXREZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjYXREZWxldGUudGV4dENvbnRlbnQgPSAnWCc7XG4gICAgY2F0RGVsZXRlLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicsICdkZWxldGUtYnV0dG9uJyk7XG4gICAgY2F0RGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY2F0ZWdvcnkuZGVsZXRlKCk7XG4gICAgICBwcmludFNpZGViYXIoKTtcbiAgICB9KTtcblxuICAgIGNhdERpdi5hcHBlbmRDaGlsZChjYXREZWxldGUpO1xuXG4gICAgY2F0R3JvdXAuYXBwZW5kQ2hpbGQoY2F0RGl2KTtcbiAgICBmb3IgKGNvbnN0IGxpc3Qgb2YgY2F0ZWdvcnkubGlzdHMpIHtcbiAgICAgIGNvbnN0IGxpc3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGxpc3REaXYuY2xhc3NMaXN0LmFkZCgnbGlzdEFzaWRlJywgJ3N1Yi1jYXQnKTtcblxuICAgICAgY29uc3QgbGlzdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgbGlzdEJ0bi50ZXh0Q29udGVudCA9IGxpc3QubmFtZTtcbiAgICAgIGxpc3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCBsaXN0ID0gZmluZExpc3QoZS50YXJnZXQudGV4dENvbnRlbnQpO1xuICAgICAgICBzd2l0Y2hUYXNrc0NvbXBsZXRlTGlzdHMoKTtcbiAgICAgICAgcHJpbnRMaXN0KGxpc3QpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGxpc3REZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIGxpc3REZWxldGUudGV4dENvbnRlbnQgPSAnWCc7XG4gICAgICBsaXN0RGVsZXRlLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicsICdkZWxldGUtYnV0dG9uJyk7XG4gICAgICBsaXN0RGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBsaXN0LmRlbGV0ZSgpO1xuICAgICAgICBwcmludFNpZGViYXIoKTtcbiAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50TGlzdCcpLnRleHRDb250ZW50ID09PSBsaXN0Lm5hbWUpIHByaW50TGlzdChsaXN0c1swXSk7XG4gICAgICB9KTtcblxuICAgICAgbGlzdERpdi5hcHBlbmRDaGlsZChsaXN0QnRuKTtcbiAgICAgIGxpc3REaXYuYXBwZW5kQ2hpbGQobGlzdERlbGV0ZSk7XG4gICAgICBjYXRHcm91cC5hcHBlbmRDaGlsZChsaXN0RGl2KTtcbiAgICB9XG4gICAgYXNpZGUuYXBwZW5kQ2hpbGQoY2F0R3JvdXApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBzYXZlRGF0YSB9IGZyb20gJy4vbWVtb3J5TWFuYWdlbWVudC5qcyc7XG5pbXBvcnQgeyBhZGRJdGVtLCByZW1vdmVJdGVtLCBwcmludEl0ZW1zLCBnZW5lcmF0ZUlEIH0gZnJvbSAnLi91dGlscy5qcyc7XG5cbmNvbnN0IGNhdGVnb3JpZXMgPSBbXTtcblxuY2xhc3MgQ2F0ZWdvcnkge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmxpc3RzID0gW107XG4gICAgdGhpcy5hZGRMaXN0ID0gYWRkSXRlbS5iaW5kKHRoaXMubGlzdHMpO1xuICAgIHRoaXMucmVtb3ZlTGlzdCA9IHJlbW92ZUl0ZW0uYmluZCh0aGlzLmxpc3RzKTtcbiAgICB0aGlzLnByaW50TGlzdHMgPSBwcmludEl0ZW1zLmJpbmQodGhpcy5saXN0cyk7XG4gICAgdGhpcy5JRCA9IGdlbmVyYXRlSUQoJ0NBVEUtJyk7XG4gICAgY2F0ZWdvcmllcy5wdXNoKHRoaXMpO1xuICB9XG5cbiAgZGVsZXRlKCkge1xuICAgIHRoaXMuZGVsZXRlTGlzdHMoKTtcbiAgICBjb25zdCBpbmRleCA9IGNhdGVnb3JpZXMuaW5kZXhPZih0aGlzKTtcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBjYXRlZ29yaWVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuXG4gICAgc2F2ZURhdGEoKTtcbiAgfVxuXG4gIGRlbGV0ZUxpc3RzKCkge1xuICAgIGNvbnN0IGxpc3RDb3B5ID0gWy4uLnRoaXMubGlzdHNdO1xuICAgIGZvciAoY29uc3QgbGlzdCBvZiBsaXN0Q29weSkge1xuICAgICAgbGlzdC5kZWxldGUoKTtcbiAgICB9XG5cbiAgICBzYXZlRGF0YSgpO1xuICB9XG59XG5cbmV4cG9ydCB7IENhdGVnb3J5LCBjYXRlZ29yaWVzIH07IiwiaW1wb3J0IHsgQ2F0ZWdvcnksIGNhdGVnb3JpZXMgfSBmcm9tICcuL2NhdGVnb3J5LmpzJztcbmltcG9ydCB7IExpc3QsIGxpc3RzIH0gZnJvbSAnLi9saXN0LmpzJztcbmltcG9ydCB7IFRvcGljLCB0b3BpY3MgfSBmcm9tICcuL3RvcGljLmpzJztcbmltcG9ydCB7IFRhc2ssIGFsbFRhc2tzIH0gZnJvbSAnLi90YXNrLmpzJztcbmltcG9ydCB7IGZpbmRDYXRlZ29yeSwgZmluZExpc3QsIGZpbmRUb3BpYywgfSBmcm9tICcuL3V0aWxzLmpzJztcbmltcG9ydCB7IGFkZFdlZWtzLCBpc0JlZm9yZSwgaXNUb2RheSB9IGZyb20gXCJkYXRlLWZuc1wiO1xuXG5jb25zdCB0b2RheUxpc3QgPSBuZXcgTGlzdCAoJ1RvZGF5JywgJ1Rhc2tzIG9mIHRoZSBkYXknKTtcbnRvZGF5TGlzdC5hZGRUb3BpYyhuZXcgVG9waWMoJ1doYXQgYXJlIHdlIGdldHRpbmcgZG9uZT8nLCB0b2RheUxpc3QpKTtcbnRvZGF5TGlzdC51cGRhdGUgPSBmdW5jdGlvbigpIHtcbiAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICBmb3IgKGNvbnN0IHRhc2sgb2YgYWxsVGFza3MpIHtcbiAgICBpZiAoKGlzQmVmb3JlKHRhc2suZHVlRGF0ZSwgdG9kYXkpIHx8IGlzVG9kYXkodGFzay5kdWVEYXRlLCB0b2RheSkpICYmICF0aGlzLnRvcGljc1swXS50YXNrcy5pbmNsdWRlcyh0YXNrKSkgdGhpcy50b3BpY3NbMF0uYWRkVGFzayh0YXNrKTtcbiAgICBlbHNlIGlmICghaXNCZWZvcmUodGFzay5kdWVEYXRlLCB0b2RheSkgJiYgIWlzVG9kYXkodGFzay5kdWVEYXRlLCB0b2RheSkpIHRoaXMudG9waWNzWzBdLnJlbW92ZVRhc2sodGFzayk7XG4gIH0gXG5cbiAgZm9yIChjb25zdCB0YXNrIG9mIHRoaXMudG9waWNzWzBdLnRhc2tzKSB7XG4gICAgaWYgKCFhbGxUYXNrcy5pbmNsdWRlcyh0YXNrKSkgdGhpcy50b3BpY3NbMF0ucmVtb3ZlVGFzayh0YXNrKTtcbiAgfVxufTtcblxuY29uc3QgdGhpc1dlZWsgPSBuZXcgTGlzdCgnVGhpcyBXZWVrJywgJ1Rhc2tzIGZvciB0aGlzIHdlZWsnKTtcbnRoaXNXZWVrLmFkZFRvcGljKG5ldyBUb3BpYyhcIlRoaXMgV2VlaydzIFRhc2tzXCIsIHRoaXNXZWVrKSk7XG50aGlzV2Vlay51cGRhdGUgPSBmdW5jdGlvbigpIHtcbiAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCBuZXh0V2VlayA9IGFkZFdlZWtzKHRvZGF5LCAxKTtcbiAgZm9yIChjb25zdCB0YXNrIG9mIGFsbFRhc2tzKSB7XG4gICAgaWYgKGlzQmVmb3JlKHRhc2suZHVlRGF0ZSwgbmV4dFdlZWspICYmICF0aGlzLnRvcGljc1swXS50YXNrcy5pbmNsdWRlcyh0YXNrKSkgdGhpcy50b3BpY3NbMF0uYWRkVGFzayh0YXNrKTtcbiAgICBlbHNlIGlmICghaXNCZWZvcmUodGFzay5kdWVEYXRlLCBuZXh0V2VlaykpIHRoaXMudG9waWNzWzBdLnJlbW92ZVRhc2sodGFzayk7XG4gIH0gXG5cbiAgZm9yIChjb25zdCB0YXNrIG9mIHRoaXMudG9waWNzWzBdLnRhc2tzKSB7XG4gICAgaWYgKCFhbGxUYXNrcy5pbmNsdWRlcyh0YXNrKSkgdGhpcy50b3BpY3NbMF0ucmVtb3ZlVGFzayh0YXNrKTtcbiAgfVxufTtcblxuY29uc3QgYWxsVGFza3NMaXN0ID0gbmV3IExpc3QoJ0FsbCBUYXNrcycsICdUYXNrcyBjb2xsZWN0ZWQgZnJvbSBhbGwgbGlzdHMnKTtcbmFsbFRhc2tzTGlzdC5hZGRUb3BpYyhuZXcgVG9waWMoJ0FsbCBUYXNrcycpKTtcbmFsbFRhc2tzTGlzdC51cGRhdGUgPSBmdW5jdGlvbigpIHtcbiAgYWxsVGFza3NMaXN0LnRvcGljc1swXS50YXNrcyA9IGFsbFRhc2tzO1xufVxuXG5jb25zdCBjb21wbGV0ZWQgPSBuZXcgTGlzdCgnQ29tcGxldGVkJywgJ1Bhc3QgdGFza3MnKTtcbmNvbXBsZXRlZC5hZGRUb3BpYyhuZXcgVG9waWMoJ0NvbXBsZXRlZCBUYXNrcycsIGNvbXBsZXRlZCkpO1xuY29tcGxldGVkLnVwZGF0ZSA9IGZ1bmN0aW9uKCkge1xuICBmb3IgKGNvbnN0IHRhc2sgb2YgYWxsVGFza3MpIHtcbiAgICBpZiAodGFzay5jb21wbGV0ZWQgJiYgIXRoaXMudG9waWNzWzBdLnRhc2tzLmluY2x1ZGVzKHRhc2spKSB0aGlzLnRvcGljc1swXS5hZGRUYXNrKHRhc2spO1xuICAgIGVsc2UgaWYgKCF0YXNrLmNvbXBsZXRlZCkgdGhpcy50b3BpY3NbMF0ucmVtb3ZlVGFzayh0YXNrKTtcbiAgfSBcblxuICBmb3IgKGNvbnN0IHRhc2sgb2YgdGhpcy50b3BpY3NbMF0udGFza3MpIHtcbiAgICBpZiAoIWFsbFRhc2tzLmluY2x1ZGVzKHRhc2spKSB0aGlzLnRvcGljc1swXS5yZW1vdmVUYXNrKHRhc2spO1xuICB9XG59O1xuXG5mdW5jdGlvbiB1cGRhdGVEZWZhdWx0cygpe1xuICB0b2RheUxpc3QudXBkYXRlKCk7XG4gIHRoaXNXZWVrLnVwZGF0ZSgpO1xuICBhbGxUYXNrc0xpc3QudXBkYXRlKCk7XG4gIGNvbXBsZXRlZC51cGRhdGUoKTtcbn1cblxuXG5leHBvcnQgeyB0b2RheUxpc3QsIHRoaXNXZWVrLCBhbGxUYXNrc0xpc3QsIGNvbXBsZXRlZCwgdXBkYXRlRGVmYXVsdHMgfSIsImltcG9ydCB7IGZpbmRDYXRlZ29yeSwgZmluZExpc3QsIGZpbmRUb3BpYyB9IGZyb20gJy4vdXRpbHMuanMnO1xuaW1wb3J0IHsgcHJpbnRMaXN0LCBwcmludFNpZGViYXIgfSBmcm9tICcuL0RPTS5qcyc7XG5pbXBvcnQgeyBMaXN0LCBsaXN0cyB9IGZyb20gJy4vbGlzdC5qcyc7XG5pbXBvcnQgeyBUb3BpYywgdG9waWNzIH0gZnJvbSAnLi90b3BpYy5qcyc7XG5pbXBvcnQgeyBUYXNrLCBhbGxUYXNrcyB9IGZyb20gJy4vdGFzay5qcyc7XG5pbXBvcnQgeyBzYXZlRGF0YSB9IGZyb20gJy4vbWVtb3J5TWFuYWdlbWVudC5qcyc7XG5pbXBvcnQgeyB1cGRhdGVEZWZhdWx0cyB9IGZyb20gJy4vZGVmYXVsdExpc3RzLmpzJztcblxuZnVuY3Rpb24gaGFuZGxlTGlzdEZvcm0oKSB7XG4gIGNvbnN0IHNob3dMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3dMaXN0RGlhbG9nJyk7XG4gIGNvbnN0IGxpc3REaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdERpYWxvZycpO1xuICBjb25zdCBsaXN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0Rm9ybScpO1xuICBjb25zdCBsaXN0Q2FuY2VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3RDYW5jZWxCdG4nKVxuICBcbiAgbGlzdENhbmNlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gbGlzdERpYWxvZy5jbG9zZSgpKTtcbiAgc2hvd0xpc3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGxpc3REaWFsb2cuc2hvd01vZGFsKCkpO1xuICBsaXN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBcbiAgICBjb25zdCBjYXRlZ29yeSA9IGZpbmRDYXRlZ29yeShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGlzdENhdGVnb3J5SW5wdXQnKS52YWx1ZSk7XG4gICAgY29uc3QgbGlzdCA9IG5ldyBMaXN0KFxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpc3ROYW1lSW5wdXQnKS52YWx1ZSxcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsaXN0RGVzY3JpcHRpb25JbnB1dCcpLnZhbHVlLFxuICAgICAgY2F0ZWdvcnkpO1xuICAgIFxuICAgIGNhdGVnb3J5LmFkZExpc3QobGlzdCk7XG4gIFxuICAgIHByaW50U2lkZWJhcigpO1xuICAgIHNhdmVEYXRhKCk7XG4gIFxuICAgIGxpc3REaWFsb2cuY2xvc2UoKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVRhc2tGb3JtKCl7XG4gIGNvbnN0IHNob3dUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3dUYXNrRGlhbG9nJyk7XG4gIGNvbnN0IHRhc2tEaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0RpYWxvZycpO1xuICBjb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrRm9ybScpO1xuICBjb25zdCB0YXNrQ2FuY2VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tDYW5jZWxCdG4nKTtcblxuICB0YXNrQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0YXNrRGlhbG9nLmNsb3NlKCkpO1xuICBzaG93VGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGFza0RpYWxvZy5zaG93TW9kYWwoKSk7XG4gIHRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgY3VycmVudExpc3QgPSBmaW5kTGlzdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudExpc3QnKS50ZXh0Q29udGVudCk7XG4gICAgY29uc3QgdG9waWMgPSBmaW5kVG9waWMoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tUb3BpY0lucHV0JykudmFsdWUsIGN1cnJlbnRMaXN0KTtcbiAgICBjb25zdCB0YXNrID0gbmV3IFRhc2soXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza05hbWVJbnB1dCcpLnZhbHVlLFxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tEZXNjcmlwdGlvbklucHV0JykudmFsdWUsXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza0R1ZUlucHV0JykudmFsdWUsXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza1ByaW9yaXR5SW5wdXQnKS5jaGVja2VkLFxuICAgICAgdG9waWMsXG4gICAgKTtcbiAgICBcbiAgICB0b3BpYy5hZGRUYXNrKHRhc2spO1xuICAgIGlmICghY3VycmVudExpc3QudG9waWNzLmluY2x1ZGVzKHRvcGljKSkgY3VycmVudExpc3QuYWRkVG9waWModG9waWMpO1xuXG4gICAgY29uc29sZS5sb2coZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tQcmlvcml0eUlucHV0JykuY2hlY2tlZCk7XG5cbiAgICBwcmludExpc3QoY3VycmVudExpc3QpO1xuICAgIHVwZGF0ZURlZmF1bHRzKCk7XG4gICAgc2F2ZURhdGEoKTtcblxuICAgIHRhc2tEaWFsb2cuY2xvc2UoKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHN3aXRjaFRhc2tzQ29tcGxldGVMaXN0cygpe1xuICBmb3IgKGNvbnN0IHRhc2sgb2YgYWxsVGFza3MpIHtcbiAgICB0YXNrLm1vZGlmeVBhcmVudCgpO1xuICB9XG59XG5cbmV4cG9ydCB7IGhhbmRsZUxpc3RGb3JtLCBoYW5kbGVUYXNrRm9ybSwgc3dpdGNoVGFza3NDb21wbGV0ZUxpc3RzIH0iLCJpbXBvcnQgeyBzYXZlRGF0YSB9IGZyb20gJy4vbWVtb3J5TWFuYWdlbWVudC5qcyc7XG5pbXBvcnQgeyBhZGRJdGVtLCByZW1vdmVJdGVtLCBwcmludEl0ZW1zLCBnZW5lcmF0ZUlEIH0gZnJvbSAnLi91dGlscy5qcyc7XG5cblxuY29uc3QgbGlzdHMgPSBbXTtcbmNsYXNzIExpc3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBkZXNjID0gJycsIHBhcmVudENhdGVnb3J5ID0gbnVsbCkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2MsXG4gICAgdGhpcy50b3BpY3MgPSBbXTtcbiAgICB0aGlzLmFkZFRvcGljID0gYWRkSXRlbS5iaW5kKHRoaXMudG9waWNzKTtcbiAgICB0aGlzLnJlbW92ZVRvcGljID0gcmVtb3ZlSXRlbS5iaW5kKHRoaXMudG9waWNzKTtcbiAgICB0aGlzLnByaW50VG9waWNzID0gcHJpbnRJdGVtcy5iaW5kKHRoaXMudG9waWNzKTtcbiAgICB0aGlzLklEID0gZ2VuZXJhdGVJRCgnTElTVC0nKTtcbiAgICB0aGlzLnBhcmVudENhdGVnb3J5ID0gcGFyZW50Q2F0ZWdvcnk7XG4gICAgbGlzdHMucHVzaCh0aGlzKTtcbiAgfVxuXG4gIGRlbGV0ZSgpIHtcbiAgICB0aGlzLmRlbGV0ZVRvcGljcygpO1xuICAgIGNvbnN0IGluZGV4ID0gbGlzdHMuaW5kZXhPZih0aGlzKTtcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBsaXN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cblxuICAgIGNvbnN0IGNhdEluZGV4ID0gdGhpcy5wYXJlbnRDYXRlZ29yeS5saXN0cy5pbmRleE9mKHRoaXMpO1xuICAgIGlmIChjYXRJbmRleCAhPT0gLTEpIHtcbiAgICAgIHRoaXMucGFyZW50Q2F0ZWdvcnkubGlzdHMuc3BsaWNlKGNhdEluZGV4LCAxKTtcbiAgICB9XG4gICAgc2F2ZURhdGEoKTtcbiAgfVxuXG4gIGRlbGV0ZVRvcGljcygpIHtcbiAgICBjb25zdCB0b3BpY0NvcHkgPSBbLi4udGhpcy50b3BpY3NdO1xuICAgIGZvciAoY29uc3QgdG9waWMgb2YgdG9waWNDb3B5KSB7XG4gICAgICB0b3BpYy5kZWxldGUoKTtcbiAgICB9XG4gICAgc2F2ZURhdGEoKTtcbiAgfVxufVxuXG5leHBvcnQgeyBMaXN0LCBsaXN0cyB9OyIsImltcG9ydCB7IENhdGVnb3J5LCBjYXRlZ29yaWVzIH0gZnJvbSBcIi4vY2F0ZWdvcnlcIjtcbmltcG9ydCB7IExpc3QsIGxpc3RzIH0gZnJvbSBcIi4vbGlzdFwiO1xuaW1wb3J0IHsgVG9waWMsIHRvcGljcyB9IGZyb20gXCIuL3RvcGljXCI7XG5pbXBvcnQgeyBUYXNrLCBhbGxUYXNrcyB9IGZyb20gXCIuL3Rhc2tcIjtcbmltcG9ydCB7IGZpbmRDYXRlZ29yeSwgZmluZExpc3QsIGZpbmRUb3BpYywgZmluZFRvcGljQnlJRCB9IGZyb20gXCIuL3V0aWxzXCI7XG5cbmZ1bmN0aW9uIHNhdmVEYXRhKCkge1xuICBjb25zdCBbY2F0ZWdvcnlTdG9yYWdlLCBsaXN0U3RvcmFnZSwgdG9waWNTdG9yYWdlLCB0YXNrU3RvcmFnZV0gPSBleHRyYWN0Q29uc3RydWN0b3JzKCk7XG5cbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhdGVnb3JpZXMnLCBKU09OLnN0cmluZ2lmeShjYXRlZ29yeVN0b3JhZ2UpKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xpc3RzJywgSlNPTi5zdHJpbmdpZnkobGlzdFN0b3JhZ2UpKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvcGljcycsIEpTT04uc3RyaW5naWZ5KHRvcGljU3RvcmFnZSkpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWxsVGFza3MnLCBKU09OLnN0cmluZ2lmeSh0YXNrU3RvcmFnZSkpO1xuXG4gIC8vIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGNhdGVnb3J5U3RvcmFnZSkpO1xuICAvLyBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShsaXN0U3RvcmFnZSkpO1xuICAvLyBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0b3BpY1N0b3JhZ2UpKTtcbiAgLy8gY29uc29sZS5sb2coSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0YXNrU3RvcmFnZSkpKTtcbn1cblxuZnVuY3Rpb24gZXh0cmFjdENvbnN0cnVjdG9ycygpIHtcbiAgY29uc3QgY2F0ZWdvcnlTdG9yYWdlID0gW107XG4gIGZvciAoY29uc3QgY2F0ZWdvcnkgb2YgY2F0ZWdvcmllcyl7XG4gICAgY29uc3QgY2F0ZWdvcnlDb25zdHJ1Y3RvciA9IHtcbiAgICAgIG5hbWU6IGNhdGVnb3J5Lm5hbWVcbiAgICB9XG4gICAgY2F0ZWdvcnlTdG9yYWdlLnB1c2goY2F0ZWdvcnlDb25zdHJ1Y3Rvcik7XG4gIH1cblxuICBjb25zdCBsaXN0U3RvcmFnZSA9IFtdO1xuICBmb3IgKGNvbnN0IGxpc3Qgb2YgbGlzdHMpIHtcbiAgICBjb25zdCBsaXN0Q29uc3RydWN0b3IgPSB7XG4gICAgICBuYW1lOiBsaXN0Lm5hbWUsXG4gICAgICBkZXNjcmlwdGlvbjogbGlzdC5kZXNjcmlwdGlvbixcbiAgICAgIHBhcmVudDogbGlzdC5wYXJlbnRDYXRlZ29yeSA/IGxpc3QucGFyZW50Q2F0ZWdvcnkubmFtZSA6IG51bGwsXG4gICAgfVxuICAgIGxpc3RTdG9yYWdlLnB1c2gobGlzdENvbnN0cnVjdG9yKTtcbiAgfVxuXG4gIGNvbnN0IHRvcGljU3RvcmFnZSA9IFtdO1xuICBmb3IgKGNvbnN0IHRvcGljIG9mIHRvcGljcykge1xuICAgIGNvbnN0IHRvcGljQ29uc3RydWN0b3IgPSB7XG4gICAgICBuYW1lOiB0b3BpYy5uYW1lLFxuICAgICAgSUQ6IHRvcGljLklELFxuICAgICAgcGFyZW50OiB0b3BpYy5wYXJlbnRMaXN0ID8gdG9waWMucGFyZW50TGlzdC5uYW1lIDogbnVsbCxcbiAgICB9XG4gICAgdG9waWNTdG9yYWdlLnB1c2godG9waWNDb25zdHJ1Y3Rvcik7XG4gIH1cblxuICBjb25zdCB0YXNrU3RvcmFnZSA9IFtdO1xuICBmb3IgKGNvbnN0IHRhc2sgb2YgYWxsVGFza3Mpe1xuICAgIGNvbnN0IHRhc2tDb25zdHJ1Y3RvciA9IHtcbiAgICAgIG5hbWU6IHRhc2submFtZSxcbiAgICAgIGRlc2NyaXB0aW9uOiB0YXNrLmRlc2NyaXB0aW9uLFxuICAgICAgZHVlRGF0ZTogdGFzay5kdWVEYXRlLFxuICAgICAgcHJpb3JpdHk6IHRhc2sucHJpb3JpdHksXG4gICAgICBwYXJlbnQ6IHRhc2sucGFyZW50VG9waWMgPyB0YXNrLnBhcmVudFRvcGljLm5hbWUgOiBudWxsLFxuICAgICAgY29tcGxldGVkOiB0YXNrLmNvbXBsZXRlZCxcbiAgICAgIG5vdGVzOiB0YXNrLm5vdGVzLFxuICAgIH1cbiAgICB0YXNrU3RvcmFnZS5wdXNoKHRhc2tDb25zdHJ1Y3Rvcik7XG4gIH1cblxuICByZXR1cm4gW2NhdGVnb3J5U3RvcmFnZSwgbGlzdFN0b3JhZ2UsIHRvcGljU3RvcmFnZSwgdGFza1N0b3JhZ2VdO1xufVxuXG5cblxuLy8gcmV0dXJucyBjYXRlZ29yeSwgbGlzdCwgdG9waWMsIGFuZCB0YXNrIGNvbnN0cnVjdG9yIGFycmF5cyBhcyBhbiBhcnJheVxuZnVuY3Rpb24gYWNjZXNzRGF0YSgpIHtcbiAgY29uc3QgY2F0ZWdvcnlTdG9yYWdlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2F0ZWdvcmllcycpKTtcbiAgY29uc3QgbGlzdFN0b3JhZ2UgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsaXN0cycpKTtcbiAgY29uc3QgdG9waWNTdG9yYWdlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9waWNzJykpO1xuICBjb25zdCB0YXNrU3RvcmFnZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FsbFRhc2tzJykpO1xuICBcbiAgcmV0dXJuIFtjYXRlZ29yeVN0b3JhZ2UsIGxpc3RTdG9yYWdlLCB0b3BpY1N0b3JhZ2UsIHRhc2tTdG9yYWdlXTtcbn1cblxuLy8gcmVhZCBqc29uIGFuZCBjb252ZXJ0IGludG8gb2JqZWN0cy5cbmZ1bmN0aW9uIHdyaXRlRGF0YSgpIHtcbiAgY29uc3QgW2NhdGVnb3J5U3RvcmFnZSwgbGlzdFN0b3JhZ2UsIHRvcGljU3RvcmFnZSwgdGFza1N0b3JhZ2VdID0gYWNjZXNzRGF0YSgpO1xuXG4gIGZvciAoY29uc3QgY2F0ZWdvcnkgb2YgY2F0ZWdvcnlTdG9yYWdlKSB7XG4gICAgaWYgKCFjYXRlZ29yaWVzLnNvbWUoY2F0ID0+IGNhdC5uYW1lID09PSBjYXRlZ29yeS5uYW1lKSkge1xuICAgICAgY29uc3QgcmVhZENhdGVnb3J5ID0gbmV3IENhdGVnb3J5KGNhdGVnb3J5Lm5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIGZvciAoY29uc3QgbGlzdCBvZiBsaXN0U3RvcmFnZSkge1xuICAgIGlmICghbGlzdHMuc29tZShsc3QgPT4gbHN0Lm5hbWUgPT09IGxpc3QubmFtZSAmJiBsc3QuZGVzY3JpcHRpb24gPT09IGxpc3QuZGVzY3JpcHRpb24pKSB7XG4gICAgICBjb25zdCByZWFkTGlzdCA9IG5ldyBMaXN0KGxpc3QubmFtZSwgbGlzdC5kZXNjcmlwdGlvbiwgZmluZENhdGVnb3J5KGxpc3QucGFyZW50KSk7XG4gICAgfVxuICB9XG5cbiAgZm9yIChjb25zdCB0b3BpYyBvZiB0b3BpY1N0b3JhZ2UpIHtcbiAgICBpZiAoIXRvcGljcy5zb21lKHRwYyA9PiB0cGMubmFtZSA9PT0gdG9waWMubmFtZSkpIHtcbiAgICAgIGNvbnN0IHJlYWRUb3BpYyA9IG5ldyBUb3BpYyh0b3BpYy5uYW1lLCBmaW5kTGlzdCh0b3BpYy5wYXJlbnQpKTtcbiAgICB9XG4gIH1cblxuICBmb3IgKGNvbnN0IHRhc2sgb2YgdGFza1N0b3JhZ2UpIHtcbiAgICBpZiAoIWFsbFRhc2tzLnNvbWUodHNrID0+IHRzay5uYW1lID09PSB0YXNrLm5hbWUpKSB7XG4gICAgICBjb25zdCByZWFkVGFzayA9IG5ldyBUYXNrKHRhc2submFtZSwgdGFzay5kZXNjcmlwdGlvbiwgdGFzay5kdWVEYXRlLCB0YXNrLnByaW9yaXR5LCBmaW5kVG9waWModGFzay5wYXJlbnQpLCB0YXNrLmNvbXBsZXRlZClcbiAgICB9XG4gIH1cblxuICBvcmdhbml6ZU9iamVjdHMoKTtcbn1cblxuLy8gYWRkcyBvYmplY3RzIHRvIHRoZSBhcHByb3ByaWF0ZSBwYXJlbnQgYmFzZWQgb24gdGhlIGxpc3RlZCBwYXJlbnQgaW5zaWRlLlxuZnVuY3Rpb24gb3JnYW5pemVPYmplY3RzKCkge1xuICBmb3IgKGNvbnN0IGxpc3Qgb2YgbGlzdHMpIHtcbiAgICBpZiAoIWxpc3QucGFyZW50Q2F0ZWdvcnkgfHwgbGlzdC5wYXJlbnRDYXRlZ29yeS5saXN0cy5pbmNsdWRlcyhsaXN0KSkgY29udGludWU7XG5cbiAgICBsaXN0LnBhcmVudENhdGVnb3J5LmFkZExpc3QobGlzdCk7XG4gIH1cblxuICBmb3IgKGNvbnN0IHRvcGljIG9mIHRvcGljcykge1xuICAgIGlmICghdG9waWMucGFyZW50TGlzdCB8fCB0b3BpYy5wYXJlbnRMaXN0LnRvcGljcy5pbmNsdWRlcyh0b3BpYykpIGNvbnRpbnVlO1xuXG4gICAgdG9waWMucGFyZW50TGlzdC5hZGRUb3BpYyh0b3BpYyk7XG4gIH1cblxuICBmb3IgKGNvbnN0IHRhc2sgb2YgYWxsVGFza3MpIHtcbiAgICBpZiAoIXRhc2sucGFyZW50VG9waWMgfHwgdGFzay5wYXJlbnRUb3BpYy50YXNrcy5pbmNsdWRlcyh0YXNrKSkgY29udGludWU7XG5cbiAgICB0YXNrLnBhcmVudFRvcGljLmFkZFRhc2sodGFzayk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2xlYXJEYXRhKCkge1xuICAvLyBDbGVhciBsb2NhbFN0b3JhZ2VcbiAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2NhdGVnb3JpZXMnKTtcbiAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2xpc3RzJyk7XG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b3BpY3MnKTtcbiAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2FsbFRhc2tzJyk7XG5cbiAgLy8gQ2xlYXIgYXJyYXlzXG4gIGNhdGVnb3JpZXMubGVuZ3RoID0gMDtcbiAgbGlzdHMubGVuZ3RoID0gMDtcbiAgdG9waWNzLmxlbmd0aCA9IDA7XG4gIGFsbFRhc2tzLmxlbmd0aCA9IDA7XG59XG5cbmV4cG9ydCB7IHNhdmVEYXRhLCB3cml0ZURhdGEsIG9yZ2FuaXplT2JqZWN0cywgY2xlYXJEYXRhIH0iLCJjb25zdCBhbGxUYXNrcyA9IFtdO1xuaW1wb3J0IHsgc2F2ZURhdGEgfSBmcm9tICcuL21lbW9yeU1hbmFnZW1lbnQuanMnO1xuaW1wb3J0IHsgZ2VuZXJhdGVJRCB9IGZyb20gJy4vdXRpbHMuanMnO1xuXG5jbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IobmFtZSA9ICd0aXRsZScsIGRlc2MgPSAnZGVzY3JpcHRpb24nLCBkdWVEYXRlID0gJzExLzA0LzIwMjQnLCBwcmlvcml0eSA9IGZhbHNlLCBwYXJlbnRUb3BpYyA9IG51bGwsIGNvbXBsZXRlZCA9IGZhbHNlLCBub3RlcyA9ICcnLCBzdWJUYXNrcyA9IFtdLCApIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGVzYyA9IGRlc2M7XG4gICAgdGhpcy5kdWVEYXRlID0gbmV3IERhdGUoZHVlRGF0ZSk7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMubm90ZXMgPSBub3RlcztcbiAgICB0aGlzLnN1YlRhc2tzID0gc3ViVGFza3M7XG4gICAgdGhpcy5jb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XG4gICAgdGhpcy5JRCA9IGdlbmVyYXRlSUQoJ1RBU0stJyk7XG4gICAgdGhpcy5wYXJlbnRUb3BpYyA9IHBhcmVudFRvcGljO1xuICAgIGFsbFRhc2tzLnB1c2godGhpcyk7XG4gIH1cblxuICBtb2RpZnlQYXJlbnQoKSB7XG4gICAgaWYgKCF0aGlzLmNvbXBsZXRlZCAmJiAhdGhpcy5wYXJlbnRUb3BpYy50YXNrcy5pbmNsdWRlcyh0aGlzKSkgdGhpcy5wYXJlbnRUb3BpYy5hZGRUYXNrKHRoaXMpO1xuICAgIGVsc2UgaWYodGhpcy5jb21wbGV0ZWQgJiYgdGhpcy5wYXJlbnRUb3BpYy50YXNrcy5pbmNsdWRlcyh0aGlzKSkgdGhpcy5wYXJlbnRUb3BpYy5yZW1vdmVUYXNrKHRoaXMpO1xuICB9XG5cbiAgdG9nZ2xlQ29tcGxldGUoKSB7XG4gICAgdGhpcy5jb21wbGV0ZWQgPSB0aGlzLmNvbXBsZXRlZCA/IGZhbHNlIDogdHJ1ZTtcbiAgICBzYXZlRGF0YSgpO1xuICB9XG5cbiAgdG9nZ2xlUHJpb3JpdHkoKSB7XG4gICAgdGhpcy5wcmlvcml0eSA9IHRoaXMucHJpb3JpdHkgPyBmYWxzZSA6IHRydWU7XG4gICAgc2F2ZURhdGEoKTtcbiAgfVxuXG4gIGFkZFN1YlRhc2sodGFzayl7XG4gICAgdGhpcy5zdWJUYXNrcy5wdXNoKHRhc2spO1xuICB9XG4gIFxuICBkZWxldGUoKSB7XG4gICAgY29uc3QgaW5kZXggPSBhbGxUYXNrcy5pbmRleE9mKHRoaXMpO1xuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIGFsbFRhc2tzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuXG4gICAgY29uc3QgdG9waWNJbmRleCA9IHRoaXMucGFyZW50VG9waWMudGFza3MuaW5kZXhPZih0aGlzKTtcbiAgICBpZiAodG9waWNJbmRleCAhPT0gLTEpIHtcbiAgICAgIHRoaXMucGFyZW50VG9waWMudGFza3Muc3BsaWNlKHRvcGljSW5kZXgsIDEpO1xuICAgIH1cbiAgICBcbiAgICBzYXZlRGF0YSgpO1xuICB9XG59XG5cbmV4cG9ydCB7IFRhc2ssIGFsbFRhc2tzIH07IiwiaW1wb3J0IHsgc2F2ZURhdGEgfSBmcm9tICcuL21lbW9yeU1hbmFnZW1lbnQuanMnO1xuaW1wb3J0IHsgYWRkSXRlbSwgcmVtb3ZlSXRlbSwgcHJpbnRJdGVtcywgZ2VuZXJhdGVJRCB9IGZyb20gJy4vdXRpbHMuanMnO1xuXG5jb25zdCB0b3BpY3MgPSBbXVxuY2xhc3MgVG9waWMge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBwYXJlbnRMaXN0ID0gbnVsbCkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50YXNrcyA9IFtdO1xuICAgIHRoaXMuYWRkVGFzayA9IGFkZEl0ZW0uYmluZCh0aGlzLnRhc2tzKTtcbiAgICB0aGlzLnJlbW92ZVRhc2sgPSByZW1vdmVJdGVtLmJpbmQodGhpcy50YXNrcyk7XG4gICAgdGhpcy5wcmludFRhc2tzID0gcHJpbnRJdGVtcy5iaW5kKHRoaXMudGFza3MpO1xuICAgIHRoaXMuSUQgPSBnZW5lcmF0ZUlEKCdUT1BJLScpO1xuICAgIHRoaXMucGFyZW50TGlzdCA9IHBhcmVudExpc3Q7XG4gICAgdG9waWNzLnB1c2godGhpcyk7XG4gIH1cblxuICByZW1vdmVUYXNrKHRhc2spe1xuICAgIGNvbnN0IHRvcGljSW5kZXggPSB0aGlzLnRhc2tzLmluZGV4T2YodGFzayk7XG4gICAgaWYgKHRvcGljSW5kZXggIT09IC0xKSB7XG4gICAgICB0aGlzLnRhc2tzLnNwbGljZSh0b3BpY0luZGV4LCAxKTtcbiAgICB9XG4gICAgc2F2ZURhdGEoKTtcbiAgfVxuXG4gIGRlbGV0ZVRhc2tzKCkge1xuICAgIGNvbnN0IHRhc2tzQ29weSA9IFsuLi50aGlzLnRhc2tzXTtcbiAgICBmb3IgKGNvbnN0IHRhc2sgb2YgdGFza3NDb3B5KSB7XG4gICAgICB0YXNrLmRlbGV0ZSgpO1xuICAgIH1cbiAgICBzYXZlRGF0YSgpO1xuICB9XG5cbiAgZGVsZXRlKCkge1xuICAgIHRoaXMuZGVsZXRlVGFza3MoKTtcbiAgICBjb25zdCBpbmRleCA9IHRvcGljcy5pbmRleE9mKHRoaXMpO1xuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHRvcGljcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cblxuICAgIGNvbnN0IGxpc3RJbmRleCA9IHRoaXMucGFyZW50TGlzdC50b3BpY3MuaW5kZXhPZih0aGlzKTtcbiAgICBpZiAobGlzdEluZGV4ICE9PSAtMSkge1xuICAgICAgdGhpcy5wYXJlbnRMaXN0LnRvcGljcy5zcGxpY2UobGlzdEluZGV4LCAxKTtcbiAgICB9XG4gICAgc2F2ZURhdGEoKTtcbiAgfVxufVxuXG5leHBvcnQgeyBUb3BpYywgdG9waWNzIH07IiwiaW1wb3J0IHsgQ2F0ZWdvcnksIGNhdGVnb3JpZXMgfSBmcm9tICcuL2NhdGVnb3J5JztcbmltcG9ydCB7IGxpc3RzIH0gZnJvbSAnLi9saXN0J1xuaW1wb3J0IHsgVG9waWMsIHRvcGljcyB9IGZyb20gJy4vdG9waWMnO1xuaW1wb3J0IHsgYWxsVGFza3MgfSBmcm9tICcuL3Rhc2snO1xuXG5jb25zdCBhZGRJdGVtID0gZnVuY3Rpb24oaXRlbSkge1xuICB0aGlzLnB1c2goaXRlbSk7XG59XG5cbmNvbnN0IHJlbW92ZUl0ZW0gPSBmdW5jdGlvbihpdGVtKSB7XG4gIGNvbnN0IGluZGV4ID0gdGhpcy5pbmRleE9mKGl0ZW0pO1xuICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgdGhpcy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG4gIGVsc2UgY29uc29sZS5sb2coJ05vdCBmb3VuZCBpbiBsaXN0Jyk7XG59XG5cbmNvbnN0IHByaW50SXRlbXMgPSBmdW5jdGlvbigpIHtcbiAgZm9yKGNvbnN0IGl0ZW0gb2YgdGhpcyl7XG4gICAgY29uc29sZS5sb2coaXRlbS5uYW1lKTtcbiAgfVxufVxuXG5jb25zdCBnZW5lcmF0ZUlEID0gZnVuY3Rpb24ocHJlZml4KSB7XG4gIGNvbnN0IGNoYXJzID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5JztcbiAgbGV0IGlkID0gJyc7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgaWQgKz0gY2hhcnMuY2hhckF0KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoYXJzLmxlbmd0aCkpO1xuICB9XG4gIHJldHVybiBwcmVmaXggKyBpZDtcbn1cblxuXG5cbmZ1bmN0aW9uIGZpbmRDYXRlZ29yeShjYXROYW1lKSB7XG4gIGZvciAoY29uc3QgY2F0ZWdvcnkgb2YgY2F0ZWdvcmllcykge1xuICAgIGlmIChjYXRlZ29yeS5uYW1lID09PSBjYXROYW1lKSB7XG4gICAgICByZXR1cm4gY2F0ZWdvcnk7XG4gICAgfVxuICB9XG4gIGNvbnN0IG5ld0NhdCA9IG5ldyBDYXRlZ29yeShjYXROYW1lKTtcbiAgcmV0dXJuIG5ld0NhdDtcbn1cblxuZnVuY3Rpb24gZmluZExpc3QobGlzdE5hbWUpIHtcbiAgZm9yIChjb25zdCBsaXN0IG9mIGxpc3RzKSB7XG4gICAgaWYobGlzdC5uYW1lID09PSBsaXN0TmFtZSl7XG4gICAgICByZXR1cm4gbGlzdFxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBmaW5kVG9waWModG9waWNOYW1lLCBsaXN0ID0gbnVsbCkge1xuICBmb3IgKGNvbnN0IHRvcGljIG9mIHRvcGljcykge1xuICAgIGlmICh0b3BpYy5uYW1lID09PSB0b3BpY05hbWUpIHtcbiAgICAgIHJldHVybiB0b3BpYztcbiAgICB9XG4gIH1cbiAgY29uc3QgbmV3VG9waWMgPSBuZXcgVG9waWModG9waWNOYW1lLCBsaXN0KVxuICByZXR1cm4gbmV3VG9waWM7XG59XG5cblxuXG5cbmV4cG9ydCB7IGFkZEl0ZW0sIHJlbW92ZUl0ZW0sIHByaW50SXRlbXMsIGdlbmVyYXRlSUQsIGZpbmRDYXRlZ29yeSwgZmluZExpc3QsIGZpbmRUb3BpYyB9OyIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcbmltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tIFwiLi9jb25zdHJ1Y3RGcm9tLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGFkZERheXNcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZGF5cyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSBhbW91bnQgLSBUaGUgYW1vdW50IG9mIGRheXMgdG8gYmUgYWRkZWQuXG4gKlxuICogQHJldHVybnMgVGhlIG5ldyBkYXRlIHdpdGggdGhlIGRheXMgYWRkZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDEwIGRheXMgdG8gMSBTZXB0ZW1iZXIgMjAxNDpcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZERheXMobmV3IERhdGUoMjAxNCwgOCwgMSksIDEwKVxuICogLy89PiBUaHUgU2VwIDExIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZERheXMoZGF0ZSwgYW1vdW50KSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBpZiAoaXNOYU4oYW1vdW50KSkgcmV0dXJuIGNvbnN0cnVjdEZyb20oZGF0ZSwgTmFOKTtcbiAgaWYgKCFhbW91bnQpIHtcbiAgICAvLyBJZiAwIGRheXMsIG5vLW9wIHRvIGF2b2lkIGNoYW5naW5nIHRpbWVzIGluIHRoZSBob3VyIGJlZm9yZSBlbmQgb2YgRFNUXG4gICAgcmV0dXJuIF9kYXRlO1xuICB9XG4gIF9kYXRlLnNldERhdGUoX2RhdGUuZ2V0RGF0ZSgpICsgYW1vdW50KTtcbiAgcmV0dXJuIF9kYXRlO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGFkZERheXM7XG4iLCJpbXBvcnQgeyBhZGREYXlzIH0gZnJvbSBcIi4vYWRkRGF5cy5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBhZGRXZWVrc1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIHdlZWtzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIHdlZWsgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0gYW1vdW50IC0gVGhlIGFtb3VudCBvZiB3ZWVrcyB0byBiZSBhZGRlZC5cbiAqXG4gKiBAcmV0dXJucyBUaGUgbmV3IGRhdGUgd2l0aCB0aGUgd2Vla3MgYWRkZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDQgd2Vla3MgdG8gMSBTZXB0ZW1iZXIgMjAxNDpcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZFdlZWtzKG5ldyBEYXRlKDIwMTQsIDgsIDEpLCA0KVxuICogLy89PiBNb24gU2VwIDI5IDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZFdlZWtzKGRhdGUsIGFtb3VudCkge1xuICBjb25zdCBkYXlzID0gYW1vdW50ICogNztcbiAgcmV0dXJuIGFkZERheXMoZGF0ZSwgZGF5cyk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgYWRkV2Vla3M7XG4iLCIvKipcbiAqIEBuYW1lIGNvbnN0cnVjdEZyb21cbiAqIEBjYXRlZ29yeSBHZW5lcmljIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnN0cnVjdHMgYSBkYXRlIHVzaW5nIHRoZSByZWZlcmVuY2UgZGF0ZSBhbmQgdGhlIHZhbHVlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGUgZnVuY3Rpb24gY29uc3RydWN0cyBhIG5ldyBkYXRlIHVzaW5nIHRoZSBjb25zdHJ1Y3RvciBmcm9tIHRoZSByZWZlcmVuY2VcbiAqIGRhdGUgYW5kIHRoZSBnaXZlbiB2YWx1ZS4gSXQgaGVscHMgdG8gYnVpbGQgZ2VuZXJpYyBmdW5jdGlvbnMgdGhhdCBhY2NlcHRcbiAqIGRhdGUgZXh0ZW5zaW9ucy5cbiAqXG4gKiBJdCBkZWZhdWx0cyB0byBgRGF0ZWAgaWYgdGhlIHBhc3NlZCByZWZlcmVuY2UgZGF0ZSBpcyBhIG51bWJlciBvciBhIHN0cmluZy5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSByZWZlcmVuY2UgZGF0ZSB0byB0YWtlIGNvbnN0cnVjdG9yIGZyb21cbiAqIEBwYXJhbSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBjcmVhdGUgdGhlIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBEYXRlIGluaXRpYWxpemVkIHVzaW5nIHRoZSBnaXZlbiBkYXRlIGFuZCB2YWx1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBjb25zdHJ1Y3RGcm9tIH0gZnJvbSAnZGF0ZS1mbnMnXG4gKlxuICogLy8gQSBmdW5jdGlvbiB0aGF0IGNsb25lcyBhIGRhdGUgcHJlc2VydmluZyB0aGUgb3JpZ2luYWwgdHlwZVxuICogZnVuY3Rpb24gY2xvbmVEYXRlPERhdGVUeXBlIGV4dGVuZHMgRGF0ZShkYXRlOiBEYXRlVHlwZSk6IERhdGVUeXBlIHtcbiAqICAgcmV0dXJuIGNvbnN0cnVjdEZyb20oXG4gKiAgICAgZGF0ZSwgLy8gVXNlIGNvbnRydXN0b3IgZnJvbSB0aGUgZ2l2ZW4gZGF0ZVxuICogICAgIGRhdGUuZ2V0VGltZSgpIC8vIFVzZSB0aGUgZGF0ZSB2YWx1ZSB0byBjcmVhdGUgYSBuZXcgZGF0ZVxuICogICApXG4gKiB9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb25zdHJ1Y3RGcm9tKGRhdGUsIHZhbHVlKSB7XG4gIGlmIChkYXRlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgIHJldHVybiBuZXcgZGF0ZS5jb25zdHJ1Y3Rvcih2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKHZhbHVlKTtcbiAgfVxufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGNvbnN0cnVjdEZyb207XG4iLCJpbXBvcnQgeyBjb25zdHJ1Y3RGcm9tIH0gZnJvbSBcIi4vY29uc3RydWN0RnJvbS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBjb25zdHJ1Y3ROb3dcbiAqIEBjYXRlZ29yeSBHZW5lcmljIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnN0cnVjdHMgYSBuZXcgY3VycmVudCBkYXRlIHVzaW5nIHRoZSBwYXNzZWQgdmFsdWUgY29uc3RydWN0b3IuXG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogVGhlIGZ1bmN0aW9uIGNvbnN0cnVjdHMgYSBuZXcgY3VycmVudCBkYXRlIHVzaW5nIHRoZSBjb25zdHJ1Y3RvciBmcm9tXG4gKiB0aGUgcmVmZXJlbmNlIGRhdGUuIEl0IGhlbHBzIHRvIGJ1aWxkIGdlbmVyaWMgZnVuY3Rpb25zIHRoYXQgYWNjZXB0IGRhdGVcbiAqIGV4dGVuc2lvbnMgYW5kIHVzZSB0aGUgY3VycmVudCBkYXRlLlxuICpcbiAqIEl0IGRlZmF1bHRzIHRvIGBEYXRlYCBpZiB0aGUgcGFzc2VkIHJlZmVyZW5jZSBkYXRlIGlzIGEgbnVtYmVyIG9yIGEgc3RyaW5nLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIHJlZmVyZW5jZSBkYXRlIHRvIHRha2UgY29uc3RydWN0b3IgZnJvbVxuICpcbiAqIEByZXR1cm5zIEN1cnJlbnQgZGF0ZSBpbml0aWFsaXplZCB1c2luZyB0aGUgZ2l2ZW4gZGF0ZSBjb25zdHJ1Y3RvclxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBjb25zdHJ1Y3ROb3csIGlzU2FtZURheSB9IGZyb20gJ2RhdGUtZm5zJ1xuICpcbiAqIGZ1bmN0aW9uIGlzVG9kYXk8RGF0ZVR5cGUgZXh0ZW5kcyBEYXRlPihcbiAqICAgZGF0ZTogRGF0ZVR5cGUgfCBudW1iZXIgfCBzdHJpbmcsXG4gKiApOiBib29sZWFuIHtcbiAqICAgLy8gSWYgd2Ugd2VyZSB0byB1c2UgYG5ldyBEYXRlKClgIGRpcmVjdGx5LCB0aGUgZnVuY3Rpb24gd291bGQgIGJlaGF2ZVxuICogICAvLyBkaWZmZXJlbnRseSBpbiBkaWZmZXJlbnQgdGltZXpvbmVzIGFuZCByZXR1cm4gZmFsc2UgZm9yIHRoZSBzYW1lIGRhdGUuXG4gKiAgIHJldHVybiBpc1NhbWVEYXkoZGF0ZSwgY29uc3RydWN0Tm93KGRhdGUpKTtcbiAqIH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cnVjdE5vdyhkYXRlKSB7XG4gIHJldHVybiBjb25zdHJ1Y3RGcm9tKGRhdGUsIERhdGUubm93KCkpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGNvbnN0cnVjdE5vdztcbiIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc0JlZm9yZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZmlyc3QgZGF0ZSBiZWZvcmUgdGhlIHNlY29uZCBvbmU/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZmlyc3QgZGF0ZSBiZWZvcmUgdGhlIHNlY29uZCBvbmU/XG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZGF0ZSB0aGF0IHNob3VsZCBiZSBiZWZvcmUgdGhlIG90aGVyIG9uZSB0byByZXR1cm4gdHJ1ZVxuICogQHBhcmFtIGRhdGVUb0NvbXBhcmUgLSBUaGUgZGF0ZSB0byBjb21wYXJlIHdpdGhcbiAqXG4gKiBAcmV0dXJucyBUaGUgZmlyc3QgZGF0ZSBpcyBiZWZvcmUgdGhlIHNlY29uZCBkYXRlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElzIDEwIEp1bHkgMTk4OSBiZWZvcmUgMTEgRmVicnVhcnkgMTk4Nz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzQmVmb3JlKG5ldyBEYXRlKDE5ODksIDYsIDEwKSwgbmV3IERhdGUoMTk4NywgMSwgMTEpKVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNCZWZvcmUoZGF0ZSwgZGF0ZVRvQ29tcGFyZSkge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgX2RhdGVUb0NvbXBhcmUgPSB0b0RhdGUoZGF0ZVRvQ29tcGFyZSk7XG4gIHJldHVybiArX2RhdGUgPCArX2RhdGVUb0NvbXBhcmU7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgaXNCZWZvcmU7XG4iLCJpbXBvcnQgeyBzdGFydE9mRGF5IH0gZnJvbSBcIi4vc3RhcnRPZkRheS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc1NhbWVEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZUxlZnQgLSBUaGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIGRhdGVSaWdodCAtIFRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuXG4gKiBAcmV0dXJucyBUaGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgMDY6MDA6MDAgYW5kIDQgU2VwdGVtYmVyIDE4OjAwOjAwIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0LCA2LCAwKSwgbmV3IERhdGUoMjAxNCwgOCwgNCwgMTgsIDApKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciBhbmQgNCBPY3RvYmVyIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNCwgOSwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciwgMjAxNCBhbmQgNCBTZXB0ZW1iZXIsIDIwMTUgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE1LCA4LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU2FtZURheShkYXRlTGVmdCwgZGF0ZVJpZ2h0KSB7XG4gIGNvbnN0IGRhdGVMZWZ0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGF0ZUxlZnQpO1xuICBjb25zdCBkYXRlUmlnaHRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkYXRlUmlnaHQpO1xuXG4gIHJldHVybiArZGF0ZUxlZnRTdGFydE9mRGF5ID09PSArZGF0ZVJpZ2h0U3RhcnRPZkRheTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBpc1NhbWVEYXk7XG4iLCJpbXBvcnQgeyBjb25zdHJ1Y3ROb3cgfSBmcm9tIFwiLi9jb25zdHJ1Y3ROb3cubWpzXCI7XG5pbXBvcnQgeyBpc1NhbWVEYXkgfSBmcm9tIFwiLi9pc1NhbWVEYXkubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNUb2RheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBkYXRlIHRvIGNoZWNrXG4gKlxuICogQHJldHVybnMgVGhlIGRhdGUgaXMgdG9kYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDYgT2N0b2JlciAxNDowMDowMCB0b2RheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVG9kYXkobmV3IERhdGUoMjAxNCwgOSwgNiwgMTQsIDApKVxuICogLy89PiB0cnVlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1RvZGF5KGRhdGUpIHtcbiAgcmV0dXJuIGlzU2FtZURheShkYXRlLCBjb25zdHJ1Y3ROb3coZGF0ZSkpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGlzVG9kYXk7XG4iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgc3RhcnRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIHN0YXJ0IG9mIGEgZGF5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFydE9mRGF5KGRhdGUpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIF9kYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gX2RhdGU7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgc3RhcnRPZkRheTtcbiIsIi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBhcmd1bWVudCAtIFRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKlxuICogQHJldHVybnMgVGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgY29uc3QgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTtcblxuICAvLyBDbG9uZSB0aGUgZGF0ZVxuICBpZiAoXG4gICAgYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8XG4gICAgKHR5cGVvZiBhcmd1bWVudCA9PT0gXCJvYmplY3RcIiAmJiBhcmdTdHIgPT09IFwiW29iamVjdCBEYXRlXVwiKVxuICApIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IGFyZ3VtZW50LmNvbnN0cnVjdG9yKCthcmd1bWVudCk7XG4gIH0gZWxzZSBpZiAoXG4gICAgdHlwZW9mIGFyZ3VtZW50ID09PSBcIm51bWJlclwiIHx8XG4gICAgYXJnU3RyID09PSBcIltvYmplY3QgTnVtYmVyXVwiIHx8XG4gICAgdHlwZW9mIGFyZ3VtZW50ID09PSBcInN0cmluZ1wiIHx8XG4gICAgYXJnU3RyID09PSBcIltvYmplY3QgU3RyaW5nXVwiXG4gICkge1xuICAgIC8vIFRPRE86IENhbiB3ZSBnZXQgcmlkIG9mIGFzP1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gVE9ETzogQ2FuIHdlIGdldCByaWQgb2YgYXM/XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCB0b0RhdGU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IHsgQ2F0ZWdvcnksIGNhdGVnb3JpZXMgfSBmcm9tICcuL2NhdGVnb3J5LmpzJztcbmltcG9ydCB7IExpc3QsIGxpc3RzIH0gZnJvbSAnLi9saXN0LmpzJztcbmltcG9ydCB7IFRvcGljLCB0b3BpY3MgfSBmcm9tICcuL3RvcGljLmpzJztcbmltcG9ydCB7IFRhc2ssIGFsbFRhc2tzIH0gZnJvbSAnLi90YXNrLmpzJztcbmltcG9ydCB7IGZpbmRDYXRlZ29yeSwgZmluZExpc3QsIGZpbmRUb3BpYyB9IGZyb20gJy4vdXRpbHMuanMnO1xuaW1wb3J0IHsgaGFuZGxlTGlzdEZvcm0sIGhhbmRsZVRhc2tGb3JtIH0gZnJvbSAnLi9ldmVudEhhbmRsZXJzLmpzJ1xuaW1wb3J0IHsgcHJpbnRMaXN0LCBwcmludFNpZGViYXIgfSBmcm9tICcuL0RPTS5qcyc7XG5pbXBvcnQgeyBzYXZlRGF0YSwgd3JpdGVEYXRhLCBjbGVhckRhdGEgfSBmcm9tICcuL21lbW9yeU1hbmFnZW1lbnQuanMnO1xuaW1wb3J0IHsgdXBkYXRlRGVmYXVsdHMgfSBmcm9tICcuL2RlZmF1bHRMaXN0cy5qcyc7XG5cblxuaGFuZGxlTGlzdEZvcm0oKTtcbmhhbmRsZVRhc2tGb3JtKCk7XG5cblxuLy8gY29uc3QgZXhhbXBsZUNhdGVnb3J5ID0gbmV3IENhdGVnb3J5KCdHZW5lcmFsJyk7XG4vLyBjb25zdCBleGFtcGxlTGlzdCA9IG5ldyBMaXN0KCdFeGVyY2lzZScsICdFeGVyY2lzZXMgdG8gZG8nLCBleGFtcGxlQ2F0ZWdvcnkpO1xuLy8gY29uc3QgZXhhbXBsZUxpc3QyID0gbmV3IExpc3QoJ0V4ZXJjaXNlcycsICdFeGVyY2lzZXMgdG8gZG8nLCBleGFtcGxlQ2F0ZWdvcnkpO1xuLy8gY29uc3QgZXhhbXBsZVRvcGljID0gbmV3IFRvcGljKCdMZWdzJywgZXhhbXBsZUxpc3QpO1xuLy8gY29uc3QgdGFzazEgPSBuZXcgVGFzaygnU3F1YXRzJywgJycsICcnLCAnJywgZXhhbXBsZVRvcGljKTtcbi8vIGNvbnN0IHRhc2syID0gbmV3IFRhc2soJ0RlYWRsaWZ0JywgJycsICcnLCAnJywgZXhhbXBsZVRvcGljKTtcbi8vIGNvbnN0IHRhc2szID0gbmV3IFRhc2soJ0xlZyBQcmVzcycsICcnLCAnJywgJycsIGV4YW1wbGVUb3BpYyk7XG5cbi8vIGV4YW1wbGVUb3BpYy5hZGRUYXNrKHRhc2sxKVxuLy8gZXhhbXBsZVRvcGljLmFkZFRhc2sodGFzazIpXG4vLyBleGFtcGxlVG9waWMuYWRkVGFzayh0YXNrMylcbi8vIGV4YW1wbGVMaXN0LmFkZFRvcGljKGV4YW1wbGVUb3BpYyk7XG4vLyBleGFtcGxlQ2F0ZWdvcnkuYWRkTGlzdChleGFtcGxlTGlzdCk7XG4vLyBleGFtcGxlQ2F0ZWdvcnkuYWRkTGlzdChleGFtcGxlTGlzdDIpO1xuXG4vLyBzYXZlRGF0YSgpO1xud3JpdGVEYXRhKCk7XG51cGRhdGVEZWZhdWx0cygpO1xucHJpbnRMaXN0KGxpc3RzWzBdKTtcbnByaW50U2lkZWJhcigpO1xuXG4vLyBjbGVhckRhdGEoKTtcbndpbmRvdy5DYXRlZ29yeSA9IENhdGVnb3J5O1xud2luZG93Lkxpc3QgPSBMaXN0O1xud2luZG93LlRvcGljID0gVG9waWM7XG53aW5kb3cuVGFzayA9IFRhc2s7XG53aW5kb3cuY2F0ZWdvcmllcyA9IGNhdGVnb3JpZXM7XG53aW5kb3cuYWxsVGFza3MgPSBhbGxUYXNrczsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=