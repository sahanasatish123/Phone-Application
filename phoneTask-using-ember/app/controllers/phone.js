import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
export default class PhoneController extends Controller {
  @service phoneSelection;
  @service router;

  @action
  setType(phoneType) {
    this.phoneSelection.phoneType = phoneType;
    console.log(this.phoneSelection.phoneType);
  }
  @action
  submitTypeSelection() {
    console.log(this);
    if (this.phoneSelection.phoneType) {
      this.send('goToSubtypes');
      // this.router.transitionTo('phoneSubtype');
    }
    // this.transitionTo('phoneSubtype');
  }
}
