import { Project } from "./project";
import { Todo } from "./todo";
import { format } from 'date-fns';

function createElement(elementType, id, classList, parentNodeId) {
    const element = document.createElement(elementType);

    if (id) element.setAttribute(`id`, id);
    if (classList) element.classList.add(classList);
    if (parentNodeId) document.getElementById(parentNodeId).appendChild(element);

    return element;
}

function createPopupBackground() {
    const popupBackground = createElement(`div`, `popupBackground`, `popupBackground`);
        document.body.insertBefore(popupBackground, document.getElementById(`content`));
}

function createTitleInput(output = `input`) {
    createElement(`div`, `titleInputDiv`, `inputDiv`, `popupBox`);

        if (output != `input`){
            createElement(`h3`, undefined, `inputDescription`, `titleInputDiv`).textContent = `Title:`;
            createElement(`h3`, undefined, `inputDescription`, `titleInputDiv`).textContent = output;
        } else {
            const labelTitle = createElement(`label`, undefined, `inputDescription`, `titleInputDiv`);
            labelTitle.setAttribute(`for`, `inputTitle`);
            labelTitle.textContent = `Title:`;

            const inputTitle =  createElement(`input`, `inputTitle`, `input`, `titleInputDiv`);
            inputTitle.setAttribute(`type`, `text`);
        }
}

function createDescriptionInput(output = `input`) {
    createElement(`div`, `descriptionInputDiv`, `inputDiv`, `popupBox`);

        if (output != `input`) {
            createElement(`h3`, undefined, `inputDescription`, `descriptionInputDiv`).textContent = `Description:`;
            createElement(`h3`, undefined, `inputDescription`, `descriptionInputDiv`).textContent = output;
        } else {
            const labelDescription = createElement(`label`, undefined, `inputDescription`, `descriptionInputDiv`);
            labelDescription.setAttribute(`for`, `inputDescription`);
            labelDescription.textContent = `Description:`;

            createElement(`textarea`, `inputDescription`, `input`, `descriptionInputDiv`);
            document.getElementById(`descriptionInputDiv`).style.height = `15%`;
        }
}

function createDateInput(output = `input`) {
    createElement(`div`, `dateInputDiv`, `inputDiv`, `popupBox`);

        if (output != `input`) {
            createElement(`h3`, undefined, `inputDescription`, `dateInputDiv`).textContent = `Deadline:`;
            createElement(`h3`, undefined, `inputDescription`, `dateInputDiv`).textContent = output; 
        } else {
            const labelDate = createElement(`label`, undefined, `inputDescription`, `dateInputDiv`);
            labelDate.setAttribute(`for`, `inputDate`);
            labelDate.textContent = `Deadline:`;

            const inputDate =  createElement(`input`, `inputDate`, `input`, `dateInputDiv`);
            inputDate.setAttribute(`type`, `datetime-local`);
        }
}

function createPrioiritySelection(output = `input`) {
    createElement(`div`, `priorityInputDiv`, `inputDiv`, `popupBox`);

        if (output != `input`) {
            createElement(`h3`, undefined, `inputDescription`, `priorityInputDiv`).textContent = `Priority:`;
            createElement(`h3`, undefined, `inputDescription`, `priorityInputDiv`).textContent = output;
        } else {
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
}

function createAddTodoButton() {
        const addTodoButton = createElement(`button`, undefined, `addingButtons`, `addCancelButtonsDiv`);
        addTodoButton.textContent = `Add`;
        addTodoButton.style.width = `40%`;
        addTodoButton.style.height = `100%`;
        addTodoButton.addEventListener(`click`, () => {
            if (!document.getElementById(`inputTitle`).value) {alert(`Type a name!`)} else {
                new Todo(document.getElementById(`inputTitle`).value, document.getElementById(`inputDescription`).value, 
                new Date(document.getElementById('inputDate').value).toString(), document.getElementById(`prioritySelect`).value);

                document.getElementById(`popupBackground`).remove();
            }
        })
    }

    function createAddProjectButton() {
        const addProjectButton = createElement(`button`, undefined, `addingButtons`, `addCancelButtonsDiv`);
        addProjectButton.textContent = `Add`;
        addProjectButton.style.width = `40%`;
        addProjectButton.style.height = `100%`;
        addProjectButton.addEventListener(`click`, () => {
            if (!document.getElementById(`inputTitle`).value) {alert(`Type a name!`)} else {
            new Project(document.getElementById(`inputTitle`).value, document.getElementById(`inputDescription`).value, 
            new Date(document.getElementById('inputDate').value).toString());

            document.getElementById(`popupBackground`).remove();
            }
        })
    }

    function createEditButton() {
        const editButton = createElement(`button`, undefined, `addingButtons`, `addCancelButtonsDiv`);
        editButton.textContent = `Edit`;
        editButton.style.width = `30%`;
        editButton.style.height = `100%`;
        editButton.addEventListener(`click`, () => {

        })
    }

    function createDeleteButton() {
        const deleteButton = createElement(`button`, undefined, `addingButtons`, `addCancelButtonsDiv`);
        deleteButton.textContent = `Delete`;
        deleteButton.style.width = `30%`;
        deleteButton.style.height = `100%`;
        deleteButton.addEventListener(`click`, () => {
            this.delete();
            document.getElementById(`popupBackground`).remove();
        })
    }

    function createCancelButton(length) {
        const cancelButton = createElement(`button`, undefined, `addingButtons`, `addCancelButtonsDiv`);
        cancelButton.textContent = `Cancel`;
        (length == `30%`) ? cancelButton.style.width = `30%`: cancelButton.style.width = `40%`;
        cancelButton.style.height = `100%`;
        cancelButton.addEventListener(`click`, () => {
            document.getElementById(`popupBackground`).remove();
        })
    }

    function loadInputBox(todoProject) {
        createPopupBackground();
        createElement(`div`, `popupBox`, `popupBox`, `popupBackground`);
        createElement(`h2`, undefined, `popupHeader`, `popupBox`).textContent = todoProject;
        createTitleInput();
        createDescriptionInput();
        createDateInput();
        if (todoProject == `New Todo`) createPrioiritySelection();
        createElement(`div`, `addCancelButtonsDiv`, `inputDiv`, `popupBox`);
        (todoProject == `New Todo`) ? createAddTodoButton(): createAddProjectButton();
        createCancelButton();
    }

    function loadOutputBox(todoProject) {
        createPopupBackground();
        createElement(`div`, `popupBox`, `popupBox`, `popupBackground`);
        createElement(`h2`, undefined, `popupHeader`, `popupBox`).textContent = `Details`;
        createTitleInput(this.title);
        if (this.description) createDescriptionInput(this.description);
        if (this.deadline && this.deadline != `Invalid Date`) createDateInput(this.deadline);
        if (todoProject == `Todo` && this.priority) createPrioiritySelection(this.priority);
        createElement(`div`, `addCancelButtonsDiv`, `inputDiv`, `popupBox`);
        createDeleteButton.call(this);
        createCancelButton(`30%`);

    }

    function deleteTodos() {
        const todosDiv = document.getElementById(`todosDiv`);
        
        if (todosDiv.children.length > 1) todosDiv.lastElementChild.remove();
    }

    
export { createElement,createPopupBackground,  createTitleInput, createDescriptionInput, createDateInput,
    createPrioiritySelection, createAddTodoButton, createAddProjectButton, createCancelButton,
    deleteTodos, loadInputBox, loadOutputBox };
