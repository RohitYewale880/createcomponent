import { Component } from "@angular/core";


@Component({
    selector: 'app-event',
    templateUrl: './event.component.html',
    styleUrls: ['./event.component.scss']
})
export class EventComponent {

    onsearch(eve: Event) {
        let val = (eve.target as HTMLInputElement).value
        console.log(val)
    }

    onstudentSearch(eve: Event) {
        let val = (eve.target as HTMLInputElement).value
        console.log(val)
    }

    onBooksearch(eve: Event) {
        let val = (eve.target as HTMLInputElement).value
        console.log(val)
    }

    onPostsearch(eve: Event) {
        let val = (eve.target as HTMLInputElement).value
        console.log(val);

    }

    onFoodsearch(eve: Event) {
        let val = (eve.target as HTMLInputElement).value
        console.log(val)
    }

    onEmployeesearch(eve: Event) {
        let val = (eve.target as HTMLInputElement).value
        console.log(val)
    }

    onFruitsearch(eve:Event){
        let val = (eve.target as HTMLInputElement).value
        console.log(val)
    }

    onBirdsearch(eve:Event){
        let val = (eve.target as HTMLInputElement).value
        console.log(val)
    }

    onAnimalsearch(eve:Event){
        let val = (eve.target as HTMLInputElement).value
        console.log(val)
    }

    onSongsearch(eve:Event){
        let val = (eve.target as HTMLInputElement).value
        console.log(val)
    }

    onColorsearch(eve:Event){
        let val = (eve.target as HTMLInputElement).value
        console.log(val)
    }
}