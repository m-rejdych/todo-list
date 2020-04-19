import { createElement, createTitleInput, createDescriptionInput, createDateInput,
createPrioiritySelection, createAddTodoButton, createAddProjectButton, createCancelButton } from './DOM';

function todoBtnListener() {
    document.getElementById(`newTodoButton`).addEventListener(`click`, () => {
        const popupBackground = createElement(`div`, `popupBackground`, `popupBackground`);
        document.body.insertBefore(popupBackground, document.getElementById(`content`));

        createElement(`div`, `popupBox`, `popupBox`, `popupBackground`);

        createElement(`h2`, undefined, `popupHeader`, `popupBox`).textContent = `New Todo`;

        createTitleInput();

        createDescriptionInput();

        createDateInput();

        createPrioiritySelection();

        createElement(`div`, `addCancelButtonsDiv`, `inputDiv`, `popupBox`);
        createAddTodoButton();
        createCancelButton();
    })
}

function projectBtnListener() {
    document.getElementById(`newProjectButton`).addEventListener(`click`, () => {
        const popupBackground = createElement(`div`, `popupBackground`, `popupBackground`);
        document.body.insertBefore(popupBackground, document.getElementById(`content`));

        createElement(`div`, `popupBox`, `popupBox`, `popupBackground`);

        createElement(`h2`, undefined, `popupHeader`, `popupBox`).textContent = `New Project`;

        createTitleInput();

        createDescriptionInput();

        createDateInput();

        createElement(`div`, `addCancelButtonsDiv`, `inputDiv`, `popupBox`);
        createAddProjectButton();
        createCancelButton();
    })
}


export { todoBtnListener, projectBtnListener };