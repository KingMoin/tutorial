
import { Component } from '@angular/core'

@Component({
    selector: 'courses',
    template: `
    <div (click)= "onDivClick()"><button  (click)="onSave($event)">Save</button> 
</div>
                        `
})


export class CoursesComponent{
onSave($event){
    console.log("Btn was Clicked", $event);
}
onDivClick(){
    console.log("div was clicked")
}
    

    
}