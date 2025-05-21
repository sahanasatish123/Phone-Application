import Route from '@ember/routing/route';

import { action } from '@ember/object';

import { inject as service } from '@ember/service';
export default class PhoneSubtypeRoute extends Route {
  @service router;
  @action
  goToEnterDetails() {
    this.router.transitionTo('enterDetails');
  }
}
