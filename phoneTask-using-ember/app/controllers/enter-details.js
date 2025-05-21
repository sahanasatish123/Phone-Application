import Controller from '@ember/controller';
import { action } from '@ember/object';
// import {
//   Single,
//   Dual,
//   Android,
//   IOS,
//   WindowsPhone,
// } from 'phone-task/classes/phoneClasses'; // Import your phone classes

import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
export default class EnterDetailsController extends Controller {
  @service phoneSelection;
  @service router;
@service store;
  @tracked phoneNumber1;
  @tracked phoneNumber2;
  @tracked emailId;
  @tracked faceId;
  @tracked duoId;
  @tracked skypeId;

  @action
  savePhoneDetails() {
    // console.log(
    //   this.phoneNumber1,
    //   this.phoneNumber2,
    //   this.emailId,
    //   this.faceId,
    // );

    switch (this.phoneSelection.phoneSubtype) {
      case 'Single':
        if (!this.phoneNumber1) {
          return;
        }
        this.phoneSelection.phoneObject = this.store.createRecord('phone-models/phone', {
          number: this.phoneNumber1,
        });
        break;
      case 'Dual':
        if (!this.phoneNumber1 || !this.phoneNumber2) {
          return;
        }
        this.phoneSelection.phoneObject = this.store.createRecord('phone-models/dual-phone', {
  number: this.phoneNumber1,
  number2: this.phoneNumber2,
});
        //   show(msg_sim, call_sim);
        break;
      case 'Android':
        if (!this.phoneNumber1 || !this.emailId || !this.duoId) {
          return;
        }
        this.phoneSelection.phoneObject =this.store.createRecord('phone-models/android-phone', {
          number: this.phoneNumber1,
          emailId: this.emailId,
          duoId: this.duoId
        });
        
        break;
      case 'IOS':
        if (!this.phoneNumber1 || !this.emailId || !this.faceId) {
          return;
        }
        this.phoneSelection.phoneObject = this.store.createRecord('phone-models/iosphone',{
          number:this.phoneNumber1,
          emailId:this.emailId,
          faceId:this.faceId,
    });
        break;
      case 'Windows':
        if (!this.phoneNumber1 || !this.emailId || !this.skypeId) {
          return;
        }
        this.phoneSelection.phoneObject = this.store.createRecord('phone-models/windows-phone',{
          number:this.phoneNumber1,
          emailId:this.emailId,
          faceId:this.faceId,
    });
        break;
    }

    console.log(this.phoneSelection.phoneObject);
    this.send('goToPhoneFunctions');
  }
  @action
  updateField(event) {
    const { name, value } = event.target;
    this[name] = value;
  }
}
