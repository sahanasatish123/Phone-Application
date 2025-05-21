import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

import { action } from '@ember/object';
export default class ResultRoute extends Route {
  @service phoneSelection;
  @service router;
  model() {
    return this.phoneSelection.result;
  }

  @action
  goToFunctions() {
    this.router.transitionTo('phoneFunctions');
  }
}
