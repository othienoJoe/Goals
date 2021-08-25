import { Component, OnInit } from '@angular/core';
import { Goal  } from '../goal';
@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals:Goal[] = [
    new Goal(1, 'Watch Coming Home', 'Done', new Date(2021,7,25)),
    new Goal(2, 'Buy underpants', 'Done', new Date(2021,7,25)),
    new Goal(3, 'Attend last class', 'Done', new Date(2021,7,25)),
    new Goal(4, 'Check the previous project', 'Done', new Date(2021,7,25)),
    new Goal(5, 'Finish content for today', 'Done', new Date(2021,7,25)),
    new Goal(6, 'Read a book', 'Done', new Date(2021,7,25)),
  ];

  toggleDetails(index: any) {
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }

  completeGoal(isComplete: any, index: number) {
    if (isComplete) {
      this.goals.splice(index,1);
    }
  }

  deleteGoal(isComplete: any, index: number) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)

      if (toDelete) {
        this.goals.splice(index, 1)
      }
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
