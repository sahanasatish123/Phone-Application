import Model,{attr} from '@ember-data/model';
import Phone from './phone';
export default class DualPhoneModel extends Phone {
    @attr('string') number2
}

