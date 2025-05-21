import EmberRouter from '@ember/routing/router';
import config from 'phone-task/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  // this.route('phone', { path: '/' });
  this.route('phone');
  this.route('phoneSubtype');
  this.route('enterDetails');
  this.route('phoneFunctions');
  this.route('recieverInfo');
  this.route('result');
  this.route('history');
  this.route('phone-functions-loading');
  this.route('history-error');
});
