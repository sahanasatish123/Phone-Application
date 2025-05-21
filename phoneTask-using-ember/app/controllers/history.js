import Controller from '@ember/controller';

import { action } from '@ember/object';
import { inject as service } from '@ember/service';
export default class HistoryController extends Controller {
    @service phoneSelection;
    @action
    goback(){
        // this.phoneSelection.logType=null
        this.send("gotofunctions")
    }
}

