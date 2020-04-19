import { createElement } from './modules/DOM';
import loadHomePage from './modules/home';
import { startedProjects, Project, numberOfProjects } from './modules/project';
import { Todo } from './modules/todo';
import { todoBtnListener, projectBtnListener } from './modules/eventListeners';

loadHomePage();
todoBtnListener();
projectBtnListener();


const defaultProject = new Project(`Default`);

const newProject = new Project(`New Project`, `This is a new project`);

const newTodo = new Todo(`New Todo`, `This i a new todo.`);
