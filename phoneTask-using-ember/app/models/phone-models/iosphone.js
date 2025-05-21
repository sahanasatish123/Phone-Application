import Model,{attr} from '@ember-data/model';
import SmartPhone from './smart-phone';
export default class IOSPhoneModel extends SmartPhone {
    @attr('string') faceId;

    facetime(toFaceId) {
      return `FaceTime calling ${toFaceId} from ${this.faceId}`;
    }
  

}


