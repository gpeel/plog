import {Component} from '@angular/core';
import {Plog} from '@gpeel/plog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'gpeel-plog-ng12';

  constructor() {
    Plog.info('My info!', 'info2', 'info3');
    Plog.warn('My Warn!');
    Plog.error('My Error!');
    Plog.perf('computing for 34 times');
  }
}


// Plog.error('My error');
// Plog.warn('My warn');
// Plog.createComponent('AppComponent');
// Plog.debug('My debug');
// Plog.action('my action');
// Plog.tu('test');
// Plog.errorState('errorState');
