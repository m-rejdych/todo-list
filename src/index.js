import loadHomePage from './modules/home';
import { Project } from './modules/project';
import { todoBtnListener, projectBtnListener } from './modules/eventListeners';

loadHomePage();
todoBtnListener();
projectBtnListener();


new Project(`Default`, `This is default project.`);