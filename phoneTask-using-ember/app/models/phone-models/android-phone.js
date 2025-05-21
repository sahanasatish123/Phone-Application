import Model,{attr, hasMany} from '@ember-data/model';
import SmartPhone from './smart-phone';
export default class AndroidPhoneModel extends SmartPhone {
    @attr('string') duoId;
    // @hasMany('email-log', { inverse: 'phone', async: false, polymorphic: true, as: 'smart-phone' }) emailLogs;

    duo(toDuoId) {
      return `Duo calling ${toDuoId} from ${this.duoId}`;
    }
}

