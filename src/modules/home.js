import { createElement } from './DOM';

export default function() {
    createElement(`div`, `projectsDiv`, undefined, `content`);
    createElement(`div`, `projectsHeaderDiv`, undefined, `projectsDiv`);
    createElement(`h2`, `projectsHeader`, undefined, `projectsHeaderDiv`).textContent = `Projects`;

    createElement(`div`, `todosDiv`, undefined, `content`);
    createElement(`div`, `todosHeaderDiv`, undefined, `todosDiv`);
    createElement(`h1`, `todosHeader`, undefined, `todosHeaderDiv`).textContent = `Todos`;

    createElement(`div`, `addingButtonsDiv`, undefined, `content`);
    createElement(`button`, `newTodoButton`,`addingButtons`, `addingButtonsDiv`).textContent = `New Todo`;
    createElement(`button`, `newProjectButton`, `addingButtons`, `addingButtonsDiv`).textContent = `New Project`;
}