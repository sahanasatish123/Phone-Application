import Controller from '@ember/controller';
import { action } from '@ember/object';

import { inject as service } from '@ember/service';
export default class ResultController extends Controller {
  @service router;
  @service phoneSelection;
  @service store;
  @action
  backToFunctions() {
    // let logs = this.store.peekAll('call-log');
    // console.log(typeof logs);
    // console.log(logs.toArray());

    // // Option 1: Map each record’s attributes using getProperties
    // console.log(logs.map(log => log.getProperties('id', 'to', 'callType', 'createdAt')));

    // const allLogs = this.store.peekAll('call-log');
    // console.log(allLogs)
    // console.log('All Logs:', allLogs.map(log => log.toJSON()));
    this.phoneSelection.phoneFunction = null;
    this.send('goToFunctions');
  }
}
