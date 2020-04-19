import { createElement, loadOutputBox } from './DOM';
import { startedProjects } from './project';

class Todo {
    constructor(title, description, deadline, priority) {
        this.title = title;
        this.description = description;
        this.deadline = deadline;
        this.priority = priority;

        for (let i = 0; i < startedProjects.length; i++) {
            if (startedProjects[i].select === true) {
                startedProjects[i].todos.push(this);
                startedProjects[i].loadTodos();
                console.log(this);
                console.log(startedProjects[i]);
            }
        }
    }

    delete() {
        for (let i = 0; i < startedProjects.length; i++) {
            if (startedProjects[i].select === true) startedProjects[i].todos.splice(startedProjects[i].todos.indexOf(this), 1);
            startedProjects[i].loadTodos();
        }
    }

    showDetails() {
        loadOutputBox.call(this, `Todo`);
    }
}

export { Todo };