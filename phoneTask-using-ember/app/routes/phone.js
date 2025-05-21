import Route from '@ember/routing/route';
import { action } from '@ember/object';

import { inject as service } from '@ember/service';
export default class PhoneRoute extends Route {
  @service router;

  @action
  goToSubtypes() {
    console.log(this);
    console.log(this.router);
    this.router.transitionTo('phoneSubtype');
  }
}
