import { Component, OnInit } from '@angular/core';
import { Goal  } from '../goal';
@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals:Goal[] = [
    new Goal(1, 'Watch Coming Home', 'Done'),
    new Goal(2, 'Buy underpants', 'Done'),
    new Goal(3, 'Attend last class', 'Done'),
    new Goal(4, 'Check the previous project', 'Done'),
    new Goal(5, 'Finish content for today', 'Done'),
    new Goal(6, 'Read a book', 'Done'),
  ];

  toggleDetails(index: any) {
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }

  completeGoal(isComplete: any, index: number) {
    if (isComplete) {
      this.goals.splice(index,1);
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
