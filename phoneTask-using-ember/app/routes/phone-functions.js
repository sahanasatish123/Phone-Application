import Route from '@ember/routing/route';

import { action } from '@ember/object';
import { inject as service } from '@ember/service';
export default class PhoneFunctionsRoute extends Route {
  @service router;
  model(){
    return new Promise((resolve, reject) =>{
      setTimeout(()=>{
        resolve()
      },1000)
    }
  )}
  @action
  goToRecieverInfo() {
    this.router.transitionTo('recieverInfo');
  }
  @action
  goToHistory() {
    this.router.transitionTo('history');
  }
}
