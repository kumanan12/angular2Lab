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
    //@Inject(Engine) engine
   /* constructor(friendsService:FriendsService) {
        this.myName = "Kumanan";
        this.names = friendsService.names;
    }*/

  /*  constructor() {
        this.myName = "Kumanan";
        this.names = ["Rob", "Bob", "Tom", "Bill", "Greg", "Jerry", "Grant"];
    }*/

    myControllerMethod(event) {
        console.log("key up");
    }
}

bootstrap(DisplayComponent);