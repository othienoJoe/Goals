import { Component } from '@angular/core';
import { Goal } from './goal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  goals:Goal[] = [
    {id:1, name:'Watch Coming Home'},
    {id:2, name:'Buy underpants'},
    {id:3, name:'Attend last class'},
    {id:4, name:'Check the previous project'},
    {id:5, name:'Finish content for today'},
    {id:6, name:'Read a book'},
  ];
}
