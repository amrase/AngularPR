import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  // isActive=true;
   title = "List of courses";
   courses:any[];
  // imageUrl="";

  // colsapan=100;

  constructor(private courseService:CoursesService) { }


  // onKeyUp($event){
  //   if($event.keyCode === 13) console.log("Enter was pressed");
    
  // }

  // name:string;

  // onKeyUp($event){
  //   console.log("enter was pressed",$event.target.value);
  // }
  // onSave($event){
  //   $event.stopPropagation();
  //   console.log("Button clicked",$event);
  // }

  // emailUp(email){
  //   console.log("Email",email)
  // }

  // onDivClicked(){
  //   console.log("Div clicked");
  // }


  ngOnInit(): void {
    this.courses = this.courseService.getCourses();
  }


  // onKeyUpPress(){
  //   console.log("Name",this.name);
  // }
}
