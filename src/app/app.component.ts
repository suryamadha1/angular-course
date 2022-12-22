import { AfterViewInit, Inject, Component,InjectionToken, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { COURSES } from '../db-data';
import {HttpParams,HttpClient} from '@angular/common/http';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';
import { Observable } from 'rxjs';
import { CoursesService } from './services/courses.service';
import { AppConfig, APP_CONFIG, CONFIG_TOKEN } from './config';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  // courses$: Observable<Course[]>
  courses = COURSES;

  constructor(private coursesService: CoursesService,
    @Inject(CONFIG_TOKEN) private config: AppConfig
    ) {
  }

  ngOnInit() {
    
    // const params = new HttpParams().set("page", "1").set("pageSize", 10);

    // this.courses$ = this.coursesService.loadCourses();
    // Previously done
    // this.http.get('/api/courses',{params})
    //   .subscribe(
    //     courses => this.courses = courses
    //   );
  }

  save(course: Course){
    this.coursesService.saveCourse(course).subscribe(
      () => console.log('Course saved !')
    );
  }



}
