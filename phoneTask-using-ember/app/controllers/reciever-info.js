import Controller from '@ember/controller';

import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

import { inject as service } from '@ember/service';
export default class ReceiverInfoController extends Controller {
  @service phoneSelection;
  @service store;
  @service router;
  @tracked receiverPhoneNo;
  @tracked messageText;
  @tracked emailSubject;
  @tracked emailBody;
  @tracked receiverEmailId;
  @tracked receiverDuoId;
  @tracked receiverSkypeId;
  @tracked receiverFaceId;
  @tracked simNo = 1;

  current_time = new Date();

  @action
  updateField(event) {
    const { name, value } = event.target;
    this[name] = value;
  }
  @action
  updateEmailBody(event) {
    this.emailBody = event.target.value;
    console.log(this.emailBody);
  }
  @action
  updateMessageText(event) {
    this.messageText = event.target.value;
  }
  @action
  updateMessageSim(event) {
    this.simNo = event.target.value;
  }
  @action
  proceed() {
    switch (this.phoneSelection.phoneFunction) {
      case 'call':
        if (!this.receiverPhoneNo) {
          return;
        }
        this.phoneSelection.result = this.phoneSelection.phoneObject.call(
          this.receiverPhoneNo,
          this.simNo
        );

        this.store.createRecord('logs/call-log', {
          to: this.receiverPhoneNo,
          callType: 'phone',
          createdAt: this.current_time,
          phone: this.phoneSelection.phoneObject,
        });
        // this.store.push({
        //   data: {
        //     type: 'call-log',
        //     id: `${Date.now()}`, // or any unique ID
        //     attributes: {
        //       to: this.receiverPhoneNo,
        //       callType: 'phone',
        //       createdAt: new Date(),
        //     },
        //   },
        // });

        break;
      case 'message':
        if (!this.receiverPhoneNo || !this.messageText) {
          return;
        }
        this.phoneSelection.result = this.phoneSelection.phoneObject.message(
          this.receiverPhoneNo,
          this.messageText,
          this.simNo,
        );
        
        this.store.createRecord('logs/message-log', {
          to: this.receiverPhoneNo,
          message: this.messageText,
          createdAt: this.current_time,
          phone: this.phoneSelection.phoneObject,
        });

        break;
      case 'email':
        if (!this.receiverEmailId || !this.emailSubject || !this.emailBody) {
          return;
        }
        this.phoneSelection.result = this.phoneSelection.phoneObject.sendEmail(
          this.receiverEmailId,
          this.emailSubject,
          this.emailBody,
        );

        this.store
          .createRecord('logs/email-log', {
            to: this.receiverEmailId,
            subject: this.emailSubject,
            body: this.emailBody,
            createdAt: this.current_time,
            phone: this.phoneSelection.phoneObject,
          });

        break;
      case 'face-time':
        if (!this.receiverFaceId) {
          return;
        }
        this.phoneSelection.result = this.phoneSelection.phoneObject.facetime(
          this.receiverFaceId,
        );
        this.store.createRecord('logs/call-log', {
          to: this.receiverFaceId,
          callType: 'face',
          createdAt: this.current_time,
          phone: this.phoneSelection.phoneObject, // link the phone instance here
        });

        break;
      case 'duo-call':
        if (!this.receiverDuoId) {
          return;
        }
        this.phoneSelection.result = this.phoneSelection.phoneObject.duo(
          this.receiverDuoId,
        );

        this.store
          .createRecord('logs/call-log', {
            to: this.receiverDuoId,
            callType: 'duo',
            createdAt: this.current_time,
            phone: this.phoneSelection.phoneObject,
          });
        break;

      case 'skype':
        if (!this.receiverSkypeId) {
          return;
        }
        this.phoneSelection.result = this.phoneSelection.phoneObject.skype(
          this.receiverSkypeId,
        );

        this.store
          .createRecord('logs/call-log', {
            to: this.receiverSkypeId,
            callType: 'skype',
            createdAt: this.current_time,
            phone: this.phoneSelection.phoneObject,
          });
        break;
    }

    console.log(this.phoneSelection.result);
    this.send('goToResult');
  }

  @action
  goToFunctions() {
    // this.receiverPhoneNo=null
    // this.receiverEmailId=null
    // this.receiverFaceId=null
    // this.receiverDuoId=null
    // this.receiverSkypeId=null
    // this.messageText=null
    // this.emailSubject=null
    // this.emailBody=null
    this.send('goToPhoneFunctions');
  }
}
