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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/home */ \"./src/modules/home.js\");\n/* harmony import */ var _modules_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/project */ \"./src/modules/project.js\");\n/* harmony import */ var _modules_eventListeners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/eventListeners */ \"./src/modules/eventListeners.js\");\n/* harmony import */ var _modules_DOM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/DOM */ \"./src/modules/DOM.js\");\n\n\n\n\n\nObject(_modules_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nObject(_modules_eventListeners__WEBPACK_IMPORTED_MODULE_2__[\"todoBtnListener\"])();\nObject(_modules_eventListeners__WEBPACK_IMPORTED_MODULE_2__[\"projectBtnListener\"])();\nObject(_modules_DOM__WEBPACK_IMPORTED_MODULE_3__[\"loadInformationPopup\"])();\n\n\nnew _modules_project__WEBPACK_IMPORTED_MODULE_1__[\"Project\"](`Default`, `This is default project.`);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/DOM.js":
/*!****************************!*\
  !*** ./src/modules/DOM.js ***!
  \****************************/
/*! exports provided: createElement, deleteTodos, loadInputBox, loadOutputBox, loadInformationPopup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createElement\", function() { return createElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteTodos\", function() { return deleteTodos; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadInputBox\", function() { return loadInputBox; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadOutputBox\", function() { return loadOutputBox; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadInformationPopup\", function() { return loadInformationPopup; });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/modules/project.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ \"./src/modules/todo.js\");\n\n\n\nfunction createElement(elementType, id, classList, parentNodeId) {\n    const element = document.createElement(elementType);\n\n    if (id) element.setAttribute(`id`, id);\n    if (classList) element.classList.add(classList);\n    if (parentNodeId) document.getElementById(parentNodeId).appendChild(element);\n\n    return element;\n}\n\nfunction createPopupBackground() {\n    const popupBackground = createElement(`div`, `popupBackground`, `popupBackground`);\n        document.body.insertBefore(popupBackground, document.getElementById(`content`));\n}\n\nfunction createTitleInput(output = `input`) {\n    createElement(`div`, `titleInputDiv`, `inputDiv`, `popupBox`);\n\n        if (output != `input`){\n            createElement(`h3`, undefined, `inputDescription`, `titleInputDiv`).textContent = `Title:`;\n            createElement(`h3`, undefined, `inputDescription`, `titleInputDiv`).textContent = output;\n        } else {\n            const labelTitle = createElement(`label`, undefined, `inputDescription`, `titleInputDiv`);\n            labelTitle.setAttribute(`for`, `inputTitle`);\n            labelTitle.textContent = `Title:`;\n\n            const inputTitle =  createElement(`input`, `inputTitle`, `input`, `titleInputDiv`);\n            inputTitle.setAttribute(`type`, `text`);\n        }\n}\n\nfunction createDescriptionInput(output = `input`) {\n    createElement(`div`, `descriptionInputDiv`, `inputDiv`, `popupBox`);\n\n        if (output != `input`) {\n            createElement(`h3`, undefined, `inputDescription`, `descriptionInputDiv`).textContent = `Description:`;\n            createElement(`h3`, undefined, `inputDescription`, `descriptionInputDiv`).textContent = output;\n        } else {\n            const labelDescription = createElement(`label`, undefined, `inputDescription`, `descriptionInputDiv`);\n            labelDescription.setAttribute(`for`, `inputDescription`);\n            labelDescription.textContent = `Description:`;\n\n            createElement(`textarea`, `inputDescription`, `input`, `descriptionInputDiv`);\n            document.getElementById(`descriptionInputDiv`).style.height = `15%`;\n        }\n}\n\nfunction createDateInput(output = `input`) {\n    createElement(`div`, `dateInputDiv`, `inputDiv`, `popupBox`);\n\n        if (output != `input`) {\n            createElement(`h3`, undefined, `inputDescription`, `dateInputDiv`).textContent = `Deadline:`;\n            createElement(`h3`, undefined, `inputDescription`, `dateInputDiv`).textContent = output; \n        } else {\n            const labelDate = createElement(`label`, undefined, `inputDescription`, `dateInputDiv`);\n            labelDate.setAttribute(`for`, `inputDate`);\n            labelDate.textContent = `Deadline:`;\n\n            const inputDate =  createElement(`input`, `inputDate`, `input`, `dateInputDiv`);\n            inputDate.setAttribute(`type`, `date`);\n        }\n}\n\nfunction createPrioiritySelection(output = `input`) {\n    createElement(`div`, `priorityInputDiv`, `inputDiv`, `popupBox`);\n\n        if (output != `input`) {\n            createElement(`h3`, undefined, `inputDescription`, `priorityInputDiv`).textContent = `Priority:`;\n            createElement(`h3`, undefined, `inputDescription`, `priorityInputDiv`).textContent = output;\n        } else {\n            const labelPriority = createElement(`label`, undefined, `inputDescription`, `priorityInputDiv`);\n            labelPriority.setAttribute(`for`, `prioritySelect`);\n            labelPriority.textContent = `Priority:`\n\n            createElement(`select`, `prioritySelect`, `input`, `priorityInputDiv`);\n\n            const optionLow = createElement(`option`, undefined, `option`, `prioritySelect`);\n            optionLow.setAttribute(`value`, `low`);\n            optionLow.textContent = `Low`;\n\n            const optionMedium = createElement(`option`, undefined, `option`, `prioritySelect`);\n            optionMedium.setAttribute(`value`, `medium`);\n            optionMedium.textContent = `Medium`;\n\n            const optionHigh = createElement(`option`, undefined, `option`, `prioritySelect`);\n            optionHigh.setAttribute(`value`, `high`);\n            optionHigh.textContent = `High`;\n        }\n}\n\nfunction createAddTodoButton() {\n        const addTodoButton = createElement(`button`, undefined, `addingButtons`, `addCancelButtonsDiv`);\n        addTodoButton.textContent = `Add`;\n        addTodoButton.style.width = `40%`;\n        addTodoButton.style.height = `100%`;\n        addTodoButton.addEventListener(`click`, () => {\n            for (let i = 0; i < _project__WEBPACK_IMPORTED_MODULE_0__[\"startedProjects\"].length; i++) {\n                for (let j = 0; j < _project__WEBPACK_IMPORTED_MODULE_0__[\"startedProjects\"][i].todos.length; j++) {\n                    if (_project__WEBPACK_IMPORTED_MODULE_0__[\"startedProjects\"][i].select == true && _project__WEBPACK_IMPORTED_MODULE_0__[\"startedProjects\"][i].todos[j].title == document.getElementById(`inputTitle`).value) {\n                        alert(`You have already added that task!`);\n                        return;\n                    }\n                }\n            }\n            if (!document.getElementById(`inputTitle`).value) {alert(`Type a name!`)} else {\n                new _todo__WEBPACK_IMPORTED_MODULE_1__[\"Todo\"](document.getElementById(`inputTitle`).value, document.getElementById(`inputDescription`).value, \n                document.getElementById('inputDate').value, document.getElementById(`prioritySelect`).value);\n\n                document.getElementById(`popupBackground`).remove();\n            }\n        })\n    }\n\n    function createAddProjectButton() {\n        const addProjectButton = createElement(`button`, undefined, `addingButtons`, `addCancelButtonsDiv`);\n        addProjectButton.textContent = `Add`;\n        addProjectButton.style.width = `40%`;\n        addProjectButton.style.height = `100%`;\n        addProjectButton.addEventListener(`click`, () => {\n            for (let i = 0; i < _project__WEBPACK_IMPORTED_MODULE_0__[\"startedProjects\"].length; i++) {\n                if (_project__WEBPACK_IMPORTED_MODULE_0__[\"startedProjects\"][i].title == document.getElementById(`inputTitle`).value) {\n                    alert(`You have already added that project!`);\n                    return;\n                }\n            }\n            if (!document.getElementById(`inputTitle`).value) {alert(`Type a name!`)} else {\n            new _project__WEBPACK_IMPORTED_MODULE_0__[\"Project\"](document.getElementById(`inputTitle`).value, document.getElementById(`inputDescription`).value, \n            document.getElementById('inputDate').value);\n\n            document.getElementById(`popupBackground`).remove();\n            }\n        })\n    }\n\n    function createEditButton(edit) {\n        const editButton = createElement(`button`, undefined, `addingButtons`, `addCancelButtonsDiv`);\n        editButton.textContent = `Edit`;\n        editButton.style.width = `30%`;\n        editButton.style.height = `100%`;\n        editButton.addEventListener(`click`, () => {\n            document.getElementById(`popupBackground`).remove();\n            loadInputBox(edit, `edit`);\n        })\n    }\n\n    function createOkButton(todoProject) {\n        const okButton = createElement(`button`, undefined, `addingButtons`, `addCancelButtonsDiv`);\n        okButton.textContent = `Ok`;\n        okButton.style.width = `40%`;\n        okButton.style.height = `100%`;\n        okButton.addEventListener(`click`, () => {\n            if (todoProject == `Project`) {\n                for (let i = 0; i < _project__WEBPACK_IMPORTED_MODULE_0__[\"startedProjects\"].length; i++) {\n                    if (_project__WEBPACK_IMPORTED_MODULE_0__[\"startedProjects\"][i].title == document.getElementById(`inputTitle`).value) {\n                        alert(`You have already added that project!`);\n                        return;\n                    }\n                    if (_project__WEBPACK_IMPORTED_MODULE_0__[\"startedProjects\"][i].select == true) {\n                        document.getElementById(_project__WEBPACK_IMPORTED_MODULE_0__[\"startedProjects\"][i].title).firstElementChild.textContent = document.getElementById(`inputTitle`).value;\n                        document.getElementById(_project__WEBPACK_IMPORTED_MODULE_0__[\"startedProjects\"][i].title).setAttribute(`id`, document.getElementById(`inputTitle`).value);\n                        _project__WEBPACK_IMPORTED_MODULE_0__[\"startedProjects\"][i].title = document.getElementById(`inputTitle`).value;\n                        _project__WEBPACK_IMPORTED_MODULE_0__[\"startedProjects\"][i].description = document.getElementById(`inputDescription`).value;\n                        _project__WEBPACK_IMPORTED_MODULE_0__[\"startedProjects\"][i].deadline = document.getElementById('inputDate').value;\n                        document.getElementById(`popupBackground`).remove();\n                    }\n                }\n            }\n            if (todoProject == `Todo`) {\n                for (let i = 0; i < _project__WEBPACK_IMPORTED_MODULE_0__[\"startedProjects\"].length; i++) {\n                    if (_project__WEBPACK_IMPORTED_MODULE_0__[\"startedProjects\"][i].select == true) {\n                        for (let j = 0; j < _project__WEBPACK_IMPORTED_MODULE_0__[\"startedProjects\"][i].todos.length; j++) {\n                            if (_project__WEBPACK_IMPORTED_MODULE_0__[\"startedProjects\"][i].select == true && _project__WEBPACK_IMPORTED_MODULE_0__[\"startedProjects\"][i].todos[j].title == document.getElementById(`inputTitle`).value) {\n                                alert(`You have already added that task!`);\n                                return;\n                            }\n                            if (_project__WEBPACK_IMPORTED_MODULE_0__[\"startedProjects\"][i].todos[j].select == true) {\n                                document.getElementById(`${_project__WEBPACK_IMPORTED_MODULE_0__[\"startedProjects\"][i].todos[j].title}Todo`.replace(/\\s|_/g, ``)).firstElementChild.textContent = document.getElementById(`inputTitle`).value;\n                                document.getElementById(`${_project__WEBPACK_IMPORTED_MODULE_0__[\"startedProjects\"][i].todos[j].title}Todo`.replace(/\\s|_/g, ``)).setAttribute(`id`, `${document.getElementById(`inputTitle`).value}Todo`);\n                                _project__WEBPACK_IMPORTED_MODULE_0__[\"startedProjects\"][i].todos[j].title = document.getElementById(`inputTitle`).value;\n                                _project__WEBPACK_IMPORTED_MODULE_0__[\"startedProjects\"][i].todos[j].description = document.getElementById(`inputDescription`).value;\n                                _project__WEBPACK_IMPORTED_MODULE_0__[\"startedProjects\"][i].todos[j].deadline = document.getElementById('inputDate').value;\n                                _project__WEBPACK_IMPORTED_MODULE_0__[\"startedProjects\"][i].todos[j].priority = document.getElementById(`prioritySelect`).value;\n                            }\n                        }\n                    }\n                }\n                document.getElementById(`popupBackground`).remove();\n            }\n        })\n    }\n\n    function createDeleteButton() {\n        const deleteButton = createElement(`button`, undefined, `addingButtons`, `addCancelButtonsDiv`);\n        deleteButton.textContent = `Delete`;\n        deleteButton.style.width = `30%`;\n        deleteButton.style.height = `100%`;\n        deleteButton.addEventListener(`click`, () => {\n            this.delete();\n            document.getElementById(`popupBackground`).remove();\n        })\n    }\n\n    function createCancelButton(length) {\n        const cancelButton = createElement(`button`, undefined, `addingButtons`, `addCancelButtonsDiv`);\n        cancelButton.textContent = `Cancel`;\n        (length == `30%`) ? cancelButton.style.width = `30%`: cancelButton.style.width = `40%`;\n        cancelButton.style.height = `100%`;\n        cancelButton.addEventListener(`click`, () => {\n            document.getElementById(`popupBackground`).remove();\n        })\n    }\n\n    function loadInputBox(todoProject, edit) {\n        createPopupBackground();\n        createElement(`div`, `popupBox`, `popupBox`, `popupBackground`);\n        createElement(`h2`, undefined, `popupHeader`, `popupBox`).textContent = todoProject;\n        createTitleInput();\n        createDescriptionInput();\n        createDateInput();\n        if (todoProject == `New Todo`) createPrioiritySelection();\n        createElement(`div`, `addCancelButtonsDiv`, `inputDiv`, `popupBox`);\n        if (edit != undefined) {\n            if (todoProject == `New Todo`) createOkButton(`Todo`);\n            if (todoProject == `New Project`) createOkButton(`Project`);\n        } else {\n            if (todoProject == `New Todo`) createAddTodoButton()\n            if (todoProject == `New Project`) createAddProjectButton();\n        }\n        createCancelButton();\n    }\n\n    function loadOutputBox(todoProject) {\n        createPopupBackground();\n        createElement(`div`, `popupBox`, `popupBox`, `popupBackground`);\n        createElement(`h2`, undefined, `popupHeader`, `popupBox`).textContent = `Details`;\n        createTitleInput(this.title);\n        if (this.description) createDescriptionInput(this.description);\n        if (this.deadline && this.deadline != `Invalid Date`) createDateInput(this.deadline);\n        if (todoProject == `Todo` && this.priority) createPrioiritySelection(this.priority);\n        createElement(`div`, `addCancelButtonsDiv`, `inputDiv`, `popupBox`);\n        if (todoProject == `Todo`) createEditButton(`New Todo`);\n        if (todoProject == `Project`) createEditButton(`New Project`);\n        createDeleteButton.call(this);\n        createCancelButton(`30%`);\n\n    }\n\n    function deleteTodos() {\n        const todosDiv = document.getElementById(`todosDiv`);\n        \n        if (todosDiv.children.length > 1) todosDiv.lastElementChild.remove();\n    }\n\n    function loadInformationPopup() {\n        window.addEventListener(`load`, () => {\n            const info = createElement(`div`, `info`);\n            document.body.insertBefore(info, document.getElementById(`content`));\n            const paraInfo = createElement(`p`, `paraInfo`, undefined, `info`);\n            paraInfo.textContent = `Double-click on Project or Todo to see the details!`;\n\n            setTimeout(() => {\n                info.remove();\n            }, 4000)\n        })\n    }\n    \n\n\n\n//# sourceURL=webpack:///./src/modules/DOM.js?");

/***/ }),

/***/ "./src/modules/eventListeners.js":
/*!***************************************!*\
  !*** ./src/modules/eventListeners.js ***!
  \***************************************/
/*! exports provided: todoBtnListener, projectBtnListener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"todoBtnListener\", function() { return todoBtnListener; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"projectBtnListener\", function() { return projectBtnListener; });\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ \"./src/modules/DOM.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/modules/project.js\");\n\n\n\nfunction todoBtnListener() {\n    document.getElementById(`newTodoButton`).addEventListener(`click`, () => {\n        Object(_DOM__WEBPACK_IMPORTED_MODULE_0__[\"loadInputBox\"])(`New Todo`);\n    })\n}\n\nfunction projectBtnListener() {\n    document.getElementById(`newProjectButton`).addEventListener(`click`, () => {\n        Object(_DOM__WEBPACK_IMPORTED_MODULE_0__[\"loadInputBox\"])(`New Project`);\n    })\n}\n\n\n\n//# sourceURL=webpack:///./src/modules/eventListeners.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"startedProjects\", function() { return startedProjects; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Project\", function() { return Project; });\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ \"./src/modules/DOM.js\");\n\n\nconst startedProjects = [];\n\nclass Project {\n    constructor(title, description, deadline) {\n        this.title = title;\n        this.description = description;\n        this.deadline = deadline;\n        this.todos = [];\n        this.select = true;\n\n        Project.deactivateProjects();\n        this.loadTodos();\n\n        const div = Object(_DOM__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(`div`, title, `project`, `projectsDiv`);\n        div.style.backgroundColor = `rgba(0, 0, 0, 0.4)`;\n        div.addEventListener(`click`, () => {\n            Project.deactivateProjects();\n            this.select = true;\n            div.style.backgroundColor = `rgba(0, 0, 0, 0.4)`;\n            this.loadTodos();\n        })\n        div.addEventListener(`dblclick`, () => {\n            this.showDetails();\n        })\n\n        Object(_DOM__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(`h3`, undefined, `projectHeader`, title).textContent = title;\n\n        startedProjects.push(this);\n    }\n\n    delete() {\n        startedProjects.splice(startedProjects.indexOf(this), 1);\n        document.getElementById(this.title).remove();\n    }\n\n    loadTodos() {\n        Object(_DOM__WEBPACK_IMPORTED_MODULE_0__[\"deleteTodos\"])();\n\n        Object(_DOM__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(`div`, `${this.title}Todos`.replace(/\\s|_/g, ``), `todos`, `todosDiv`);\n\n        for (let i = 0; i < this.todos.length; i++) {\n            const newTodo = Object(_DOM__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(`div`, `${this.todos[i].title}Todo`.replace(/\\s|_/g, ``), `todo`, `${this.title}Todos`.replace(/\\s|_/g, ``));\n            (this.todos[i].check == false) ? newTodo.style.backgroundColor = `transparent` : newTodo.style.backgroundColor = `rgba(0, 200, 0, 0.6)`;\n\n            newTodo.addEventListener(`dblclick`, () => {\n                this.deactivateTodos();\n                this.todos[i].select = true;\n                this.todos[i].showDetails();\n            })\n            newTodo.addEventListener(`click`, () => {\n                (!this.todos[i].check) ? this.todos[i].check = true : this.todos[i].check = false;\n                (!this.todos[i].check) ? newTodo.style.backgroundColor = `transparent` : newTodo.style.backgroundColor = `rgba(0, 200, 0, 0.6)`;\n            })\n\n            Object(_DOM__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(`h3`, undefined, `todoHeader`, `${this.todos[i].title}Todo`.replace(/\\s|_/g, ``)).textContent = this.todos[i].title;\n        }\n    }\n\n    showDetails() {\n        _DOM__WEBPACK_IMPORTED_MODULE_0__[\"loadOutputBox\"].call(this, `Project`);\n    }\n\n    static deactivateProjects() {\n        for (let i = 0; i < startedProjects.length; i++) {\n            startedProjects[i].select = false;\n            document.getElementById(startedProjects[i].title).style.backgroundColor = `transparent`;\n        }  \n    }\n\n    deactivateTodos() {\n        for (let i = 0; i < this.todos.length; i++) {\n            this.todos[i].select = false;\n        }\n    }\n}\n\n\n\n//# sourceURL=webpack:///./src/modules/project.js?");

/***/ }),

/***/ "./src/modules/todo.js":
/*!*****************************!*\
  !*** ./src/modules/todo.js ***!
  \*****************************/
/*! exports provided: Todo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Todo\", function() { return Todo; });\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ \"./src/modules/DOM.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/modules/project.js\");\n\n\n\nclass Todo {\n    constructor(title, description, deadline, priority) {\n        this.title = title;\n        this.description = description;\n        this.deadline = deadline;\n        this.priority = priority;\n        this.select = false;\n        this.check = false;\n\n        for (let i = 0; i < _project__WEBPACK_IMPORTED_MODULE_1__[\"startedProjects\"].length; i++) {\n            if (_project__WEBPACK_IMPORTED_MODULE_1__[\"startedProjects\"][i].select === true) {\n                _project__WEBPACK_IMPORTED_MODULE_1__[\"startedProjects\"][i].todos.push(this);\n                _project__WEBPACK_IMPORTED_MODULE_1__[\"startedProjects\"][i].loadTodos();\n            }\n        }\n    }\n\n    delete() {\n        for (let i = 0; i < _project__WEBPACK_IMPORTED_MODULE_1__[\"startedProjects\"].length; i++) {\n            if (_project__WEBPACK_IMPORTED_MODULE_1__[\"startedProjects\"][i].select === true) _project__WEBPACK_IMPORTED_MODULE_1__[\"startedProjects\"][i].todos.splice(_project__WEBPACK_IMPORTED_MODULE_1__[\"startedProjects\"][i].todos.indexOf(this), 1);\n            _project__WEBPACK_IMPORTED_MODULE_1__[\"startedProjects\"][i].loadTodos();\n        }\n    }\n\n    showDetails() {\n        _DOM__WEBPACK_IMPORTED_MODULE_0__[\"loadOutputBox\"].call(this, `Todo`);\n    }\n}\n\n\n\n//# sourceURL=webpack:///./src/modules/todo.js?");

/***/ })

/******/ });