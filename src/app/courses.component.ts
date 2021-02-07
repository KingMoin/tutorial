import { Component } from '@angular/core'

@Component({
    selector: 'courses',
    template: '<h2>{{ getTitle() }}</h2>'
})


export class CoursesComponent{

    title = "List Of Courses ";

    getTitle(){
        return this.title;

    }
}