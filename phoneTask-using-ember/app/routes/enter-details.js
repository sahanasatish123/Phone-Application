import Route from '@ember/routing/route';

import { action } from '@ember/object';

import { inject as service } from '@ember/service';
export default class EnterDetailsRoute extends Route {
  @service router;
  @action
  goToPhoneFunctions() {
    this.router.transitionTo('phoneFunctions');
  }
}
