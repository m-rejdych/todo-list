import loadHomePage from './modules/home';
import { Project } from './modules/project';
import { todoBtnListener, projectBtnListener } from './modules/eventListeners';
import { loadInformationPopup } from './modules/DOM';

loadHomePage();
todoBtnListener();
projectBtnListener();
loadInformationPopup();


new Project(`Default`, `This is default project.`);