import { Project } from "./project";

function createElement(elementType, id, classList, parentNodeId) {
    const element = document.createElement(elementType);

    if (id) element.setAttribute(`id`, id);
    if (classList) element.classList.add(classList);
    if (parentNodeId) document.getElementById(parentNodeId).appendChild(element);

    return element;
}

function createTitleInput() {
    createElement(`div`, `titleInputDiv`, `inputDiv`, `popupBox`);

        const labelTitle = createElement(`label`, undefined, `inputDescription`, `titleInputDiv`);
        labelTitle.setAttribute(`for`, `inputTitle`);
        labelTitle.textContent = `Title:`;

        const inputTitle =  createElement(`input`, `inputTitle`, `input`, `titleInputDiv`);
        inputTitle.setAttribute(`type`, `text`);
}

function createDescriptionInput() {
    createElement(`div`, `descriptionInputDiv`, `inputDiv`, `popupBox`);

        const labelDescription = createElement(`label`, undefined, `inputDescription`, `descriptionInputDiv`);
        labelDescription.setAttribute(`for`, `inputDescription`);
        labelDescription.textContent = `Description:`;

        createElement(`textarea`, `inputDescription`, `input`, `descriptionInputDiv`);
        document.getElementById(`descriptionInputDiv`).style.height = `15%`;
}

function createDateInput() {
    createElement(`div`, `dateInputDiv`, `inputDiv`, `popupBox`);

        const labelDate = createElement(`label`, undefined, `inputDescription`, `dateInputDiv`);
        labelDate.setAttribute(`for`, `inputDate`);
        labelDate.textContent = `Deadline:`;

        const inputDate =  createElement(`input`, `inputDate`, `input`, `dateInputDiv`);
        inputDate.setAttribute(`type`, `datetime-local`);
}

function createPrioiritySelection() {
    createElement(`div`, `priorityInputDiv`, `inputDiv`, `popupBox`);

        const labelPriority = createElement(`label`, undefined, `inputDescription`, `priorityInputDiv`);
        labelPriority.setAttribute(`for`, `prioritySelect`);
        labelPriority.textContent = `Priority:`

        createElement(`select`, `prioritySelect`, `input`, `priorityInputDiv`);

        const optionLow = createElement(`option`, undefined, `option`, `prioritySelect`);
        optionLow.setAttribute(`value`, `low`);
        optionLow.textContent = `Low`;

        const optionMedium = createElement(`option`, undefined, `option`, `prioritySelect`);
        optionMedium.setAttribute(`value`, `medium`);
        optionMedium.textContent = `Medium`;

        const optionHigh = createElement(`option`, undefined, `option`, `prioritySelect`);
        optionHigh.setAttribute(`value`, `high`);
        optionHigh.textContent = `High`;
}

function createAddTodoButton() {
        const addTodoButton = createElement(`button`, `addTodoButton`, `addingButtons`, `addCancelButtonsDiv`);
        addTodoButton.textContent = `Add`;
        addTodoButton.style.width = `40%`;
        addTodoButton.style.height = `100%`;
        addTodoButton.addEventListener(`click`, () => {

        })
    }

    function createAddProjectButton() {
        const addProjectButton = createElement(`button`, `addTodoButton`, `addingButtons`, `addCancelButtonsDiv`);
        addProjectButton.textContent = `Add`;
        addProjectButton.style.width = `40%`;
        addProjectButton.style.height = `100%`;
        addProjectButton.addEventListener(`click`, () => {
            if (!document.getElementById(`inputTitle`).value) {alert(`Type a name!`)} else {
            new Project(document.getElementById(`inputTitle`).value, document.getElementById(`inputDescription`).value, 
            new Date(document.getElementById(`inputDate`).value));

            document.getElementById(`popupBackground`).remove();
            }
        })
    }

    function createCancelButton() {
        const cancelButton = createElement(`button`, `cancelButton`, `addingButtons`, `addCancelButtonsDiv`);
        cancelButton.textContent = `Cancel`;
        cancelButton.style.width = `40%`;
        cancelButton.style.height = `100%`;
        cancelButton.addEventListener(`click`, () => {
            document.getElementById(`popupBackground`).remove();
        })
    }

    
export { createElement, createTitleInput, createDescriptionInput, createDateInput,
    createPrioiritySelection, createAddTodoButton, createAddProjectButton, createCancelButton };
