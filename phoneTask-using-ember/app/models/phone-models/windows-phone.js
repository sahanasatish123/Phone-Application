import Model,{attr} from '@ember-data/model';
import SmartPhone from './smart-phone';
export default class WindowsPhoneModel extends SmartPhone {
    @attr('string') skypeId;

    skypetime(toskypeId) {
      return ` calling ${toskypeId} from ${this.skypeId} via skype`;
    }
}

