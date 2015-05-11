/// <reference path="../typings/angular2/angular2.d.ts" />
import {Component, bootstrap, View} from "angular2/angular2";

@Component({
    selector: "my-app"
})

@View({
    templateUrl: "app/myApp.html"
})

class MyAppComponent {
    name: string;

    constructor() {
        this.name = "Alice";
    }
}

bootstrap(MyAppComponent);

