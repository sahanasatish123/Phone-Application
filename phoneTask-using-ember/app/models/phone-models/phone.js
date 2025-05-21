import Model,{attr, hasMany} from '@ember-data/model';
export default class PhoneModel extends Model {

    @attr('string') number;

  call(toNumber,sim) {
    if(sim==2){
      return `Calling ${toNumber} from ${this.number2}`
    }
    return `Calling ${toNumber} from ${this.number}`;
  }

  message(toNumber, text,sim) {
    if(sim==2){
       return `Sending message to ${toNumber} from ${this.number2}: ${text}`
    }
    return `Sending message to ${toNumber} from ${this.number}: ${text}`;
  }

  @hasMany('logs/call-log', { inverse: 'phone' , async: false, as: 'phone-models/phone'}) callLogs;
@hasMany('logs/message-log',{ inverse: 'phone', async: false, as: 'phone-models/phone' }) messageLogs;
}

