import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
export default class PhoneSubtypeController extends Controller {
  @service phoneSelection;
  @service router;
  @action
  setSubtype(phoneSubtype) {
    this.phoneSelection.phoneSubtype = phoneSubtype;
    console.log(this.phoneSelection.phoneSubtype);
  }
  @action
  submitSubtypeSelection() {
    if (this.phoneSelection.phoneSubtype) this.send('goToEnterDetails');
    // this.router.transitionTo('enterDetails');
    // this.transitionTo('phoneSubtype');
  }
}
