import {Component} from '@angular/core';
import {Plog} from '@gpeel/plog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  title = 'gpeel-plog-ng12';

  constructor() {
    Plog.createComponent('AppComponent');
    Plog.action('my action');
    Plog.select('select');
    Plog.errorState('errorState');
    Plog.error('My error');
    Plog.warn('My warn');
    Plog.info('My info!');
    Plog.debug('My debug');
    Plog.effect('effect in AppComponent');
  }

}
