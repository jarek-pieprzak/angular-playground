import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rx-examples',
  templateUrl: './rx-examples.component.html',
  styleUrls: ['./rx-examples.component.css']
})
export class RxExamplesComponent {
  currentException;
  sumOfNums = 0;
  values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  myObservable = new Observable(observer => {
    const exception = Math.floor(Math.random() * 10) + 1;
    this.currentException = exception;
    this.values.forEach((value) => {
      (value !== exception) ? observer.next(value) : observer.error('Error on ' + exception + ' element.');
    });
  });

  myObserver = {
    next: x => {
      this.sumOfNums = x + this.sumOfNums;
    },
    error: err => console.error('Observer got an error: ' + err)
  };

  constructor() { }

  lunchObservable() {
    this.sumOfNums = 0;
    this.myObservable.subscribe(this.myObserver);
  }

}

// 55
