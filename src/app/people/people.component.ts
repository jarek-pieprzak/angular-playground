import { Component, OnInit } from '@angular/core';
import { PeopleService } from './people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  people$;
  countries$;

  constructor(private peopleService: PeopleService) { }

  fetchPeople() {
    this.people$ = this.peopleService.fetchPeople();
  }

  fetchCountries() {
    this.countries$ = this.peopleService.fetchCountries();
  }

  ngOnInit() {
    this.fetchPeople();
    this.fetchCountries();
  }

}
