import { Component, OnInit } from '@angular/core';
import { Goal  } from '../goal';
@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals:Goal[] = [
    {id:1, name:'Watch Coming Home', description:''},
    {id:2, name:'Buy underpants', description:''},
    {id:3, name:'Attend last class', description:''},
    {id:4, name:'Check the previous project', description:''},
    {id:5, name:'Finish content for today', description:''},
    {id:6, name:'Read a book', description:''},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
