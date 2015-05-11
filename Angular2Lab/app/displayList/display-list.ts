/// <reference path="../../typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap, For} from 'angular2/angular2';
@Component({
    selector: 'display'
})
@View({
        templateUrl:'app/displayList/display_list.html',
    directives: [For]
})
class DisplayComponent {
    myName: string;
    names: Array<string>;

    constructor() {
        this.myName = "Kumanan";
        this.names = ["Rob", "Bob", "Tom", "Bill", "Greg"];
    }
}

bootstrap(DisplayComponent);