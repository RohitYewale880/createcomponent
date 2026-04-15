import { Component, ElementRef, ViewChild } from "@angular/core";


@Component({
    selector:'app-viewchild',
    templateUrl:'./viewchild.component.html',
    styleUrls:['./viewchild.component.scss']
})

export class ViewchildComponent{

    @ViewChild('productname')
    pn!: ElementRef
    onProductSearch(){
        console.log(this.pn.nativeElement.value)
        this.pn.nativeElement.value = ''
    }

    @ViewChild('colorname')
    clr! : ElementRef
    onColorSearch(){
        console.log(this.clr.nativeElement.value)
        this.clr.nativeElement.value = ''
    }
    
    @ViewChild('songname')
    song!: ElementRef
    onSongSearch(){
        console.log(this.song.nativeElement.value)
        this.song.nativeElement.value = ''
    }

    @ViewChild('animalname')
    ani!: ElementRef
    onAnimalSearch(){
        console.log(this.ani.nativeElement.value)
        this.ani.nativeElement.value = ''
    }

    @ViewChild('birdname')
    bird!: ElementRef
    onBirdSearch(){
        console.log(this.bird.nativeElement.value)
        this.bird.nativeElement.value = ''
    }

    @ViewChild('fruitname')
    frt!: ElementRef
    onFruitSearch(){
        console.log(this.frt.nativeElement.value)
        this.frt.nativeElement.value = ''
    }

    @ViewChild('employeename')
    emp!: ElementRef
    onEmployeeSearch(){
        console.log(this.emp.nativeElement.value)
        this.emp.nativeElement.value = ''
    }
    

    @ViewChild('foodname')
    fd!: ElementRef
    onFoodSearch(){
        console.log(this.fd.nativeElement.value)
        this.fd.nativeElement.value = ''
    }

    @ViewChild('postname')
    post!: ElementRef
    onPostSearch(){
        console.log(this.post.nativeElement.value)
        this.post.nativeElement.value = ''
    }


    @ViewChild('studentname')
    std!: ElementRef
    onStudentSearch(){
        console.log(this.std.nativeElement.value)
        this.std.nativeElement.value = ''
    }

}