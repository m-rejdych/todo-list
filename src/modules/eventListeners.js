import { loadInputBox } from './DOM';
import { startedProjects } from './project';

function todoBtnListener() {
    document.getElementById(`newTodoButton`).addEventListener(`click`, () => {
        loadInputBox(`New Todo`);
    })
}

function projectBtnListener() {
    document.getElementById(`newProjectButton`).addEventListener(`click`, () => {
        loadInputBox(`New Project`);
    })
}

export { todoBtnListener, projectBtnListener };