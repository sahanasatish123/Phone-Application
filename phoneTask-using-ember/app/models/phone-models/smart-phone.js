import Model,{attr, hasMany} from '@ember-data/model';
import Phone from  './phone'
export default class SmartPhoneModel extends Phone {
    @attr('string') emailId;

   

  @hasMany('logs/email-log', { inverse: 'phone' , async: false,as:'phone-models/smart-phone'}) emailLogs;
  
  sendEmail(toEmail, subject, body){
    return `Sending email to ${toEmail} from ${this.emailId} with subject: "${subject}" and body: "${body}"`;
  }
}
