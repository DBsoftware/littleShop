import { Component } from '@angular/core';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styles: []
})
export class MainComponent {

constructor() { }



    onActivate(event) {
        const scrollToTop = window.setInterval(() => {
            const pos = window.pageYOffset;
            if (pos > 0) {
                window.scrollTo(0, pos - 2000); // how far to scroll on each step
            } else {
                window.clearInterval(scrollToTop);
            }
        }, 1);
}

}
