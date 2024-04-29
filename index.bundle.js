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
  firstLaunchData();
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

function firstLaunchData(){
  if (!localStorage.getItem('categoryStorage')){
    const exampleCategory = new _category__WEBPACK_IMPORTED_MODULE_0__.Category('General');
    const exampleList = new _list__WEBPACK_IMPORTED_MODULE_1__.List('First Launch', 'Some things you might want to do!', exampleCategory);
    const exampleTopic = new _topic__WEBPACK_IMPORTED_MODULE_2__.Topic('My First Tasks', exampleList);
    const task1 = new _task__WEBPACK_IMPORTED_MODULE_3__.Task('Create your own lists and categories', '', '', '', exampleTopic);
    const task2 = new _task__WEBPACK_IMPORTED_MODULE_3__.Task('Create your own tasks and topics', '', '', '', exampleTopic);
    const task3 = new _task__WEBPACK_IMPORTED_MODULE_3__.Task('Delete all this dummy content', '', '', '', exampleTopic);

    exampleTopic.addTask(task1)
    exampleTopic.addTask(task2)
    exampleTopic.addTask(task3)
    exampleList.addTopic(exampleTopic);
    exampleCategory.addList(exampleList);

    saveData();
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMseXNCQUE0VjtBQUN4WSw0Q0FBNEMsbXRCQUFpVztBQUM3WSw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixjQUFjO0FBQ2QsNEJBQTRCO0FBQzVCLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLE9BQU8saUZBQWlGLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxhQUFhLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxPQUFPLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLHVCQUF1Qix1QkFBdUIseUJBQXlCLHlCQUF5QixhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sYUFBYSxNQUFNLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFL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VCxnRUFBYztBQUNkLGtEQUFTLENBQUMsMkNBQUs7QUFDZixxREFBWTs7QUFFWjtBQUNBLGtCQUFrQixrREFBUTtBQUMxQixjQUFjLDBDQUFJO0FBQ2xCLGVBQWUsNENBQUs7QUFDcEIsY0FBYywwQ0FBSTtBQUNsQixvQkFBb0Isb0RBQVU7QUFDOUIsa0JBQWtCLDhDQUFRLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9ET00uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9jYXRlZ29yeS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2RlZmF1bHRMaXN0cy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2V2ZW50SGFuZGxlcnMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9saXN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbWVtb3J5TWFuYWdlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy90b3BpYy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvYWRkRGF5cy5tanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9hZGRXZWVrcy5tanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9jb25zdHJ1Y3RGcm9tLm1qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2NvbnN0cnVjdE5vdy5tanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc0JlZm9yZS5tanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc1NhbWVEYXkubWpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNUb2RheS5tanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdGFydE9mRGF5Lm1qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3RvRGF0ZS5tanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIxLjVcXFwiIHN0cm9rZT1cXFwiY3VycmVudENvbG9yXFxcIiBjbGFzcz1cXFwidy02IGgtNlxcXCI+PHBhdGggc3Ryb2tlLWxpbmVjYXA9XFxcInJvdW5kXFxcIiBzdHJva2UtbGluZWpvaW49XFxcInJvdW5kXFxcIiBkPVxcXCJNNiAxMiAzLjI2OSAzLjEyNUE1OS43NjkgNTkuNzY5IDAgMCAxIDIxLjQ4NSAxMiA1OS43NjggNTkuNzY4IDAgMCAxIDMuMjcgMjAuODc1TDUuOTk5IDEyWm0wIDBoNy41XFxcIiAvPjwvc3ZnPlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgZmlsbD1cXFwiJTIzMDA3QkZGXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiIHN0cm9rZS13aWR0aD1cXFwiMS41XFxcIiBzdHJva2U9XFxcImN1cnJlbnRDb2xvclxcXCIgY2xhc3M9XFxcInctNiBoLTZcXFwiPjxwYXRoIHN0cm9rZS1saW5lY2FwPVxcXCJyb3VuZFxcXCIgc3Ryb2tlLWxpbmVqb2luPVxcXCJyb3VuZFxcXCIgZD1cXFwiTTYgMTIgMy4yNjkgMy4xMjVBNTkuNzY5IDU5Ljc2OSAwIDAgMSAyMS40ODUgMTIgNTkuNzY4IDU5Ljc2OCAwIDAgMSAzLjI3IDIwLjg3NUw1Ljk5OSAxMlptMCAwaDcuNVxcXCIgLz48L3N2Zz5cIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5ib2R5e1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDMwMHB4LCAxZnIpIDRmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxNWZyIDFmcjtcbn1cblxuYXNpZGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJiO1xuICBncmlkLWNvbHVtbjogMSAvIDI7XG4gIGdyaWQtcm93OiAxIC8gMjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxNXB4O1xuICBwYWRkaW5nOiAzcmVtIDAgMCAzcmVtO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLmNhdC1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNXB4O1xufVxuXG4uY2F0ZWdvcnkge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgcGFkZGluZzogLjFyZW0gLjc1cmVtO1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY2F0ZWdvcnk6aG92ZXIgLmRlbGV0ZS1idXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxcmVtO1xufVxuXG5hc2lkZSBidXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBwYWRkaW5nOiAuMXJlbSAuNzVyZW07XG59XG5cbmFzaWRlIGJ1dHRvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk5OTtcbn1cblxuLnN1Yi1jYXQge1xuICBtYXJnaW4tbGVmdDogLjVyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnN1Yi1jYXQ6aG92ZXIgLmRlbGV0ZS1idXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxcmVtO1xufVxuXG4uaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI2FzaWRlLWZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiYmI7XG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcbiAgZ3JpZC1yb3c6IDIgLyAzO1xuICBib3JkZXItdG9wOiBzb2xpZCAxcHggIzk5OTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xufVxuXG4jYXNpZGUtZm9vdGVyIGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxubWFpbiB7XG4gIGdyaWQtY29sdW1uOiAyIC8gMztcbiAgZ3JpZC1yb3c6IDEgLyAyO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDZyZW0gMWZyO1xuICBtYXJnaW46IDRyZW0gMnJlbSAwIDJyZW07XG4gIG92ZXJmbG93OiBhdXRvO1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbn1cblxuI2xpc3REZXNjcmlwdGlvbiB7XG4gIG1hcmdpbjogMXJlbSAwIDAgLjVyZW1cbn1cblxuLnRvcGljcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbWFyZ2luOiAxcmVtIDA7XG59XG5cbi50b3BpYy13cmFwcGVyIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxuLnRvcGljLXdyYXBwZXIsXG4udGFzay13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMnJlbTtcbn1cblxuLnRvcGljLXdyYXBwZXI6aG92ZXIgLmRlbGV0ZS1idXR0b24sXG4udGFzay13cmFwcGVyOmhvdmVyIC5kZWxldGUtYnV0dG9uIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBmb250LXNpemU6IDFyZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMHJlbTtcbiAgdG9wOiAzcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBwYWRkaW5nOiAuMXJlbSAuNXJlbTtcbn1cblxuLnRvcGljIC5kZWxldGUtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2NjYztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGFza3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgbWFyZ2luOiAuNXJlbSAwIDAgMXJlbTtcbn1cblxuLmNoZWNrLXdyYXBwZXI6aG92ZXIsXG4uY2hlY2std3JhcHBlciBsYWJlbDpob3Zlcixcbi5jaGVjay13cmFwcGVyIGlucHV0OmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGFzay13cmFwcGVyOmhvdmVyIC5wcmlvcml0eSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cblxuLnByaW9yaXR5IHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gIGhlaWdodDogMS4xcmVtO1xuICB3aWR0aDogMS4xcmVtO1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgbWFyZ2luLXRvcDogNHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5wcmlvcml0eTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnByaW9yaXR5OmhvdmVyOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTVweDsgLyogYWRqdXN0IGFzIG5lZWRlZCAqL1xuICBsZWZ0OiAtNXB4OyAvKiBhZGp1c3QgYXMgbmVlZGVkICovXG4gIHdpZHRoOiBjYWxjKDEwMCUgKyAxMHB4KTsgLyogYWRqdXN0IGFzIG5lZWRlZCAqL1xuICBoZWlnaHQ6IGNhbGMoMTAwJSArIDEwcHgpOyAvKiBhZGp1c3QgYXMgbmVlZGVkICovXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgei1pbmRleDogLTE7XG59XG5cbi5pbXBvcnRhbnQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG59XG5cbi5jb21wbGV0ZWQge1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cblxuLnRhc2stbmFtZSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5mb290ZXIge1xuICBncmlkLWNvbHVtbjogMiAvIDM7XG4gIGdyaWQtcm93OiAyIC8gMztcbiAgYm9yZGVyLXRvcDogc29saWQgMXB4ICM5OTk7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuZm9vdGVyIGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuZGlhbG9nIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgaGVpZ2h0OiA4MCU7XG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4uZGlhbG9nLWZvcm0ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZGlhbG9nLWZvcm0gbGFiZWwge1xuICBmb250LXNpemU6IDEuN3JlbTtcbn1cblxuLmRpYWxvZy1mb3JtIGlucHV0e1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZm9udC1zaXplOiAxLjdyZW07XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbmRpYWxvZyAuaW5wdXQtd3JhcHBlciB7XG4gIG1hcmdpbjogMnJlbSBhdXRvO1xuICB3aWR0aDogNzUlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDE1cHg7XG59XG5cbmRpYWxvZyAuYnV0dG9uLXdyYXBwZXIge1xuICBtYXJnaW46IGF1dG8gMCAycmVtIDA7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuZGlhbG9nOjpiYWNrZHJvcCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuZGlhbG9nIGJ1dHRvbiB7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3QkZGO1xuICBjb2xvcjogI2ZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbmRpYWxvZyBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NmIzO1xufVxuXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYiw2Q0FBNkM7RUFDN0MsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1Qsc0JBQXNCO0VBQ3RCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGlCQUFpQjtF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QUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsV0FBVztFQUNYLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keXtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMzAwcHgsIDFmcikgNGZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxNWZyIDFmcjtcXG59XFxuXFxuYXNpZGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JiYjtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxNXB4O1xcbiAgcGFkZGluZzogM3JlbSAwIDAgM3JlbTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4uY2F0LWdyb3VwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbi5jYXRlZ29yeSB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgcGFkZGluZzogLjFyZW0gLjc1cmVtO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5jYXRlZ29yeTpob3ZlciAuZGVsZXRlLWJ1dHRvbiB7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAxcmVtO1xcbn1cXG5cXG5hc2lkZSBidXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBwYWRkaW5nOiAuMXJlbSAuNzVyZW07XFxufVxcblxcbmFzaWRlIGJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5O1xcbn1cXG5cXG4uc3ViLWNhdCB7XFxuICBtYXJnaW4tbGVmdDogLjVyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5zdWItY2F0OmhvdmVyIC5kZWxldGUtYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDFyZW07XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI2FzaWRlLWZvb3RlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJiO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgYm9yZGVyLXRvcDogc29saWQgMXB4ICM5OTk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jYXNpZGUtZm9vdGVyIGJ1dHRvbiB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbm1haW4ge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNnJlbSAxZnI7XFxuICBtYXJnaW46IDRyZW0gMnJlbSAwIDJyZW07XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbn1cXG5cXG4jbGlzdERlc2NyaXB0aW9uIHtcXG4gIG1hcmdpbjogMXJlbSAwIDAgLjVyZW1cXG59XFxuXFxuLnRvcGljcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIG1hcmdpbjogMXJlbSAwO1xcbn1cXG5cXG4udG9waWMtd3JhcHBlciB7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG5cXG4udG9waWMtd3JhcHBlcixcXG4udGFzay13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxufVxcblxcbi50b3BpYy13cmFwcGVyOmhvdmVyIC5kZWxldGUtYnV0dG9uLFxcbi50YXNrLXdyYXBwZXI6aG92ZXIgLmRlbGV0ZS1idXR0b24ge1xcbiAgZGlzcGxheTogaW5saW5lO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMHJlbTtcXG4gIHRvcDogM3B4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgcGFkZGluZzogLjFyZW0gLjVyZW07XFxufVxcblxcbi50b3BpYyAuZGVsZXRlLWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjY2NjO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFza3Mge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIG1hcmdpbjogLjVyZW0gMCAwIDFyZW07XFxufVxcblxcbi5jaGVjay13cmFwcGVyOmhvdmVyLFxcbi5jaGVjay13cmFwcGVyIGxhYmVsOmhvdmVyLFxcbi5jaGVjay13cmFwcGVyIGlucHV0OmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2std3JhcHBlcjpob3ZlciAucHJpb3JpdHkge1xcbiAgZGlzcGxheTogaW5saW5lO1xcbn1cXG5cXG4ucHJpb3JpdHkge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiBmaWxsPVxcXCJub25lXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiIHN0cm9rZS13aWR0aD1cXFwiMS41XFxcIiBzdHJva2U9XFxcImN1cnJlbnRDb2xvclxcXCIgY2xhc3M9XFxcInctNiBoLTZcXFwiPjxwYXRoIHN0cm9rZS1saW5lY2FwPVxcXCJyb3VuZFxcXCIgc3Ryb2tlLWxpbmVqb2luPVxcXCJyb3VuZFxcXCIgZD1cXFwiTTYgMTIgMy4yNjkgMy4xMjVBNTkuNzY5IDU5Ljc2OSAwIDAgMSAyMS40ODUgMTIgNTkuNzY4IDU5Ljc2OCAwIDAgMSAzLjI3IDIwLjg3NUw1Ljk5OSAxMlptMCAwaDcuNVxcXCIgLz48L3N2Zz4nKTtcXG4gIGhlaWdodDogMS4xcmVtO1xcbiAgd2lkdGg6IDEuMXJlbTtcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbiAgbWFyZ2luLXRvcDogNHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4ucHJpb3JpdHk6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJpb3JpdHk6aG92ZXI6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTVweDsgLyogYWRqdXN0IGFzIG5lZWRlZCAqL1xcbiAgbGVmdDogLTVweDsgLyogYWRqdXN0IGFzIG5lZWRlZCAqL1xcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDEwcHgpOyAvKiBhZGp1c3QgYXMgbmVlZGVkICovXFxuICBoZWlnaHQ6IGNhbGMoMTAwJSArIDEwcHgpOyAvKiBhZGp1c3QgYXMgbmVlZGVkICovXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xcbiAgei1pbmRleDogLTE7XFxufVxcblxcbi5pbXBvcnRhbnQge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIGZpbGw9XFxcIiUyMzAwN0JGRlxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIiBzdHJva2Utd2lkdGg9XFxcIjEuNVxcXCIgc3Ryb2tlPVxcXCJjdXJyZW50Q29sb3JcXFwiIGNsYXNzPVxcXCJ3LTYgaC02XFxcIj48cGF0aCBzdHJva2UtbGluZWNhcD1cXFwicm91bmRcXFwiIHN0cm9rZS1saW5lam9pbj1cXFwicm91bmRcXFwiIGQ9XFxcIk02IDEyIDMuMjY5IDMuMTI1QTU5Ljc2OSA1OS43NjkgMCAwIDEgMjEuNDg1IDEyIDU5Ljc2OCA1OS43NjggMCAwIDEgMy4yNyAyMC44NzVMNS45OTkgMTJabTAgMGg3LjVcXFwiIC8+PC9zdmc+Jyk7XFxufVxcblxcbi5jb21wbGV0ZWQge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi50YXNrLW5hbWUge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbmZvb3RlciB7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBncmlkLXJvdzogMiAvIDM7XFxuICBib3JkZXItdG9wOiBzb2xpZCAxcHggIzk5OTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmZvb3RlciBidXR0b24ge1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG5kaWFsb2cge1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1heC13aWR0aDogNTAwcHg7XFxuICBoZWlnaHQ6IDgwJTtcXG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMzAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcblxcbi5kaWFsb2ctZm9ybSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZGlhbG9nLWZvcm0gbGFiZWwge1xcbiAgZm9udC1zaXplOiAxLjdyZW07XFxufVxcblxcbi5kaWFsb2ctZm9ybSBpbnB1dHtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuZGlhbG9nIC5pbnB1dC13cmFwcGVyIHtcXG4gIG1hcmdpbjogMnJlbSBhdXRvO1xcbiAgd2lkdGg6IDc1JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxNXB4O1xcbn1cXG5cXG5kaWFsb2cgLmJ1dHRvbi13cmFwcGVyIHtcXG4gIG1hcmdpbjogYXV0byAwIDJyZW0gMDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuZGlhbG9nOjpiYWNrZHJvcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcblxcbmRpYWxvZyBidXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN0JGRjtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG5kaWFsb2cgYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDU2YjM7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBjYXRlZ29yaWVzIH0gZnJvbSAnLi9jYXRlZ29yeS5qcyc7XG5pbXBvcnQgeyBsaXN0cyB9IGZyb20gJy4vbGlzdC5qcyc7XG5pbXBvcnQgeyBmaW5kQ2F0ZWdvcnksIGZpbmRMaXN0LCBmaW5kVG9waWMsICB9IGZyb20gJy4vdXRpbHMuanMnO1xuaW1wb3J0IHsgdG9kYXlMaXN0LCB0aGlzV2VlaywgYWxsVGFza3NMaXN0LCBjb21wbGV0ZWQsIHVwZGF0ZURlZmF1bHRzLCB9IGZyb20gJy4vZGVmYXVsdExpc3RzLmpzJztcbmltcG9ydCB7IHN3aXRjaFRhc2tzQ29tcGxldGVMaXN0cyB9IGZyb20gJy4vZXZlbnRIYW5kbGVycy5qcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmludExpc3QobGlzdCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICBtYWluLmlubmVySFRNTCA9ICcnO1xuXG4gIGNvbnN0IGxpc3RJbmZvcm1hdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsaXN0SW5mb3JtYXRpb24uY2xhc3NMaXN0LmFkZCgnbGlzdEluZm9ybWF0aW9uJyk7XG4gIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBoMS5pZCA9ICdjdXJyZW50TGlzdCc7XG4gIGgyLmlkID0gJ2xpc3REZXNjcmlwdGlvbic7XG5cbiAgaDEudGV4dENvbnRlbnQgPSBsaXN0Lm5hbWU7XG4gIGgyLnRleHRDb250ZW50ID0gbGlzdC5kZXNjcmlwdGlvbjtcblxuICBsaXN0SW5mb3JtYXRpb24uYXBwZW5kQ2hpbGQoaDEpO1xuICBsaXN0SW5mb3JtYXRpb24uYXBwZW5kQ2hpbGQoaDIpO1xuXG4gIGNvbnN0IHRvcGljcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b3BpY3MuY2xhc3NOYW1lID0gJ3RvcGljcyc7XG5cbiAgZm9yIChjb25zdCB0b3BpYyBvZiBsaXN0LnRvcGljcykge1xuICAgIGlmICh0b3BpYy50YXNrcy5sZW5ndGggPT09IDApIGNvbnRpbnVlO1xuXG4gICAgY29uc3QgdG9waWNHcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRvcGljV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGgyVG9waWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNvbnN0IGJ1dHRvblRvcGljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgdGFza3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuXG4gICAgdG9waWNHcm91cC5jbGFzc05hbWUgPSAndG9waWMnO1xuICAgIHRvcGljV3JhcHBlci5jbGFzc05hbWUgPSAndG9waWMtd3JhcHBlcic7XG4gICAgaDJUb3BpYy5jbGFzc05hbWUgPSAndG9waWNOYW1lJztcbiAgICB0YXNrcy5jbGFzc05hbWUgPSAndGFza3MnO1xuXG4gICAgYnV0dG9uVG9waWMudGV4dENvbnRlbnQgPSAnWCc7XG4gICAgYnV0dG9uVG9waWMuY2xhc3NMaXN0LmFkZCgnZGVsZXRlLWJ1dHRvbicsICdoaWRkZW4nKTtcbiAgICBoMlRvcGljLnRleHRDb250ZW50ID0gdG9waWMubmFtZTtcblxuICAgIGJ1dHRvblRvcGljLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdG9waWMuZGVsZXRlVGFza3MoKTtcbiAgICAgIGxpc3QucmVtb3ZlVG9waWModG9waWMpO1xuICAgICAgcHJpbnRMaXN0KGxpc3QpO1xuICAgIH0pO1xuXG4gICAgdG9waWNXcmFwcGVyLmFwcGVuZENoaWxkKGgyVG9waWMpO1xuICAgIHRvcGljV3JhcHBlci5hcHBlbmRDaGlsZChidXR0b25Ub3BpYyk7XG5cbiAgICB0b3BpY0dyb3VwLmFwcGVuZENoaWxkKHRvcGljV3JhcHBlcik7XG4gICAgdG9waWNHcm91cC5hcHBlbmRDaGlsZCh0YXNrcyk7XG5cbiAgICBmb3IgKGNvbnN0IHRhc2sgb2YgdG9waWMudGFza3MpIHtcbiAgICAgIGNvbnN0IHRhc2tXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb25zdCBjaGVja1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgIGNvbnN0IGJ1dHRvblRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIGNvbnN0IHByaW9yaXR5QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgICB0YXNrV3JhcHBlci5jbGFzc05hbWUgPSAndGFzay13cmFwcGVyJztcbiAgICAgIGNoZWNrV3JhcHBlci5jbGFzc05hbWUgPSAnY2hlY2std3JhcHBlcic7XG4gICAgICBsYWJlbC5odG1sRm9yID0gdG9waWMubmFtZSArICctJyArIHRhc2submFtZTtcbiAgICAgIGlucHV0LnR5cGUgPSAnY2hlY2tib3gnO1xuICAgICAgaW5wdXQubmFtZSA9ICd0YXNrJztcbiAgICAgIGlucHV0LmlkID0gdG9waWMubmFtZSArICctJyArIHRhc2submFtZTtcbiAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gdGFzay5uYW1lO1xuICAgICAgbGFiZWwuY2xhc3NMaXN0ID0gJ3Rhc2stbmFtZSc7XG4gICAgICBidXR0b25UYXNrLnRleHRDb250ZW50ID0gJ1gnO1xuICAgICAgYnV0dG9uVGFzay5jbGFzc0xpc3QuYWRkKCdkZWxldGUtYnV0dG9uJywgJ2hpZGRlbicpO1xuICAgICAgcHJpb3JpdHlCdG4uY2xhc3NMaXN0LmFkZCgncHJpb3JpdHknKTtcblxuICAgICAgaWYgKHRhc2sucHJpb3JpdHkpIHtcbiAgICAgICAgcHJpb3JpdHlCdG4uY2xhc3NMaXN0LmFkZCgnaW1wb3J0YW50Jyk7XG4gICAgICB9IFxuICAgICAgZWxzZSBpZiAoIXRhc2sucHJpb3JpdHkpIHtcbiAgICAgICAgcHJpb3JpdHlCdG4uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0YXNrLmNvbXBsZXRlZCl7XG4gICAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZCcpO1xuICAgICAgICBpbnB1dC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRhc2sudG9nZ2xlQ29tcGxldGUoKTtcbiAgICAgICAgY29tcGxldGVkLnVwZGF0ZSgpO1xuICAgICAgICBwcmludExpc3QobGlzdCk7XG4gICAgICB9KVxuXG4gICAgICBidXR0b25UYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0YXNrLmRlbGV0ZSgpO1xuICAgICAgICB1cGRhdGVEZWZhdWx0cygpO1xuICAgICAgICBwcmludExpc3QobGlzdCk7XG4gICAgICB9KTtcblxuICAgICAgcHJpb3JpdHlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRhc2sudG9nZ2xlUHJpb3JpdHkoKTtcbiAgICAgICAgcHJpbnRMaXN0KGxpc3QpO1xuICAgICAgfSlcblxuICAgICAgY2hlY2tXcmFwcGVyLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICAgIGNoZWNrV3JhcHBlci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICBjaGVja1dyYXBwZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHlCdG4pO1xuICAgICAgdGFza1dyYXBwZXIuYXBwZW5kQ2hpbGQoY2hlY2tXcmFwcGVyKTtcbiAgICAgIHRhc2tXcmFwcGVyLmFwcGVuZENoaWxkKGJ1dHRvblRhc2spO1xuICAgICAgdGFza3MuYXBwZW5kQ2hpbGQodGFza1dyYXBwZXIpO1xuICAgIH1cbiAgICB0b3BpY3MuYXBwZW5kQ2hpbGQodG9waWNHcm91cCk7XG4gIH1cblxuICBtYWluLmFwcGVuZENoaWxkKGxpc3RJbmZvcm1hdGlvbik7XG4gIG1haW4uYXBwZW5kQ2hpbGQodG9waWNzKTtcbn1cblxuZnVuY3Rpb24gcHJpbnREZWZhdWx0KGFzaWRlKSB7XG4gIGNvbnN0IGRlZmF1bHRHcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCB0b2RheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCB3ZWVrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGFsbFRhc2tzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGNvbXBsZXRlZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIGRlZmF1bHRHcm91cC5jbGFzc0xpc3QuYWRkKCdjYXQtZ3JvdXAnKTtcbiAgdG9kYXkuY2xhc3NMaXN0LmFkZCgnZGVmYXVsdCcsICdsaXN0QXNpZGUnKTtcbiAgd2Vlay5jbGFzc0xpc3QuYWRkKCdkZWZhdWx0JywgJ2xpc3RBc2lkZScpO1xuICBhbGxUYXNrc0Rpdi5jbGFzc0xpc3QuYWRkKCdkZWZhdWx0JywgJ2xpc3RBc2lkZScpO1xuICBjb21wbGV0ZWREaXYuY2xhc3NMaXN0LmFkZCgnZGVmYXVsdCcsICdsaXN0QXNpZGUnKTtcblxuICBjb25zdCB0b2RheUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb25zdCB3ZWVrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbnN0IGFsbFRhc2tzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbnN0IGNvbXBsZXRlZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gIHRvZGF5QnRuLnRleHRDb250ZW50ID0gJ1RvZGF5JztcbiAgdG9kYXlCdG4uaWQgPSAndG9kYXknO1xuICB3ZWVrQnRuLnRleHRDb250ZW50ID0gJ1RoaXMgV2Vlayc7XG4gIHdlZWtCdG4uaWQgPSAndGhpcy13ZWVrJztcbiAgYWxsVGFza3NCdG4udGV4dENvbnRlbnQgPSAnQWxsIFRhc2tzJztcbiAgYWxsVGFza3NCdG4uaWQgPSAnYWxsLXRhc2tzJztcbiAgY29tcGxldGVkQnRuLnRleHRDb250ZW50ID0gJ0NvbXBsZXRlZCc7XG4gIGNvbXBsZXRlZEJ0bi5pZCA9ICdjb21wbGV0ZWQnO1xuXG4gIGFkZFNpZGViYXJMaXN0ZW5lcnMoKTtcblxuICB0b2RheS5hcHBlbmRDaGlsZCh0b2RheUJ0bik7XG4gIHdlZWsuYXBwZW5kQ2hpbGQod2Vla0J0bik7XG4gIGFsbFRhc2tzRGl2LmFwcGVuZENoaWxkKGFsbFRhc2tzQnRuKTtcbiAgY29tcGxldGVkRGl2LmFwcGVuZENoaWxkKGNvbXBsZXRlZEJ0bik7XG5cbiAgZGVmYXVsdEdyb3VwLmFwcGVuZENoaWxkKHRvZGF5KTtcbiAgZGVmYXVsdEdyb3VwLmFwcGVuZENoaWxkKHdlZWspO1xuICBkZWZhdWx0R3JvdXAuYXBwZW5kQ2hpbGQoYWxsVGFza3NEaXYpO1xuXG4gIGFzaWRlLmFwcGVuZENoaWxkKGRlZmF1bHRHcm91cCk7XG4gIGFzaWRlLmFwcGVuZENoaWxkKGNvbXBsZXRlZERpdik7XG5cbiAgZnVuY3Rpb24gYWRkU2lkZWJhckxpc3RlbmVycygpIHtcbiAgICB0b2RheUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRvZGF5TGlzdC51cGRhdGUoKTtcbiAgICAgIHN3aXRjaFRhc2tzQ29tcGxldGVMaXN0cygpO1xuICAgICAgcHJpbnRMaXN0KHRvZGF5TGlzdCk7XG4gICAgfSk7XG5cbiAgICB3ZWVrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpc1dlZWsudXBkYXRlKCk7XG4gICAgICBzd2l0Y2hUYXNrc0NvbXBsZXRlTGlzdHMoKTtcbiAgICAgIHByaW50TGlzdCh0aGlzV2Vlayk7XG4gICAgfSk7XG5cbiAgICBhbGxUYXNrc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBhbGxUYXNrc0xpc3QudXBkYXRlKCk7XG4gICAgICBzd2l0Y2hUYXNrc0NvbXBsZXRlTGlzdHMoKTtcbiAgICAgIHByaW50TGlzdChhbGxUYXNrc0xpc3QpO1xuICAgIH0pO1xuXG4gICAgY29tcGxldGVkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGNvbXBsZXRlZC51cGRhdGUoKTtcbiAgICAgIHN3aXRjaFRhc2tzQ29tcGxldGVMaXN0cygpO1xuICAgICAgcHJpbnRMaXN0KGNvbXBsZXRlZCk7XG4gICAgfSk7XG4gIH1cbn1cblxuLy8gQnVpbGQgZnVuY3Rpb24gdG8gd3JpdGUgY2F0ZWdvcmllcyAoc2lkZWJhcikgdG8gRE9NIG5leHQsIHRoZW4gd3JpdGUgZnVuY3Rpb25zIGZvciBkZWZhdWx0IHNldC11cFxuZXhwb3J0IGZ1bmN0aW9uIHByaW50U2lkZWJhcigpIHtcbiAgY29uc3QgYXNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdhc2lkZScpO1xuICBhc2lkZS5pbm5lckhUTUwgPSAnJztcblxuICBwcmludERlZmF1bHQoYXNpZGUpO1xuXG4gIGZvciAoY29uc3QgY2F0ZWdvcnkgb2YgY2F0ZWdvcmllcykge1xuICAgIGNvbnN0IGNhdEdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2F0R3JvdXAuY2xhc3NMaXN0LmFkZCgnY2F0LWdyb3VwJyk7XG5cbiAgICBjb25zdCBjYXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXREaXYuY2xhc3NMaXN0LmFkZCgnY2F0ZWdvcnknKTtcbiAgICBjYXREaXYudGV4dENvbnRlbnQgPSBjYXRlZ29yeS5uYW1lO1xuXG4gICAgY29uc3QgY2F0RGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY2F0RGVsZXRlLnRleHRDb250ZW50ID0gJ1gnO1xuICAgIGNhdERlbGV0ZS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nLCAnZGVsZXRlLWJ1dHRvbicpO1xuICAgIGNhdERlbGV0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNhdGVnb3J5LmRlbGV0ZSgpO1xuICAgICAgcHJpbnRTaWRlYmFyKCk7XG4gICAgfSk7XG5cbiAgICBjYXREaXYuYXBwZW5kQ2hpbGQoY2F0RGVsZXRlKTtcblxuICAgIGNhdEdyb3VwLmFwcGVuZENoaWxkKGNhdERpdik7XG4gICAgZm9yIChjb25zdCBsaXN0IG9mIGNhdGVnb3J5Lmxpc3RzKSB7XG4gICAgICBjb25zdCBsaXN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBsaXN0RGl2LmNsYXNzTGlzdC5hZGQoJ2xpc3RBc2lkZScsICdzdWItY2F0Jyk7XG5cbiAgICAgIGNvbnN0IGxpc3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIGxpc3RCdG4udGV4dENvbnRlbnQgPSBsaXN0Lm5hbWU7XG4gICAgICBsaXN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgY29uc3QgbGlzdCA9IGZpbmRMaXN0KGUudGFyZ2V0LnRleHRDb250ZW50KTtcbiAgICAgICAgc3dpdGNoVGFza3NDb21wbGV0ZUxpc3RzKCk7XG4gICAgICAgIHByaW50TGlzdChsaXN0KTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBsaXN0RGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBsaXN0RGVsZXRlLnRleHRDb250ZW50ID0gJ1gnO1xuICAgICAgbGlzdERlbGV0ZS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nLCAnZGVsZXRlLWJ1dHRvbicpO1xuICAgICAgbGlzdERlbGV0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbGlzdC5kZWxldGUoKTtcbiAgICAgICAgcHJpbnRTaWRlYmFyKCk7XG4gICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudExpc3QnKS50ZXh0Q29udGVudCA9PT0gbGlzdC5uYW1lKSBwcmludExpc3QobGlzdHNbMF0pO1xuICAgICAgfSk7XG5cbiAgICAgIGxpc3REaXYuYXBwZW5kQ2hpbGQobGlzdEJ0bik7XG4gICAgICBsaXN0RGl2LmFwcGVuZENoaWxkKGxpc3REZWxldGUpO1xuICAgICAgY2F0R3JvdXAuYXBwZW5kQ2hpbGQobGlzdERpdik7XG4gICAgfVxuICAgIGFzaWRlLmFwcGVuZENoaWxkKGNhdEdyb3VwKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgc2F2ZURhdGEgfSBmcm9tICcuL21lbW9yeU1hbmFnZW1lbnQuanMnO1xuaW1wb3J0IHsgYWRkSXRlbSwgcmVtb3ZlSXRlbSwgcHJpbnRJdGVtcywgZ2VuZXJhdGVJRCB9IGZyb20gJy4vdXRpbHMuanMnO1xuXG5jb25zdCBjYXRlZ29yaWVzID0gW107XG5cbmNsYXNzIENhdGVnb3J5IHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5saXN0cyA9IFtdO1xuICAgIHRoaXMuYWRkTGlzdCA9IGFkZEl0ZW0uYmluZCh0aGlzLmxpc3RzKTtcbiAgICB0aGlzLnJlbW92ZUxpc3QgPSByZW1vdmVJdGVtLmJpbmQodGhpcy5saXN0cyk7XG4gICAgdGhpcy5wcmludExpc3RzID0gcHJpbnRJdGVtcy5iaW5kKHRoaXMubGlzdHMpO1xuICAgIHRoaXMuSUQgPSBnZW5lcmF0ZUlEKCdDQVRFLScpO1xuICAgIGNhdGVnb3JpZXMucHVzaCh0aGlzKTtcbiAgfVxuXG4gIGRlbGV0ZSgpIHtcbiAgICB0aGlzLmRlbGV0ZUxpc3RzKCk7XG4gICAgY29uc3QgaW5kZXggPSBjYXRlZ29yaWVzLmluZGV4T2YodGhpcyk7XG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgY2F0ZWdvcmllcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cblxuICAgIHNhdmVEYXRhKCk7XG4gIH1cblxuICBkZWxldGVMaXN0cygpIHtcbiAgICBjb25zdCBsaXN0Q29weSA9IFsuLi50aGlzLmxpc3RzXTtcbiAgICBmb3IgKGNvbnN0IGxpc3Qgb2YgbGlzdENvcHkpIHtcbiAgICAgIGxpc3QuZGVsZXRlKCk7XG4gICAgfVxuXG4gICAgc2F2ZURhdGEoKTtcbiAgfVxufVxuXG5leHBvcnQgeyBDYXRlZ29yeSwgY2F0ZWdvcmllcyB9OyIsImltcG9ydCB7IENhdGVnb3J5LCBjYXRlZ29yaWVzIH0gZnJvbSAnLi9jYXRlZ29yeS5qcyc7XG5pbXBvcnQgeyBMaXN0LCBsaXN0cyB9IGZyb20gJy4vbGlzdC5qcyc7XG5pbXBvcnQgeyBUb3BpYywgdG9waWNzIH0gZnJvbSAnLi90b3BpYy5qcyc7XG5pbXBvcnQgeyBUYXNrLCBhbGxUYXNrcyB9IGZyb20gJy4vdGFzay5qcyc7XG5pbXBvcnQgeyBmaW5kQ2F0ZWdvcnksIGZpbmRMaXN0LCBmaW5kVG9waWMsIH0gZnJvbSAnLi91dGlscy5qcyc7XG5pbXBvcnQgeyBhZGRXZWVrcywgaXNCZWZvcmUsIGlzVG9kYXkgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuY29uc3QgdG9kYXlMaXN0ID0gbmV3IExpc3QgKCdUb2RheScsICdUYXNrcyBvZiB0aGUgZGF5Jyk7XG50b2RheUxpc3QuYWRkVG9waWMobmV3IFRvcGljKCdXaGF0IGFyZSB3ZSBnZXR0aW5nIGRvbmU/JywgdG9kYXlMaXN0KSk7XG50b2RheUxpc3QudXBkYXRlID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgZm9yIChjb25zdCB0YXNrIG9mIGFsbFRhc2tzKSB7XG4gICAgaWYgKChpc0JlZm9yZSh0YXNrLmR1ZURhdGUsIHRvZGF5KSB8fCBpc1RvZGF5KHRhc2suZHVlRGF0ZSwgdG9kYXkpKSAmJiAhdGhpcy50b3BpY3NbMF0udGFza3MuaW5jbHVkZXModGFzaykpIHRoaXMudG9waWNzWzBdLmFkZFRhc2sodGFzayk7XG4gICAgZWxzZSBpZiAoIWlzQmVmb3JlKHRhc2suZHVlRGF0ZSwgdG9kYXkpICYmICFpc1RvZGF5KHRhc2suZHVlRGF0ZSwgdG9kYXkpKSB0aGlzLnRvcGljc1swXS5yZW1vdmVUYXNrKHRhc2spO1xuICB9IFxuXG4gIGZvciAoY29uc3QgdGFzayBvZiB0aGlzLnRvcGljc1swXS50YXNrcykge1xuICAgIGlmICghYWxsVGFza3MuaW5jbHVkZXModGFzaykpIHRoaXMudG9waWNzWzBdLnJlbW92ZVRhc2sodGFzayk7XG4gIH1cbn07XG5cbmNvbnN0IHRoaXNXZWVrID0gbmV3IExpc3QoJ1RoaXMgV2VlaycsICdUYXNrcyBmb3IgdGhpcyB3ZWVrJyk7XG50aGlzV2Vlay5hZGRUb3BpYyhuZXcgVG9waWMoXCJUaGlzIFdlZWsncyBUYXNrc1wiLCB0aGlzV2VlaykpO1xudGhpc1dlZWsudXBkYXRlID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgY29uc3QgbmV4dFdlZWsgPSBhZGRXZWVrcyh0b2RheSwgMSk7XG4gIGZvciAoY29uc3QgdGFzayBvZiBhbGxUYXNrcykge1xuICAgIGlmIChpc0JlZm9yZSh0YXNrLmR1ZURhdGUsIG5leHRXZWVrKSAmJiAhdGhpcy50b3BpY3NbMF0udGFza3MuaW5jbHVkZXModGFzaykpIHRoaXMudG9waWNzWzBdLmFkZFRhc2sodGFzayk7XG4gICAgZWxzZSBpZiAoIWlzQmVmb3JlKHRhc2suZHVlRGF0ZSwgbmV4dFdlZWspKSB0aGlzLnRvcGljc1swXS5yZW1vdmVUYXNrKHRhc2spO1xuICB9IFxuXG4gIGZvciAoY29uc3QgdGFzayBvZiB0aGlzLnRvcGljc1swXS50YXNrcykge1xuICAgIGlmICghYWxsVGFza3MuaW5jbHVkZXModGFzaykpIHRoaXMudG9waWNzWzBdLnJlbW92ZVRhc2sodGFzayk7XG4gIH1cbn07XG5cbmNvbnN0IGFsbFRhc2tzTGlzdCA9IG5ldyBMaXN0KCdBbGwgVGFza3MnLCAnVGFza3MgY29sbGVjdGVkIGZyb20gYWxsIGxpc3RzJyk7XG5hbGxUYXNrc0xpc3QuYWRkVG9waWMobmV3IFRvcGljKCdBbGwgVGFza3MnKSk7XG5hbGxUYXNrc0xpc3QudXBkYXRlID0gZnVuY3Rpb24oKSB7XG4gIGFsbFRhc2tzTGlzdC50b3BpY3NbMF0udGFza3MgPSBhbGxUYXNrcztcbn1cblxuY29uc3QgY29tcGxldGVkID0gbmV3IExpc3QoJ0NvbXBsZXRlZCcsICdQYXN0IHRhc2tzJyk7XG5jb21wbGV0ZWQuYWRkVG9waWMobmV3IFRvcGljKCdDb21wbGV0ZWQgVGFza3MnLCBjb21wbGV0ZWQpKTtcbmNvbXBsZXRlZC51cGRhdGUgPSBmdW5jdGlvbigpIHtcbiAgZm9yIChjb25zdCB0YXNrIG9mIGFsbFRhc2tzKSB7XG4gICAgaWYgKHRhc2suY29tcGxldGVkICYmICF0aGlzLnRvcGljc1swXS50YXNrcy5pbmNsdWRlcyh0YXNrKSkgdGhpcy50b3BpY3NbMF0uYWRkVGFzayh0YXNrKTtcbiAgICBlbHNlIGlmICghdGFzay5jb21wbGV0ZWQpIHRoaXMudG9waWNzWzBdLnJlbW92ZVRhc2sodGFzayk7XG4gIH0gXG5cbiAgZm9yIChjb25zdCB0YXNrIG9mIHRoaXMudG9waWNzWzBdLnRhc2tzKSB7XG4gICAgaWYgKCFhbGxUYXNrcy5pbmNsdWRlcyh0YXNrKSkgdGhpcy50b3BpY3NbMF0ucmVtb3ZlVGFzayh0YXNrKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gdXBkYXRlRGVmYXVsdHMoKXtcbiAgdG9kYXlMaXN0LnVwZGF0ZSgpO1xuICB0aGlzV2Vlay51cGRhdGUoKTtcbiAgYWxsVGFza3NMaXN0LnVwZGF0ZSgpO1xuICBjb21wbGV0ZWQudXBkYXRlKCk7XG59XG5cblxuZXhwb3J0IHsgdG9kYXlMaXN0LCB0aGlzV2VlaywgYWxsVGFza3NMaXN0LCBjb21wbGV0ZWQsIHVwZGF0ZURlZmF1bHRzIH0iLCJpbXBvcnQgeyBmaW5kQ2F0ZWdvcnksIGZpbmRMaXN0LCBmaW5kVG9waWMgfSBmcm9tICcuL3V0aWxzLmpzJztcbmltcG9ydCB7IHByaW50TGlzdCwgcHJpbnRTaWRlYmFyIH0gZnJvbSAnLi9ET00uanMnO1xuaW1wb3J0IHsgTGlzdCwgbGlzdHMgfSBmcm9tICcuL2xpc3QuanMnO1xuaW1wb3J0IHsgVG9waWMsIHRvcGljcyB9IGZyb20gJy4vdG9waWMuanMnO1xuaW1wb3J0IHsgVGFzaywgYWxsVGFza3MgfSBmcm9tICcuL3Rhc2suanMnO1xuaW1wb3J0IHsgc2F2ZURhdGEgfSBmcm9tICcuL21lbW9yeU1hbmFnZW1lbnQuanMnO1xuaW1wb3J0IHsgdXBkYXRlRGVmYXVsdHMgfSBmcm9tICcuL2RlZmF1bHRMaXN0cy5qcyc7XG5cbmZ1bmN0aW9uIGhhbmRsZUxpc3RGb3JtKCkge1xuICBjb25zdCBzaG93TGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaG93TGlzdERpYWxvZycpO1xuICBjb25zdCBsaXN0RGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3REaWFsb2cnKTtcbiAgY29uc3QgbGlzdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdEZvcm0nKTtcbiAgY29uc3QgbGlzdENhbmNlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0Q2FuY2VsQnRuJylcbiAgXG4gIGxpc3RDYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGxpc3REaWFsb2cuY2xvc2UoKSk7XG4gIHNob3dMaXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBsaXN0RGlhbG9nLnNob3dNb2RhbCgpKTtcbiAgbGlzdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgXG4gICAgY29uc3QgY2F0ZWdvcnkgPSBmaW5kQ2F0ZWdvcnkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpc3RDYXRlZ29yeUlucHV0JykudmFsdWUpO1xuICAgIGNvbnN0IGxpc3QgPSBuZXcgTGlzdChcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsaXN0TmFtZUlucHV0JykudmFsdWUsXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGlzdERlc2NyaXB0aW9uSW5wdXQnKS52YWx1ZSxcbiAgICAgIGNhdGVnb3J5KTtcbiAgICBcbiAgICBjYXRlZ29yeS5hZGRMaXN0KGxpc3QpO1xuICBcbiAgICBwcmludFNpZGViYXIoKTtcbiAgICBzYXZlRGF0YSgpO1xuICBcbiAgICBsaXN0RGlhbG9nLmNsb3NlKCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVUYXNrRm9ybSgpe1xuICBjb25zdCBzaG93VGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaG93VGFza0RpYWxvZycpO1xuICBjb25zdCB0YXNrRGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tEaWFsb2cnKTtcbiAgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0Zvcm0nKTtcbiAgY29uc3QgdGFza0NhbmNlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrQ2FuY2VsQnRuJyk7XG5cbiAgdGFza0NhbmNlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGFza0RpYWxvZy5jbG9zZSgpKTtcbiAgc2hvd1Rhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRhc2tEaWFsb2cuc2hvd01vZGFsKCkpO1xuICB0YXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGN1cnJlbnRMaXN0ID0gZmluZExpc3QoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnRMaXN0JykudGV4dENvbnRlbnQpO1xuICAgIGNvbnN0IHRvcGljID0gZmluZFRvcGljKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrVG9waWNJbnB1dCcpLnZhbHVlLCBjdXJyZW50TGlzdCk7XG4gICAgY29uc3QgdGFzayA9IG5ldyBUYXNrKFxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tOYW1lSW5wdXQnKS52YWx1ZSxcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrRGVzY3JpcHRpb25JbnB1dCcpLnZhbHVlLFxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tEdWVJbnB1dCcpLnZhbHVlLFxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tQcmlvcml0eUlucHV0JykuY2hlY2tlZCxcbiAgICAgIHRvcGljLFxuICAgICk7XG4gICAgXG4gICAgdG9waWMuYWRkVGFzayh0YXNrKTtcbiAgICBpZiAoIWN1cnJlbnRMaXN0LnRvcGljcy5pbmNsdWRlcyh0b3BpYykpIGN1cnJlbnRMaXN0LmFkZFRvcGljKHRvcGljKTtcblxuICAgIGNvbnNvbGUubG9nKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrUHJpb3JpdHlJbnB1dCcpLmNoZWNrZWQpO1xuXG4gICAgcHJpbnRMaXN0KGN1cnJlbnRMaXN0KTtcbiAgICB1cGRhdGVEZWZhdWx0cygpO1xuICAgIHNhdmVEYXRhKCk7XG5cbiAgICB0YXNrRGlhbG9nLmNsb3NlKCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzd2l0Y2hUYXNrc0NvbXBsZXRlTGlzdHMoKXtcbiAgZm9yIChjb25zdCB0YXNrIG9mIGFsbFRhc2tzKSB7XG4gICAgdGFzay5tb2RpZnlQYXJlbnQoKTtcbiAgfVxufVxuXG5leHBvcnQgeyBoYW5kbGVMaXN0Rm9ybSwgaGFuZGxlVGFza0Zvcm0sIHN3aXRjaFRhc2tzQ29tcGxldGVMaXN0cyB9IiwiaW1wb3J0IHsgc2F2ZURhdGEgfSBmcm9tICcuL21lbW9yeU1hbmFnZW1lbnQuanMnO1xuaW1wb3J0IHsgYWRkSXRlbSwgcmVtb3ZlSXRlbSwgcHJpbnRJdGVtcywgZ2VuZXJhdGVJRCB9IGZyb20gJy4vdXRpbHMuanMnO1xuXG5cbmNvbnN0IGxpc3RzID0gW107XG5jbGFzcyBMaXN0IHtcbiAgY29uc3RydWN0b3IobmFtZSwgZGVzYyA9ICcnLCBwYXJlbnRDYXRlZ29yeSA9IG51bGwpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjLFxuICAgIHRoaXMudG9waWNzID0gW107XG4gICAgdGhpcy5hZGRUb3BpYyA9IGFkZEl0ZW0uYmluZCh0aGlzLnRvcGljcyk7XG4gICAgdGhpcy5yZW1vdmVUb3BpYyA9IHJlbW92ZUl0ZW0uYmluZCh0aGlzLnRvcGljcyk7XG4gICAgdGhpcy5wcmludFRvcGljcyA9IHByaW50SXRlbXMuYmluZCh0aGlzLnRvcGljcyk7XG4gICAgdGhpcy5JRCA9IGdlbmVyYXRlSUQoJ0xJU1QtJyk7XG4gICAgdGhpcy5wYXJlbnRDYXRlZ29yeSA9IHBhcmVudENhdGVnb3J5O1xuICAgIGxpc3RzLnB1c2godGhpcyk7XG4gIH1cblxuICBkZWxldGUoKSB7XG4gICAgdGhpcy5kZWxldGVUb3BpY3MoKTtcbiAgICBjb25zdCBpbmRleCA9IGxpc3RzLmluZGV4T2YodGhpcyk7XG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgbGlzdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG5cbiAgICBjb25zdCBjYXRJbmRleCA9IHRoaXMucGFyZW50Q2F0ZWdvcnkubGlzdHMuaW5kZXhPZih0aGlzKTtcbiAgICBpZiAoY2F0SW5kZXggIT09IC0xKSB7XG4gICAgICB0aGlzLnBhcmVudENhdGVnb3J5Lmxpc3RzLnNwbGljZShjYXRJbmRleCwgMSk7XG4gICAgfVxuICAgIHNhdmVEYXRhKCk7XG4gIH1cblxuICBkZWxldGVUb3BpY3MoKSB7XG4gICAgY29uc3QgdG9waWNDb3B5ID0gWy4uLnRoaXMudG9waWNzXTtcbiAgICBmb3IgKGNvbnN0IHRvcGljIG9mIHRvcGljQ29weSkge1xuICAgICAgdG9waWMuZGVsZXRlKCk7XG4gICAgfVxuICAgIHNhdmVEYXRhKCk7XG4gIH1cbn1cblxuZXhwb3J0IHsgTGlzdCwgbGlzdHMgfTsiLCJpbXBvcnQgeyBDYXRlZ29yeSwgY2F0ZWdvcmllcyB9IGZyb20gXCIuL2NhdGVnb3J5XCI7XG5pbXBvcnQgeyBMaXN0LCBsaXN0cyB9IGZyb20gXCIuL2xpc3RcIjtcbmltcG9ydCB7IFRvcGljLCB0b3BpY3MgfSBmcm9tIFwiLi90b3BpY1wiO1xuaW1wb3J0IHsgVGFzaywgYWxsVGFza3MgfSBmcm9tIFwiLi90YXNrXCI7XG5pbXBvcnQgeyBmaW5kQ2F0ZWdvcnksIGZpbmRMaXN0LCBmaW5kVG9waWMsIGZpbmRUb3BpY0J5SUQgfSBmcm9tIFwiLi91dGlsc1wiO1xuXG5mdW5jdGlvbiBzYXZlRGF0YSgpIHtcbiAgY29uc3QgW2NhdGVnb3J5U3RvcmFnZSwgbGlzdFN0b3JhZ2UsIHRvcGljU3RvcmFnZSwgdGFza1N0b3JhZ2VdID0gZXh0cmFjdENvbnN0cnVjdG9ycygpO1xuXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXRlZ29yaWVzJywgSlNPTi5zdHJpbmdpZnkoY2F0ZWdvcnlTdG9yYWdlKSk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsaXN0cycsIEpTT04uc3RyaW5naWZ5KGxpc3RTdG9yYWdlKSk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b3BpY3MnLCBKU09OLnN0cmluZ2lmeSh0b3BpY1N0b3JhZ2UpKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FsbFRhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFza1N0b3JhZ2UpKTtcblxuICAvLyBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShjYXRlZ29yeVN0b3JhZ2UpKTtcbiAgLy8gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkobGlzdFN0b3JhZ2UpKTtcbiAgLy8gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodG9waWNTdG9yYWdlKSk7XG4gIC8vIGNvbnNvbGUubG9nKEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGFza1N0b3JhZ2UpKSk7XG59XG5cbmZ1bmN0aW9uIGV4dHJhY3RDb25zdHJ1Y3RvcnMoKSB7XG4gIGNvbnN0IGNhdGVnb3J5U3RvcmFnZSA9IFtdO1xuICBmb3IgKGNvbnN0IGNhdGVnb3J5IG9mIGNhdGVnb3JpZXMpe1xuICAgIGNvbnN0IGNhdGVnb3J5Q29uc3RydWN0b3IgPSB7XG4gICAgICBuYW1lOiBjYXRlZ29yeS5uYW1lXG4gICAgfVxuICAgIGNhdGVnb3J5U3RvcmFnZS5wdXNoKGNhdGVnb3J5Q29uc3RydWN0b3IpO1xuICB9XG5cbiAgY29uc3QgbGlzdFN0b3JhZ2UgPSBbXTtcbiAgZm9yIChjb25zdCBsaXN0IG9mIGxpc3RzKSB7XG4gICAgY29uc3QgbGlzdENvbnN0cnVjdG9yID0ge1xuICAgICAgbmFtZTogbGlzdC5uYW1lLFxuICAgICAgZGVzY3JpcHRpb246IGxpc3QuZGVzY3JpcHRpb24sXG4gICAgICBwYXJlbnQ6IGxpc3QucGFyZW50Q2F0ZWdvcnkgPyBsaXN0LnBhcmVudENhdGVnb3J5Lm5hbWUgOiBudWxsLFxuICAgIH1cbiAgICBsaXN0U3RvcmFnZS5wdXNoKGxpc3RDb25zdHJ1Y3Rvcik7XG4gIH1cblxuICBjb25zdCB0b3BpY1N0b3JhZ2UgPSBbXTtcbiAgZm9yIChjb25zdCB0b3BpYyBvZiB0b3BpY3MpIHtcbiAgICBjb25zdCB0b3BpY0NvbnN0cnVjdG9yID0ge1xuICAgICAgbmFtZTogdG9waWMubmFtZSxcbiAgICAgIElEOiB0b3BpYy5JRCxcbiAgICAgIHBhcmVudDogdG9waWMucGFyZW50TGlzdCA/IHRvcGljLnBhcmVudExpc3QubmFtZSA6IG51bGwsXG4gICAgfVxuICAgIHRvcGljU3RvcmFnZS5wdXNoKHRvcGljQ29uc3RydWN0b3IpO1xuICB9XG5cbiAgY29uc3QgdGFza1N0b3JhZ2UgPSBbXTtcbiAgZm9yIChjb25zdCB0YXNrIG9mIGFsbFRhc2tzKXtcbiAgICBjb25zdCB0YXNrQ29uc3RydWN0b3IgPSB7XG4gICAgICBuYW1lOiB0YXNrLm5hbWUsXG4gICAgICBkZXNjcmlwdGlvbjogdGFzay5kZXNjcmlwdGlvbixcbiAgICAgIGR1ZURhdGU6IHRhc2suZHVlRGF0ZSxcbiAgICAgIHByaW9yaXR5OiB0YXNrLnByaW9yaXR5LFxuICAgICAgcGFyZW50OiB0YXNrLnBhcmVudFRvcGljID8gdGFzay5wYXJlbnRUb3BpYy5uYW1lIDogbnVsbCxcbiAgICAgIGNvbXBsZXRlZDogdGFzay5jb21wbGV0ZWQsXG4gICAgICBub3RlczogdGFzay5ub3RlcyxcbiAgICB9XG4gICAgdGFza1N0b3JhZ2UucHVzaCh0YXNrQ29uc3RydWN0b3IpO1xuICB9XG5cbiAgcmV0dXJuIFtjYXRlZ29yeVN0b3JhZ2UsIGxpc3RTdG9yYWdlLCB0b3BpY1N0b3JhZ2UsIHRhc2tTdG9yYWdlXTtcbn1cblxuXG5cbi8vIHJldHVybnMgY2F0ZWdvcnksIGxpc3QsIHRvcGljLCBhbmQgdGFzayBjb25zdHJ1Y3RvciBhcnJheXMgYXMgYW4gYXJyYXlcbmZ1bmN0aW9uIGFjY2Vzc0RhdGEoKSB7XG4gIGNvbnN0IGNhdGVnb3J5U3RvcmFnZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhdGVnb3JpZXMnKSk7XG4gIGNvbnN0IGxpc3RTdG9yYWdlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGlzdHMnKSk7XG4gIGNvbnN0IHRvcGljU3RvcmFnZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvcGljcycpKTtcbiAgY29uc3QgdGFza1N0b3JhZ2UgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbGxUYXNrcycpKTtcbiAgXG4gIHJldHVybiBbY2F0ZWdvcnlTdG9yYWdlLCBsaXN0U3RvcmFnZSwgdG9waWNTdG9yYWdlLCB0YXNrU3RvcmFnZV07XG59XG5cbi8vIHJlYWQganNvbiBhbmQgY29udmVydCBpbnRvIG9iamVjdHMuXG5mdW5jdGlvbiB3cml0ZURhdGEoKSB7XG4gIGZpcnN0TGF1bmNoRGF0YSgpO1xuICBjb25zdCBbY2F0ZWdvcnlTdG9yYWdlLCBsaXN0U3RvcmFnZSwgdG9waWNTdG9yYWdlLCB0YXNrU3RvcmFnZV0gPSBhY2Nlc3NEYXRhKCk7XG5cbiAgZm9yIChjb25zdCBjYXRlZ29yeSBvZiBjYXRlZ29yeVN0b3JhZ2UpIHtcbiAgICBpZiAoIWNhdGVnb3JpZXMuc29tZShjYXQgPT4gY2F0Lm5hbWUgPT09IGNhdGVnb3J5Lm5hbWUpKSB7XG4gICAgICBjb25zdCByZWFkQ2F0ZWdvcnkgPSBuZXcgQ2F0ZWdvcnkoY2F0ZWdvcnkubmFtZSk7XG4gICAgfVxuICB9XG5cbiAgZm9yIChjb25zdCBsaXN0IG9mIGxpc3RTdG9yYWdlKSB7XG4gICAgaWYgKCFsaXN0cy5zb21lKGxzdCA9PiBsc3QubmFtZSA9PT0gbGlzdC5uYW1lICYmIGxzdC5kZXNjcmlwdGlvbiA9PT0gbGlzdC5kZXNjcmlwdGlvbikpIHtcbiAgICAgIGNvbnN0IHJlYWRMaXN0ID0gbmV3IExpc3QobGlzdC5uYW1lLCBsaXN0LmRlc2NyaXB0aW9uLCBmaW5kQ2F0ZWdvcnkobGlzdC5wYXJlbnQpKTtcbiAgICB9XG4gIH1cblxuICBmb3IgKGNvbnN0IHRvcGljIG9mIHRvcGljU3RvcmFnZSkge1xuICAgIGlmICghdG9waWNzLnNvbWUodHBjID0+IHRwYy5uYW1lID09PSB0b3BpYy5uYW1lKSkge1xuICAgICAgY29uc3QgcmVhZFRvcGljID0gbmV3IFRvcGljKHRvcGljLm5hbWUsIGZpbmRMaXN0KHRvcGljLnBhcmVudCkpO1xuICAgIH1cbiAgfVxuXG4gIGZvciAoY29uc3QgdGFzayBvZiB0YXNrU3RvcmFnZSkge1xuICAgIGlmICghYWxsVGFza3Muc29tZSh0c2sgPT4gdHNrLm5hbWUgPT09IHRhc2submFtZSkpIHtcbiAgICAgIGNvbnN0IHJlYWRUYXNrID0gbmV3IFRhc2sodGFzay5uYW1lLCB0YXNrLmRlc2NyaXB0aW9uLCB0YXNrLmR1ZURhdGUsIHRhc2sucHJpb3JpdHksIGZpbmRUb3BpYyh0YXNrLnBhcmVudCksIHRhc2suY29tcGxldGVkKVxuICAgIH1cbiAgfVxuXG4gIG9yZ2FuaXplT2JqZWN0cygpO1xufVxuXG4vLyBhZGRzIG9iamVjdHMgdG8gdGhlIGFwcHJvcHJpYXRlIHBhcmVudCBiYXNlZCBvbiB0aGUgbGlzdGVkIHBhcmVudCBpbnNpZGUuXG5mdW5jdGlvbiBvcmdhbml6ZU9iamVjdHMoKSB7XG4gIGZvciAoY29uc3QgbGlzdCBvZiBsaXN0cykge1xuICAgIGlmICghbGlzdC5wYXJlbnRDYXRlZ29yeSB8fCBsaXN0LnBhcmVudENhdGVnb3J5Lmxpc3RzLmluY2x1ZGVzKGxpc3QpKSBjb250aW51ZTtcblxuICAgIGxpc3QucGFyZW50Q2F0ZWdvcnkuYWRkTGlzdChsaXN0KTtcbiAgfVxuXG4gIGZvciAoY29uc3QgdG9waWMgb2YgdG9waWNzKSB7XG4gICAgaWYgKCF0b3BpYy5wYXJlbnRMaXN0IHx8IHRvcGljLnBhcmVudExpc3QudG9waWNzLmluY2x1ZGVzKHRvcGljKSkgY29udGludWU7XG5cbiAgICB0b3BpYy5wYXJlbnRMaXN0LmFkZFRvcGljKHRvcGljKTtcbiAgfVxuXG4gIGZvciAoY29uc3QgdGFzayBvZiBhbGxUYXNrcykge1xuICAgIGlmICghdGFzay5wYXJlbnRUb3BpYyB8fCB0YXNrLnBhcmVudFRvcGljLnRhc2tzLmluY2x1ZGVzKHRhc2spKSBjb250aW51ZTtcblxuICAgIHRhc2sucGFyZW50VG9waWMuYWRkVGFzayh0YXNrKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjbGVhckRhdGEoKSB7XG4gIC8vIENsZWFyIGxvY2FsU3RvcmFnZVxuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnY2F0ZWdvcmllcycpO1xuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnbGlzdHMnKTtcbiAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3RvcGljcycpO1xuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnYWxsVGFza3MnKTtcblxuICAvLyBDbGVhciBhcnJheXNcbiAgY2F0ZWdvcmllcy5sZW5ndGggPSAwO1xuICBsaXN0cy5sZW5ndGggPSAwO1xuICB0b3BpY3MubGVuZ3RoID0gMDtcbiAgYWxsVGFza3MubGVuZ3RoID0gMDtcbn1cblxuZnVuY3Rpb24gZmlyc3RMYXVuY2hEYXRhKCl7XG4gIGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhdGVnb3J5U3RvcmFnZScpKXtcbiAgICBjb25zdCBleGFtcGxlQ2F0ZWdvcnkgPSBuZXcgQ2F0ZWdvcnkoJ0dlbmVyYWwnKTtcbiAgICBjb25zdCBleGFtcGxlTGlzdCA9IG5ldyBMaXN0KCdGaXJzdCBMYXVuY2gnLCAnU29tZSB0aGluZ3MgeW91IG1pZ2h0IHdhbnQgdG8gZG8hJywgZXhhbXBsZUNhdGVnb3J5KTtcbiAgICBjb25zdCBleGFtcGxlVG9waWMgPSBuZXcgVG9waWMoJ015IEZpcnN0IFRhc2tzJywgZXhhbXBsZUxpc3QpO1xuICAgIGNvbnN0IHRhc2sxID0gbmV3IFRhc2soJ0NyZWF0ZSB5b3VyIG93biBsaXN0cyBhbmQgY2F0ZWdvcmllcycsICcnLCAnJywgJycsIGV4YW1wbGVUb3BpYyk7XG4gICAgY29uc3QgdGFzazIgPSBuZXcgVGFzaygnQ3JlYXRlIHlvdXIgb3duIHRhc2tzIGFuZCB0b3BpY3MnLCAnJywgJycsICcnLCBleGFtcGxlVG9waWMpO1xuICAgIGNvbnN0IHRhc2szID0gbmV3IFRhc2soJ0RlbGV0ZSBhbGwgdGhpcyBkdW1teSBjb250ZW50JywgJycsICcnLCAnJywgZXhhbXBsZVRvcGljKTtcblxuICAgIGV4YW1wbGVUb3BpYy5hZGRUYXNrKHRhc2sxKVxuICAgIGV4YW1wbGVUb3BpYy5hZGRUYXNrKHRhc2syKVxuICAgIGV4YW1wbGVUb3BpYy5hZGRUYXNrKHRhc2szKVxuICAgIGV4YW1wbGVMaXN0LmFkZFRvcGljKGV4YW1wbGVUb3BpYyk7XG4gICAgZXhhbXBsZUNhdGVnb3J5LmFkZExpc3QoZXhhbXBsZUxpc3QpO1xuXG4gICAgc2F2ZURhdGEoKTtcbiAgfVxufVxuXG5leHBvcnQgeyBzYXZlRGF0YSwgd3JpdGVEYXRhLCBvcmdhbml6ZU9iamVjdHMsIGNsZWFyRGF0YSB9IiwiY29uc3QgYWxsVGFza3MgPSBbXTtcbmltcG9ydCB7IHNhdmVEYXRhIH0gZnJvbSAnLi9tZW1vcnlNYW5hZ2VtZW50LmpzJztcbmltcG9ydCB7IGdlbmVyYXRlSUQgfSBmcm9tICcuL3V0aWxzLmpzJztcblxuY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKG5hbWUgPSAndGl0bGUnLCBkZXNjID0gJ2Rlc2NyaXB0aW9uJywgZHVlRGF0ZSA9ICcxMS8wNC8yMDI0JywgcHJpb3JpdHkgPSBmYWxzZSwgcGFyZW50VG9waWMgPSBudWxsLCBjb21wbGV0ZWQgPSBmYWxzZSwgbm90ZXMgPSAnJywgc3ViVGFza3MgPSBbXSwgKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmRlc2MgPSBkZXNjO1xuICAgIHRoaXMuZHVlRGF0ZSA9IG5ldyBEYXRlKGR1ZURhdGUpO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLm5vdGVzID0gbm90ZXM7XG4gICAgdGhpcy5zdWJUYXNrcyA9IHN1YlRhc2tzO1xuICAgIHRoaXMuY29tcGxldGVkID0gY29tcGxldGVkO1xuICAgIHRoaXMuSUQgPSBnZW5lcmF0ZUlEKCdUQVNLLScpO1xuICAgIHRoaXMucGFyZW50VG9waWMgPSBwYXJlbnRUb3BpYztcbiAgICBhbGxUYXNrcy5wdXNoKHRoaXMpO1xuICB9XG5cbiAgbW9kaWZ5UGFyZW50KCkge1xuICAgIGlmICghdGhpcy5jb21wbGV0ZWQgJiYgIXRoaXMucGFyZW50VG9waWMudGFza3MuaW5jbHVkZXModGhpcykpIHRoaXMucGFyZW50VG9waWMuYWRkVGFzayh0aGlzKTtcbiAgICBlbHNlIGlmKHRoaXMuY29tcGxldGVkICYmIHRoaXMucGFyZW50VG9waWMudGFza3MuaW5jbHVkZXModGhpcykpIHRoaXMucGFyZW50VG9waWMucmVtb3ZlVGFzayh0aGlzKTtcbiAgfVxuXG4gIHRvZ2dsZUNvbXBsZXRlKCkge1xuICAgIHRoaXMuY29tcGxldGVkID0gdGhpcy5jb21wbGV0ZWQgPyBmYWxzZSA6IHRydWU7XG4gICAgc2F2ZURhdGEoKTtcbiAgfVxuXG4gIHRvZ2dsZVByaW9yaXR5KCkge1xuICAgIHRoaXMucHJpb3JpdHkgPSB0aGlzLnByaW9yaXR5ID8gZmFsc2UgOiB0cnVlO1xuICAgIHNhdmVEYXRhKCk7XG4gIH1cblxuICBhZGRTdWJUYXNrKHRhc2spe1xuICAgIHRoaXMuc3ViVGFza3MucHVzaCh0YXNrKTtcbiAgfVxuICBcbiAgZGVsZXRlKCkge1xuICAgIGNvbnN0IGluZGV4ID0gYWxsVGFza3MuaW5kZXhPZih0aGlzKTtcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBhbGxUYXNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cblxuICAgIGNvbnN0IHRvcGljSW5kZXggPSB0aGlzLnBhcmVudFRvcGljLnRhc2tzLmluZGV4T2YodGhpcyk7XG4gICAgaWYgKHRvcGljSW5kZXggIT09IC0xKSB7XG4gICAgICB0aGlzLnBhcmVudFRvcGljLnRhc2tzLnNwbGljZSh0b3BpY0luZGV4LCAxKTtcbiAgICB9XG4gICAgXG4gICAgc2F2ZURhdGEoKTtcbiAgfVxufVxuXG5leHBvcnQgeyBUYXNrLCBhbGxUYXNrcyB9OyIsImltcG9ydCB7IHNhdmVEYXRhIH0gZnJvbSAnLi9tZW1vcnlNYW5hZ2VtZW50LmpzJztcbmltcG9ydCB7IGFkZEl0ZW0sIHJlbW92ZUl0ZW0sIHByaW50SXRlbXMsIGdlbmVyYXRlSUQgfSBmcm9tICcuL3V0aWxzLmpzJztcblxuY29uc3QgdG9waWNzID0gW11cbmNsYXNzIFRvcGljIHtcbiAgY29uc3RydWN0b3IobmFtZSwgcGFyZW50TGlzdCA9IG51bGwpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudGFza3MgPSBbXTtcbiAgICB0aGlzLmFkZFRhc2sgPSBhZGRJdGVtLmJpbmQodGhpcy50YXNrcyk7XG4gICAgdGhpcy5yZW1vdmVUYXNrID0gcmVtb3ZlSXRlbS5iaW5kKHRoaXMudGFza3MpO1xuICAgIHRoaXMucHJpbnRUYXNrcyA9IHByaW50SXRlbXMuYmluZCh0aGlzLnRhc2tzKTtcbiAgICB0aGlzLklEID0gZ2VuZXJhdGVJRCgnVE9QSS0nKTtcbiAgICB0aGlzLnBhcmVudExpc3QgPSBwYXJlbnRMaXN0O1xuICAgIHRvcGljcy5wdXNoKHRoaXMpO1xuICB9XG5cbiAgcmVtb3ZlVGFzayh0YXNrKXtcbiAgICBjb25zdCB0b3BpY0luZGV4ID0gdGhpcy50YXNrcy5pbmRleE9mKHRhc2spO1xuICAgIGlmICh0b3BpY0luZGV4ICE9PSAtMSkge1xuICAgICAgdGhpcy50YXNrcy5zcGxpY2UodG9waWNJbmRleCwgMSk7XG4gICAgfVxuICAgIHNhdmVEYXRhKCk7XG4gIH1cblxuICBkZWxldGVUYXNrcygpIHtcbiAgICBjb25zdCB0YXNrc0NvcHkgPSBbLi4udGhpcy50YXNrc107XG4gICAgZm9yIChjb25zdCB0YXNrIG9mIHRhc2tzQ29weSkge1xuICAgICAgdGFzay5kZWxldGUoKTtcbiAgICB9XG4gICAgc2F2ZURhdGEoKTtcbiAgfVxuXG4gIGRlbGV0ZSgpIHtcbiAgICB0aGlzLmRlbGV0ZVRhc2tzKCk7XG4gICAgY29uc3QgaW5kZXggPSB0b3BpY3MuaW5kZXhPZih0aGlzKTtcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICB0b3BpY3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG5cbiAgICBjb25zdCBsaXN0SW5kZXggPSB0aGlzLnBhcmVudExpc3QudG9waWNzLmluZGV4T2YodGhpcyk7XG4gICAgaWYgKGxpc3RJbmRleCAhPT0gLTEpIHtcbiAgICAgIHRoaXMucGFyZW50TGlzdC50b3BpY3Muc3BsaWNlKGxpc3RJbmRleCwgMSk7XG4gICAgfVxuICAgIHNhdmVEYXRhKCk7XG4gIH1cbn1cblxuZXhwb3J0IHsgVG9waWMsIHRvcGljcyB9OyIsImltcG9ydCB7IENhdGVnb3J5LCBjYXRlZ29yaWVzIH0gZnJvbSAnLi9jYXRlZ29yeSc7XG5pbXBvcnQgeyBsaXN0cyB9IGZyb20gJy4vbGlzdCdcbmltcG9ydCB7IFRvcGljLCB0b3BpY3MgfSBmcm9tICcuL3RvcGljJztcbmltcG9ydCB7IGFsbFRhc2tzIH0gZnJvbSAnLi90YXNrJztcblxuY29uc3QgYWRkSXRlbSA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgdGhpcy5wdXNoKGl0ZW0pO1xufVxuXG5jb25zdCByZW1vdmVJdGVtID0gZnVuY3Rpb24oaXRlbSkge1xuICBjb25zdCBpbmRleCA9IHRoaXMuaW5kZXhPZihpdGVtKTtcbiAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgIHRoaXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuICBlbHNlIGNvbnNvbGUubG9nKCdOb3QgZm91bmQgaW4gbGlzdCcpO1xufVxuXG5jb25zdCBwcmludEl0ZW1zID0gZnVuY3Rpb24oKSB7XG4gIGZvcihjb25zdCBpdGVtIG9mIHRoaXMpe1xuICAgIGNvbnNvbGUubG9nKGl0ZW0ubmFtZSk7XG4gIH1cbn1cblxuY29uc3QgZ2VuZXJhdGVJRCA9IGZ1bmN0aW9uKHByZWZpeCkge1xuICBjb25zdCBjaGFycyA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSc7XG4gIGxldCBpZCA9ICcnO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKykge1xuICAgIGlkICs9IGNoYXJzLmNoYXJBdChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjaGFycy5sZW5ndGgpKTtcbiAgfVxuICByZXR1cm4gcHJlZml4ICsgaWQ7XG59XG5cblxuXG5mdW5jdGlvbiBmaW5kQ2F0ZWdvcnkoY2F0TmFtZSkge1xuICBmb3IgKGNvbnN0IGNhdGVnb3J5IG9mIGNhdGVnb3JpZXMpIHtcbiAgICBpZiAoY2F0ZWdvcnkubmFtZSA9PT0gY2F0TmFtZSkge1xuICAgICAgcmV0dXJuIGNhdGVnb3J5O1xuICAgIH1cbiAgfVxuICBjb25zdCBuZXdDYXQgPSBuZXcgQ2F0ZWdvcnkoY2F0TmFtZSk7XG4gIHJldHVybiBuZXdDYXQ7XG59XG5cbmZ1bmN0aW9uIGZpbmRMaXN0KGxpc3ROYW1lKSB7XG4gIGZvciAoY29uc3QgbGlzdCBvZiBsaXN0cykge1xuICAgIGlmKGxpc3QubmFtZSA9PT0gbGlzdE5hbWUpe1xuICAgICAgcmV0dXJuIGxpc3RcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZmluZFRvcGljKHRvcGljTmFtZSwgbGlzdCA9IG51bGwpIHtcbiAgZm9yIChjb25zdCB0b3BpYyBvZiB0b3BpY3MpIHtcbiAgICBpZiAodG9waWMubmFtZSA9PT0gdG9waWNOYW1lKSB7XG4gICAgICByZXR1cm4gdG9waWM7XG4gICAgfVxuICB9XG4gIGNvbnN0IG5ld1RvcGljID0gbmV3IFRvcGljKHRvcGljTmFtZSwgbGlzdClcbiAgcmV0dXJuIG5ld1RvcGljO1xufVxuXG5cblxuXG5leHBvcnQgeyBhZGRJdGVtLCByZW1vdmVJdGVtLCBwcmludEl0ZW1zLCBnZW5lcmF0ZUlELCBmaW5kQ2F0ZWdvcnksIGZpbmRMaXN0LCBmaW5kVG9waWMgfTsiLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5pbXBvcnQgeyBjb25zdHJ1Y3RGcm9tIH0gZnJvbSBcIi4vY29uc3RydWN0RnJvbS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBhZGREYXlzXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0gYW1vdW50IC0gVGhlIGFtb3VudCBvZiBkYXlzIHRvIGJlIGFkZGVkLlxuICpcbiAqIEByZXR1cm5zIFRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBkYXlzIGFkZGVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCAxMCBkYXlzIHRvIDEgU2VwdGVtYmVyIDIwMTQ6XG4gKiBjb25zdCByZXN1bHQgPSBhZGREYXlzKG5ldyBEYXRlKDIwMTQsIDgsIDEpLCAxMClcbiAqIC8vPT4gVGh1IFNlcCAxMSAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGREYXlzKGRhdGUsIGFtb3VudCkge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgaWYgKGlzTmFOKGFtb3VudCkpIHJldHVybiBjb25zdHJ1Y3RGcm9tKGRhdGUsIE5hTik7XG4gIGlmICghYW1vdW50KSB7XG4gICAgLy8gSWYgMCBkYXlzLCBuby1vcCB0byBhdm9pZCBjaGFuZ2luZyB0aW1lcyBpbiB0aGUgaG91ciBiZWZvcmUgZW5kIG9mIERTVFxuICAgIHJldHVybiBfZGF0ZTtcbiAgfVxuICBfZGF0ZS5zZXREYXRlKF9kYXRlLmdldERhdGUoKSArIGFtb3VudCk7XG4gIHJldHVybiBfZGF0ZTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBhZGREYXlzO1xuIiwiaW1wb3J0IHsgYWRkRGF5cyB9IGZyb20gXCIuL2FkZERheXMubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgYWRkV2Vla3NcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiB3ZWVrcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiB3ZWVrIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIGFtb3VudCAtIFRoZSBhbW91bnQgb2Ygd2Vla3MgdG8gYmUgYWRkZWQuXG4gKlxuICogQHJldHVybnMgVGhlIG5ldyBkYXRlIHdpdGggdGhlIHdlZWtzIGFkZGVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCA0IHdlZWtzIHRvIDEgU2VwdGVtYmVyIDIwMTQ6XG4gKiBjb25zdCByZXN1bHQgPSBhZGRXZWVrcyhuZXcgRGF0ZSgyMDE0LCA4LCAxKSwgNClcbiAqIC8vPT4gTW9uIFNlcCAyOSAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRXZWVrcyhkYXRlLCBhbW91bnQpIHtcbiAgY29uc3QgZGF5cyA9IGFtb3VudCAqIDc7XG4gIHJldHVybiBhZGREYXlzKGRhdGUsIGRheXMpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGFkZFdlZWtzO1xuIiwiLyoqXG4gKiBAbmFtZSBjb25zdHJ1Y3RGcm9tXG4gKiBAY2F0ZWdvcnkgR2VuZXJpYyBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb25zdHJ1Y3RzIGEgZGF0ZSB1c2luZyB0aGUgcmVmZXJlbmNlIGRhdGUgYW5kIHRoZSB2YWx1ZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogVGhlIGZ1bmN0aW9uIGNvbnN0cnVjdHMgYSBuZXcgZGF0ZSB1c2luZyB0aGUgY29uc3RydWN0b3IgZnJvbSB0aGUgcmVmZXJlbmNlXG4gKiBkYXRlIGFuZCB0aGUgZ2l2ZW4gdmFsdWUuIEl0IGhlbHBzIHRvIGJ1aWxkIGdlbmVyaWMgZnVuY3Rpb25zIHRoYXQgYWNjZXB0XG4gKiBkYXRlIGV4dGVuc2lvbnMuXG4gKlxuICogSXQgZGVmYXVsdHMgdG8gYERhdGVgIGlmIHRoZSBwYXNzZWQgcmVmZXJlbmNlIGRhdGUgaXMgYSBudW1iZXIgb3IgYSBzdHJpbmcuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgcmVmZXJlbmNlIGRhdGUgdG8gdGFrZSBjb25zdHJ1Y3RvciBmcm9tXG4gKiBAcGFyYW0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY3JlYXRlIHRoZSBkYXRlXG4gKlxuICogQHJldHVybnMgRGF0ZSBpbml0aWFsaXplZCB1c2luZyB0aGUgZ2l2ZW4gZGF0ZSBhbmQgdmFsdWVcbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gJ2RhdGUtZm5zJ1xuICpcbiAqIC8vIEEgZnVuY3Rpb24gdGhhdCBjbG9uZXMgYSBkYXRlIHByZXNlcnZpbmcgdGhlIG9yaWdpbmFsIHR5cGVcbiAqIGZ1bmN0aW9uIGNsb25lRGF0ZTxEYXRlVHlwZSBleHRlbmRzIERhdGUoZGF0ZTogRGF0ZVR5cGUpOiBEYXRlVHlwZSB7XG4gKiAgIHJldHVybiBjb25zdHJ1Y3RGcm9tKFxuICogICAgIGRhdGUsIC8vIFVzZSBjb250cnVzdG9yIGZyb20gdGhlIGdpdmVuIGRhdGVcbiAqICAgICBkYXRlLmdldFRpbWUoKSAvLyBVc2UgdGhlIGRhdGUgdmFsdWUgdG8gY3JlYXRlIGEgbmV3IGRhdGVcbiAqICAgKVxuICogfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29uc3RydWN0RnJvbShkYXRlLCB2YWx1ZSkge1xuICBpZiAoZGF0ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICByZXR1cm4gbmV3IGRhdGUuY29uc3RydWN0b3IodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBuZXcgRGF0ZSh2YWx1ZSk7XG4gIH1cbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBjb25zdHJ1Y3RGcm9tO1xuIiwiaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuL2NvbnN0cnVjdEZyb20ubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgY29uc3RydWN0Tm93XG4gKiBAY2F0ZWdvcnkgR2VuZXJpYyBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb25zdHJ1Y3RzIGEgbmV3IGN1cnJlbnQgZGF0ZSB1c2luZyB0aGUgcGFzc2VkIHZhbHVlIGNvbnN0cnVjdG9yLlxuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoZSBmdW5jdGlvbiBjb25zdHJ1Y3RzIGEgbmV3IGN1cnJlbnQgZGF0ZSB1c2luZyB0aGUgY29uc3RydWN0b3IgZnJvbVxuICogdGhlIHJlZmVyZW5jZSBkYXRlLiBJdCBoZWxwcyB0byBidWlsZCBnZW5lcmljIGZ1bmN0aW9ucyB0aGF0IGFjY2VwdCBkYXRlXG4gKiBleHRlbnNpb25zIGFuZCB1c2UgdGhlIGN1cnJlbnQgZGF0ZS5cbiAqXG4gKiBJdCBkZWZhdWx0cyB0byBgRGF0ZWAgaWYgdGhlIHBhc3NlZCByZWZlcmVuY2UgZGF0ZSBpcyBhIG51bWJlciBvciBhIHN0cmluZy5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSByZWZlcmVuY2UgZGF0ZSB0byB0YWtlIGNvbnN0cnVjdG9yIGZyb21cbiAqXG4gKiBAcmV0dXJucyBDdXJyZW50IGRhdGUgaW5pdGlhbGl6ZWQgdXNpbmcgdGhlIGdpdmVuIGRhdGUgY29uc3RydWN0b3JcbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgY29uc3RydWN0Tm93LCBpc1NhbWVEYXkgfSBmcm9tICdkYXRlLWZucydcbiAqXG4gKiBmdW5jdGlvbiBpc1RvZGF5PERhdGVUeXBlIGV4dGVuZHMgRGF0ZT4oXG4gKiAgIGRhdGU6IERhdGVUeXBlIHwgbnVtYmVyIHwgc3RyaW5nLFxuICogKTogYm9vbGVhbiB7XG4gKiAgIC8vIElmIHdlIHdlcmUgdG8gdXNlIGBuZXcgRGF0ZSgpYCBkaXJlY3RseSwgdGhlIGZ1bmN0aW9uIHdvdWxkICBiZWhhdmVcbiAqICAgLy8gZGlmZmVyZW50bHkgaW4gZGlmZmVyZW50IHRpbWV6b25lcyBhbmQgcmV0dXJuIGZhbHNlIGZvciB0aGUgc2FtZSBkYXRlLlxuICogICByZXR1cm4gaXNTYW1lRGF5KGRhdGUsIGNvbnN0cnVjdE5vdyhkYXRlKSk7XG4gKiB9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb25zdHJ1Y3ROb3coZGF0ZSkge1xuICByZXR1cm4gY29uc3RydWN0RnJvbShkYXRlLCBEYXRlLm5vdygpKTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBjb25zdHJ1Y3ROb3c7XG4iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNCZWZvcmVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGZpcnN0IGRhdGUgYmVmb3JlIHRoZSBzZWNvbmQgb25lP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGZpcnN0IGRhdGUgYmVmb3JlIHRoZSBzZWNvbmQgb25lP1xuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGRhdGUgdGhhdCBzaG91bGQgYmUgYmVmb3JlIHRoZSBvdGhlciBvbmUgdG8gcmV0dXJuIHRydWVcbiAqIEBwYXJhbSBkYXRlVG9Db21wYXJlIC0gVGhlIGRhdGUgdG8gY29tcGFyZSB3aXRoXG4gKlxuICogQHJldHVybnMgVGhlIGZpcnN0IGRhdGUgaXMgYmVmb3JlIHRoZSBzZWNvbmQgZGF0ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJcyAxMCBKdWx5IDE5ODkgYmVmb3JlIDExIEZlYnJ1YXJ5IDE5ODc/XG4gKiBjb25zdCByZXN1bHQgPSBpc0JlZm9yZShuZXcgRGF0ZSgxOTg5LCA2LCAxMCksIG5ldyBEYXRlKDE5ODcsIDEsIDExKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzQmVmb3JlKGRhdGUsIGRhdGVUb0NvbXBhcmUpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIGNvbnN0IF9kYXRlVG9Db21wYXJlID0gdG9EYXRlKGRhdGVUb0NvbXBhcmUpO1xuICByZXR1cm4gK19kYXRlIDwgK19kYXRlVG9Db21wYXJlO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGlzQmVmb3JlO1xuIiwiaW1wb3J0IHsgc3RhcnRPZkRheSB9IGZyb20gXCIuL3N0YXJ0T2ZEYXkubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNTYW1lRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGVMZWZ0IC0gVGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSBkYXRlUmlnaHQgLSBUaGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcblxuICogQHJldHVybnMgVGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aClcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIDA2OjAwOjAwIGFuZCA0IFNlcHRlbWJlciAxODowMDowMCBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCwgNiwgMCksIG5ldyBEYXRlKDIwMTQsIDgsIDQsIDE4LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgYW5kIDQgT2N0b2JlciBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTQsIDksIDQpKVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIsIDIwMTQgYW5kIDQgU2VwdGVtYmVyLCAyMDE1IGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNSwgOCwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1NhbWVEYXkoZGF0ZUxlZnQsIGRhdGVSaWdodCkge1xuICBjb25zdCBkYXRlTGVmdFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRhdGVMZWZ0KTtcbiAgY29uc3QgZGF0ZVJpZ2h0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGF0ZVJpZ2h0KTtcblxuICByZXR1cm4gK2RhdGVMZWZ0U3RhcnRPZkRheSA9PT0gK2RhdGVSaWdodFN0YXJ0T2ZEYXk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgaXNTYW1lRGF5O1xuIiwiaW1wb3J0IHsgY29uc3RydWN0Tm93IH0gZnJvbSBcIi4vY29uc3RydWN0Tm93Lm1qc1wiO1xuaW1wb3J0IHsgaXNTYW1lRGF5IH0gZnJvbSBcIi4vaXNTYW1lRGF5Lm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzVG9kYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZGF0ZSB0byBjaGVja1xuICpcbiAqIEByZXR1cm5zIFRoZSBkYXRlIGlzIHRvZGF5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDYgT2N0b2JlciAyMDE0LCBpcyA2IE9jdG9iZXIgMTQ6MDA6MDAgdG9kYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RvZGF5KG5ldyBEYXRlKDIwMTQsIDksIDYsIDE0LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNUb2RheShkYXRlKSB7XG4gIHJldHVybiBpc1NhbWVEYXkoZGF0ZSwgY29uc3RydWN0Tm93KGRhdGUpKTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBpc1RvZGF5O1xuIiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgb3JpZ2luYWwgZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBzdGFydCBvZiBhIGRheVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRPZkRheShkYXRlKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBfZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIF9kYXRlO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHN0YXJ0T2ZEYXk7XG4iLCIvKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gYXJndW1lbnQgLSBUaGUgdmFsdWUgdG8gY29udmVydFxuICpcbiAqIEByZXR1cm5zIFRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIGNvbnN0IGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7XG5cbiAgLy8gQ2xvbmUgdGhlIGRhdGVcbiAgaWYgKFxuICAgIGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fFxuICAgICh0eXBlb2YgYXJndW1lbnQgPT09IFwib2JqZWN0XCIgJiYgYXJnU3RyID09PSBcIltvYmplY3QgRGF0ZV1cIilcbiAgKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBhcmd1bWVudC5jb25zdHJ1Y3RvcigrYXJndW1lbnQpO1xuICB9IGVsc2UgaWYgKFxuICAgIHR5cGVvZiBhcmd1bWVudCA9PT0gXCJudW1iZXJcIiB8fFxuICAgIGFyZ1N0ciA9PT0gXCJbb2JqZWN0IE51bWJlcl1cIiB8fFxuICAgIHR5cGVvZiBhcmd1bWVudCA9PT0gXCJzdHJpbmdcIiB8fFxuICAgIGFyZ1N0ciA9PT0gXCJbb2JqZWN0IFN0cmluZ11cIlxuICApIHtcbiAgICAvLyBUT0RPOiBDYW4gd2UgZ2V0IHJpZCBvZiBhcz9cbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIC8vIFRPRE86IENhbiB3ZSBnZXQgcmlkIG9mIGFzP1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgdG9EYXRlO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCB7IENhdGVnb3J5LCBjYXRlZ29yaWVzIH0gZnJvbSAnLi9jYXRlZ29yeS5qcyc7XG5pbXBvcnQgeyBMaXN0LCBsaXN0cyB9IGZyb20gJy4vbGlzdC5qcyc7XG5pbXBvcnQgeyBUb3BpYywgdG9waWNzIH0gZnJvbSAnLi90b3BpYy5qcyc7XG5pbXBvcnQgeyBUYXNrLCBhbGxUYXNrcyB9IGZyb20gJy4vdGFzay5qcyc7XG5pbXBvcnQgeyBmaW5kQ2F0ZWdvcnksIGZpbmRMaXN0LCBmaW5kVG9waWMgfSBmcm9tICcuL3V0aWxzLmpzJztcbmltcG9ydCB7IGhhbmRsZUxpc3RGb3JtLCBoYW5kbGVUYXNrRm9ybSB9IGZyb20gJy4vZXZlbnRIYW5kbGVycy5qcydcbmltcG9ydCB7IHByaW50TGlzdCwgcHJpbnRTaWRlYmFyIH0gZnJvbSAnLi9ET00uanMnO1xuaW1wb3J0IHsgc2F2ZURhdGEsIHdyaXRlRGF0YSwgY2xlYXJEYXRhIH0gZnJvbSAnLi9tZW1vcnlNYW5hZ2VtZW50LmpzJztcbmltcG9ydCB7IHVwZGF0ZURlZmF1bHRzIH0gZnJvbSAnLi9kZWZhdWx0TGlzdHMuanMnO1xuXG5cbmhhbmRsZUxpc3RGb3JtKCk7XG5oYW5kbGVUYXNrRm9ybSgpO1xuXG5cbi8vIGNvbnN0IGV4YW1wbGVDYXRlZ29yeSA9IG5ldyBDYXRlZ29yeSgnR2VuZXJhbCcpO1xuLy8gY29uc3QgZXhhbXBsZUxpc3QgPSBuZXcgTGlzdCgnRXhlcmNpc2UnLCAnRXhlcmNpc2VzIHRvIGRvJywgZXhhbXBsZUNhdGVnb3J5KTtcbi8vIGNvbnN0IGV4YW1wbGVMaXN0MiA9IG5ldyBMaXN0KCdFeGVyY2lzZXMnLCAnRXhlcmNpc2VzIHRvIGRvJywgZXhhbXBsZUNhdGVnb3J5KTtcbi8vIGNvbnN0IGV4YW1wbGVUb3BpYyA9IG5ldyBUb3BpYygnTGVncycsIGV4YW1wbGVMaXN0KTtcbi8vIGNvbnN0IHRhc2sxID0gbmV3IFRhc2soJ1NxdWF0cycsICcnLCAnJywgJycsIGV4YW1wbGVUb3BpYyk7XG4vLyBjb25zdCB0YXNrMiA9IG5ldyBUYXNrKCdEZWFkbGlmdCcsICcnLCAnJywgJycsIGV4YW1wbGVUb3BpYyk7XG4vLyBjb25zdCB0YXNrMyA9IG5ldyBUYXNrKCdMZWcgUHJlc3MnLCAnJywgJycsICcnLCBleGFtcGxlVG9waWMpO1xuXG4vLyBleGFtcGxlVG9waWMuYWRkVGFzayh0YXNrMSlcbi8vIGV4YW1wbGVUb3BpYy5hZGRUYXNrKHRhc2syKVxuLy8gZXhhbXBsZVRvcGljLmFkZFRhc2sodGFzazMpXG4vLyBleGFtcGxlTGlzdC5hZGRUb3BpYyhleGFtcGxlVG9waWMpO1xuLy8gZXhhbXBsZUNhdGVnb3J5LmFkZExpc3QoZXhhbXBsZUxpc3QpO1xuLy8gZXhhbXBsZUNhdGVnb3J5LmFkZExpc3QoZXhhbXBsZUxpc3QyKTtcblxuLy8gc2F2ZURhdGEoKTtcbndyaXRlRGF0YSgpO1xudXBkYXRlRGVmYXVsdHMoKTtcbnByaW50TGlzdChsaXN0c1swXSk7XG5wcmludFNpZGViYXIoKTtcblxuLy8gY2xlYXJEYXRhKCk7XG53aW5kb3cuQ2F0ZWdvcnkgPSBDYXRlZ29yeTtcbndpbmRvdy5MaXN0ID0gTGlzdDtcbndpbmRvdy5Ub3BpYyA9IFRvcGljO1xud2luZG93LlRhc2sgPSBUYXNrO1xud2luZG93LmNhdGVnb3JpZXMgPSBjYXRlZ29yaWVzO1xud2luZG93LmFsbFRhc2tzID0gYWxsVGFza3M7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9