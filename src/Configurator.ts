
import {Component} from 'angular2/core';

@Component({
    selector: 'configurator',
    styles: [`
       h1 {
            color: blue;
        }
    `],
    template: `<div>
                  <h1 (click)="onClick()">{{message}} by AG2</h1>
               </div>`
})
export class Configurator {

    message = "Click Me ... by Nelson";

    onClick() {
        this.message = "Configurator! by Nelson";
        console.log(this.message);

    }

}