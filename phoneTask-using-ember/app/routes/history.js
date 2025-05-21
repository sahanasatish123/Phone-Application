import Route from '@ember/routing/route';

import { action } from '@ember/object';
import { inject as service } from '@ember/service';
export default class HistoryRoute extends Route {
  @service store;
  @service router
  @service phoneSelection;

  model() {
    let result=[]

    return new Promise((resolve,reject)=>{
      if (['phone', 'duo', 'skype', 'face'].includes(this.phoneSelection.logType)) {
        // let allLogs = this.store.peekAll('call-log');
        let allLogs=this.phoneSelection.phoneObject.callLogs
  
      //   console.log(allLogs.filter((log) => log.callType === "call"));
  
        result= allLogs.filter((log) => log.callType === this.phoneSelection.logType);
      } 
      else if (this.phoneSelection.logType == 'message') {
        // let allLogs = this.store.peekAll('message-log');
        result=this.phoneSelection.phoneObject.messageLogs
        // result= allLogs
      //   result= allLogs.filter((log) => true);
      } else {
        // let allLogs = this.store.peekAll('email-log');
        result=this.phoneSelection.phoneObject.emailLogs
        // return allLogs;
      }
      
      if(result.length==0){
        reject("No logs found")
       
      }
      else{
        resolve(result)
      }
    })

    // if (['phone', 'duo', 'skype', 'face'].includes(this.phoneSelection.logType)) {
    //   // let allLogs = this.store.peekAll('call-log');
    //   let allLogs=this.phoneSelection.phoneObject.callLogs

    // //   console.log(allLogs.filter((log) => log.callType === "call"));

    //   return allLogs.filter((log) => log.callType === this.phoneSelection.logType);

    // } 
    // else if (this.phoneSelection.logType == 'message') {
    //   // let allLogs = this.store.peekAll('message-log');
    //   return this.phoneSelection.phoneObject.messageLogs
      
    // //   result= allLogs.filter((log) => true);
    // } else {
    //   // let allLogs = this.store.peekAll('email-log');
    //   return this.phoneSelection.phoneObject.emailLogs
      
    // }


    // if(result.length==0){
    //   resolve(allLogs)
    // }
    // else{
    //   reject("No logs found")
    // }
    // return result;
    // console.log()
  }


  
  @action
  gotofunctions(){
    this.router.transitionTo("phoneFunctions")
  }
}
