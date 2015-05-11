/// <reference path="../../typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap, For} from "angular2/angular2";

@Component({
    selector: 'display'
})
@View({
    templateUrl: 'app/displaylist/display_list.html',
    directives: [For]
})

class DisplayComponent {
    myName: string;
    todos: Array<string>;
    time:string;

    constructor() {
        this.myName = "Alice";
        this.init();
    }

    init(): void {
        setInterval(function () { this.time = (new Date()).toString(); }.bind(this), 1000);
    }
}

bootstrap(DisplayComponent);