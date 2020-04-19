import { createElement } from './modules/DOM';
import loadHomePage from './modules/home';
import { startedProjects, Project, numberOfProjects } from './modules/project';
import { todoBtnListener, projectBtnListener } from './modules/eventListeners';

loadHomePage();
todoBtnListener();
projectBtnListener();


const defaultProject = new Project(`Default`);