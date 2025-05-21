import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
export default class PhoneSelectionService extends Service {
  @tracked phoneType = null;
  @tracked phoneSubtype = null;
  @tracked phoneObject = null;
  @tracked phoneFunction;
  @tracked logType;
  @tracked result;
}
