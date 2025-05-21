import Model, { attr, belongsTo } from '@ember-data/model';

export default class EmailLogModel extends Model {
  @attr('string') to;
  @attr('string') subject;
  @attr('string') body;
  @attr('date') createdAt;

  @belongsTo('phone-models/smart-phone', { polymorphic: true,inverse: 'emailLogs', async: false }) phone;
}
