import Controller from '@ember/controller';

import { action } from '@ember/object';
import { inject as service } from '@ember/service';
export default class PhoneFunctionsController extends Controller {
  @service phoneSelection;
  @service router;

  @action
  setFunctionType(type) {
    this.phoneSelection.phoneFunction = type;
    console.log(this.phoneSelection.phoneFunction);
    this.send('goToRecieverInfo');
  }
  @action
  setLogsType(type) {
    this.phoneSelection.logType = type;
    console.log(this.phoneSelection.logType)
    this.send('goToHistory');
  }
}
