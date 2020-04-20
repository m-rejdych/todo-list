import { createElement, deleteTodos, loadOutputBox } from './DOM';

const startedProjects = [];

class Project {
    constructor(title, description, deadline) {
        this.title = title;
        this.description = description;
        this.deadline = deadline;
        this.todos = [];
        this.select = true;

        Project.deactivateProjects();
        this.loadTodos();

        const div = createElement(`div`, title, `project`, `projectsDiv`);
        div.style.backgroundColor = `rgba(0, 0, 0, 0.4)`;
        div.addEventListener(`click`, () => {
            Project.deactivateProjects();
            this.select = true;
            div.style.backgroundColor = `rgba(0, 0, 0, 0.4)`;
            this.loadTodos();
        })
        div.addEventListener(`dblclick`, () => {
            this.showDetails();
        })

        createElement(`h3`, undefined, `projectHeader`, title).textContent = title;

        startedProjects.push(this);
    }

    delete() {
        startedProjects.splice(startedProjects.indexOf(this), 1);
        document.getElementById(this.title).remove();
    }

    loadTodos() {
        deleteTodos();

        createElement(`div`, `${this.title}Todos`.replace(/\s|_/g, ``), `todos`, `todosDiv`);

        for (let i = 0; i < this.todos.length; i++) {
            const newTodo = createElement(`div`, `${this.todos[i].title}Todo`.replace(/\s|_/g, ``), `todo`, `${this.title}Todos`.replace(/\s|_/g, ``));
            (this.todos[i].check == false) ? newTodo.style.backgroundColor = `transparent` : newTodo.style.backgroundColor = `rgba(0, 200, 0, 0.6)`;

            newTodo.addEventListener(`dblclick`, () => {
                this.deactivateTodos();
                this.todos[i].select = true;
                this.todos[i].showDetails();
            })
            newTodo.addEventListener(`click`, () => {
                (!this.todos[i].check) ? this.todos[i].check = true : this.todos[i].check = false;
                (!this.todos[i].check) ? newTodo.style.backgroundColor = `transparent` : newTodo.style.backgroundColor = `rgba(0, 200, 0, 0.6)`;
            })

            createElement(`h3`, undefined, `todoHeader`, `${this.todos[i].title}Todo`.replace(/\s|_/g, ``)).textContent = this.todos[i].title;
        }
    }

    showDetails() {
        loadOutputBox.call(this, `Project`);
    }

    static deactivateProjects() {
        for (let i = 0; i < startedProjects.length; i++) {
            startedProjects[i].select = false;
            document.getElementById(startedProjects[i].title).style.backgroundColor = `transparent`;
        }  
    }

    deactivateTodos() {
        for (let i = 0; i < this.todos.length; i++) {
            this.todos[i].select = false;
        }
    }
}

export { startedProjects, Project };