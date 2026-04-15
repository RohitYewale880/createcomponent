import { Component } from "@angular/core";

@Component({
    selector: 'app-eventeleref',
    templateUrl:'./eventeleref.component.html',
    styleUrls:['./eventeleref.component.scss']
})
export class Eventelementref{
    onProductSearch(eve: HTMLInputElement){
        let val = eve.value
        console.log(val)
        eve.value = ''
    }

    onColorSearch(eve : HTMLInputElement){
        let val = eve.value
        console.log(val)
        eve.value = ''
    }

    onSongSearch(eve : HTMLInputElement){
        let val = eve.value
        console.log(val)
        eve.value = ''
    }

    onAnimalSearch(eve : HTMLInputElement){
        let val = eve.value
        console.log(val)
        eve.value = ''
    }

    onBirdSearch(eve : HTMLInputElement){
        let val = eve.value
        console.log(val)
        eve.value = ''
    }

    onFruitSearch(eve : HTMLInputElement){
        let val = eve.value
        console.log(val)
        eve.value = ''
    }

    onEmployeeSearch(eve : HTMLInputElement){
        let val = eve.value
        console.log(val)
        eve.value = ''
    }

    onFoodSearch(eve : HTMLInputElement){
        let val = eve.value
        console.log(val)
        eve.value = ''
    }

    onPostSearch(eve : HTMLInputElement){
        let val = eve.value
        console.log(val)
        eve.value = ''
    }
    
    onStudentSearch(eve : HTMLInputElement){
        let val = eve.value
        console.log(val)
        eve.value = ''
    }


    onAddition(eve1 : HTMLInputElement, eve2 : HTMLInputElement){
        let val1 = eve1.value
        let val2 = eve2.value
        let add = +val1 + +val2
        console.log(add)
        eve1.value = ''
        eve2.value = ''
    }

    onSubstaction(eve1 : HTMLInputElement, eve2 : HTMLInputElement){
        let val1 = eve1.value
        let val2 = eve2.value
        let substrac = +val1 - +val2
        console.log(substrac)
        eve1.value = ''
        eve2.value = ''
    }

    onMultiply(eve1 : HTMLInputElement, eve2 : HTMLInputElement){
        let val1 = eve1.value
        let val2 = eve2.value
        let multiply = +val1 * +val2
        console.log(multiply)
        eve1.value = ''
        eve2.value = ''
    }

    onDivision(eve1 : HTMLInputElement, eve2 : HTMLInputElement){
        let val1 = eve1.value
        let val2 = eve2.value
        let multiply = +val1 / +val2
        console.log(multiply)
        eve1.value = ''
        eve2.value = ''
    }

    onModulus(eve1 : HTMLInputElement, eve2 : HTMLInputElement){
        let val1 = eve1.value
        let val2 = eve2.value
        let multiply = +val1 % +val2
        console.log(multiply)
        eve1.value = ''
        eve2.value = ''
    }
}