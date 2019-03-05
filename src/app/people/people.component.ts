import { Component, OnInit } from '@angular/core';
import { PeopleService } from './people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  myObservable;
  countries$;
  people$;

  constructor(private peopleService: PeopleService) { }

  fetchPeople() {
    this.myObservable = this.peopleService.fetchPeople().subscribe({
      next: x => {
        this.people$ = x;
      },
      error: err => console.error(err)
    });
  }

  fetchCountries() {
    this.peopleService.fetchCountries().subscribe({
      next: x => {
        this.countries$ = x;
      },
      error: err => console.error(err)
    });
  }

  ngOnInit() {
    this.fetchCountries();
  }

  buttonOnClick() {
    this.fetchPeople();
  }

  // ngOnInit() {
  //   const subs = this.fetchPeople().subscribe()
  //   this.fetchCountries();
  // }

}
