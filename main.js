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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/DOM */ \"./src/modules/DOM.js\");\n/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/home */ \"./src/modules/home.js\");\n/* harmony import */ var _modules_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/project */ \"./src/modules/project.js\");\n/* harmony import */ var _modules_eventListeners__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/eventListeners */ \"./src/modules/eventListeners.js\");\n\n\n\n\n\nObject(_modules_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nObject(_modules_eventListeners__WEBPACK_IMPORTED_MODULE_3__[\"todoBtnListener\"])();\nObject(_modules_eventListeners__WEBPACK_IMPORTED_MODULE_3__[\"projectBtnListener\"])();\n\n\nconst defaultProject = new _modules_project__WEBPACK_IMPORTED_MODULE_2__[\"Project\"](`Default`);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/DOM.js":
/*!****************************!*\
  !*** ./src/modules/DOM.js ***!
  \****************************/
/*! exports provided: createElement, createTitleInput, createDescriptionInput, createDateInput, createPrioiritySelection, createAddTodoButton, createAddProjectButton, createCancelButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createElement\", function() { return createElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createTitleInput\", function() { return createTitleInput; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createDescriptionInput\", function() { return createDescriptionInput; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createDateInput\", function() { return createDateInput; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createPrioiritySelection\", function() { return createPrioiritySelection; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createAddTodoButton\", function() { return createAddTodoButton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createAddProjectButton\", function() { return createAddProjectButton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createCancelButton\", function() { return createCancelButton; });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/modules/project.js\");\n\n\nfunction createElement(elementType, id, classList, parentNodeId) {\n    const element = document.createElement(elementType);\n\n    if (id) element.setAttribute(`id`, id);\n    if (classList) element.classList.add(classList);\n    if (parentNodeId) document.getElementById(parentNodeId).appendChild(element);\n\n    return element;\n}\n\nfunction createTitleInput() {\n    createElement(`div`, `titleInputDiv`, `inputDiv`, `popupBox`);\n\n        const labelTitle = createElement(`label`, undefined, `inputDescription`, `titleInputDiv`);\n        labelTitle.setAttribute(`for`, `inputTitle`);\n        labelTitle.textContent = `Title:`;\n\n        const inputTitle =  createElement(`input`, `inputTitle`, `input`, `titleInputDiv`);\n        inputTitle.setAttribute(`type`, `text`);\n}\n\nfunction createDescriptionInput() {\n    createElement(`div`, `descriptionInputDiv`, `inputDiv`, `popupBox`);\n\n        const labelDescription = createElement(`label`, undefined, `inputDescription`, `descriptionInputDiv`);\n        labelDescription.setAttribute(`for`, `inputDescription`);\n        labelDescription.textContent = `Description:`;\n\n        createElement(`textarea`, `inputDescription`, `input`, `descriptionInputDiv`);\n        document.getElementById(`descriptionInputDiv`).style.height = `15%`;\n}\n\nfunction createDateInput() {\n    createElement(`div`, `dateInputDiv`, `inputDiv`, `popupBox`);\n\n        const labelDate = createElement(`label`, undefined, `inputDescription`, `dateInputDiv`);\n        labelDate.setAttribute(`for`, `inputDate`);\n        labelDate.textContent = `Deadline:`;\n\n        const inputDate =  createElement(`input`, `inputDate`, `input`, `dateInputDiv`);\n        inputDate.setAttribute(`type`, `datetime-local`);\n}\n\nfunction createPrioiritySelection() {\n    createElement(`div`, `priorityInputDiv`, `inputDiv`, `popupBox`);\n\n        const labelPriority = createElement(`label`, undefined, `inputDescription`, `priorityInputDiv`);\n        labelPriority.setAttribute(`for`, `prioritySelect`);\n        labelPriority.textContent = `Priority:`\n\n        createElement(`select`, `prioritySelect`, `input`, `priorityInputDiv`);\n\n        const optionLow = createElement(`option`, undefined, `option`, `prioritySelect`);\n        optionLow.setAttribute(`value`, `low`);\n        optionLow.textContent = `Low`;\n\n        const optionMedium = createElement(`option`, undefined, `option`, `prioritySelect`);\n        optionMedium.setAttribute(`value`, `medium`);\n        optionMedium.textContent = `Medium`;\n\n        const optionHigh = createElement(`option`, undefined, `option`, `prioritySelect`);\n        optionHigh.setAttribute(`value`, `high`);\n        optionHigh.textContent = `High`;\n}\n\nfunction createAddTodoButton() {\n        const addTodoButton = createElement(`button`, `addTodoButton`, `addingButtons`, `addCancelButtonsDiv`);\n        addTodoButton.textContent = `Add`;\n        addTodoButton.style.width = `40%`;\n        addTodoButton.style.height = `100%`;\n        addTodoButton.addEventListener(`click`, () => {\n\n        })\n    }\n\n    function createAddProjectButton() {\n        const addProjectButton = createElement(`button`, `addTodoButton`, `addingButtons`, `addCancelButtonsDiv`);\n        addProjectButton.textContent = `Add`;\n        addProjectButton.style.width = `40%`;\n        addProjectButton.style.height = `100%`;\n        addProjectButton.addEventListener(`click`, () => {\n            if (!document.getElementById(`inputTitle`).value) {alert(`Type a name!`)} else {\n            new _project__WEBPACK_IMPORTED_MODULE_0__[\"Project\"](document.getElementById(`inputTitle`).value, document.getElementById(`inputDescription`).value, \n            new Date(document.getElementById(`inputDate`).value));\n\n            document.getElementById(`popupBackground`).remove();\n            }\n        })\n    }\n\n    function createCancelButton() {\n        const cancelButton = createElement(`button`, `cancelButton`, `addingButtons`, `addCancelButtonsDiv`);\n        cancelButton.textContent = `Cancel`;\n        cancelButton.style.width = `40%`;\n        cancelButton.style.height = `100%`;\n        cancelButton.addEventListener(`click`, () => {\n            document.getElementById(`popupBackground`).remove();\n        })\n    }\n\n    \n\n\n\n//# sourceURL=webpack:///./src/modules/DOM.js?");

/***/ }),

/***/ "./src/modules/eventListeners.js":
/*!***************************************!*\
  !*** ./src/modules/eventListeners.js ***!
  \***************************************/
/*! exports provided: todoBtnListener, projectBtnListener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"todoBtnListener\", function() { return todoBtnListener; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"projectBtnListener\", function() { return projectBtnListener; });\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ \"./src/modules/DOM.js\");\n\n\nfunction todoBtnListener() {\n    document.getElementById(`newTodoButton`).addEventListener(`click`, () => {\n        const popupBackground = Object(_DOM__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(`div`, `popupBackground`, `popupBackground`);\n        document.body.insertBefore(popupBackground, document.getElementById(`content`));\n\n        Object(_DOM__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(`div`, `popupBox`, `popupBox`, `popupBackground`);\n\n        Object(_DOM__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(`h2`, undefined, `popupHeader`, `popupBox`).textContent = `New Todo`;\n\n        Object(_DOM__WEBPACK_IMPORTED_MODULE_0__[\"createTitleInput\"])();\n\n        Object(_DOM__WEBPACK_IMPORTED_MODULE_0__[\"createDescriptionInput\"])();\n\n        Object(_DOM__WEBPACK_IMPORTED_MODULE_0__[\"createDateInput\"])();\n\n        Object(_DOM__WEBPACK_IMPORTED_MODULE_0__[\"createPrioiritySelection\"])();\n\n        Object(_DOM__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(`div`, `addCancelButtonsDiv`, `inputDiv`, `popupBox`);\n        Object(_DOM__WEBPACK_IMPORTED_MODULE_0__[\"createAddTodoButton\"])();\n        Object(_DOM__WEBPACK_IMPORTED_MODULE_0__[\"createCancelButton\"])();\n    })\n}\n\nfunction projectBtnListener() {\n    document.getElementById(`newProjectButton`).addEventListener(`click`, () => {\n        const popupBackground = Object(_DOM__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(`div`, `popupBackground`, `popupBackground`);\n        document.body.insertBefore(popupBackground, document.getElementById(`content`));\n\n        Object(_DOM__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(`div`, `popupBox`, `popupBox`, `popupBackground`);\n\n        Object(_DOM__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(`h2`, undefined, `popupHeader`, `popupBox`).textContent = `New Project`;\n\n        Object(_DOM__WEBPACK_IMPORTED_MODULE_0__[\"createTitleInput\"])();\n\n        Object(_DOM__WEBPACK_IMPORTED_MODULE_0__[\"createDescriptionInput\"])();\n\n        Object(_DOM__WEBPACK_IMPORTED_MODULE_0__[\"createDateInput\"])();\n\n        Object(_DOM__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(`div`, `addCancelButtonsDiv`, `inputDiv`, `popupBox`);\n        Object(_DOM__WEBPACK_IMPORTED_MODULE_0__[\"createAddProjectButton\"])();\n        Object(_DOM__WEBPACK_IMPORTED_MODULE_0__[\"createCancelButton\"])();\n    })\n}\n\n\n\n\n//# sourceURL=webpack:///./src/modules/eventListeners.js?");

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ \"./src/modules/DOM.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function() {\n    Object(_DOM__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(`div`, `projectsDiv`, undefined, `content`);\n    Object(_DOM__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(`div`, `projectsHeaderDiv`, undefined, `projectsDiv`);\n    Object(_DOM__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(`h2`, `projectsHeader`, undefined, `projectsHeaderDiv`).textContent = `Projects`;\n\n    Object(_DOM__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(`div`, `todosDiv`, undefined, `content`);\n    Object(_DOM__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(`div`, `todosHeaderDiv`, undefined, `todosDiv`);\n    Object(_DOM__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(`h1`, `todosHeader`, undefined, `todosHeaderDiv`).textContent = `Todos`;\n\n    Object(_DOM__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(`div`, `addingButtonsDiv`, undefined, `content`);\n    Object(_DOM__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(`button`, `newTodoButton`,`addingButtons`, `addingButtonsDiv`).textContent = `New Todo`;\n    Object(_DOM__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(`button`, `newProjectButton`, `addingButtons`, `addingButtonsDiv`).textContent = `New Project`;\n});\n\n//# sourceURL=webpack:///./src/modules/home.js?");

/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/*! exports provided: startedProjects, Project */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"startedProjects\", function() { return startedProjects; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Project\", function() { return Project; });\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ \"./src/modules/DOM.js\");\n\n\nconst startedProjects = [];\n\nclass Project {\n    constructor(title, description, deadline) {\n        this.title = title;\n        this.description = description;\n        this.deadline = deadline;\n        this.todos = [];\n        this.select = true;\n\n        Project.deactivateProjects();\n\n        const div = Object(_DOM__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(`div`, title, `project`, `projectsDiv`);\n        div.style.backgroundColor = `rgba(0, 0, 0, 0.4)`;\n        div.addEventListener(`click`, () => {\n            Project.deactivateProjects();\n            this.select = true;\n            div.style.backgroundColor = `rgba(0, 0, 0, 0.4)`;\n            //loadTodos();\n        })\n\n        Object(_DOM__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(`h3`, undefined, `projectHeader`, title).textContent = title;\n\n        startedProjects.push(this);\n    }\n\n    delete() {\n        startedProjects.splice(startedProjects.indexOf(this), 1);\n        document.getElementById(this.title).remove();\n    }\n\n    loadTodos() {\n\n    }\n\n    showDetails() {\n        \n    }\n\n    static deactivateProjects() {\n        for (let i = 0; i < startedProjects.length; i++) {\n            startedProjects[i].select = false;\n            document.getElementById(startedProjects[i].title).style.backgroundColor = `transparent`;\n        }  \n    }\n}\n\n\n\n//# sourceURL=webpack:///./src/modules/project.js?");

/***/ })

/******/ });