import Model, { attr, belongsTo } from '@ember-data/model';

export default class CallLogModel extends Model {
  @attr('string') to;
  @attr('string') callType; // 'phone', 'duo', 'facetime', 'skype'
  @attr('date') createdAt;
  
  @belongsTo('phone-models/phone', {  polymorphic: true,inverse: 'callLogs', async: false }) phone;
}
