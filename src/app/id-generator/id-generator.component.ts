import { Component, OnInit } from '@angular/core';
import {IdGeneratorService} from '../dashboard/id-generator.service';

@Component({
  selector: 'app-id-generator',
  templateUrl: './id-generator.component.html',
  styleUrls: ['./id-generator.component.css']
})
export class IdGeneratorComponent implements OnInit {
  private id: string;

  constructor(
    service: IdGeneratorService
  ) {
    this.id = IdGeneratorService.getIds();
  }

  buttonClick = () => {
    this.id = IdGeneratorService.getIds();
  }

  ngOnInit() {
  }

}
