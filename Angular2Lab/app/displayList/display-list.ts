/// <reference path="../../typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap, For} from 'angular2/angular2';
@Component({
    selector: 'display',
    injectables: [FriendsService]
})
@View({
        templateUrl:'app/displayList/display_list.html',
    directives: [For]
})
class DisplayComponent {
    myName: string;
    names: Array<string>;
   
    constructor() {
        var fs = new FriendsService();
        this.myName = "Kumanan";
        this.names = fs.names;
    }

    myControllerMethod(event) {
        console.log("key up");
    }
}

bootstrap(DisplayComponent);