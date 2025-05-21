import Model, { attr, belongsTo } from '@ember-data/model';

export default class MessageLogModel extends Model {
  @attr('string') to;
  @attr('string') message;
  @attr('date') createdAt;
  @belongsTo('phone-models/phone', { polymorphic: true,inverse: 'messageLogs' , async: false }) phone
}
