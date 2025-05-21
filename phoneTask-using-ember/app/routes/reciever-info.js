import Route from '@ember/routing/route';
import { action } from '@ember/object';

import { inject as service } from '@ember/service';
export default class RecieverInfoRoute extends Route {
  @service router;
  resetController(controller, isExiting) {
    if (isExiting) {
      controller.receiverPhoneNo = null;
      controller.receiverEmailId = null;
      controller.receiverFaceId = null;
      controller.receiverDuoId = null;
      controller.receiverSkypeId = null;
      controller.messageText = null;
      controller.emailSubject = null;
      controller.emailBody = null;
      controller.simNo = null;
    }
  }

  @action
  goToResult() {
    this.router.transitionTo('result');
  }

  @action
  goToPhoneFunctions() {
    this.router.transitionTo('phoneFunctions');
  }
}
