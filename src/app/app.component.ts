import {Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'playground';

  sidenavStatusChecker(navStatus: boolean) {
    return !navStatus === true ? 'Open Nav' : 'CloseNav';
  }
}
