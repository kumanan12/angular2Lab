/// <reference path="../../typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap, For, If} from "angular2/angular2";

@Component({
    selector:'todo-list'
})
@View({
        templateUrl: 'app/todos/todoList.html',
        directives:[For, If]
})

class TodoList {
    todos: Array<string>;
    constructor() {
        this.todos = ["Eat Breakfast", "Pay Bills", "Talk to CPA"];
    }

    addTodo(todo: string) {
        this.todos.push(todo);
    }

    doneTyping($event) {
        if ($event.which === 13) {
            this.addTodo($event.target.value);
            $event.target.value = null;
        }
    }
} 
bootstrap(TodoList);