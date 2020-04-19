import { createElement } from './DOM';

const startedProjects = [];

class Project {
    constructor(title, description, deadline) {
        this.title = title;
        this.description = description;
        this.deadline = deadline;
        this.todos = [];
        this.select = true;

        Project.deactivateProjects();

        const div = createElement(`div`, title, `project`, `projectsDiv`);
        div.style.backgroundColor = `rgba(0, 0, 0, 0.4)`;
        div.addEventListener(`click`, () => {
            Project.deactivateProjects();
            this.select = true;
            div.style.backgroundColor = `rgba(0, 0, 0, 0.4)`;
            //loadTodos();
        })

        createElement(`h3`, undefined, `projectHeader`, title).textContent = title;

        startedProjects.push(this);
    }

    delete() {
        startedProjects.splice(startedProjects.indexOf(this), 1);
        document.getElementById(this.title).remove();
    }

    loadTodos() {

    }

    showDetails() {
        
    }

    static deactivateProjects() {
        for (let i = 0; i < startedProjects.length; i++) {
            startedProjects[i].select = false;
            document.getElementById(startedProjects[i].title).style.backgroundColor = `transparent`;
        }  
    }
}

export { startedProjects, Project };