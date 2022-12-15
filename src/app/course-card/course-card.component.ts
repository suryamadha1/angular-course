import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent {

  @Input()
  course: Course;
  views: number = 0;

  @Input()
  cardIndex: number


  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>()



  onCourseViewed(){
    this.views++;
    console.log(`${this.course.description} has ${this.views} views!`)
    this.courseEmitter.emit(this.course)
  }

  cardClasses(){
    return {
      'beginner': this.course.category === 'BEGINNER'
    }
  }

  cardStyles(){
    return {
      'background-image': `url(${this.course.iconUrl})`
    }
  }
}
