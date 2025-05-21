import { setupTest } from 'phone-task/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Model | smart phone', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('smart-phone', {});
    assert.ok(model, 'model exists');
  });
});
